// docs/components/alert/props.ts
import type { PropGroup } from '@/docs/schema'

export const alertProps: PropGroup[] = [
  {
    component: 'Alert',
    description: 'Props for the Alert root component.',
    props: [
      {
        name: 'variant',
        type: "'default' | 'filled' | 'outlined' | 'soft' | 'glass'",
        default: "'default'",
        required: false,
        description: 'Visual style variant for the alert container.',
      },
      {
        name: 'color',
        type: "'default' | 'info' | 'success' | 'warning' | 'error'",
        default: "'default'",
        required: false,
        description:
          'Semantic color theme applied to icon, border, and background.',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        required: false,
        description: 'Controls padding, spacing, and icon size.',
      },
      {
        name: 'rounded',
        type: "'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'",
        default: "'lg'",
        required: false,
        description: 'Controls border radius of the alert container.',
      },
      {
        name: 'dismissible',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Shows a close button when enabled.',
      },
      {
        name: 'onDismiss',
        type: '() => void',
        required: false,
        description: 'Called when the alert is dismissed.',
      },
      {
        name: 'autoDismiss',
        type: 'number',
        required: false,
        description:
          'Automatically dismisses the alert after the given number of milliseconds.',
      },
      {
        name: 'showIcon',
        type: 'boolean',
        default: 'false',
        required: false,
        description:
          'Shows the default icon based on the selected color.',
      },
      {
        name: 'icon',
        type: 'React.ReactNode',
        required: false,
        description: 'Replaces the default icon with a custom one.',
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Custom classes applied to the alert container.',
      },
    ],
  },

  {
    component: 'AlertTitle',
    description: 'Props for the alert title section.',
    props: [
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Custom classes applied to the title element.',
      },
      {
        name: 'children',
        type: 'React.ReactNode',
        required: true,
        description: 'Text content of the alert title.',
      },
    ],
  },

  {
    component: 'AlertDescription',
    description: 'Props for the alert description/content section.',
    props: [
      {
        name: 'className',
        type: 'string',
        required: false,
        description:
          'Custom classes applied to the description container.',
      },
      {
        name: 'children',
        type: 'React.ReactNode',
        required: true,
        description:
          'Content of the alert body. Supports rich text.',
      },
    ],
  },

  {
    component: 'AlertActions',
    description: 'Props for the actions container inside an Alert.',
    props: [
      {
        name: 'className',
        type: 'string',
        required: false,
        description:
          'Custom classes applied to the actions wrapper.',
      },
      {
        name: 'children',
        type: 'React.ReactNode',
        required: true,
        description:
          'Typically contains action buttons.',
      },
    ],
  },
]
