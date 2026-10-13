// frontend/src/pages/maintenance/MaintenancePage.tsx

import { useState } from 'react'
import { Wrench, AlertCircle, Clock, CheckCircle } from 'lucide-react'
import { createColumnHelper } from '@tanstack/react-table'
import { PageHeader, SummaryCards, FilterBar, DataTable, StatusBadge } from '../../components/shared'
import type { Maintenance, SummaryCardData } from '../../types/models'

const columnHelper = createColumnHelper<Maintenance>()

const columns = [
  columnHelper.accessor('ticketNumber', { header: 'เลขที่', cell: (info) => <span style={{ fontWeight: 600 }}>{info.getValue()}</span> }),
  columnHelper.accessor('roomNumber', { header: 'ห้อง' }),
  columnHelper.accessor('buildingName', { header: 'อาคาร' }),
  columnHelper.accessor('tenantName', { header: 'ผู้แจ้ง' }),
  columnHelper.accessor('category', { header: 'หมวด' }),
  columnHelper.accessor('description', { header: 'รายละเอียด', cell: (info) => {
    const text = info.getValue()
    return text.length > 40 ? text.slice(0, 40) + '…' : text
  }}),
  columnHelper.accessor('priority', { header: 'ความเร่งด่วน', cell: (info) => <StatusBadge status={info.getValue()} /> }),
  columnHelper.accessor('status', { header: 'สถานะ', cell: (info) => <StatusBadge status={info.getValue()} /> }),
  columnHelper.accessor('assignedTo', { header: 'ผู้รับผิดชอบ', cell: (info) => info.getValue() || '—' }),
  columnHelper.accessor('createdAt', { header: 'วันที่แจ้ง' }),
]

const MOCK_DATA: Maintenance[] = [
  { id: '1', ticketNumber: 'MN-001', roomNumber: '118', buildingName: 'อาคาร A', tenantName: 'สมพร ดีใจ', category: 'ประปา', description: 'ก๊อกน้ำรั่วในห้องน้ำ ใช้ถังรองอยู่', priority: 'high', status: 'open', createdAt: '2026-09-23' },
  { id: '2', ticketNumber: 'MN-002', roomNumber: '204', buildingName: 'อาคาร A', tenantName: 'นภา แก้วใส', category: 'ไฟฟ้า', description: 'หลอดไฟห้องนอนเสีย 2 ดวง', priority: 'medium', status: 'in_progress', assignedTo: 'ช่างสมบัติ', createdAt: '2026-09-22' },
  { id: '3', ticketNumber: 'MN-003', roomNumber: '301', buildingName: 'อาคาร A', tenantName: 'ประภาส ศรีทอง', category: 'แอร์', description: 'แอร์ไม่เย็น มีเสียงดังผิดปกติ', priority: 'urgent', status: 'open', createdAt: '2026-09-24' },
  { id: '4', ticketNumber: 'MN-004', roomNumber: '105', buildingName: 'อาคาร B', tenantName: 'สมศรี มั่นคง', category: 'ประตู/หน้าต่าง', description: 'กลอนประตูห้องน้ำหลวม', priority: 'low', status: 'completed', assignedTo: 'ช่างวิชัย', createdAt: '2026-09-20', completedAt: '2026-09-21' },
  { id: '5', ticketNumber: 'MN-005', roomNumber: '203', buildingName: 'อาคาร B', tenantName: 'กานดา พลอยงาม', category: 'ประปา', description: 'น้ำไหลอ่อนมากตอนเย็น', priority: 'medium', status: 'open', createdAt: '2026-09-24' },
]

const SUMMARY: SummaryCardData[] = [
  { label: 'ทั้งหมดเดือนนี้', value: '12', icon: Wrench, color: '#088386', bg: 'rgba(8,131,134,0.10)' },
  { label: 'รอดำเนินการ', value: '5', icon: AlertCircle, color: '#DC4C4C', bg: '#FBEAEA', sub: '2 รายการด่วน' },
  { label: 'กำลังดำเนินการ', value: '3', icon: Clock, color: '#D97706', bg: 'rgba(217,119,6,0.10)' },
  { label: 'เสร็จสิ้น', value: '4', icon: CheckCircle, color: '#088386', bg: 'rgba(8,131,134,0.10)' },
]

export default function MaintenancePage() {
  const [search, setSearch] = useState('')

  return (
    <div style={{ maxWidth: 1240, margin: '0 auto' }}>
      <PageHeader title="แจ้งซ่อม" subtitle="จัดการใบแจ้งซ่อมทั้งหมด" actionLabel="แจ้งซ่อมใหม่" />
      <SummaryCards cards={SUMMARY} />
      <div style={{ background: '#fff', border: '1px solid #E1E7E5', borderRadius: 8, padding: 20 }}>
        <FilterBar
          searchValue={search}
          onSearchChange={setSearch}
          searchPlaceholder="ค้นหาเลขที่, ห้อง, ผู้แจ้ง..."
          filters={[
            { key: 'status', label: 'สถานะทั้งหมด', options: [{ label: 'เปิด', value: 'open' }, { label: 'กำลังดำเนินการ', value: 'in_progress' }, { label: 'เสร็จสิ้น', value: 'completed' }] },
            { key: 'priority', label: 'ความเร่งด่วน', options: [{ label: 'ด่วน', value: 'urgent' }, { label: 'สูง', value: 'high' }, { label: 'ปานกลาง', value: 'medium' }, { label: 'ต่ำ', value: 'low' }] },
          ]}
        />
        <DataTable data={MOCK_DATA} columns={columns} globalFilter={search} />
      </div>
    </div>
  )
}
