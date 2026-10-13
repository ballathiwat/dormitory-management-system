// frontend/src/helpers/api_helper.ts
//
// Axios wrapper — เหมือน Sentinel/Velzon
// สร้าง APIClient class ที่มี get/post/put/patch/delete
// จัดการ token, interceptor, error handling ไว้ที่เดียว

import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'

// Base URL — เปลี่ยนเป็น env variable ตอน production
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1'

// ===== สร้าง Axios instance =====
const axiosApi = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// ===== Request Interceptor — แนบ token ทุก request =====
axiosApi.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

// ===== Response Interceptor — จัดการ error กลาง =====
axiosApi.interceptors.response.use(
  (response) => response,
  (error) => {
    // 401 Unauthorized → redirect ไป login
    if (error.response?.status === 401) {
      sessionStorage.removeItem('authToken')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  },
)

// ===== APIClient class =====
class APIClient {
  /**
   * GET — ดึงข้อมูล
   * ใช้: api.get('/rooms', { params: { status: 'available' } })
   */
  get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return axiosApi.get(url, config)
  }

  /**
   * GET by ID — ดึงข้อมูลเดี่ยว
   * ใช้: api.getById('/rooms', '123')
   */
  getById(url: string, id: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return axiosApi.get(`${url}/${id}`, config)
  }

  /**
   * POST — สร้างข้อมูลใหม่
   * ใช้: api.post('/rooms', { number: '101', floor: 1 })
   */
  post(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return axiosApi.post(url, data, config)
  }

  /**
   * PUT — อัปเดตข้อมูลทั้งหมด
   * ใช้: api.put('/rooms/123', { number: '101', floor: 1 })
   */
  put(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return axiosApi.put(url, data, config)
  }

  /**
   * PATCH — อัปเดตบางฟิลด์
   * ใช้: api.patch('/rooms/123', { status: 'maintenance' })
   */
  patch(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return axiosApi.patch(url, data, config)
  }

  /**
   * DELETE — ลบข้อมูล
   * ใช้: api.delete('/rooms/123')
   */
  delete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return axiosApi.delete(url, config)
  }
}

// ===== Export =====
// ใช้แบบ singleton — ทุกที่ import ตัวเดียวกัน
const apiClient = new APIClient()
export { apiClient, axiosApi }
export default APIClient
