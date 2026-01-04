import type { PropGroup } from '@/docs/schema'

export const stepcardProps: PropGroup[] = [
  {
    component: 'StepCardContainer',
    description: 'Context provider and layout wrapper for StepCard.',
    props: [
      {
        name: 'currentStep',
        type: 'number',
        required: false,
        description: 'Controlled active step.',
      },
      {
        name: 'defaultStep',
        type: 'number',
        default: '1',
        required: false,
        description: 'Initial step in uncontrolled mode.',
      },
      {
        name: 'onStepChange',
        type: '(step: number) => void',
        required: false,
        description: 'Called when the active step changes.',
      },
      {
        name: 'orientation',
        type: "'horizontal' | 'vertical'",
        default: "'horizontal'",
        required: false,
        description: 'Layout direction of steps.',
      },
      {
        name: 'variant',
        type: "'default' | 'primary' | 'muted'",
        default: "'default'",
        required: false,
        description: 'Visual style of step cards.',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        required: false,
        description: 'Controls spacing and text size.',
      },
      {
        name: 'rounded',
        type: "'none' | 'sm' | 'md' | 'lg' | 'xl'",
        default: "'md'",
        required: false,
        description: 'Border radius of step cards.',
      },
    ],
  },

  {
    component: 'StepCard',
    description: 'Individual step item.',
    props: [
      {
        name: 'step',
        type: 'number',
        required: true,
        description: 'Step index.',
      },
      {
        name: 'title',
        type: 'string',
        required: true,
        description: 'Step title.',
      },
      {
        name: 'description',
        type: 'string',
        required: false,
        description: 'Optional description.',
      },
      {
        name: 'icon',
        type: 'ReactNode',
        required: false,
        description: 'Optional leading icon.',
      },
      {
        name: 'state',
        type: "'pending' | 'active' | 'completed' | 'error'",
        required: false,
        description: 'Overrides automatic step state.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Disables interaction.',
      },
      {
        name: 'onClick',
        type: '() => void',
        required: false,
        description: 'Enables interactive behavior.',
      },
    ],
  },

  {
    component: 'StepConnector',
    description: 'Visual connector between steps.',
    props: [
      {
        name: 'completed',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Marks connector as completed.',
      },
    ],
  },
]
