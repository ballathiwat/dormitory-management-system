// frontend/src/common/data/index.ts
//
// ข้อมูลจำลองทั้งหมด — fakeBackend ใช้ข้อมูลจากไฟล์นี้
// เวลาเชื่อม API จริง ลบ fakeBackend ออก ข้อมูลนี้จะไม่ถูกใช้

import type { Building, Room, Tenant, Tenantship, Billing, Maintenance, Inspection, Notification } from '../../types/models'

export const buildings: Building[] = [
  { id: '1', name: 'อาคาร A', floors: 4, totalRooms: 24, occupiedRooms: 20, address: 'ถ.มิตรภาพ ซ.12', status: 'active', createdAt: '2024-01-15' },
  { id: '2', name: 'อาคาร B', floors: 3, totalRooms: 18, occupiedRooms: 16, address: 'ถ.มิตรภาพ ซ.12', status: 'active', createdAt: '2024-03-01' },
  { id: '3', name: 'อาคาร C', floors: 2, totalRooms: 6, occupiedRooms: 0, address: 'ถ.กลางเมือง ซ.5', status: 'maintenance', createdAt: '2025-06-10' },
]

export const rooms: Room[] = [
  { id: '1', number: '101', buildingId: '1', buildingName: 'อาคาร A', floor: 1, type: 'standard', status: 'occupied', monthlyRate: 3500, amenities: ['แอร์', 'เฟอร์นิเจอร์'], currentTenantName: 'สมชาย ใจดี' },
  { id: '2', number: '102', buildingId: '1', buildingName: 'อาคาร A', floor: 1, type: 'standard', status: 'available', monthlyRate: 3500, amenities: ['แอร์', 'เฟอร์นิเจอร์'] },
  { id: '3', number: '201', buildingId: '1', buildingName: 'อาคาร A', floor: 2, type: 'deluxe', status: 'occupied', monthlyRate: 5000, amenities: ['แอร์', 'เฟอร์นิเจอร์', 'เครื่องทำน้ำอุ่น'], currentTenantName: 'วิภา สุขสันต์' },
  { id: '4', number: '202', buildingId: '1', buildingName: 'อาคาร A', floor: 2, type: 'deluxe', status: 'maintenance', monthlyRate: 5000, amenities: ['แอร์', 'เฟอร์นิเจอร์', 'เครื่องทำน้ำอุ่น'] },
  { id: '5', number: '301', buildingId: '1', buildingName: 'อาคาร A', floor: 3, type: 'suite', status: 'occupied', monthlyRate: 7500, amenities: ['แอร์', 'เฟอร์นิเจอร์ครบ', 'เครื่องทำน้ำอุ่น', 'ตู้เย็น'], currentTenantName: 'ประภาส ศรีทอง' },
  { id: '6', number: '103', buildingId: '2', buildingName: 'อาคาร B', floor: 1, type: 'standard', status: 'available', monthlyRate: 3200, amenities: ['แอร์'] },
  { id: '7', number: '104', buildingId: '2', buildingName: 'อาคาร B', floor: 1, type: 'standard', status: 'reserved', monthlyRate: 3200, amenities: ['แอร์'] },
  { id: '8', number: '203', buildingId: '2', buildingName: 'อาคาร B', floor: 2, type: 'deluxe', status: 'occupied', monthlyRate: 4800, amenities: ['แอร์', 'เฟอร์นิเจอร์'], currentTenantName: 'กานดา พลอยงาม' },
]

