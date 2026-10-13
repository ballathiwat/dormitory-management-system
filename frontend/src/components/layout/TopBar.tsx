// frontend/src/components/layout/TopBar.tsx

import { ChevronDown, Bell } from 'lucide-react'
import { PAGE_TITLES } from '../../types/navigation'

interface TopBarProps {
  activeModule: string
  userName?: string
  userRole?: string
  currentBuilding?: string
  notificationCount?: number
}

export default function TopBar({
  activeModule,
  userName = 'คุณสมศักดิ์',
  userRole = 'Admin',
  currentBuilding = 'อาคาร A',
  notificationCount = 0,
}: TopBarProps) {
  const pageTitle = PAGE_TITLES[activeModule] || activeModule

  return (
    <header
      style={{
        height: 56,
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        background: '#fff',
        borderBottom: '1px solid #E1E7E5',
      }}
    >
      {/* Breadcrumb */}
      <div>
        <span style={{ font: "400 12px 'IBM Plex Sans Thai','IBM Plex Sans',sans-serif", color: '#5B6866' }}>
          หอพัก HoDee /
        </span>{' '}
        <span style={{ font: "600 15px 'IBM Plex Sans Thai','IBM Plex Sans',sans-serif", color: '#14231F' }}>
          {pageTitle}
        </span>
      </div>

      {/* Right Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        {/* Building Selector */}
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '8px 14px',
            border: '1px solid #E1E7E5',
            borderRadius: 6,
            font: "500 13px 'IBM Plex Sans Thai','IBM Plex Sans',sans-serif",
            color: '#14231F',
            cursor: 'pointer',
            background: 'transparent',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#F6F8F7'
            e.currentTarget.style.borderColor = '#088386'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.borderColor = '#E1E7E5'
          }}
        >
          <span>{currentBuilding}</span>
          <ChevronDown size={16} color="#5B6866" />
        </button>

        {/* Notification Bell */}
        <button
          style={{
            position: 'relative',
            width: 36,
            height: 36,
            borderRadius: 9999,
            background: '#F6F8F7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          <Bell size={18} color="#5B6866" />
          {notificationCount > 0 && (
            <span
              style={{
                position: 'absolute',
                top: 6,
                right: 8,
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#DC4C4C',
                border: '1.5px solid #fff',
              }}
            />
          )}
        </button>

        {/* User Profile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: '#E1E7E5',
              flexShrink: 0,
            }}
          />
          <div>
            <p style={{ margin: 0, font: "600 13px 'IBM Plex Sans Thai','IBM Plex Sans',sans-serif", color: '#14231F', lineHeight: 1.2 }}>
              {userName}
            </p>
            <p style={{ margin: 0, font: "400 11px 'IBM Plex Sans Thai','IBM Plex Sans',sans-serif", color: '#5B6866', lineHeight: 1.2 }}>
              {userRole}
            </p>
          </div>
          <ChevronDown size={16} color="#5B6866" />
        </div>
      </div>
    </header>
  )
}
