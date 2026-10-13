// frontend/src/components/shared/ContentCard.tsx

import type { ReactNode } from 'react'

interface ContentCardProps {
  children: ReactNode
  padding?: number
  noPadding?: boolean
}

/**
 * White card wrapper — ครอบ content แต่ละ section
 * ใช้แทน <div style={{ background: '#fff', border: '1px solid #E1E7E5', ... }}>
 */
export default function ContentCard({ children, padding = 20, noPadding = false }: ContentCardProps) {
  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid #E1E7E5',
        borderRadius: 10,
        padding: noPadding ? 0 : padding,
        boxShadow: '0 1px 3px rgba(20,35,31,0.05)',
      }}
    >
      {children}
    </div>
  )
}