export const tenants: Tenant[] = [
  { id: '1', firstName: 'สมชาย', lastName: 'ใจดี', phone: '081-234-5678', email: 'somchai@mail.com', idCard: '1234567890123', status: 'active', roomNumber: '101', buildingName: 'อาคาร A', moveInDate: '2024-06-01' },
  { id: '2', firstName: 'วิภา', lastName: 'สุขสันต์', phone: '089-876-5432', email: 'wipa@mail.com', idCard: '9876543210987', status: 'active', roomNumber: '201', buildingName: 'อาคาร A', moveInDate: '2024-08-15' },
  { id: '3', firstName: 'ประภาส', lastName: 'ศรีทอง', phone: '062-111-2233', idCard: '1122334455667', status: 'active', roomNumber: '301', buildingName: 'อาคาร A', moveInDate: '2025-01-10' },
  { id: '4', firstName: 'กานดา', lastName: 'พลอยงาม', phone: '095-444-5566', email: 'kanda@mail.com', idCard: '5566778899001', status: 'active', roomNumber: '203', buildingName: 'อาคาร B', moveInDate: '2025-03-01' },
  { id: '5', firstName: 'อนันต์', lastName: 'วงศ์สุวรรณ', phone: '088-999-0011', idCard: '1100223344556', status: 'inactive' },
  { id: '6', firstName: 'พิมพ์ใจ', lastName: 'รักสวย', phone: '063-222-3344', email: 'pimjai@mail.com', idCard: '3344556677889', status: 'pending' },
]

export const tenantships: Tenantship[] = [
  { id: '1', tenantName: 'สมชาย ใจดี', roomNumber: '101', buildingName: 'อาคาร A', startDate: '2024-06-01', endDate: '2025-05-31', monthlyRate: 3500, deposit: 7000, status: 'active' },
  { id: '2', tenantName: 'วิภา สุขสันต์', roomNumber: '201', buildingName: 'อาคาร A', startDate: '2024-08-15', endDate: '2025-08-14', monthlyRate: 5000, deposit: 10000, status: 'active' },
  { id: '3', tenantName: 'ประภาส ศรีทอง', roomNumber: '301', buildingName: 'อาคาร A', startDate: '2025-01-10', endDate: '2026-01-09', monthlyRate: 7500, deposit: 15000, status: 'active' },
  { id: '4', tenantName: 'กานดา พลอยงาม', roomNumber: '203', buildingName: 'อาคาร B', startDate: '2025-03-01', endDate: '2025-09-30', monthlyRate: 4800, deposit: 9600, status: 'active' },
  { id: '5', tenantName: 'อนันต์ วงศ์สุวรรณ', roomNumber: '105', buildingName: 'อาคาร A', startDate: '2023-12-01', endDate: '2024-11-30', monthlyRate: 3500, deposit: 7000, status: 'expired' },
]

export const billings: Billing[] = [
  { id: '1', invoiceNumber: 'INV-2026-09-001', tenantName: 'สมชาย ใจดี', roomNumber: '101', buildingName: 'อาคาร A', billingMonth: 'ก.ย. 2569', roomCharge: 3500, waterCharge: 180, electricCharge: 620, otherCharges: 0, totalAmount: 4300, paidAmount: 4300, status: 'paid', dueDate: '2026-09-05', paidDate: '2026-09-03', paymentMethod: 'transfer' },
  { id: '2', invoiceNumber: 'INV-2026-09-002', tenantName: 'วิภา สุขสันต์', roomNumber: '201', buildingName: 'อาคาร A', billingMonth: 'ก.ย. 2569', roomCharge: 5000, waterCharge: 220, electricCharge: 850, otherCharges: 0, totalAmount: 6070, paidAmount: 6070, status: 'paid', dueDate: '2026-09-05', paidDate: '2026-09-04', paymentMethod: 'promptpay' },
  { id: '3', invoiceNumber: 'INV-2026-09-003', tenantName: 'ประภาส ศรีทอง', roomNumber: '301', buildingName: 'อาคาร A', billingMonth: 'ก.ย. 2569', roomCharge: 7500, waterCharge: 310, electricCharge: 1200, otherCharges: 100, totalAmount: 9110, paidAmount: 0, status: 'overdue', dueDate: '2026-09-05' },
  { id: '4', invoiceNumber: 'INV-2026-09-004', tenantName: 'กานดา พลอยงาม', roomNumber: '203', buildingName: 'อาคาร B', billingMonth: 'ก.ย. 2569', roomCharge: 4800, waterCharge: 190, electricCharge: 720, otherCharges: 0, totalAmount: 5710, paidAmount: 3000, status: 'partial', dueDate: '2026-09-05' },
]

