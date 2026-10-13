// frontend/src/types/models.ts

// ===== Building =====
export interface Building {
  id: string
  name: string
  floors: number
  totalRooms: number
  occupiedRooms: number
  address: string
  status: 'active' | 'inactive' | 'maintenance'
  createdAt: string
}

// ===== Room =====
export type RoomStatus = 'available' | 'occupied' | 'maintenance' | 'reserved'
export type RoomType = 'standard' | 'deluxe' | 'suite'

export interface Room {
  id: string
  number: string
  buildingId: string
  buildingName: string
  floor: number
  type: RoomType
  status: RoomStatus
  monthlyRate: number
  amenities: string[]
  currentTenantName?: string
  lastInspectionDate?: string
}

// ===== Tenant =====
export type TenantStatus = 'active' | 'inactive' | 'pending'

export interface Tenant {
  id: string
  firstName: string
  lastName: string
  phone: string
  email?: string
  idCard: string
  status: TenantStatus
  roomNumber?: string
  buildingName?: string
  moveInDate?: string
  emergencyContact?: string
}

// ===== Tenantship (Contract) =====
export type ContractStatus = 'active' | 'expired' | 'terminated' | 'pending'

export interface Tenantship {
  id: string
  tenantName: string
  roomNumber: string
  buildingName: string
  startDate: string
  endDate: string
  monthlyRate: number
  deposit: number
  status: ContractStatus
}

// ===== Billing =====
export type BillingStatus = 'paid' | 'pending' | 'overdue' | 'partial'
export type PaymentMethod = 'cash' | 'transfer' | 'promptpay' | 'other'

export interface Billing {
  id: string
  invoiceNumber: string
  tenantName: string
  roomNumber: string
  buildingName: string
  billingMonth: string
  roomCharge: number
  waterCharge: number
  electricCharge: number
  otherCharges: number
  totalAmount: number
  paidAmount: number
  status: BillingStatus
  dueDate: string
  paidDate?: string
  paymentMethod?: PaymentMethod
}

// ===== Maintenance =====
export type MaintenancePriority = 'low' | 'medium' | 'high' | 'urgent'
export type MaintenanceStatus = 'open' | 'in_progress' | 'completed' | 'cancelled'

export interface Maintenance {
  id: string
  ticketNumber: string
  roomNumber: string
  buildingName: string
  tenantName: string
  category: string
  description: string
  priority: MaintenancePriority
  status: MaintenanceStatus
  assignedTo?: string
  createdAt: string
  completedAt?: string
}

// ===== Inspection =====
export type InspectionType = 'check_in' | 'check_out' | 'routine' | 'damage'
export type InspectionStatus = 'scheduled' | 'in_progress' | 'completed'

export interface Inspection {
  id: string
  roomNumber: string
  buildingName: string
  type: InspectionType
  status: InspectionStatus
  inspectorName: string
  scheduledDate: string
  completedDate?: string
  notes?: string
  damageFound: boolean
}

// ===== Notification =====
export type NotificationType = 'billing' | 'maintenance' | 'contract' | 'system'

export interface Notification {
  id: string
  type: NotificationType
  title: string
  message: string
  recipientName: string
  isRead: boolean
  createdAt: string
}

// ===== Summary Card =====
export interface SummaryCardData {
  label: string
  value: string
  icon: React.ComponentType<{ size?: number }>
  color: string
  bg: string
  sub?: string
}
