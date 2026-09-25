// frontend/src/components/layout/MainLayout.tsx

import { useState, type ReactNode } from 'react'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import BottomNav from './BottomNav'
import type { UserRole } from '../../types/navigation'

interface MainLayoutProps {
  children: ReactNode
  activeModule: string
  onNavigate: (key: string) => void
  role?: UserRole
  userName?: string
  currentBuilding?: string
}

export default function MainLayout({
  children,
  activeModule,
  onNavigate,
  role = 'ADMIN',
  userName = 'คุณสมศักดิ์',
  currentBuilding = 'อาคาร A',
}: MainLayoutProps) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden" style={{ borderTop: '3px solid #FEC938' }}>
      {/* Sidebar - Desktop only */}
      <Sidebar
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed(!collapsed)}
        activeModule={activeModule}
        onNavigate={onNavigate}
        role={role}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-0">
        {/* Top Bar */}
        <TopBar
          activeModule={activeModule}
          userName={userName}
          userRole={role}
          currentBuilding={currentBuilding}
          notificationCount={3}
        />

        {/* Page Content */}
        <main
          className="flex-1 min-h-0 overflow-auto"
          style={{ padding: 24, background: '#F6F8F7' }}
        >
          {children}
        </main>

        {/* Bottom Nav - Mobile only */}
        <BottomNav activeModule={activeModule} onNavigate={onNavigate} />
      </div>
    </div>
  )
}