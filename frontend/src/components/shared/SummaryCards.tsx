// frontend/src/components/shared/SummaryCards.tsx

import type { SummaryCardData } from '../../types/models'

interface SummaryCardsProps {
  cards: SummaryCardData[]
}

export default function SummaryCards({ cards }: SummaryCardsProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${Math.min(cards.length, 4)}, 1fr)`,
        gap: 16,
        marginBottom: 20,
      }}
    >
      {cards.map((card) => {
        const Icon = card.icon
        return (
          <div
            key={card.label}
            style={{
              background: '#fff',
              border: '1px solid #E1E7E5',
              borderRadius: 8,
              padding: 16,
              display: 'flex',
              alignItems: 'flex-start',
              gap: 12,
            }}
          >
            <span
              style={{
                width: 40,
                height: 40,
                borderRadius: 8,
                background: card.bg,
                color: card.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Icon size={20} />
            </span>
            <div style={{ minWidth: 0 }}>
              <p
                style={{
                  margin: 0,
                  fontSize: 12,
                  fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans',sans-serif",
                  color: '#5B6866',
                }}
              >
                {card.label}
              </p>
              <p
                style={{
                  margin: '2px 0 0',
                  fontSize: 20,
                  fontWeight: 600,
                  fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans',sans-serif",
                  color: '#14231F',
                }}
              >
                {card.value}
              </p>
              {card.sub && (
                <p
                  style={{
                    margin: '2px 0 0',
                    fontSize: 11,
                    fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans',sans-serif",
                    color: '#5B6866',
                  }}
                >
                  {card.sub}
                </p>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
