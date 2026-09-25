// frontend/src/App.tsx

import { useState } from 'react'
import { MainLayout } from './components/layout'
import { PAGE_TITLES } from './types/navigation'
import {
  BedDouble,
  AlertCircle,
  TrendingUp,
  Wrench,
  Plus,
} from 'lucide-react'

const SUMMARY_CARDS = [
  {
    label: 'ห้องว่าง',
    value: '12 ห้อง',
    icon: BedDouble,
    color: '#088386',
    bg: 'rgba(8,131,134,0.12)',
    sub: 'จาก 48 ห้องทั้งหมด',
  },
  {
    label: 'ค้างชำระ',
    value: '8 รายการ',
    icon: AlertCircle,
    color: '#DC4C4C',
    bg: '#FBEAEA',
    sub: 'รวม ฿28,400',
  },
  {
    label: 'รายรับเดือนนี้',
    value: '฿186,400',
    icon: TrendingUp,
    color: '#088386',
    bg: 'rgba(8,131,134,0.10)',
    sub: '+4% จากเดือนก่อน',
  },
  {
    label: 'แจ้งซ่อมรอดำเนินการ',
    value: '5 รายการ',
    icon: Wrench,
    color: '#1F2937',
    bg: 'rgba(254,201,56,0.25)',
    sub: '2 รายการด่วน',
  },
]

const TASKS = [
  {
    text: 'ห้อง 204 ค้างชำระเดือนนี้ ฿3,500 (5 วัน)',
    tag: 'ด่วน',
    tagColor: '#B23434',
    tagBg: '#FBEAEA',
    action: 'ส่งใบเตือน',
  },
  {
    text: 'แจ้งซ่อมก๊อกน้ำรั่ว ห้อง 118 — รอดำเนินการ 2 วัน',
    tag: 'ซ่อม',
    tagColor: '#1F2937',
    tagBg: 'rgba(254,201,56,0.25)',
    action: 'มอบหมายงาน',
  },
  {
    text: 'สัญญาเช่าห้อง 305 จะหมดอายุใน 7 วัน',
    tag: 'สัญญา',
    tagColor: '#088386',
    tagBg: 'rgba(8,131,134,0.10)',
    action: 'ต่อสัญญา',
  },
  {
    text: 'ตรวจห้อง 210 หลังผู้เช่าย้ายออก',
    tag: 'ตรวจห้อง',
    tagColor: '#088386',
    tagBg: 'rgba(8,131,134,0.12)',
    action: 'กำหนดเวลา',
  },
]

function OverviewPage() {
  return (
    <div
      style={{
        maxWidth: 1240,
        margin: '0 auto',
        background: '#fff',
        border: '1px solid #E1E7E5',
        borderRadius: 12,
        padding: 24,
        boxShadow: '0 1px 3px rgba(20,35,31,0.05)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1
            style={{
              margin: 0,
              fontSize: 22,
              fontWeight: 600,
              fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans', sans-serif",
              color: '#14231F',
            }}
          >
            ภาพรวมหอพัก
          </h1>
          <button
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              height: 38,
              padding: '0 18px',
              borderRadius: 6,
              background: '#088386',
              color: '#fff',
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans', sans-serif",
              cursor: 'pointer',
              border: 'none',
            }}
          >
            <Plus size={16} />
            เพิ่มผู้เช่า
          </button>
        </div>

        {/* Summary Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: 16,
          }}
        >
          {SUMMARY_CARDS.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.label}
                style={{
                  background: '#fff',
                  border: '1px solid #E1E7E5',
                  borderRadius: 10,
                  padding: 18,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    width: 40,
                    height: 40,
                    borderRadius: 9,
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: card.bg,
                    color: card.color,
                  }}
                >
                  <Icon size={24} />
                </span>
                <p
                  style={{
                    margin: 0,
                    fontSize: 30,
                    fontWeight: 600,
                    fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans', sans-serif",
                    color: '#14231F',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {card.value}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: 13,
                    fontWeight: 500,
                    fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans', sans-serif",
                    color: '#5B6866',
                  }}
                >
                  {card.label}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: 12,
                    fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans', sans-serif",
                    color: card.color,
                  }}
                >
                  {card.sub}
                </p>
              </div>
            )
          })}
        </div>

        {/* Tasks */}
        <div
          style={{
            background: '#fff',
            border: '1px solid #E1E7E5',
            borderRadius: 10,
            overflow: 'hidden',
          }}
        >
          <p
            style={{
              margin: 0,
              padding: '16px 20px',
              fontSize: 15,
              fontWeight: 600,
              fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans', sans-serif",
              color: '#14231F',
              borderBottom: '1px solid #E1E7E5',
            }}
          >
            งานที่ต้องทำวันนี้
          </p>
          {TASKS.map((task, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 16,
                padding: '14px 20px',
                borderBottom: '1px solid #E1E7E5',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span
                  style={{
                    width: 'fit-content',
                    fontSize: 10,
                    fontWeight: 600,
                    fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans', sans-serif",
                    color: task.tagColor,
                    background: task.tagBg,
                    padding: '2px 8px',
                    borderRadius: 9999,
                  }}
                >
                  {task.tag}
                </span>
                <span
                  style={{
                    fontSize: 14,
                    fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans', sans-serif",
                    color: '#14231F',
                  }}
                >
                  {task.text}
                </span>
              </div>
              <button
                style={{
                  flexShrink: 0,
                  height: 32,
                  padding: '0 14px',
                  borderRadius: 6,
                  border: '1px solid #E1E7E5',
                  background: '#fff',
                  fontSize: 12,
                  fontWeight: 600,
                  fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans', sans-serif",
                  color: '#088386',
                  cursor: 'pointer',
                }}
              >
                {task.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div
      style={{
        maxWidth: 1240,
        margin: '0 auto',
        background: '#fff',
        border: '1px solid #E1E7E5',
        borderRadius: 12,
        padding: 24,
        boxShadow: '0 1px 3px rgba(20,35,31,0.05)',
      }}
    >
      <h1
        style={{
          margin: 0,
          fontSize: 22,
          fontWeight: 600,
          fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans', sans-serif",
          color: '#14231F',
        }}
      >
        {title}
      </h1>
      <p
        style={{
          marginTop: 8,
          fontSize: 14,
          fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans', sans-serif",
          color: '#5B6866',
        }}
      >
        หน้า {title} — กำลังพัฒนา
      </p>
    </div>
  )
}

function App() {
  const [activeModule, setActiveModule] = useState('overview')

  return (
    <MainLayout
      activeModule={activeModule}
      onNavigate={setActiveModule}
      role="ADMIN"
      userName="คุณสมศักดิ์"
      currentBuilding="อาคาร A"
    >
      {activeModule === 'overview' ? (
        <OverviewPage />
      ) : (
        <PlaceholderPage title={PAGE_TITLES[activeModule] || activeModule} />
      )}
    </MainLayout>
  )
}

export default App