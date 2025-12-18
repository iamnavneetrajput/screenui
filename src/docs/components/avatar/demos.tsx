'use client'

import type { JSX } from 'react'
import { Avatar, AvatarGroup } from '@/packages/Avatar'

export const avatarDemos: Record<string, () => JSX.Element> = {
  basic: () => (
    <div className="flex items-center gap-4">
      <Avatar
        src="https://github.com/evilrabbit.png"
        name="Jane Doe"
        status="online"
      />

      <Avatar
        name="Offline User"
        status="offline"
      />

      <Avatar
        name="Notifications"
        notification={3}
      />
    </div>
  ),

  group: () => (
    <AvatarGroup max={4} spacing='md'>
      <Avatar src="https://github.com/evilrabbit.png" />
      <Avatar src="https://github.com/evilrabbit.png" />
      <Avatar src="https://github.com/evilrabbit.png" />
      <Avatar src="https://github.com/evilrabbit.png" />
      <Avatar src="https://github.com/evilrabbit.png" />
      <Avatar src="https://github.com/evilrabbit.png" />
    </AvatarGroup>
  ),
}
