'use client'

import type { JSX } from 'react'
import { Badge } from '@/packages/Badge'
import { InfoIcon } from 'lucide-react'

export const badgeDemos: Record<string, () => JSX.Element> = {
  basic: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>New</Badge>

      <Badge variant="dot" color="success">
        Active
      </Badge>

      <Badge
        as="button"
        interactive
        onClick={() => console.log('Clicked')}
      >
        Clickable
      </Badge>

      <Badge icon={<InfoIcon />} variant="outline">
        Warning
      </Badge>

      <Badge onRemove={() => console.log('Removed')}>
        Removable
      </Badge>
    </div>
  ),
}
