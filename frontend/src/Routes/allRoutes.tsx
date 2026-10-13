// frontend/src/Routes/allRoutes.tsx

import { Navigate } from 'react-router-dom'

// Pages
import OverviewPage from '../pages/overview/OverviewPage'
import BuildingsPage from '../pages/buildings/BuildingsPage'
import RoomsPage from '../pages/rooms/RoomsPage'
import TenantsPage from '../pages/tenants/TenantsPage'
import TenantshipsPage from '../pages/tenantships/TenantshipsPage'
import BillingPage from '../pages/billing/BillingPage'
import MaintenancePage from '../pages/maintenance/MaintenancePage'
import InspectionsPage from '../pages/inspections/InspectionsPage'
import ReportsPage from '../pages/reports/ReportsPage'
import NotificationsPage from '../pages/notifications/NotificationsPage'
import SettingsPage from '../pages/settings/SettingsPage'

// Auth Pages (placeholder — สร้างจริงทีหลัง)
import LoginPage from '../pages/auth/LoginPage'

// ===== Route Type =====
export interface RouteConfig {
  path: string
  component: React.ReactNode
  exact?: boolean
  // Sentinel-style: roles ที่เข้าถึงได้
  roles?: ('ADMIN' | 'MANAGER' | 'STAFF' | 'TENANT')[]
}

// ===== Private Routes (ต้อง login + มี Layout) =====
const authProtectedRoutes: RouteConfig[] = [
  // Dashboard
  { path: '/', component: <OverviewPage />, roles: ['ADMIN', 'MANAGER', 'STAFF'] },

  // Building Management
  { path: '/buildings', component: <BuildingsPage />, roles: ['ADMIN', 'MANAGER'] },

  // Room Management
  { path: '/rooms', component: <RoomsPage />, roles: ['ADMIN', 'MANAGER', 'STAFF'] },
  // TODO: เพิ่มภายหลัง
  // { path: '/rooms/:id', component: <RoomDetailPage />, roles: ['ADMIN', 'MANAGER', 'STAFF'] },
  // { path: '/rooms/:id/edit', component: <RoomEditPage />, roles: ['ADMIN', 'MANAGER'] },

  // Tenant Management
  { path: '/tenants', component: <TenantsPage />, roles: ['ADMIN', 'MANAGER', 'STAFF'] },
  // { path: '/tenants/:id', component: <TenantDetailPage />, roles: ['ADMIN', 'MANAGER', 'STAFF'] },
  // { path: '/tenants/:id/edit', component: <TenantEditPage />, roles: ['ADMIN', 'MANAGER'] },

  // Contract Management
  { path: '/tenantships', component: <TenantshipsPage />, roles: ['ADMIN', 'MANAGER'] },
  // { path: '/tenantships/:id', component: <TenantshipDetailPage />, roles: ['ADMIN', 'MANAGER'] },

  // Billing & Payment
  { path: '/billing', component: <BillingPage />, roles: ['ADMIN', 'MANAGER', 'STAFF'] },
  // { path: '/billing/:id', component: <BillingDetailPage />, roles: ['ADMIN', 'MANAGER', 'STAFF'] },

  // Maintenance
  { path: '/maintenance', component: <MaintenancePage />, roles: ['ADMIN', 'MANAGER', 'STAFF'] },
  // { path: '/maintenance/:id', component: <MaintenanceDetailPage />, roles: ['ADMIN', 'MANAGER', 'STAFF'] },

  // Inspections
  { path: '/inspections', component: <InspectionsPage />, roles: ['ADMIN', 'MANAGER', 'STAFF'] },
  // { path: '/inspections/:id', component: <InspectionDetailPage />, roles: ['ADMIN', 'MANAGER', 'STAFF'] },

  // Reports
  { path: '/reports', component: <ReportsPage />, roles: ['ADMIN', 'MANAGER'] },

  // Notifications
  { path: '/notifications', component: <NotificationsPage />, roles: ['ADMIN', 'MANAGER'] },

  // Settings
  { path: '/settings', component: <SettingsPage />, roles: ['ADMIN'] },

  // Catch-all → redirect to overview
  { path: '*', component: <Navigate to="/" replace /> },
]

// ===== Public Routes (ไม่ต้อง login, ไม่มี Layout) =====
const publicRoutes: RouteConfig[] = [
  { path: '/login', component: <LoginPage /> },
  // { path: '/forgot-password', component: <ForgotPasswordPage /> },
  // { path: '/register', component: <RegisterPage /> },
]

export { authProtectedRoutes, publicRoutes }
