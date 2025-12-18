'use client'

import type { JSX } from 'react'
import { useState } from 'react'
import { Pagination } from '@/packages/Pagination'

export const paginationDemos: Record<string, () => JSX.Element> = {
  basic: () => {
    const [page, setPage] = useState(1)

    return (
      <Pagination
        currentPage={page}
        totalPages={5}
        onPageChange={setPage}
        showPrevNext
      />
    )
  },
}
