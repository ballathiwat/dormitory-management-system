// frontend/src/Routes/AuthProtected.tsx

import { Navigate } from 'react-router-dom'

// TODO: เปลี่ยนเป็น auth state จริง (context/zustand/redux)
// ตอนนี้ใช้ dummy สำหรับ development
function useAuth() {
  // Mock: สมมติ login แล้วเสมอ (เปลี่ยนเป็น false เพื่อทดสอบ redirect)
  return {
    isAuthenticated: true,
    user: {
      name: 'คุณสมศักดิ์',
      role: 'ADMIN' as const,
    },
  }
}

// ===== Auth Guard (ครอบ route ที่ต้อง login) =====
interface AuthProtectedProps {
  children: React.ReactNode
  roles?: string[]
}

export function AuthProtected({ children, roles }: AuthProtectedProps) {
  const { isAuthenticated, user } = useAuth()

  // ไม่ได้ login → ไปหน้า login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  // login แล้วแต่ role ไม่มีสิทธิ์ → ไปหน้าแรก
  if (roles && roles.length > 0 && !roles.includes(user.role)) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}

// ===== Public Guard (ถ้า login แล้วไม่ให้เข้าหน้า login อีก) =====
interface PublicGuardProps {
  children: React.ReactNode
}

export function PublicGuard({ children }: PublicGuardProps) {
  const { isAuthenticated } = useAuth()

  // ถ้า login แล้ว → redirect ไป overview
  if (isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}

// Export hook สำหรับใช้ใน component อื่น
export { useAuth }
