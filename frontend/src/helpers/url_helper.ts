// frontend/src/helpers/url_helper.ts
//
// รวม API URL ทั้งหมดไว้ที่เดียว
// เวลาเปลี่ยน endpoint เปลี่ยนแค่ไฟล์นี้ไฟล์เดียว
//
// Pattern เหมือน Sentinel/Velzon:
//   url_helper.ts  →  กำหนด URL
//   api_helper.ts  →  axios wrapper (get/post/put/delete)
//   backend_helper.ts  →  function เรียก API แต่ละตัว

// ===== Auth =====
export const POST_LOGIN = '/auth/login'
export const POST_REGISTER = '/auth/register'
export const POST_LOGOUT = '/auth/logout'

// ===== Buildings =====
export const GET_BUILDINGS = '/buildings'
export const GET_BUILDING_DETAIL = '/buildings' // + /:id
export const POST_BUILDING = '/buildings'
export const PUT_BUILDING = '/buildings' // + /:id
export const DELETE_BUILDING = '/buildings' // + /:id

// ===== Rooms =====
export const GET_ROOMS = '/rooms'
export const GET_ROOM_DETAIL = '/rooms'
export const POST_ROOM = '/rooms'
export const PUT_ROOM = '/rooms'
export const DELETE_ROOM = '/rooms'

// ===== Tenants =====
export const GET_TENANTS = '/tenants'
export const GET_TENANT_DETAIL = '/tenants'
export const POST_TENANT = '/tenants'
export const PUT_TENANT = '/tenants'
export const DELETE_TENANT = '/tenants'

// ===== Tenantships (Contracts) =====
export const GET_TENANTSHIPS = '/tenantships'
export const GET_TENANTSHIP_DETAIL = '/tenantships'
export const POST_TENANTSHIP = '/tenantships'
export const PUT_TENANTSHIP = '/tenantships'

// ===== Billing =====
export const GET_BILLINGS = '/billings'
export const GET_BILLING_DETAIL = '/billings'
export const POST_BILLING = '/billings'
export const PATCH_BILLING_PAY = '/billings' // + /:id/pay

// ===== Maintenance =====
export const GET_MAINTENANCE = '/maintenance'
export const GET_MAINTENANCE_DETAIL = '/maintenance'
export const POST_MAINTENANCE = '/maintenance'
export const PATCH_MAINTENANCE = '/maintenance'

// ===== Inspections =====
export const GET_INSPECTIONS = '/inspections'
export const GET_INSPECTION_DETAIL = '/inspections'
export const POST_INSPECTION = '/inspections'

// ===== Reports =====
export const GET_REPORT_MONTHLY = '/reports/monthly'
export const GET_REPORT_OCCUPANCY = '/reports/occupancy'

// ===== Notifications =====
export const GET_NOTIFICATIONS = '/notifications'
export const PATCH_NOTIFICATION_READ = '/notifications' // + /:id/read
