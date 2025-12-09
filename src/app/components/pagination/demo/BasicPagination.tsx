'use client'
import React, { useState } from 'react'
import { Pagination } from '@/packages/Pagination'

export function BasicPagination() {
  const [page, setPage] = useState(1)
  
    return (
      <div className="space-y-12">
        <Pagination
          currentPage={page}
          totalPages={5}
          onPageChange={setPage}
          showPrevNext
        />
      </div>
    )
  }
