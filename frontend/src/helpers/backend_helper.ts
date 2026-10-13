// frontend/src/helpers/backend_helper.ts
//
// รวม function เรียก API ทั้งหมด — เหมือน Sentinel/Velzon
// แต่ละ module มี section ของตัวเอง
// Page component เรียก function จากไฟล์นี้ ไม่เรียก axios ตรง
//
// ตัวอย่างการใช้ใน component:
//   import { getRooms, createRoom } from '../helpers/backend_helper'
//   const { data } = await getRooms({ status: 'available' })
//   await createRoom({ number: '101', floor: 1, ... })

import { apiClient } from './api_helper'
import * as url from './url_helper'

// ===== Auth =====
export const postLogin = (data: { username: string; password: string }) =>
  apiClient.post(url.POST_LOGIN, data)

export const postLogout = () =>
  apiClient.post(url.POST_LOGOUT)

// ===== Buildings =====
export const getBuildings = (params?: Record<string, unknown>) =>
  apiClient.get(url.GET_BUILDINGS, { params })

export const getBuildingDetail = (id: string) =>
  apiClient.getById(url.GET_BUILDING_DETAIL, id)

export const createBuilding = (data: Record<string, unknown>) =>
  apiClient.post(url.POST_BUILDING, data)

export const updateBuilding = (id: string, data: Record<string, unknown>) =>
  apiClient.put(`${url.PUT_BUILDING}/${id}`, data)

export const deleteBuilding = (id: string) =>
  apiClient.delete(`${url.DELETE_BUILDING}/${id}`)

// ===== Rooms =====
export const getRooms = (params?: Record<string, unknown>) =>
  apiClient.get(url.GET_ROOMS, { params })

export const getRoomDetail = (id: string) =>
  apiClient.getById(url.GET_ROOM_DETAIL, id)

export const createRoom = (data: Record<string, unknown>) =>
  apiClient.post(url.POST_ROOM, data)

export const updateRoom = (id: string, data: Record<string, unknown>) =>
  apiClient.put(`${url.PUT_ROOM}/${id}`, data)

export const deleteRoom = (id: string) =>
  apiClient.delete(`${url.DELETE_ROOM}/${id}`)

// ===== Tenants =====
export const getTenants = (params?: Record<string, unknown>) =>
  apiClient.get(url.GET_TENANTS, { params })

export const getTenantDetail = (id: string) =>
  apiClient.getById(url.GET_TENANT_DETAIL, id)

export const createTenant = (data: Record<string, unknown>) =>
  apiClient.post(url.POST_TENANT, data)

export const updateTenant = (id: string, data: Record<string, unknown>) =>
  apiClient.put(`${url.PUT_TENANT}/${id}`, data)

export const deleteTenant = (id: string) =>
  apiClient.delete(`${url.DELETE_TENANT}/${id}`)

// ===== Tenantships =====
export const getTenantships = (params?: Record<string, unknown>) =>
  apiClient.get(url.GET_TENANTSHIPS, { params })

export const getTenantshipDetail = (id: string) =>
  apiClient.getById(url.GET_TENANTSHIP_DETAIL, id)

export const createTenantship = (data: Record<string, unknown>) =>
  apiClient.post(url.POST_TENANTSHIP, data)

export const updateTenantship = (id: string, data: Record<string, unknown>) =>
  apiClient.put(`${url.PUT_TENANTSHIP}/${id}`, data)

// ===== Billing =====
export const getBillings = (params?: Record<string, unknown>) =>
  apiClient.get(url.GET_BILLINGS, { params })

export const getBillingDetail = (id: string) =>
  apiClient.getById(url.GET_BILLING_DETAIL, id)

export const createBilling = (data: Record<string, unknown>) =>
  apiClient.post(url.POST_BILLING, data)

export const payBilling = (id: string, data: Record<string, unknown>) =>
  apiClient.patch(`${url.PATCH_BILLING_PAY}/${id}/pay`, data)

// ===== Maintenance =====
export const getMaintenanceTickets = (params?: Record<string, unknown>) =>
  apiClient.get(url.GET_MAINTENANCE, { params })

export const getMaintenanceDetail = (id: string) =>
  apiClient.getById(url.GET_MAINTENANCE_DETAIL, id)

export const createMaintenanceTicket = (data: Record<string, unknown>) =>
  apiClient.post(url.POST_MAINTENANCE, data)

export const updateMaintenanceTicket = (id: string, data: Record<string, unknown>) =>
  apiClient.patch(`${url.PATCH_MAINTENANCE}/${id}`, data)

// ===== Inspections =====
export const getInspections = (params?: Record<string, unknown>) =>
  apiClient.get(url.GET_INSPECTIONS, { params })

export const getInspectionDetail = (id: string) =>
  apiClient.getById(url.GET_INSPECTION_DETAIL, id)

export const createInspection = (data: Record<string, unknown>) =>
  apiClient.post(url.POST_INSPECTION, data)

// ===== Reports =====
export const getMonthlyReport = (params?: Record<string, unknown>) =>
  apiClient.get(url.GET_REPORT_MONTHLY, { params })

export const getOccupancyReport = (params?: Record<string, unknown>) =>
  apiClient.get(url.GET_REPORT_OCCUPANCY, { params })

// ===== Notifications =====
export const getNotifications = (params?: Record<string, unknown>) =>
  apiClient.get(url.GET_NOTIFICATIONS, { params })

export const markNotificationRead = (id: string) =>
  apiClient.patch(`${url.PATCH_NOTIFICATION_READ}/${id}/read`)
