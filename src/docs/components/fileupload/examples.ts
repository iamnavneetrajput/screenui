import type { Example } from '@/docs/schema'

// Shared code snippets (TS === JS)

const fileUploadBasicCode = `
'use client'

import { FileUpload } from "@/components/FileUpload"
import { useState } from "react"

export function Example() {
  const [files, setFiles] = useState([])

  return (
    <FileUpload
      multiple
      maxSize={10 * 1024 * 1024}
      onChange={setFiles}
    />
  )
}
`.trim()

// Export examples

export const fileUploadExamples: Example[] = [
  {
    id: 'basic',
    title: 'Basic File Upload',
    description: 'Simple drag-and-drop file upload with validation.',
    code: [
      { language: 'typescript', code: fileUploadBasicCode },
      { language: 'javascript', code: fileUploadBasicCode },
    ],
  },
]
