import type { Feature } from '@/docs/schema'

export const avatarFeatures: Feature[] = [
  {
    title: 'Image + Fallback Logic',
    description:
      'Automatically switches between image, initials, or a default fallback when the image is unavailable.',
  },
  {
    title: 'Dynamic Color Generation',
    description:
      'Generates a consistent background color based on the user name.',
  },
  {
    title: 'Status Indicators',
    description:
      'Supports online, offline, busy, away, or custom status colors.',
  },
  {
    title: 'Notification Badges',
    description:
      'Displays notification dots or counters with configurable colors and positions.',
  },
  {
    title: 'Avatar Grouping',
    description:
      'Group avatars with overlap layout and automatic +N handling.',
  },
  {
    title: 'Interactive Mode',
    description:
      'Can be rendered as a button with hover, focus, and active states.',
  },
  {
    title: 'Size & Shape Controls',
    description:
      'Supports multiple sizes and circle or square shapes.',
  },
  {
    title: 'Theme Friendly',
    description:
      'Works seamlessly with Tailwind design tokens and custom utility classes.',
  },
]
