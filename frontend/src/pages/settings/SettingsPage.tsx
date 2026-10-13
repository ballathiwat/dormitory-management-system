// frontend/src/pages/settings/SettingsPage.tsx

import { PageHeader } from '../../components/shared'

const SECTIONS = [
  {
    title: 'ข้อมูลหอพัก',
    fields: [
      { label: 'ชื่อหอพัก', value: 'หอพัก HoDee' },
      { label: 'ที่อยู่', value: 'ถ.มิตรภาพ ซ.12 ต.ในเมือง อ.เมือง จ.ขอนแก่น 40000' },
      { label: 'เบอร์โทร', value: '043-123-4567' },
      { label: 'อีเมล', value: 'admin@hodee.app' },
    ],
  },
  {
    title: 'ค่าใช้จ่ายเริ่มต้น',
    fields: [
      { label: 'ค่าน้ำ (หน่วยละ)', value: '฿18' },
      { label: 'ค่าไฟ (หน่วยละ)', value: '฿8' },
      { label: 'ค่าส่วนกลาง', value: '฿200' },
      { label: 'เงินประกัน (เท่าของค่าเช่า)', value: '2 เดือน' },
    ],
  },
  {
    title: 'การแจ้งเตือน',
    fields: [
      { label: 'แจ้งเตือนค้างชำระ', value: 'เปิด — หลังวันครบกำหนด 3 วัน' },
      { label: 'แจ้งเตือนสัญญาใกล้หมด', value: 'เปิด — ก่อนหมดอายุ 30 วัน' },
      { label: 'ช่องทาง', value: 'SMS + อีเมล' },
    ],
  },
]

export default function SettingsPage() {
  return (
    <div style={{ maxWidth: 1240, margin: '0 auto' }}>
      <PageHeader title="ตั้งค่า" subtitle="ตั้งค่าระบบและข้อมูลหอพัก" />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {SECTIONS.map((section) => (
          <div
            key={section.title}
            style={{
              background: '#fff',
              border: '1px solid #E1E7E5',
              borderRadius: 8,
              padding: 20,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600, fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans',sans-serif", color: '#14231F' }}>
                {section.title}
              </h3>
              <button
                style={{
                  padding: '6px 14px',
                  borderRadius: 6,
                  border: '1px solid #E1E7E5',
                  background: '#fff',
                  fontSize: 13,
                  fontWeight: 600,
                  fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans',sans-serif",
                  color: '#088386',
                  cursor: 'pointer',
                }}
              >
                แก้ไข
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {section.fields.map((field) => (
                <div key={field.label} style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
                  <span style={{ width: 200, flexShrink: 0, fontSize: 13, fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans',sans-serif", color: '#5B6866' }}>
                    {field.label}
                  </span>
                  <span style={{ fontSize: 14, fontWeight: 500, fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans',sans-serif", color: '#14231F' }}>
                    {field.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
