// frontend/src/pages/reports/ReportsPage.tsx

import { BarChart3, TrendingUp, Receipt, Users } from 'lucide-react'
import { PageHeader, SummaryCards } from '../../components/shared'
import type { SummaryCardData } from '../../types/models'

const SUMMARY: SummaryCardData[] = [
  { label: 'รายรับเดือนนี้', value: '฿186,400', icon: TrendingUp, color: '#088386', bg: 'rgba(8,131,134,0.10)', sub: '+4% จากเดือนก่อน' },
  { label: 'ค้างชำระรวม', value: '฿28,400', icon: Receipt, color: '#DC4C4C', bg: '#FBEAEA', sub: '8 รายการ' },
  { label: 'อัตราเข้าพัก', value: '75%', icon: Users, color: '#088386', bg: 'rgba(8,131,134,0.10)', sub: '36/48 ห้อง' },
  { label: 'ค่าใช้จ่ายซ่อม', value: '฿12,300', icon: BarChart3, color: '#D97706', bg: 'rgba(217,119,6,0.10)', sub: 'เดือนนี้' },
]

const MONTHLY_DATA = [
  { month: 'เม.ย.', income: 172000, expense: 8500 },
  { month: 'พ.ค.', income: 175200, expense: 11200 },
  { month: 'มิ.ย.', income: 178800, expense: 9800 },
  { month: 'ก.ค.', income: 179400, expense: 15600 },
  { month: 'ส.ค.', income: 182100, expense: 10300 },
  { month: 'ก.ย.', income: 186400, expense: 12300 },
]

export default function ReportsPage() {
  return (
    <div style={{ maxWidth: 1240, margin: '0 auto' }}>
      <PageHeader title="รายงาน" subtitle="สรุปข้อมูลและรายงานประจำเดือน" />
      <SummaryCards cards={SUMMARY} />

      {/* Revenue chart placeholder */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div style={{ background: '#fff', border: '1px solid #E1E7E5', borderRadius: 8, padding: 20 }}>
          <h3 style={{ margin: '0 0 16px', fontSize: 16, fontWeight: 600, fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans',sans-serif", color: '#14231F' }}>
            รายรับรายเดือน
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {MONTHLY_DATA.map((m) => (
              <div key={m.month} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 40, fontSize: 12, fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans',sans-serif", color: '#5B6866' }}>{m.month}</span>
                <div style={{ flex: 1, height: 20, background: '#F6F8F7', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${(m.income / 200000) * 100}%`, background: '#088386', borderRadius: 4 }} />
                </div>
                <span style={{ width: 80, textAlign: 'right', fontSize: 13, fontWeight: 600, fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans',sans-serif", color: '#14231F' }}>
                  ฿{(m.income / 1000).toFixed(0)}k
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid #E1E7E5', borderRadius: 8, padding: 20 }}>
          <h3 style={{ margin: '0 0 16px', fontSize: 16, fontWeight: 600, fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans',sans-serif", color: '#14231F' }}>
            ค่าใช้จ่ายซ่อมบำรุง
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {MONTHLY_DATA.map((m) => (
              <div key={m.month} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 40, fontSize: 12, fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans',sans-serif", color: '#5B6866' }}>{m.month}</span>
                <div style={{ flex: 1, height: 20, background: '#F6F8F7', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${(m.expense / 20000) * 100}%`, background: '#D97706', borderRadius: 4 }} />
                </div>
                <span style={{ width: 80, textAlign: 'right', fontSize: 13, fontWeight: 600, fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans',sans-serif", color: '#14231F' }}>
                  ฿{(m.expense / 1000).toFixed(1)}k
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
