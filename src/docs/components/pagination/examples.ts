import type { Example } from '@/docs/schema'

// Shared code snippets (TS === JS)

const paginationBasicCode = `
'use client'

import { useState } from 'react'
import { Pagination } from '@/components/pagination'

export function Example() {
  const [page, setPage] = useState(1)

  return (
    <Pagination
      currentPage={page}
      totalPages={5}
      onPageChange={setPage}
      showPrevNext
    />
  )
}
`.trim()

// Export examples

export const paginationExamples: Example[] = [
  {
    id: 'basic',
    title: 'Basic Pagination',
    description: 'Controlled pagination with previous and next navigation.',
    code: [
      { language: 'typescript', code: paginationBasicCode },
      { language: 'javascript', code: paginationBasicCode },
    ],
  },
]
