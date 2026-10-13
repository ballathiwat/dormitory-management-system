// frontend/src/pages/tenants/TenantsPage.tsx

import { useState } from 'react'
import { Users, UserCheck, UserX, Clock } from 'lucide-react'
import { createColumnHelper } from '@tanstack/react-table'
import { PageHeader, SummaryCards, FilterBar, DataTable, StatusBadge } from '../../components/shared'
import type { Tenant, SummaryCardData } from '../../types/models'

const columnHelper = createColumnHelper<Tenant>()

const columns = [
  columnHelper.accessor((row) => `${row.firstName} ${row.lastName}`, {
    id: 'fullName',
    header: 'ชื่อ-นามสกุล',
    cell: (info) => <span style={{ fontWeight: 600 }}>{info.getValue()}</span>,
  }),
  columnHelper.accessor('phone', { header: 'เบอร์โทร' }),
  columnHelper.accessor('idCard', { header: 'เลขบัตรประชาชน', cell: (info) => `${info.getValue().slice(0, 4)}•••••${info.getValue().slice(-4)}` }),
  columnHelper.accessor('roomNumber', { header: 'ห้อง', cell: (info) => info.getValue() || '—' }),
  columnHelper.accessor('buildingName', { header: 'อาคาร', cell: (info) => info.getValue() || '—' }),
  columnHelper.accessor('moveInDate', { header: 'วันเข้าพัก', cell: (info) => info.getValue() || '—' }),
  columnHelper.accessor('status', { header: 'สถานะ', cell: (info) => <StatusBadge status={info.getValue()} /> }),
]

const MOCK_DATA: Tenant[] = [
  { id: '1', firstName: 'สมชาย', lastName: 'ใจดี', phone: '081-234-5678', email: 'somchai@mail.com', idCard: '1234567890123', status: 'active', roomNumber: '101', buildingName: 'อาคาร A', moveInDate: '2024-06-01' },
  { id: '2', firstName: 'วิภา', lastName: 'สุขสันต์', phone: '089-876-5432', email: 'wipa@mail.com', idCard: '9876543210987', status: 'active', roomNumber: '201', buildingName: 'อาคาร A', moveInDate: '2024-08-15' },
  { id: '3', firstName: 'ประภาส', lastName: 'ศรีทอง', phone: '062-111-2233', email: '', idCard: '1122334455667', status: 'active', roomNumber: '301', buildingName: 'อาคาร A', moveInDate: '2025-01-10' },
  { id: '4', firstName: 'กานดา', lastName: 'พลอยงาม', phone: '095-444-5566', email: 'kanda@mail.com', idCard: '5566778899001', status: 'active', roomNumber: '203', buildingName: 'อาคาร B', moveInDate: '2025-03-01' },
  { id: '5', firstName: 'อนันต์', lastName: 'วงศ์สุวรรณ', phone: '088-999-0011', email: '', idCard: '1100223344556', status: 'inactive', roomNumber: undefined, buildingName: undefined, moveInDate: '2023-12-01' },
  { id: '6', firstName: 'พิมพ์ใจ', lastName: 'รักสวย', phone: '063-222-3344', email: 'pimjai@mail.com', idCard: '3344556677889', status: 'pending', roomNumber: undefined, buildingName: undefined },
]

const SUMMARY: SummaryCardData[] = [
  { label: 'ผู้เช่าทั้งหมด', value: '36', icon: Users, color: '#088386', bg: 'rgba(8,131,134,0.10)' },
  { label: 'กำลังเช่า', value: '32', icon: UserCheck, color: '#088386', bg: 'rgba(8,131,134,0.10)' },
  { label: 'ย้ายออกแล้ว', value: '3', icon: UserX, color: '#5B6866', bg: '#E1E7E5' },
  { label: 'รอเข้าพัก', value: '1', icon: Clock, color: '#D97706', bg: 'rgba(217,119,6,0.10)' },
]

export default function TenantsPage() {
  const [search, setSearch] = useState('')

  return (
    <div style={{ maxWidth: 1240, margin: '0 auto' }}>
      <PageHeader title="ผู้เช่า" subtitle="จัดการข้อมูลผู้เช่าทั้งหมด" actionLabel="เพิ่มผู้เช่า" />
      <SummaryCards cards={SUMMARY} />
      <div style={{ background: '#fff', border: '1px solid #E1E7E5', borderRadius: 8, padding: 20 }}>
        <FilterBar
          searchValue={search}
          onSearchChange={setSearch}
          searchPlaceholder="ค้นหาชื่อ, เบอร์โทร, เลขห้อง..."
          filters={[
            { key: 'status', label: 'สถานะทั้งหมด', options: [{ label: 'กำลังเช่า', value: 'active' }, { label: 'ย้ายออก', value: 'inactive' }, { label: 'รอเข้าพัก', value: 'pending' }] },
            { key: 'building', label: 'อาคารทั้งหมด', options: [{ label: 'อาคาร A', value: '1' }, { label: 'อาคาร B', value: '2' }] },
          ]}
        />
        <DataTable data={MOCK_DATA} columns={columns} globalFilter={search} />
      </div>
    </div>
  )
}
