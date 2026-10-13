// frontend/src/components/shared/DataTable.tsx

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  type ColumnDef,
  type SortingState,
} from '@tanstack/react-table'
import { useState } from 'react'
import { ChevronUp, ChevronDown, ChevronsLeft, ChevronsRight, ChevronLeft, ChevronRight } from 'lucide-react'

interface DataTableProps<T> {
  data: T[]
  columns: ColumnDef<T, unknown>[]
  pageSize?: number
  globalFilter?: string
  onRowClick?: (row: T) => void
}

export default function DataTable<T>({
  data,
  columns,
  pageSize = 10,
  globalFilter = '',
  onRowClick,
}: DataTableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    state: { sorting, globalFilter },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize } },
  })

  return (
    <div>
      {/* Table */}
      <div style={{ overflowX: 'auto', border: '1px solid #E1E7E5', borderRadius: 8 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    style={{
                      padding: '10px 14px',
                      textAlign: 'left',
                      fontSize: 12,
                      fontWeight: 600,
                      fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans',sans-serif",
                      color: '#5B6866',
                      background: '#F6F8F7',
                      borderBottom: '1px solid #E1E7E5',
                      cursor: header.column.getCanSort() ? 'pointer' : 'default',
                      userSelect: 'none',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                      {header.column.getIsSorted() === 'asc' && <ChevronUp size={14} />}
                      {header.column.getIsSorted() === 'desc' && <ChevronDown size={14} />}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  style={{
                    padding: 40,
                    textAlign: 'center',
                    fontSize: 14,
                    fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans',sans-serif",
                    color: '#A9B2B0',
                  }}
                >
                  ไม่พบข้อมูล
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  onClick={() => onRowClick?.(row.original)}
                  style={{
                    cursor: onRowClick ? 'pointer' : 'default',
                    borderBottom: '1px solid #E1E7E5',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#F6F8F7'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#fff'
                  }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      style={{
                        padding: '10px 14px',
                        fontSize: 14,
                        fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans',sans-serif",
                        color: '#14231F',
                      }}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 12,
          fontSize: 13,
          fontFamily: "'IBM Plex Sans Thai','IBM Plex Sans',sans-serif",
          color: '#5B6866',
        }}
      >
        <span>
          แสดง {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1}–
          {Math.min(
            (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
            table.getFilteredRowModel().rows.length,
          )}{' '}
          จาก {table.getFilteredRowModel().rows.length} รายการ
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {[
            { icon: ChevronsLeft, action: () => table.setPageIndex(0), disabled: !table.getCanPreviousPage() },
            { icon: ChevronLeft, action: () => table.previousPage(), disabled: !table.getCanPreviousPage() },
            { icon: ChevronRight, action: () => table.nextPage(), disabled: !table.getCanNextPage() },
            { icon: ChevronsRight, action: () => table.setPageIndex(table.getPageCount() - 1), disabled: !table.getCanNextPage() },
          ].map((btn, i) => (
            <button
              key={i}
              onClick={btn.action}
              disabled={btn.disabled}
              style={{
                width: 32,
                height: 32,
                borderRadius: 6,
                border: '1px solid #E1E7E5',
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: btn.disabled ? 'not-allowed' : 'pointer',
                opacity: btn.disabled ? 0.4 : 1,
              }}
            >
              <btn.icon size={14} color="#5B6866" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
