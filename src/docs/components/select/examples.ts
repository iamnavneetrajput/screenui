import type { Example } from '@/docs/schema'

// Shared code snippets (TS === JS)

const selectBasicCode = `
'use client'

import { Select } from '@/components/Select'
import { useState } from 'react'

export function Example() {
  const [value, setValue] = useState('')

  return (
    <Select
      label="Country"
      placeholder="Select country"
      value={value}
      onChange={setValue}
      options={[
        { label: 'United States', value: 'us' },
        { label: 'India', value: 'in' },
        { label: 'United Kingdom', value: 'uk' },
      ]}
    />
  )
}
`.trim()

// Export examples

export const selectExamples: Example[] = [
  {
    id: 'basic',
    title: 'Basic Select',
    description:
      'A standard select with keyboard navigation and controlled value.',
    code: [
      { language: 'typescript', code: selectBasicCode },
      { language: 'javascript', code: selectBasicCode },
    ],
  },
]