export const maintenanceTickets: Maintenance[] = [
  { id: '1', ticketNumber: 'MN-001', roomNumber: '118', buildingName: 'อาคาร A', tenantName: 'สมพร ดีใจ', category: 'ประปา', description: 'ก๊อกน้ำรั่วในห้องน้ำ', priority: 'high', status: 'open', createdAt: '2026-09-23' },
  { id: '2', ticketNumber: 'MN-002', roomNumber: '204', buildingName: 'อาคาร A', tenantName: 'นภา แก้วใส', category: 'ไฟฟ้า', description: 'หลอดไฟห้องนอนเสีย 2 ดวง', priority: 'medium', status: 'in_progress', assignedTo: 'ช่างสมบัติ', createdAt: '2026-09-22' },
  { id: '3', ticketNumber: 'MN-003', roomNumber: '301', buildingName: 'อาคาร A', tenantName: 'ประภาส ศรีทอง', category: 'แอร์', description: 'แอร์ไม่เย็น มีเสียงดัง', priority: 'urgent', status: 'open', createdAt: '2026-09-24' },
  { id: '4', ticketNumber: 'MN-004', roomNumber: '105', buildingName: 'อาคาร B', tenantName: 'สมศรี มั่นคง', category: 'ประตู/หน้าต่าง', description: 'กลอนประตูห้องน้ำหลวม', priority: 'low', status: 'completed', assignedTo: 'ช่างวิชัย', createdAt: '2026-09-20', completedAt: '2026-09-21' },
]

export const inspections: Inspection[] = [
  { id: '1', roomNumber: '210', buildingName: 'อาคาร A', type: 'check_out', status: 'scheduled', inspectorName: 'คุณวิชัย', scheduledDate: '2026-09-26', damageFound: false },
  { id: '2', roomNumber: '105', buildingName: 'อาคาร A', type: 'check_in', status: 'completed', inspectorName: 'คุณวิชัย', scheduledDate: '2026-09-20', completedDate: '2026-09-20', damageFound: false },
  { id: '3', roomNumber: '302', buildingName: 'อาคาร B', type: 'check_out', status: 'completed', inspectorName: 'คุณสมบัติ', scheduledDate: '2026-09-18', completedDate: '2026-09-18', damageFound: true, notes: 'พบรอยแตกกระเบื้องห้องน้ำ' },
]

export const notifications: Notification[] = [
  { id: '1', type: 'billing', title: 'แจ้งเตือนค้างชำระ', message: 'ห้อง 301 ค้างชำระค่าเช่าเดือน ก.ย. จำนวน ฿9,110', recipientName: 'ประภาส ศรีทอง', isRead: false, createdAt: '2026-09-25 10:30' },
  { id: '2', type: 'maintenance', title: 'แจ้งซ่อมใหม่', message: 'ห้อง 118 แจ้งก๊อกน้ำรั่ว — ความเร่งด่วนสูง', recipientName: 'ผู้จัดการ', isRead: false, createdAt: '2026-09-24 14:15' },
  { id: '3', type: 'contract', title: 'สัญญาใกล้หมดอายุ', message: 'สัญญาเช่าห้อง 203 จะหมดอายุในอีก 5 วัน', recipientName: 'กานดา พลอยงาม', isRead: false, createdAt: '2026-09-24 09:00' },
  { id: '4', type: 'billing', title: 'รับชำระเงินแล้ว', message: 'ห้อง 101 ชำระค่าเช่า ฿4,300 ผ่านโอนเงิน', recipientName: 'สมชาย ใจดี', isRead: true, createdAt: '2026-09-23 16:45' },
  { id: '5', type: 'system', title: 'สำรองข้อมูลสำเร็จ', message: 'ระบบสำรองข้อมูลประจำวันเสร็จสิ้น', recipientName: 'ระบบ', isRead: true, createdAt: '2026-09-23 03:00' },
]
