'use client'
import React, { useState } from 'react'
import { SimplePagination, CompactPagination } from '@/packages/Pagination'

export function SimpleCompactPagination() {
  const [simplePage, setSimplePage] = useState(3)
  const [compactPage, setCompactPage] = useState(1)

  return (
    <div className="space-y-12">
      <SimplePagination
        currentPage={simplePage}
        totalPages={5}
        onPageChange={setSimplePage}
      />

      <CompactPagination
        currentPage={compactPage}
        totalPages={5}
        onPageChange={setCompactPage}
      />
    </div>
  )
}
