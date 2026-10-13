// frontend/src/components/shared/PageHeader.tsx

import { Plus, type LucideIcon } from 'lucide-react'

interface PageHeaderProps {
  title: string
  subtitle?: string
  actionLabel?: string
  actionIcon?: LucideIcon
  onAction?: () => void
}

export default function PageHeader({
  title,
  subtitle,
  actionLabel,
  actionIcon: ActionIcon = Plus,
  onAction,
}: PageHeaderProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
      <div>
        <h1
          style={{
            margin: 0,
            fontSize: 22,
            fontWeight: 600,
            fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans',sans-serif",
            color: '#14231F',
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{
              margin: '4px 0 0',
              fontSize: 14,
              fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans',sans-serif",
              color: '#5B6866',
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
      {actionLabel && (
        <button
          onClick={onAction}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '10px 18px',
            background: '#088386',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 600,
            fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans',sans-serif",
            cursor: 'pointer',
          }}
        >
          <ActionIcon size={16} />
          {actionLabel}
        </button>
      )}
    </div>
  )
}
