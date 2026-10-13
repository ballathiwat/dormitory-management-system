// frontend/src/pages/auth/LoginPage.tsx

import { useState } from 'react'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: เรียก API login จริง
    console.log('Login:', { username, password })
    // Mock: redirect ไป overview
    window.location.href = '/'
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#F6F8F7',
        fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans',sans-serif",
      }}
    >
      <div
        style={{
          width: 400,
          background: '#fff',
          border: '1px solid #E1E7E5',
          borderRadius: 12,
          padding: 32,
          boxShadow: '0 12px 28px rgba(20,35,31,0.14)',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div
            style={{
              width: 56,
              height: 42,
              borderRadius: 8,
              background: '#088386',
              margin: '0 auto 12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            H
          </div>
          <h1 style={{ margin: 0, fontSize: 22, fontWeight: 600, color: '#14231F' }}>
            เข้าสู่ระบบ HoDee
          </h1>
          <p style={{ margin: '4px 0 0', fontSize: 14, color: '#5B6866' }}>
            ระบบจัดการหอพัก
          </p>
        </div>

        {/* Form */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#14231F', marginBottom: 6 }}>
              ชื่อผู้ใช้
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
              style={{
                width: '100%',
                height: 42,
                padding: '0 14px',
                border: '1px solid #E1E7E5',
                borderRadius: 8,
                fontSize: 14,
                color: '#14231F',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#14231F', marginBottom: 6 }}>
              รหัสผ่าน
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{
                width: '100%',
                height: 42,
                padding: '0 14px',
                border: '1px solid #E1E7E5',
                borderRadius: 8,
                fontSize: 14,
                color: '#14231F',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <button
            onClick={handleSubmit}
            style={{
              width: '100%',
              height: 44,
              background: '#088386',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 600,
              cursor: 'pointer',
              marginTop: 4,
            }}
          >
            เข้าสู่ระบบ
          </button>
        </div>

        <p style={{ textAlign: 'center', margin: '20px 0 0', fontSize: 12, color: '#A9B2B0' }}>
          HoDee v3.0.0 — ระบบจัดการหอพัก
        </p>
      </div>
    </div>
  )
}
