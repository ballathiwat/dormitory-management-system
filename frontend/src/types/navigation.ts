// frontend/src/types/navigation.ts

import {
  LayoutDashboard,
  Building2,
  BedDouble,
  Users,
  FileText,
  Receipt,
  Wrench,
  ClipboardCheck,
  BarChart3,
  Bell,
  Settings,
  MoreHorizontal,
  type LucideIcon,
} from 'lucide-react'

export type UserRole = 'ADMIN' | 'MANAGER' | 'STAFF' | 'TENANT'

export interface MenuItem {
  key: string
  label: string
  icon: LucideIcon
  roles: UserRole[]
}

export interface MobileNavItem {
  key: string
  label: string
  icon: LucideIcon
}

export const MENU_ITEMS: MenuItem[] = [
  { key: 'overview', label: 'ภาพรวม', icon: LayoutDashboard, roles: ['ADMIN', 'MANAGER', 'STAFF'] },
  { key: 'buildings', label: 'อาคาร', icon: Building2, roles: ['ADMIN', 'MANAGER'] },
  { key: 'rooms', label: 'ห้องพัก', icon: BedDouble, roles: ['ADMIN', 'MANAGER', 'STAFF'] },
  { key: 'tenants', label: 'ผู้เช่า', icon: Users, roles: ['ADMIN', 'MANAGER', 'STAFF'] },
  { key: 'tenantships', label: 'สัญญาเช่า', icon: FileText, roles: ['ADMIN', 'MANAGER'] },
  { key: 'billing', label: 'บิล/ชำระเงิน', icon: Receipt, roles: ['ADMIN', 'MANAGER', 'STAFF'] },
  { key: 'maintenance', label: 'แจ้งซ่อม', icon: Wrench, roles: ['ADMIN', 'MANAGER', 'STAFF'] },
  { key: 'inspections', label: 'ตรวจห้อง', icon: ClipboardCheck, roles: ['ADMIN', 'MANAGER', 'STAFF'] },
  { key: 'reports', label: 'รายงาน', icon: BarChart3, roles: ['ADMIN', 'MANAGER'] },
  { key: 'notifications', label: 'แจ้งเตือน', icon: Bell, roles: ['ADMIN', 'MANAGER'] },
  { key: 'settings', label: 'ตั้งค่า', icon: Settings, roles: ['ADMIN'] },
]

export const MOBILE_NAV_ITEMS: MobileNavItem[] = [
  { key: 'overview', label: 'ภาพรวม', icon: LayoutDashboard },
  { key: 'rooms', label: 'ห้อง', icon: BedDouble },
  { key: 'billing', label: 'บิล', icon: Receipt },
  { key: 'maintenance', label: 'แจ้งซ่อม', icon: Wrench },
  { key: 'more', label: 'เพิ่มเติม', icon: MoreHorizontal },
]

export const PAGE_TITLES: Record<string, string> = {
  overview: 'ภาพรวม',
  buildings: 'อาคาร',
  rooms: 'ห้องพัก',
  tenants: 'ผู้เช่า',
  tenantships: 'สัญญาเช่า',
  billing: 'บิล/ชำระเงิน',
  maintenance: 'แจ้งซ่อม',
  inspections: 'ตรวจห้อง',
  reports: 'รายงาน',
  notifications: 'แจ้งเตือน',
  settings: 'ตั้งค่า',
}
