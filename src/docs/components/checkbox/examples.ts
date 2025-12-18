import type { Example } from '@/docs/schema'

// Shared code snippets (TS === JS)

const checkboxBasicCode = `
'use client'

import { useState } from 'react'
import { Checkbox } from '@/components/Checkbox'

export function Example() {
  const [checked, setChecked] = useState(false)

  return (
    <Checkbox
      label="Subscribe to newsletter"
      description="Get weekly updates about new features and products"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  )
}
`.trim()

// Export examples

export const checkboxExamples: Example[] = [
  {
    id: 'basic',
    title: 'Basic Checkbox',
    description: 'A controlled checkbox with label and description.',
    code: [
      { language: 'typescript', code: checkboxBasicCode },
      { language: 'javascript', code: checkboxBasicCode },
    ],
  },
]
