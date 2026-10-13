// frontend/src/Routes/index.tsx

import { Routes, Route } from 'react-router-dom'
import { authProtectedRoutes, publicRoutes } from './allRoutes'
import { AuthProtected, PublicGuard, useAuth } from './AuthProtected'
import MainLayout from '../components/layout/MainLayout'

// ===== Helper: path → module key (สำหรับ sidebar active state) =====
const PATH_TO_MODULE: Record<string, string> = {
  '/': 'overview',
  '/buildings': 'buildings',
  '/rooms': 'rooms',
  '/tenants': 'tenants',
  '/tenantships': 'tenantships',
  '/billing': 'billing',
  '/maintenance': 'maintenance',
  '/inspections': 'inspections',
  '/reports': 'reports',
  '/notifications': 'notifications',
  '/settings': 'settings',
}

const ROUTE_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(PATH_TO_MODULE).map(([path, module]) => [module, path]),
)

// ===== Layout wrapper ที่จัดการ navigation =====
function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()
  const location = window.location.pathname
  const activeModule = PATH_TO_MODULE[location] || 'overview'

  const handleNavigate = (key: string) => {
    const path = ROUTE_MAP[key]
    if (path) window.location.href = path
  }

  return (
    <MainLayout
      activeModule={activeModule}
      onNavigate={handleNavigate}
      role={user.role}
      userName={user.name}
      currentBuilding="อาคาร A"
    >
      {children}
    </MainLayout>
  )
}

// ===== Main Router Component =====
export default function AppRoutes() {
  return (
    <Routes>
      {/* ===== Public Routes (ไม่มี Layout) ===== */}
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <PublicGuard>
              {route.component}
            </PublicGuard>
          }
        />
      ))}

      {/* ===== Auth Protected Routes (มี Layout) ===== */}
      {authProtectedRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <AuthProtected roles={route.roles}>
              <LayoutWrapper>
                {route.component}
              </LayoutWrapper>
            </AuthProtected>
          }
        />
      ))}
    </Routes>
  )
}