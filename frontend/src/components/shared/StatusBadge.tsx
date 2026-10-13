// frontend/src/components/shared/StatusBadge.tsx

const STATUS_STYLES: Record<string, { color: string; bg: string; label: string }> = {
  // Room
  available: { color: '#088386', bg: 'rgba(8,131,134,0.10)', label: 'ว่าง' },
  occupied: { color: '#1F2937', bg: '#E1E7E5', label: 'มีผู้เช่า' },
  reserved: { color: '#9333EA', bg: 'rgba(147,51,234,0.10)', label: 'จอง' },
  // Common
  active: { color: '#088386', bg: 'rgba(8,131,134,0.10)', label: 'ใช้งาน' },
  inactive: { color: '#5B6866', bg: '#E1E7E5', label: 'ไม่ใช้งาน' },
  maintenance: { color: '#D97706', bg: 'rgba(217,119,6,0.10)', label: 'ซ่อมบำรุง' },
  pending: { color: '#D97706', bg: 'rgba(217,119,6,0.10)', label: 'รอดำเนินการ' },
  // Billing
  paid: { color: '#088386', bg: 'rgba(8,131,134,0.10)', label: 'ชำระแล้ว' },
  overdue: { color: '#DC4C4C', bg: '#FBEAEA', label: 'ค้างชำระ' },
  partial: { color: '#D97706', bg: 'rgba(217,119,6,0.10)', label: 'ชำระบางส่วน' },
  // Contract
  expired: { color: '#DC4C4C', bg: '#FBEAEA', label: 'หมดอายุ' },
  terminated: { color: '#5B6866', bg: '#E1E7E5', label: 'ยกเลิก' },
  // Maintenance
  open: { color: '#DC4C4C', bg: '#FBEAEA', label: 'เปิด' },
  in_progress: { color: '#D97706', bg: 'rgba(217,119,6,0.10)', label: 'กำลังดำเนินการ' },
  completed: { color: '#088386', bg: 'rgba(8,131,134,0.10)', label: 'เสร็จสิ้น' },
  cancelled: { color: '#5B6866', bg: '#E1E7E5', label: 'ยกเลิก' },
  // Inspection
  scheduled: { color: '#9333EA', bg: 'rgba(147,51,234,0.10)', label: 'นัดหมาย' },
  // Priority
  low: { color: '#088386', bg: 'rgba(8,131,134,0.10)', label: 'ต่ำ' },
  medium: { color: '#D97706', bg: 'rgba(217,119,6,0.10)', label: 'ปานกลาง' },
  high: { color: '#DC4C4C', bg: '#FBEAEA', label: 'สูง' },
  urgent: { color: '#fff', bg: '#DC4C4C', label: 'ด่วน' },
  // Notification type
  billing: { color: '#D97706', bg: 'rgba(217,119,6,0.10)', label: 'บิล' },
  contract: { color: '#9333EA', bg: 'rgba(147,51,234,0.10)', label: 'สัญญา' },
  system: { color: '#5B6866', bg: '#E1E7E5', label: 'ระบบ' },
  // Inspection type
  check_in: { color: '#088386', bg: 'rgba(8,131,134,0.10)', label: 'เข้าพัก' },
  check_out: { color: '#D97706', bg: 'rgba(217,119,6,0.10)', label: 'ย้ายออก' },
  routine: { color: '#5B6866', bg: '#E1E7E5', label: 'ตามรอบ' },
  damage: { color: '#DC4C4C', bg: '#FBEAEA', label: 'ความเสียหาย' },
  // Room type
  standard: { color: '#5B6866', bg: '#E1E7E5', label: 'มาตรฐาน' },
  deluxe: { color: '#D97706', bg: 'rgba(217,119,6,0.10)', label: 'ดีลักซ์' },
  suite: { color: '#9333EA', bg: 'rgba(147,51,234,0.10)', label: 'สวีท' },
}

interface StatusBadgeProps {
  status: string
  customLabel?: string
}

export default function StatusBadge({ status, customLabel }: StatusBadgeProps) {
  const style = STATUS_STYLES[status] || { color: '#5B6866', bg: '#E1E7E5', label: status }

  return (
    <span
      style={{
        display: 'inline-block',
        padding: '3px 10px',
        borderRadius: 9999,
        fontSize: 12,
        fontWeight: 600,
        fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans',sans-serif",
        color: style.color,
        background: style.bg,
        whiteSpace: 'nowrap',
      }}
    >
      {customLabel || style.label}
    </span>
  )
}
