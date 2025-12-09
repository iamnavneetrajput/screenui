import React from 'react'
import { Input } from '@/packages/Input'

export function BasicInput() {
  return (
    <div className="space-y-12">
      <div className="space-y-6">

        <Input
          label="Email Address"
          description="We'll never share your email"
          placeholder="you@email.com"
          type="email"
        />

      </div>
    </div>
  )
}
