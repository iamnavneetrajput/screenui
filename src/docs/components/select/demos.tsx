'use client'

import type { JSX } from 'react'
import { useState } from 'react'
import { Select } from '@/packages/Select'

export const selectDemos: Record<string, () => JSX.Element> = {
  basic: () => {
    const [value, setValue] = useState('')

    return (
      <div className='max-w-md mx-auto'>
      <Select
        label="Country"
        placeholder="Select country"
        value={value}
        onChange={setValue}
        options={[
          { label: 'India', value: 'in' },
          { label: 'United Kingdom', value: 'uk' },
        ]}
      />
      </div>
    )
  },
}
