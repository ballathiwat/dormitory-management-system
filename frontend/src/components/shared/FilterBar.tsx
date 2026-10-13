// frontend/src/components/shared/FilterBar.tsx

import { Search } from 'lucide-react'

export interface FilterOption {
  label: string
  value: string
}

export interface FilterConfig {
  key: string
  label: string
  options: FilterOption[]
}

interface FilterBarProps {
  searchValue: string
  onSearchChange: (value: string) => void
  searchPlaceholder?: string
  filters?: FilterConfig[]
  filterValues?: Record<string, string>
  onFilterChange?: (key: string, value: string) => void
}

export default function FilterBar({
  searchValue,
  onSearchChange,
  searchPlaceholder = 'ค้นหา...',
  filters = [],
  filterValues = {},
  onFilterChange,
}: FilterBarProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 16,
        flexWrap: 'wrap',
      }}
    >
      {/* Search */}
      <div style={{ position: 'relative', flex: '1 1 240px', maxWidth: 320 }}>
        <Search
          size={16}
          color="#A9B2B0"
          style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }}
        />
        <input
          type="text"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={searchPlaceholder}
          style={{
            width: '100%',
            height: 38,
            paddingLeft: 36,
            paddingRight: 12,
            border: '1px solid #E1E7E5',
            borderRadius: 8,
            fontSize: 14,
            fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans',sans-serif",
            color: '#14231F',
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
      </div>

      {/* Filter Dropdowns */}
      {filters.map((filter) => (
        <select
          key={filter.key}
          value={filterValues[filter.key] || ''}
          onChange={(e) => onFilterChange?.(filter.key, e.target.value)}
          style={{
            height: 38,
            padding: '0 32px 0 12px',
            border: '1px solid #E1E7E5',
            borderRadius: 8,
            fontSize: 13,
            fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans',sans-serif",
            color: '#14231F',
            background: '#fff',
            cursor: 'pointer',
            outline: 'none',
            appearance: 'none',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%235B6866' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 8px center',
          }}
        >
          <option value="">{filter.label}</option>
          {filter.options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ))}
    </div>
  )
}
