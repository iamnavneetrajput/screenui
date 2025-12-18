import type { PropGroup } from '@/docs/schema'

export const avatarProps: PropGroup[] = [
  {
    component: 'Avatar',
    description:
      'Props for the Avatar component, supporting images, fallback logic, badges, and interactivity.',
    props: [
      {
        name: 'src',
        type: 'string',
        required: false,
        description: 'Image source URL for the avatar.',
      },
      {
        name: 'alt',
        type: 'string',
        required: false,
        description: 'Accessible alt text for the avatar image.',
      },
      {
        name: 'name',
        type: 'string',
        required: false,
        description:
          'Used to generate initials and a deterministic background color when no image is present.',
      },
      {
        name: 'fallback',
        type: 'React.ReactNode',
        required: false,
        description: 'Custom fallback element when the image fails or is loading.',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        required: false,
        description: 'Controls avatar dimensions and text/icon size.',
      },
      {
        name: 'shape',
        type: "'circle' | 'square'",
        default: "'circle'",
        required: false,
        description: 'Controls the border radius of the avatar.',
      },
      {
        name: 'color',
        type: 'string',
        required: false,
        description: 'Custom background color class for fallback mode.',
      },
      {
        name: 'textColor',
        type: 'string',
        default: "'text-white'",
        required: false,
        description: 'Text color for initials or fallback icon.',
      },
      {
        name: 'ring',
        type: 'boolean | string',
        required: false,
        description: 'Adds a focus ring. Can be true or a custom ring class.',
      },
      {
        name: 'ringColor',
        type: 'string',
        default: "'ring-white'",
        required: false,
        description: 'Ring color when ring is enabled.',
      },
      {
        name: 'status',
        type: "boolean | 'online' | 'offline' | 'busy' | 'away'",
        required: false,
        description: 'Shows a presence indicator.',
      },
      {
        name: 'statusColor',
        type: 'string',
        required: false,
        description: 'Custom color class for the status indicator.',
      },
      {
        name: 'statusPosition',
        type: "'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'",
        default: "'bottom-right'",
        required: false,
        description: 'Controls where the status badge appears.',
      },
      {
        name: 'notification',
        type: 'number | string | boolean',
        required: false,
        description:
          'Displays a notification badge. Supports counts, strings, or boolean dot.',
      },
      {
        name: 'notificationColor',
        type: 'string',
        default: "'bg-red-500'",
        required: false,
        description: 'Background color of the notification badge.',
      },
      {
        name: 'notificationPosition',
        type: "'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'",
        default: "'top-right'",
        required: false,
        description: 'Position of the notification badge.',
      },
      {
        name: 'loading',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Shows a pulsing skeleton while loading.',
      },
      {
        name: 'clickable',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Adds hover, focus, and pointer interactions.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Disables interactivity when rendered as a button.',
      },
      {
        name: 'as',
        type: "'div' | 'button'",
        default: "'div'",
        required: false,
        description: 'Controls the underlying rendered element.',
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Custom classes applied to the avatar container.',
      },
    ],
  },

  {
    component: 'AvatarGroup',
    description:
      'Props for grouping multiple avatars with overlap and max-count handling.',
    props: [
      {
        name: 'max',
        type: 'number',
        default: '5',
        required: false,
        description:
          'Maximum number of visible avatars before showing a +N indicator.',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        required: false,
        description: 'Uniform size for all avatars inside the group.',
      },
      {
        name: 'spacing',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        required: false,
        description: 'Controls overlap spacing between avatars.',
      },
      {
        name: 'children',
        type: 'React.ReactNode',
        required: true,
        description: 'Avatar elements to render inside the group.',
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Custom classes applied to the group wrapper.',
      },
    ],
  },
]
