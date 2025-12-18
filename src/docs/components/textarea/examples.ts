import type { Example } from '@/docs/schema'

// Shared code snippets (TS === JS)

const textareaBasicCode = `
import { Textarea } from '@/components/textarea'

export function Example() {
  return (
    <Textarea
      label="Message"
      placeholder="Write your message..."
      autoResize
      minRows={3}
      maxRows={8}
      showCount
      maxLength={500}
    />
  )
}
`.trim()

// Export examples

export const textareaExamples: Example[] = [
  {
    id: 'basic',
    title: 'Basic Textarea',
    description: 'A simple textarea with label and auto-resize support.',
    code: [
      { language: 'typescript', code: textareaBasicCode },
      { language: 'javascript', code: textareaBasicCode },
    ],
  },
]
