import type { Example } from '@/docs/schema'

// Shared code snippets (TS === JS)

const buttonBasicCode = `
'use client'

import { Button } from "@/components/button"
import { Plus } from "lucide-react"

export function ButtonExample() {
  return (
    <Button variant="solid" icon={<Plus />}>
      Add Item
    </Button>
  )
}
`.trim()

const buttonLoadingCode = `
'use client'

import { Button } from "@/components/button"
import { useState } from "react"

export function ButtonLoadingExample() {
  const [loading, setLoading] = useState(false)

  return (
    <Button
      loading={loading}
      onClick={() => {
        setLoading(true)
        setTimeout(() => setLoading(false), 2000)
      }}
    >
      {loading ? "Processing…" : "Submit"}
    </Button>
  )
}
`.trim()

// Export examples

export const buttonExamples: Example[] = [
  {
    id: 'basic',
    title: 'Basic Button',
    description:
      'A simple button with a variant and icon to demonstrate basic usage.',
    code: [
      { language: 'typescript', code: buttonBasicCode },
      { language: 'javascript', code: buttonBasicCode },
    ],
  },
  {
    id: 'loading',
    title: 'Loading Button',
    description:
      'A button that displays a loading state while an async action is in progress.',
    code: [
      { language: 'typescript', code: buttonLoadingCode },
      { language: 'javascript', code: buttonLoadingCode },
    ],
  },
]
