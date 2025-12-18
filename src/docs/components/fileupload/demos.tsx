'use client'

import type { JSX } from 'react'
import { useState } from 'react'
import { FileUpload, type FileMeta } from '@/packages/FileUpload'

export const fileUploadDemos: Record<string, () => JSX.Element> = {
  basic: () => {
    const [files, setFiles] = useState<FileMeta[]>([])

    return (
      <div className='max-w-md m-auto'>
      <FileUpload
        label="Upload files"
        description="Any file up to 10MB"
        multiple
        maxSize={10 * 1024 * 1024}
        onChange={setFiles}
      />
      </div>
    )
  },
}
