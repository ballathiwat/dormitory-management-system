// frontend/src/components/layout/BottomNav.tsx

import { MOBILE_NAV_ITEMS } from '../../types/navigation'

interface BottomNavProps {
  activeModule: string
  onNavigate: (key: string) => void
}

export default function BottomNav({ activeModule, onNavigate }: BottomNavProps) {
  return (
    <nav
      className="md:hidden flex-none flex bg-white"
      style={{
        height: 64,
        borderTop: '1px solid #E1E7E5',
      }}
    >
      {MOBILE_NAV_ITEMS.map((item) => {
        const isActive = item.key === activeModule
        const Icon = item.icon

        return (
          <button
            key={item.key}
            onClick={() => onNavigate(item.key)}
            className="flex-1 flex flex-col items-center justify-center gap-[3px] border-none cursor-pointer bg-transparent"
          >
            <span
              className="flex items-center justify-center"
              style={{
                width: 28,
                height: 28,
                borderRadius: 6,
                background: isActive ? '#088386' : '#F6F8F7',
                color: isActive ? '#fff' : '#5B6866',
              }}
            >
              <Icon size={18} />
            </span>
            <span
              className="font-sans"
              style={{
                fontSize: 10,
                fontWeight: isActive ? 600 : 500,
                color: isActive ? '#088386' : '#5B6866',
              }}
            >
              {item.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}