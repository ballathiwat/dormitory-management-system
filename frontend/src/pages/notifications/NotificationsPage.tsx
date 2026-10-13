// frontend/src/pages/notifications/NotificationsPage.tsx

import { useState } from 'react'
import { Bell, Mail, MailOpen } from 'lucide-react'
import { PageHeader, SummaryCards, FilterBar, StatusBadge } from '../../components/shared'
import type { Notification, SummaryCardData } from '../../types/models'

const MOCK_DATA: Notification[] = [
  { id: '1', type: 'billing', title: 'แจ้งเตือนค้างชำระ', message: 'ห้อง 301 ค้างชำระค่าเช่าเดือน ก.ย. 2569 จำนวน ฿9,110', recipientName: 'ประภาส ศรีทอง', isRead: false, createdAt: '2026-09-25 10:30' },
  { id: '2', type: 'maintenance', title: 'แจ้งซ่อมใหม่', message: 'ห้อง 118 แจ้งก๊อกน้ำรั่ว — ความเร่งด่วนสูง', recipientName: 'ผู้จัดการ', isRead: false, createdAt: '2026-09-24 14:15' },
  { id: '3', type: 'contract', title: 'สัญญาใกล้หมดอายุ', message: 'สัญญาเช่าห้อง 203 จะหมดอายุในอีก 5 วัน (30 ก.ย. 2569)', recipientName: 'กานดา พลอยงาม', isRead: false, createdAt: '2026-09-24 09:00' },
  { id: '4', type: 'billing', title: 'รับชำระเงินแล้ว', message: 'ห้อง 101 ชำระค่าเช่าเดือน ก.ย. 2569 จำนวน ฿4,300 ผ่านโอนเงิน', recipientName: 'สมชาย ใจดี', isRead: true, createdAt: '2026-09-23 16:45' },
  { id: '5', type: 'system', title: 'สำรองข้อมูลสำเร็จ', message: 'ระบบสำรองข้อมูลประจำวันเสร็จสิ้นเวลา 03:00', recipientName: 'ระบบ', isRead: true, createdAt: '2026-09-23 03:00' },
  { id: '6', type: 'maintenance', title: 'ซ่อมเสร็จสิ้น', message: 'ห้อง 105 ซ่อมกลอนประตูเรียบร้อย โดยช่างวิชัย', recipientName: 'สมศรี มั่นคง', isRead: true, createdAt: '2026-09-21 11:20' },
]

const SUMMARY: SummaryCardData[] = [
  { label: 'ทั้งหมด', value: '24', icon: Bell, color: '#088386', bg: 'rgba(8,131,134,0.10)' },
  { label: 'ยังไม่อ่าน', value: '3', icon: Mail, color: '#DC4C4C', bg: '#FBEAEA' },
  { label: 'อ่านแล้ว', value: '21', icon: MailOpen, color: '#5B6866', bg: '#E1E7E5' },
]

export default function NotificationsPage() {
  const [search, setSearch] = useState('')

  return (
    <div style={{ maxWidth: 1240, margin: '0 auto' }}>
      <PageHeader title="แจ้งเตือน" subtitle="การแจ้งเตือนทั้งหมด" />
      <SummaryCards cards={SUMMARY} />

      <div style={{ background: '#fff', border: '1px solid #E1E7E5', borderRadius: 8, padding: 20 }}>
        <FilterBar
          searchValue={search}
          onSearchChange={setSearch}
          searchPlaceholder="ค้นหาแจ้งเตือน..."
          filters={[
            { key: 'type', label: 'ประเภททั้งหมด', options: [{ label: 'บิล', value: 'billing' }, { label: 'แจ้งซ่อม', value: 'maintenance' }, { label: 'สัญญา', value: 'contract' }, { label: 'ระบบ', value: 'system' }] },
            { key: 'read', label: 'สถานะ', options: [{ label: 'ยังไม่อ่าน', value: 'unread' }, { label: 'อ่านแล้ว', value: 'read' }] },
          ]}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {MOCK_DATA.map((notif) => (
            <div
              key={notif.id}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 12,
                padding: '12px 14px',
                border: '1px solid #E1E7E5',
                borderRadius: 8,
                background: notif.isRead ? '#fff' : '#F6F8F7',
                cursor: 'pointer',
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: notif.isRead ? 'transparent' : '#088386',
                  flexShrink: 0,
                  marginTop: 6,
                }}
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <StatusBadge status={notif.type} />
                  <span style={{ fontSize: 14, fontWeight: 600, fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans',sans-serif", color: '#14231F' }}>
                    {notif.title}
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: 13, fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans',sans-serif", color: '#5B6866' }}>
                  {notif.message}
                </p>
              </div>
              <span style={{ fontSize: 11, fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans',sans-serif", color: '#A9B2B0', whiteSpace: 'nowrap', flexShrink: 0 }}>
                {notif.createdAt}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
