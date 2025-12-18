import type { PropGroup } from '@/docs/schema'

export const badgeProps: PropGroup[] = [
  {
    component: 'Badge',
    description:
      'Props for the Badge component, including variants, colors, interactivity, and accessibility.',
    props: [
      {
        name: 'variant',
        type: "'solid' | 'outline' | 'soft' | 'ghost' | 'dot'",
        default: "'solid'",
        required: false,
        description: 'Determines the visual style of the badge.',
      },
      {
        name: 'color',
        type:
          "'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'",
        default: "'default'",
        required: false,
        description: 'Applies semantic color styles to the badge.',
      },
      {
        name: 'size',
        type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
        default: "'sm'",
        required: false,
        description: 'Controls padding, text size, and icon size.',
      },
      {
        name: 'rounded',
        type: "'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'",
        default: "'md'",
        required: false,
        description: 'Controls border radius of the badge.',
      },
      {
        name: 'interactive',
        type: 'boolean',
        default: 'false',
        required: false,
        description:
          'Enables hover and keyboard interactions. Auto-enabled when rendered as a button or when onRemove is provided.',
      },
      {
        name: 'icon',
        type: 'React.ReactNode',
        required: false,
        description: 'Optional leading icon displayed before the label.',
      },
      {
        name: 'onRemove',
        type: '() => void',
        required: false,
        description:
          'Displays a remove button and fires when the badge is dismissed.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Disables interactions and applies muted styles.',
      },
      {
        name: 'as',
        type: "'span' | 'button'",
        default: "'span'",
        required: false,
        description:
          'Controls whether the badge renders as a span or button.',
      },
      {
        name: 'ariaLabel',
        type: 'string',
        required: false,
        description:
          'Accessibility label when the badge represents an action.',
      },
      {
        name: 'children',
        type: 'React.ReactNode',
        required: true,
        description: 'Content displayed inside the badge.',
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Custom classes applied to the badge.',
      },
    ],
  },
]
