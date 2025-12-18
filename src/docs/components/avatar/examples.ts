import type { Example } from '@/docs/schema'

// Shared code snippets (TS === JS)

const avatarBasicCode = `
import { Avatar } from '@/components/avatar'

export function Example() {
  return (
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
  )
}
`.trim()

const avatarGroupCode = `
import { Avatar, AvatarGroup } from '@/components/avatar'

export function Example() {
  return (
    <AvatarGroup max={4} size="md">
      <Avatar src="https://github.com/evilrabbit.png" />
      <Avatar src="https://github.com/evilrabbit.png" />
      <Avatar src="https://github.com/evilrabbit.png" />
      <Avatar src="https://github.com/evilrabbit.png" />
      <Avatar src="https://github.com/evilrabbit.png" />
    </AvatarGroup>
  )
}
`.trim()

// Export examples

export const avatarExamples: Example[] = [
  {
    id: 'basic',
    title: 'Basic Avatar',
    description:
      'A simple avatar with image fallback, status indicator, and notification badge.',
    code: [
      { language: 'typescript', code: avatarBasicCode },
      { language: 'javascript', code: avatarBasicCode },
    ],
  },
  {
    id: 'group',
    title: 'Avatar Group',
    description:
      'Group multiple avatars together with overlap and automatic +N handling.',
    code: [
      { language: 'typescript', code: avatarGroupCode },
      { language: 'javascript', code: avatarGroupCode },
    ],
  },
]
