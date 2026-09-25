// frontend/src/components/layout/Sidebar.tsx

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { MENU_ITEMS, type UserRole } from '../../types/navigation'

interface SidebarProps {
  collapsed: boolean
  onToggleCollapse: () => void
  activeModule: string
  onNavigate: (key: string) => void
  role: UserRole
}

export default function Sidebar({
  collapsed,
  onToggleCollapse,
  activeModule,
  onNavigate,
  role,
}: SidebarProps) {
  const filteredMenu = MENU_ITEMS.filter((m) => m.roles.includes(role))

  return (
    <aside
      className="hidden md:flex flex-col flex-none transition-all duration-150 ease-in-out overflow-hidden"
      style={{
        width: collapsed ? 68 : 240,
        background: '#088386',
      }}
    >
      {/* Header - same height as TopBar (56px) */}
      <div
        style={{
          height: 56,
          display: 'flex',
          alignItems: 'center',
          padding: collapsed ? '0 16px' : '0 16px',
          flexDirection: collapsed ? 'column' : 'row',
          justifyContent: collapsed ? 'center' : 'space-between',
          gap: 10,
        }}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <div
            className="flex-none overflow-hidden bg-white"
            style={{ width: 36, height: 27, borderRadius: 6 }}
          >
            <img
              src="/hodee-logo.jpeg"
              alt="HoDee"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          {!collapsed && (
            <span
              style={{
                font: "600 17px 'IBM Plex Sans Thai','IBM Plex Sans',sans-serif",
                color: '#fff',
                whiteSpace: 'nowrap',
              }}
            >
              HoDee
            </span>
          )}
        </div>
        <button
          onClick={onToggleCollapse}
          aria-label="ย่อ/ขยายเมนู"
          style={{
            width: 24,
            height: 24,
            borderRadius: 6,
            background: 'rgba(255,255,255,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            border: 'none',
            flexShrink: 0,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = 'rgba(255,255,255,0.22)')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')
          }
        >
          {collapsed ? (
            <ChevronRight size={14} color="#fff" />
          ) : (
            <ChevronLeft size={14} color="#fff" />
          )}
        </button>
      </div>

      {/* Menu Items */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 2, padding: '8px 0', flex: 1, overflow: 'auto' }}>
        {filteredMenu.map((item) => {
          const isActive = item.key === activeModule
          const Icon = item.icon

          return (
            <button
              key={item.key}
              onClick={() => onNavigate(item.key)}
              aria-current={isActive ? 'page' : undefined}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '10px 20px',
                background: isActive ? 'rgba(255,255,255,0.18)' : 'transparent',
                borderLeft: isActive
                  ? '3px solid #FEC938'
                  : '3px solid transparent',
                border: 'none',
                borderLeftStyle: 'solid',
                borderLeftWidth: 3,
                borderLeftColor: isActive ? '#FEC938' : 'transparent',
                cursor: 'pointer',
                width: '100%',
                textAlign: 'left',
              }}
              onMouseEnter={(e) => {
                if (!isActive)
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
              }}
              onMouseLeave={(e) => {
                if (!isActive)
                  e.currentTarget.style.background = 'transparent'
              }}
            >
              <span
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 6,
                  background: isActive ? '#ffffff' : 'rgba(255,255,255,0.12)',
                  color: isActive ? '#088386' : '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon size={20} />
              </span>
              {!collapsed && (
                <span
                  style={{
                    font: `${isActive ? 600 : 500} 13px 'IBM Plex Sans Thai','IBM Plex Sans',sans-serif`,
                    color: isActive ? '#fff' : 'rgba(255,255,255,0.85)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.label}
                </span>
              )}
            </button>
          )
        })}
      </nav>

      {/* Footer */}
      <div
        style={{
          padding: '12px 20px',
          borderTop: '1px solid rgba(255,255,255,0.12)',
        }}
      >
        {!collapsed && (
          <span
            style={{
              font: "400 10px 'JetBrains Mono',monospace",
              color: 'rgba(255,255,255,0.5)',
            }}
          >
            v3.0.0
          </span>
        )}
      </div>
    </aside>
  )
}