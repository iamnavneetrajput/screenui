'use client'

import type { JSX } from 'react'
import { useState } from 'react'
import { Button } from '@/packages/Button'
import { Plus } from 'lucide-react'

export const buttonDemos: Record<string, () => JSX.Element> = {

  basic: () => (
    <Button variant="solid" icon={<Plus />}>
      Add Item
    </Button>
  ),

  loading: () => {
    const [loading, setLoading] = useState(false)

    return (
      <Button
        loading={loading}
        onClick={() => {
          setLoading(true)
          setTimeout(() => setLoading(false), 2000)
        }}
      >
        {loading ? 'Processing…' : 'Submit'}
      </Button>
    )
  },
}
