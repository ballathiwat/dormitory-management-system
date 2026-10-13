// frontend/src/pages/buildings/BuildingsPage.tsx

import { useState } from 'react'
import { Building2, BedDouble, Users } from 'lucide-react'
import { createColumnHelper } from '@tanstack/react-table'
import { PageHeader, SummaryCards, FilterBar, DataTable, StatusBadge } from '../../components/shared'
import type { Building, SummaryCardData } from '../../types/models'

const columnHelper = createColumnHelper<Building>()

const columns = [
  columnHelper.accessor('name', { header: 'ชื่ออาคาร', cell: (info) => <span style={{ fontWeight: 600 }}>{info.getValue()}</span> }),
  columnHelper.accessor('floors', { header: 'จำนวนชั้น' }),
  columnHelper.accessor('totalRooms', { header: 'ห้องทั้งหมด' }),
  columnHelper.accessor('occupiedRooms', {
    header: 'ห้องที่มีผู้เช่า',
    cell: (info) => {
      const total = info.row.original.totalRooms
      const occ = info.getValue()
      return `${occ}/${total} (${Math.round((occ / total) * 100)}%)`
    },
  }),
  columnHelper.accessor('address', { header: 'ที่อยู่' }),
  columnHelper.accessor('status', {
    header: 'สถานะ',
    cell: (info) => <StatusBadge status={info.getValue()} />,
  }),
]

const MOCK_DATA: Building[] = [
  { id: '1', name: 'อาคาร A', floors: 4, totalRooms: 24, occupiedRooms: 20, address: 'ถ.มิตรภาพ ซ.12', status: 'active', createdAt: '2024-01-15' },
  { id: '2', name: 'อาคาร B', floors: 3, totalRooms: 18, occupiedRooms: 16, address: 'ถ.มิตรภาพ ซ.12', status: 'active', createdAt: '2024-03-01' },
  { id: '3', name: 'อาคาร C', floors: 2, totalRooms: 6, occupiedRooms: 0, address: 'ถ.กลางเมือง ซ.5', status: 'maintenance', createdAt: '2025-06-10' },
]

const SUMMARY: SummaryCardData[] = [
  { label: 'อาคารทั้งหมด', value: '3', icon: Building2, color: '#088386', bg: 'rgba(8,131,134,0.10)' },
  { label: 'ห้องทั้งหมด', value: '48', icon: BedDouble, color: '#088386', bg: 'rgba(8,131,134,0.10)', sub: '36 ห้องมีผู้เช่า' },
  { label: 'อัตราเข้าพัก', value: '75%', icon: Users, color: '#088386', bg: 'rgba(8,131,134,0.10)', sub: '+5% จากเดือนก่อน' },
]

export default function BuildingsPage() {
  const [search, setSearch] = useState('')

  return (
    <div style={{ maxWidth: 1240, margin: '0 auto' }}>
      <PageHeader title="อาคาร" subtitle="จัดการอาคารทั้งหมด" actionLabel="เพิ่มอาคาร" />
      <SummaryCards cards={SUMMARY} />
      <div style={{ background: '#fff', border: '1px solid #E1E7E5', borderRadius: 8, padding: 20 }}>
        <FilterBar
          searchValue={search}
          onSearchChange={setSearch}
          searchPlaceholder="ค้นหาอาคาร..."
          filters={[
            { key: 'status', label: 'สถานะทั้งหมด', options: [{ label: 'ใช้งาน', value: 'active' }, { label: 'ซ่อมบำรุง', value: 'maintenance' }] },
          ]}
        />
        <DataTable data={MOCK_DATA} columns={columns} globalFilter={search} />
      </div>
    </div>
  )
}
