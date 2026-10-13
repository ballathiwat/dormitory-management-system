// frontend/src/pages/billing/BillingPage.tsx

import { useState } from 'react'
import { Receipt, CheckCircle, AlertCircle, Clock } from 'lucide-react'
import { createColumnHelper } from '@tanstack/react-table'
import { PageHeader, SummaryCards, FilterBar, DataTable, StatusBadge } from '../../components/shared'
import type { Billing, SummaryCardData } from '../../types/models'

const columnHelper = createColumnHelper<Billing>()

const columns = [
  columnHelper.accessor('invoiceNumber', { header: 'เลขบิล', cell: (info) => <span style={{ fontWeight: 600 }}>{info.getValue()}</span> }),
  columnHelper.accessor('tenantName', { header: 'ผู้เช่า' }),
  columnHelper.accessor('roomNumber', { header: 'ห้อง' }),
  columnHelper.accessor('billingMonth', { header: 'ประจำเดือน' }),
  columnHelper.accessor('roomCharge', { header: 'ค่าห้อง', cell: (info) => `฿${info.getValue().toLocaleString()}` }),
  columnHelper.accessor('waterCharge', { header: 'ค่าน้ำ', cell: (info) => `฿${info.getValue().toLocaleString()}` }),
  columnHelper.accessor('electricCharge', { header: 'ค่าไฟ', cell: (info) => `฿${info.getValue().toLocaleString()}` }),
  columnHelper.accessor('totalAmount', {
    header: 'รวม',
    cell: (info) => <span style={{ fontWeight: 600, color: '#14231F' }}>฿{info.getValue().toLocaleString()}</span>,
  }),
  columnHelper.accessor('status', { header: 'สถานะ', cell: (info) => <StatusBadge status={info.getValue()} /> }),
]

const MOCK_DATA: Billing[] = [
  { id: '1', invoiceNumber: 'INV-2026-09-001', tenantName: 'สมชาย ใจดี', roomNumber: '101', buildingName: 'อาคาร A', billingMonth: 'ก.ย. 2569', roomCharge: 3500, waterCharge: 180, electricCharge: 620, otherCharges: 0, totalAmount: 4300, paidAmount: 4300, status: 'paid', dueDate: '2026-09-05', paidDate: '2026-09-03', paymentMethod: 'transfer' },
  { id: '2', invoiceNumber: 'INV-2026-09-002', tenantName: 'วิภา สุขสันต์', roomNumber: '201', buildingName: 'อาคาร A', billingMonth: 'ก.ย. 2569', roomCharge: 5000, waterCharge: 220, electricCharge: 850, otherCharges: 0, totalAmount: 6070, paidAmount: 6070, status: 'paid', dueDate: '2026-09-05', paidDate: '2026-09-04', paymentMethod: 'promptpay' },
  { id: '3', invoiceNumber: 'INV-2026-09-003', tenantName: 'ประภาส ศรีทอง', roomNumber: '301', buildingName: 'อาคาร A', billingMonth: 'ก.ย. 2569', roomCharge: 7500, waterCharge: 310, electricCharge: 1200, otherCharges: 100, totalAmount: 9110, paidAmount: 0, status: 'overdue', dueDate: '2026-09-05' },
  { id: '4', invoiceNumber: 'INV-2026-09-004', tenantName: 'กานดา พลอยงาม', roomNumber: '203', buildingName: 'อาคาร B', billingMonth: 'ก.ย. 2569', roomCharge: 4800, waterCharge: 190, electricCharge: 720, otherCharges: 0, totalAmount: 5710, paidAmount: 3000, status: 'partial', dueDate: '2026-09-05' },
  { id: '5', invoiceNumber: 'INV-2026-09-005', tenantName: 'นภา แก้วใส', roomNumber: '204', buildingName: 'อาคาร A', billingMonth: 'ก.ย. 2569', roomCharge: 3500, waterCharge: 150, electricCharge: 480, otherCharges: 0, totalAmount: 4130, paidAmount: 0, status: 'pending', dueDate: '2026-09-10' },
  { id: '6', invoiceNumber: 'INV-2026-09-006', tenantName: 'ธนกร สว่างจิต', roomNumber: '302', buildingName: 'อาคาร B', billingMonth: 'ก.ย. 2569', roomCharge: 4200, waterCharge: 200, electricCharge: 680, otherCharges: 50, totalAmount: 5130, paidAmount: 0, status: 'overdue', dueDate: '2026-09-05' },
]

const SUMMARY: SummaryCardData[] = [
  { label: 'รายรับเดือนนี้', value: '฿186,400', icon: Receipt, color: '#088386', bg: 'rgba(8,131,134,0.10)', sub: '+4% จากเดือนก่อน' },
  { label: 'ชำระแล้ว', value: '28 รายการ', icon: CheckCircle, color: '#088386', bg: 'rgba(8,131,134,0.10)' },
  { label: 'ค้างชำระ', value: '8 รายการ', icon: AlertCircle, color: '#DC4C4C', bg: '#FBEAEA', sub: 'รวม ฿28,400' },
  { label: 'รอชำระ', value: '4 รายการ', icon: Clock, color: '#D97706', bg: 'rgba(217,119,6,0.10)' },
]

export default function BillingPage() {
  const [search, setSearch] = useState('')

  return (
    <div style={{ maxWidth: 1240, margin: '0 auto' }}>
      <PageHeader title="บิล/ชำระเงิน" subtitle="จัดการบิลและการชำระเงิน" actionLabel="สร้างบิล" />
      <SummaryCards cards={SUMMARY} />
      <div style={{ background: '#fff', border: '1px solid #E1E7E5', borderRadius: 8, padding: 20 }}>
        <FilterBar
          searchValue={search}
          onSearchChange={setSearch}
          searchPlaceholder="ค้นหาเลขบิล, ชื่อผู้เช่า..."
          filters={[
            { key: 'status', label: 'สถานะทั้งหมด', options: [{ label: 'ชำระแล้ว', value: 'paid' }, { label: 'ค้างชำระ', value: 'overdue' }, { label: 'รอชำระ', value: 'pending' }, { label: 'ชำระบางส่วน', value: 'partial' }] },
            { key: 'building', label: 'อาคารทั้งหมด', options: [{ label: 'อาคาร A', value: '1' }, { label: 'อาคาร B', value: '2' }] },
          ]}
        />
        <DataTable data={MOCK_DATA} columns={columns} globalFilter={search} />
      </div>
    </div>
  )
}
