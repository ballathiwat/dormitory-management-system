// frontend/src/pages/rooms/RoomsPage.tsx
//
// ตัวอย่าง: ดึงข้อมูลจาก fakeBackend ผ่าน backend_helper
// ไม่มี mock data ใน component อีกต่อไป

import { useState, useEffect } from 'react'
import { BedDouble, CheckCircle, Wrench, Clock } from 'lucide-react'
import { createColumnHelper } from '@tanstack/react-table'
import { PageContainer, ContentCard, PageHeader, SummaryCards, FilterBar, DataTable, StatusBadge } from '../../components/shared'
import { getRooms } from '../../helpers/backend_helper'
import type { Room, SummaryCardData } from '../../types/models'

const columnHelper = createColumnHelper<Room>()

const columns = [
  columnHelper.accessor('number', { header: 'เลขห้อง', cell: (info) => <span style={{ fontWeight: 600 }}>{info.getValue()}</span> }),
  columnHelper.accessor('buildingName', { header: 'อาคาร' }),
  columnHelper.accessor('floor', { header: 'ชั้น' }),
  columnHelper.accessor('type', { header: 'ประเภท', cell: (info) => <StatusBadge status={info.getValue()} /> }),
  columnHelper.accessor('monthlyRate', { header: 'ค่าเช่า/เดือน', cell: (info) => `฿${info.getValue().toLocaleString()}` }),
  columnHelper.accessor('status', { header: 'สถานะ', cell: (info) => <StatusBadge status={info.getValue()} /> }),
  columnHelper.accessor('currentTenantName', { header: 'ผู้เช่าปัจจุบัน', cell: (info) => info.getValue() || '—' }),
]

const SUMMARY: SummaryCardData[] = [
  { label: 'ห้องว่าง', value: '12', icon: BedDouble, color: '#088386', bg: 'rgba(8,131,134,0.10)', sub: 'พร้อมให้เช่า' },
  { label: 'มีผู้เช่า', value: '32', icon: CheckCircle, color: '#088386', bg: 'rgba(8,131,134,0.10)' },
  { label: 'ซ่อมบำรุง', value: '2', icon: Wrench, color: '#D97706', bg: 'rgba(217,119,6,0.10)' },
  { label: 'จอง', value: '2', icon: Clock, color: '#9333EA', bg: 'rgba(147,51,234,0.10)' },
]

export default function RoomsPage() {
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState<Record<string, string>>({})
  const [data, setData] = useState<Room[]>([])
  const [loading, setLoading] = useState(true)

  // ===== ดึงข้อมูลจาก backend (fake หรือ real) =====
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true)
        const response = await getRooms()
        setData(response.data)
      } catch (error) {
        console.error('Failed to fetch rooms:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchRooms()
  }, [])

  if (loading) {
    return (
      <PageContainer>
        <div style={{ textAlign: 'center', padding: 40, color: '#5B6866', fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans',sans-serif" }}>
          กำลังโหลด...
        </div>
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <PageHeader title="ห้องพัก" subtitle="จัดการห้องพักทั้งหมด" actionLabel="เพิ่มห้อง" />
      <SummaryCards cards={SUMMARY} />
      <ContentCard>
        <FilterBar
          searchValue={search}
          onSearchChange={setSearch}
          searchPlaceholder="ค้นหาเลขห้อง, ผู้เช่า..."
          filters={[
            { key: 'building', label: 'อาคารทั้งหมด', options: [{ label: 'อาคาร A', value: '1' }, { label: 'อาคาร B', value: '2' }] },
            { key: 'status', label: 'สถานะทั้งหมด', options: [{ label: 'ว่าง', value: 'available' }, { label: 'มีผู้เช่า', value: 'occupied' }, { label: 'ซ่อมบำรุง', value: 'maintenance' }] },
            { key: 'type', label: 'ประเภททั้งหมด', options: [{ label: 'มาตรฐาน', value: 'standard' }, { label: 'ดีลักซ์', value: 'deluxe' }, { label: 'สวีท', value: 'suite' }] },
          ]}
          filterValues={filters}
          onFilterChange={(k, v) => setFilters((prev) => ({ ...prev, [k]: v }))}
        />
        <DataTable data={data} columns={columns} globalFilter={search} />
      </ContentCard>
    </PageContainer>
  )
}
