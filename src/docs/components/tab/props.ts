import type { PropGroup } from '@/docs/schema'

export const tabsProps: PropGroup[] = [
  {
    component: 'Tabs',
    description: 'Props for the Tabs root component.',
    props: [
      {
        name: 'value',
        type: 'string',
        required: false,
        description: 'Controlled active tab value.',
      },
      {
        name: 'defaultValue',
        type: 'string',
        required: false,
        description: 'Initial active tab in uncontrolled mode.',
      },
      {
        name: 'onValueChange',
        type: '(value: string) => void',
        required: false,
        description: 'Called when the active tab changes.',
      },
      {
        name: 'orientation',
        type: "'horizontal' | 'vertical'",
        default: "'horizontal'",
        required: false,
        description: 'Layout orientation of the tabs.',
      },
      {
        name: 'variant',
        type: "'default' | 'pills' | 'underline' | 'enclosed'",
        default: "'default'",
        required: false,
        description: 'Visual style of the tab list and triggers.',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        required: false,
        description: 'Controls padding and text size of tab triggers.',
      },
      {
        name: 'fullWidth',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Distributes tab triggers evenly across the container.',
      },
    ],
  },

  {
    component: 'TabsTrigger',
    description: 'Props for individual tab triggers.',
    props: [
      {
        name: 'value',
        type: 'string',
        required: true,
        description: 'Value associated with the tab.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Disables interaction with the tab.',
      },
      {
        name: 'icon',
        type: 'ReactNode',
        required: false,
        description: 'Optional leading icon.',
      },
      {
        name: 'badge',
        type: 'ReactNode',
        required: false,
        description: 'Optional trailing badge.',
      },
    ],
  },

  {
    component: 'TabsContent',
    description: 'Props for tab panels.',
    props: [
      {
        name: 'value',
        type: 'string',
        required: true,
        description: 'Tab value this panel is associated with.',
      },
      {
        name: 'forceMount',
        type: 'boolean',
        default: 'false',
        required: false,
        description:
          'Forces the panel to stay mounted when inactive.',
      },
    ],
  },
]
