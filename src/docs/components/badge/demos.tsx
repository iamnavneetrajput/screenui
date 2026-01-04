'use client'

import type { JSX } from 'react'
import { Badge } from '@/packages/Badge'
import { InfoIcon } from 'lucide-react'

export const badgeDemos: Record<string, () => JSX.Element> = {
  basic: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="dot" color="success">
        Active
      </Badge>

      <Badge
        as="button"
        variant='soft'
        color='info'
        interactive
        onClick={() => console.log('Clicked')}
      >
        Clickable
      </Badge>

      <Badge icon={<InfoIcon />} variant="soft" color='warning'>
        Warning
      </Badge>

      <Badge color='danger' onRemove={() => console.log('Removed')}>
        Removable
      </Badge>
    </div>
  ),
}
