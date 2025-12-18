'use client'

import type { JSX } from 'react'
import { useState } from 'react'
import { Textarea } from '@/packages/Textarea'

export const textareaDemos: Record<string, () => JSX.Element> = {
  basic: () => {
    const [value, setValue] = useState('')

    return (
      <div className='max-w-md mx-auto'>
      <Textarea
        label="Message"
        placeholder="Write your message..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoResize
        minRows={3}
        maxRows={8}
        showCount
        maxLength={500}
      />
      </div>
    )
  },
}
