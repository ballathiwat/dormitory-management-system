// frontend/src/pages/inspections/InspectionsPage.tsx

import { useState } from 'react'
import { ClipboardCheck, Calendar, CheckCircle, AlertTriangle } from 'lucide-react'
import { createColumnHelper } from '@tanstack/react-table'
import { PageHeader, SummaryCards, FilterBar, DataTable, StatusBadge } from '../../components/shared'
import type { Inspection, SummaryCardData } from '../../types/models'

const columnHelper = createColumnHelper<Inspection>()

const columns = [
  columnHelper.accessor('id', { header: 'รหัส', cell: (info) => <span style={{ fontWeight: 600 }}>INS-{info.getValue().padStart(3, '0')}</span> }),
  columnHelper.accessor('roomNumber', { header: 'ห้อง' }),
  columnHelper.accessor('buildingName', { header: 'อาคาร' }),
  columnHelper.accessor('type', { header: 'ประเภท', cell: (info) => <StatusBadge status={info.getValue()} /> }),
  columnHelper.accessor('inspectorName', { header: 'ผู้ตรวจ' }),
  columnHelper.accessor('scheduledDate', { header: 'วันนัดตรวจ' }),
  columnHelper.accessor('damageFound', { header: 'พบความเสียหาย', cell: (info) => info.getValue() ? <StatusBadge status="damage" customLabel="พบ" /> : <span style={{ color: '#5B6866', fontSize: 13 }}>ไม่พบ</span> }),
  columnHelper.accessor('status', { header: 'สถานะ', cell: (info) => <StatusBadge status={info.getValue()} /> }),
]

const MOCK_DATA: Inspection[] = [
  { id: '1', roomNumber: '210', buildingName: 'อาคาร A', type: 'check_out', status: 'scheduled', inspectorName: 'คุณวิชัย', scheduledDate: '2026-09-26', damageFound: false },
  { id: '2', roomNumber: '105', buildingName: 'อาคาร A', type: 'check_in', status: 'completed', inspectorName: 'คุณวิชัย', scheduledDate: '2026-09-20', completedDate: '2026-09-20', damageFound: false },
  { id: '3', roomNumber: '302', buildingName: 'อาคาร B', type: 'check_out', status: 'completed', inspectorName: 'คุณสมบัติ', scheduledDate: '2026-09-18', completedDate: '2026-09-18', damageFound: true, notes: 'พบรอยแตกกระเบื้องห้องน้ำ' },
  { id: '4', roomNumber: '201', buildingName: 'อาคาร A', type: 'routine', status: 'scheduled', inspectorName: 'คุณวิชัย', scheduledDate: '2026-09-28', damageFound: false },
  { id: '5', roomNumber: '104', buildingName: 'อาคาร B', type: 'check_in', status: 'scheduled', inspectorName: 'คุณสมบัติ', scheduledDate: '2026-09-27', damageFound: false },
]

const SUMMARY: SummaryCardData[] = [
  { label: 'ตรวจเดือนนี้', value: '8', icon: ClipboardCheck, color: '#088386', bg: 'rgba(8,131,134,0.10)' },
  { label: 'รอตรวจ', value: '3', icon: Calendar, color: '#D97706', bg: 'rgba(217,119,6,0.10)' },
  { label: 'ตรวจแล้ว', value: '5', icon: CheckCircle, color: '#088386', bg: 'rgba(8,131,134,0.10)' },
  { label: 'พบความเสียหาย', value: '1', icon: AlertTriangle, color: '#DC4C4C', bg: '#FBEAEA' },
]

export default function InspectionsPage() {
  const [search, setSearch] = useState('')

  return (
    <div style={{ maxWidth: 1240, margin: '0 auto' }}>
      <PageHeader title="ตรวจห้อง" subtitle="จัดการการตรวจห้องพัก" actionLabel="นัดตรวจห้อง" />
      <SummaryCards cards={SUMMARY} />
      <div style={{ background: '#fff', border: '1px solid #E1E7E5', borderRadius: 8, padding: 20 }}>
        <FilterBar
          searchValue={search}
          onSearchChange={setSearch}
          searchPlaceholder="ค้นหาเลขห้อง, ผู้ตรวจ..."
          filters={[
            { key: 'type', label: 'ประเภททั้งหมด', options: [{ label: 'เข้าพัก', value: 'check_in' }, { label: 'ย้ายออก', value: 'check_out' }, { label: 'ตามรอบ', value: 'routine' }] },
            { key: 'status', label: 'สถานะทั้งหมด', options: [{ label: 'นัดหมาย', value: 'scheduled' }, { label: 'เสร็จสิ้น', value: 'completed' }] },
          ]}
        />
        <DataTable data={MOCK_DATA} columns={columns} globalFilter={search} />
      </div>
    </div>
  )
}
