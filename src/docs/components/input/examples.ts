import type { Example } from '@/docs/schema'

// Shared code snippets (TS === JS)

const inputBasicCode = `
import { Input } from '@/components/input'

export function Example() {
  return (
    <Input
      label="Email address"
      description="We'll never share your email"
      placeholder="you@example.com"
      type="email"
    />
  )
}
`.trim()

// Export examples

export const inputExamples: Example[] = [
  {
    id: 'basic',
    title: 'Basic Input',
    description: 'A standard text input with label and helper text.',
    code: [
      { language: 'typescript', code: inputBasicCode },
      { language: 'javascript', code: inputBasicCode },
    ],
  },
]
