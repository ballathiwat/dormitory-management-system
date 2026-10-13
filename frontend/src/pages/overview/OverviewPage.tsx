// frontend/src/pages/overview/OverviewPage.tsx

import { BedDouble, AlertCircle, TrendingUp, Wrench, Plus } from 'lucide-react'
import { SummaryCards, PageHeader } from '../../components/shared'
import type { SummaryCardData } from '../../types/models'

const SUMMARY_CARDS: SummaryCardData[] = [
  { label: 'ห้องว่าง', value: '12 ห้อง', icon: BedDouble, color: '#088386', bg: 'rgba(8,131,134,0.12)', sub: 'จาก 48 ห้องทั้งหมด' },
  { label: 'ค้างชำระ', value: '8 รายการ', icon: AlertCircle, color: '#DC4C4C', bg: '#FBEAEA', sub: 'รวม ฿28,400' },
  { label: 'รายรับเดือนนี้', value: '฿186,400', icon: TrendingUp, color: '#088386', bg: 'rgba(8,131,134,0.10)', sub: '+4% จากเดือนก่อน' },
  { label: 'แจ้งซ่อมรอดำเนินการ', value: '5 รายการ', icon: Wrench, color: '#1F2937', bg: 'rgba(254,201,56,0.25)', sub: '2 รายการด่วน' },
]

const TASKS = [
  { text: 'ห้อง 204 ค้างชำระเดือนนี้ ฿3,500 (5 วัน)', tag: 'ด่วน', tagColor: '#B23434', tagBg: '#FBEAEA', action: 'ส่งใบเตือน' },
  { text: 'แจ้งซ่อมก๊อกน้ำรั่ว ห้อง 118 — รอดำเนินการ 2 วัน', tag: 'ซ่อม', tagColor: '#1F2937', tagBg: 'rgba(254,201,56,0.25)', action: 'มอบหมายงาน' },
  { text: 'สัญญาเช่าห้อง 305 จะหมดอายุใน 7 วัน', tag: 'สัญญา', tagColor: '#088386', tagBg: 'rgba(8,131,134,0.10)', action: 'ต่อสัญญา' },
  { text: 'ตรวจห้อง 210 หลังผู้เช่าย้ายออก', tag: 'ตรวจห้อง', tagColor: '#088386', tagBg: 'rgba(8,131,134,0.12)', action: 'กำหนดเวลา' },
]

export default function OverviewPage() {
  return (
    <div style={{ maxWidth: 1240, margin: '0 auto' }}>
      <PageHeader title="ภาพรวม" actionLabel="เพิ่มรายการ" actionIcon={Plus} />
      <SummaryCards cards={SUMMARY_CARDS} />

      {/* Tasks */}
      <div style={{ background: '#fff', border: '1px solid #E1E7E5', borderRadius: 8, padding: 20 }}>
        <h2 style={{ margin: '0 0 14px', fontSize: 16, fontWeight: 600, fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans',sans-serif", color: '#14231F' }}>
          สิ่งที่ต้องทำวันนี้
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {TASKS.map((task, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 14px',
                border: '1px solid #E1E7E5',
                borderRadius: 8,
                gap: 12,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
                <span
                  style={{
                    padding: '2px 8px',
                    borderRadius: 9999,
                    fontSize: 11,
                    fontWeight: 600,
                    fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans',sans-serif",
                    color: task.tagColor,
                    background: task.tagBg,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {task.tag}
                </span>
                <span style={{ fontSize: 14, fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans',sans-serif", color: '#14231F' }}>
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
                  fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans',sans-serif",
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
