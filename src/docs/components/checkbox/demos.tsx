'use client'
import type { JSX } from 'react'
import { useState } from 'react'
import { Checkbox } from '@/packages/Checkbox'

export const checkboxDemos: Record<string, () => JSX.Element> = {
  basic: () => {
    const [checked, setChecked] = useState(false)

    return (
      <Checkbox
        label="Subscribe to newsletter"
        description="Get weekly updates about new features and products"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    )
  },
}
