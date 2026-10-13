// frontend/src/pages/tenantships/TenantshipsPage.tsx

import { useState } from 'react'
import { FileText, CheckCircle, AlertTriangle, XCircle } from 'lucide-react'
import { createColumnHelper } from '@tanstack/react-table'
import { PageHeader, SummaryCards, FilterBar, DataTable, StatusBadge } from '../../components/shared'
import type { Tenantship, SummaryCardData } from '../../types/models'

const columnHelper = createColumnHelper<Tenantship>()

const columns = [
  columnHelper.accessor('id', { header: 'เลขสัญญา', cell: (info) => <span style={{ fontWeight: 600 }}>CT-{info.getValue().padStart(4, '0')}</span> }),
  columnHelper.accessor('tenantName', { header: 'ผู้เช่า' }),
  columnHelper.accessor('roomNumber', { header: 'ห้อง' }),
  columnHelper.accessor('buildingName', { header: 'อาคาร' }),
  columnHelper.accessor('startDate', { header: 'เริ่มสัญญา' }),
  columnHelper.accessor('endDate', { header: 'สิ้นสุดสัญญา' }),
  columnHelper.accessor('monthlyRate', { header: 'ค่าเช่า/เดือน', cell: (info) => `฿${info.getValue().toLocaleString()}` }),
  columnHelper.accessor('deposit', { header: 'เงินประกัน', cell: (info) => `฿${info.getValue().toLocaleString()}` }),
  columnHelper.accessor('status', { header: 'สถานะ', cell: (info) => <StatusBadge status={info.getValue()} /> }),
]

const MOCK_DATA: Tenantship[] = [
  { id: '1', tenantName: 'สมชาย ใจดี', roomNumber: '101', buildingName: 'อาคาร A', startDate: '2024-06-01', endDate: '2025-05-31', monthlyRate: 3500, deposit: 7000, status: 'active' },
  { id: '2', tenantName: 'วิภา สุขสันต์', roomNumber: '201', buildingName: 'อาคาร A', startDate: '2024-08-15', endDate: '2025-08-14', monthlyRate: 5000, deposit: 10000, status: 'active' },
  { id: '3', tenantName: 'ประภาส ศรีทอง', roomNumber: '301', buildingName: 'อาคาร A', startDate: '2025-01-10', endDate: '2026-01-09', monthlyRate: 7500, deposit: 15000, status: 'active' },
  { id: '4', tenantName: 'กานดา พลอยงาม', roomNumber: '203', buildingName: 'อาคาร B', startDate: '2025-03-01', endDate: '2025-09-30', monthlyRate: 4800, deposit: 9600, status: 'active' },
  { id: '5', tenantName: 'อนันต์ วงศ์สุวรรณ', roomNumber: '105', buildingName: 'อาคาร A', startDate: '2023-12-01', endDate: '2024-11-30', monthlyRate: 3500, deposit: 7000, status: 'expired' },
  { id: '6', tenantName: 'สมศรี มั่นคง', roomNumber: '302', buildingName: 'อาคาร B', startDate: '2024-02-01', endDate: '2024-07-31', monthlyRate: 4200, deposit: 8400, status: 'terminated' },
]

const SUMMARY: SummaryCardData[] = [
  { label: 'สัญญาทั้งหมด', value: '36', icon: FileText, color: '#088386', bg: 'rgba(8,131,134,0.10)' },
  { label: 'ใช้งาน', value: '32', icon: CheckCircle, color: '#088386', bg: 'rgba(8,131,134,0.10)' },
  { label: 'ใกล้หมดอายุ (30 วัน)', value: '3', icon: AlertTriangle, color: '#D97706', bg: 'rgba(217,119,6,0.10)' },
  { label: 'หมดอายุ/ยกเลิก', value: '4', icon: XCircle, color: '#DC4C4C', bg: '#FBEAEA' },
]

export default function TenantshipsPage() {
  const [search, setSearch] = useState('')

  return (
    <div style={{ maxWidth: 1240, margin: '0 auto' }}>
      <PageHeader title="สัญญาเช่า" subtitle="จัดการสัญญาเช่าทั้งหมด" actionLabel="สร้างสัญญา" />
      <SummaryCards cards={SUMMARY} />
      <div style={{ background: '#fff', border: '1px solid #E1E7E5', borderRadius: 8, padding: 20 }}>
        <FilterBar
          searchValue={search}
          onSearchChange={setSearch}
          searchPlaceholder="ค้นหาชื่อผู้เช่า, เลขห้อง..."
          filters={[
            { key: 'status', label: 'สถานะทั้งหมด', options: [{ label: 'ใช้งาน', value: 'active' }, { label: 'หมดอายุ', value: 'expired' }, { label: 'ยกเลิก', value: 'terminated' }] },
          ]}
        />
        <DataTable data={MOCK_DATA} columns={columns} globalFilter={search} />
      </div>
    </div>
  )
}
