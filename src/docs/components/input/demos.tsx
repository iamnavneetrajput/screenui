'use client'

import type { JSX } from 'react'
import { useState } from 'react'
import { Input } from '@/packages/Input'

export const inputDemos: Record<string, () => JSX.Element> = {
  basic: () => {
    const [value, setValue] = useState('')

    return (
      <div className='max-w-[300px] mx-auto'>
      <Input
        label="Email address"
        placeholder="you@example.com"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        clearable
        onClear={() => setValue('')}
      />
        </div>
    )
  },
}
