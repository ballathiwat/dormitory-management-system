// frontend/src/helpers/fakeBackend.ts
//
// Fake Backend — ดัก axios request แล้วคืน mock data
// ใช้ axios-mock-adapter ดักทุก request ที่ตรง pattern
//
// วิธีใช้: เรียก fakeBackend() ใน main.tsx ก่อน render app
// วิธีปิด: ลบบรรทัด fakeBackend() ใน main.tsx แค่นั้น
//         แล้ว backend_helper จะเรียก API จริงแทน

import MockAdapter from 'axios-mock-adapter'
import { axiosApi } from './api_helper'
import * as data from '../common/data'

export default function fakeBackend() {
  const mock = new MockAdapter(axiosApi, { delayResponse: 300 })

  // ===== Auth =====
  mock.onPost('/auth/login').reply((config) => {
    const { username, password } = JSON.parse(config.data)
    if (username === 'admin' && password === 'admin123') {
      return [200, {
        token: 'fake-jwt-token-hodee',
        user: { id: '1', name: 'คุณสมศักดิ์', role: 'ADMIN' },
      }]
    }
    return [401, { message: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง' }]
  })

  // ===== Buildings =====
  mock.onGet('/buildings').reply(200, data.buildings)
  mock.onGet(/\/buildings\/\w+/).reply((config) => {
    const id = config.url?.split('/').pop()
    const item = data.buildings.find((b) => b.id === id)
    return item ? [200, item] : [404, { message: 'ไม่พบอาคาร' }]
  })

  // ===== Rooms =====
  mock.onGet('/rooms').reply(200, data.rooms)
  mock.onGet(/\/rooms\/\w+/).reply((config) => {
    const id = config.url?.split('/').pop()
    const item = data.rooms.find((r) => r.id === id)
    return item ? [200, item] : [404, { message: 'ไม่พบห้อง' }]
  })

  // ===== Tenants =====
  mock.onGet('/tenants').reply(200, data.tenants)
  mock.onGet(/\/tenants\/\w+/).reply((config) => {
    const id = config.url?.split('/').pop()
    const item = data.tenants.find((t) => t.id === id)
    return item ? [200, item] : [404, { message: 'ไม่พบผู้เช่า' }]
  })

  // ===== Tenantships =====
  mock.onGet('/tenantships').reply(200, data.tenantships)
  mock.onGet(/\/tenantships\/\w+/).reply((config) => {
    const id = config.url?.split('/').pop()
    const item = data.tenantships.find((t) => t.id === id)
    return item ? [200, item] : [404, { message: 'ไม่พบสัญญา' }]
  })

  // ===== Billings =====
  mock.onGet('/billings').reply(200, data.billings)
  mock.onGet(/\/billings\/\w+/).reply((config) => {
    const id = config.url?.split('/').pop()
    const item = data.billings.find((b) => b.id === id)
    return item ? [200, item] : [404, { message: 'ไม่พบบิล' }]
  })

  // ===== Maintenance =====
  mock.onGet('/maintenance').reply(200, data.maintenanceTickets)
  mock.onGet(/\/maintenance\/\w+/).reply((config) => {
    const id = config.url?.split('/').pop()
    const item = data.maintenanceTickets.find((m) => m.id === id)
    return item ? [200, item] : [404, { message: 'ไม่พบใบแจ้งซ่อม' }]
  })

  // ===== Inspections =====
  mock.onGet('/inspections').reply(200, data.inspections)

  // ===== Notifications =====
  mock.onGet('/notifications').reply(200, data.notifications)

  // ===== Reports =====
  mock.onGet('/reports/monthly').reply(200, {
    months: [
      { month: 'เม.ย.', income: 172000, expense: 8500 },
      { month: 'พ.ค.', income: 175200, expense: 11200 },
      { month: 'มิ.ย.', income: 178800, expense: 9800 },
      { month: 'ก.ค.', income: 179400, expense: 15600 },
      { month: 'ส.ค.', income: 182100, expense: 10300 },
      { month: 'ก.ย.', income: 186400, expense: 12300 },
    ],
  })

  // ===== Catch-all: ที่เหลือ pass through ไป backend จริง =====
  mock.onAny().passThrough()
}
