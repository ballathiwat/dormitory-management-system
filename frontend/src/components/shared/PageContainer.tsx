// frontend/src/components/shared/PageContainer.tsx

import type { ReactNode } from 'react'

interface PageContainerProps {
  children: ReactNode
  maxWidth?: number
}

export default function PageContainer({ children, maxWidth = 1240 }: PageContainerProps) {
  return (
    <div style={{
      maxWidth,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      background: '#F6F8F7',
      padding: 24,
      borderRadius: 12,
    }}>
      {children}
    </div>
  )
}