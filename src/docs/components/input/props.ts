import type { PropGroup } from '@/docs/schema'

export const inputProps: PropGroup[] = [
  {
    component: 'Input',
    description: 'Props for the Input root component.',
    props: [
      {
        name: 'variant',
        type: "'default' | 'filled' | 'outlined' | 'ghost'",
        default: "'default'",
        required: false,
        description: 'Visual style variant of the input.',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg' | 'xl'",
        default: "'md'",
        required: false,
        description: 'Controls input height, padding, and icon sizing.',
      },
      {
        name: 'type',
        type: 'string',
        default: "'text'",
        required: false,
        description: 'Native input type. Password inputs automatically show a visibility toggle.',
      },
      {
        name: 'value',
        type: 'string',
        required: false,
        description: 'Enables controlled mode when provided.',
      },
      {
        name: 'defaultValue',
        type: 'string',
        required: false,
        description: 'Initial value for uncontrolled usage.',
      },
      {
        name: 'onChange',
        type: '(e: ChangeEvent<HTMLInputElement>) => void',
        required: false,
        description: 'Called whenever the input value changes.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Disables user interaction.',
      },
      {
        name: 'required',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Marks the input as required.',
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Custom classes applied to the input element.',
      },
    ],
  },

  {
    component: 'InputLabel',
    description: 'Label and helper text configuration.',
    props: [
      {
        name: 'label',
        type: 'React.ReactNode',
        required: false,
        description: 'Label displayed above the input.',
      },
      {
        name: 'description',
        type: 'React.ReactNode',
        required: false,
        description: 'Helper description shown above the input.',
      },
      {
        name: 'helperText',
        type: 'React.ReactNode',
        required: false,
        description: 'Helper text shown below the input when no error exists.',
      },
      {
        name: 'error',
        type: 'string | boolean',
        required: false,
        description: 'Displays error styling and optional error message.',
      },
    ],
  },

  {
    component: 'InputIcons',
    description: 'Icon slots and interactive affordances.',
    props: [
      {
        name: 'leftIcon',
        type: 'React.ReactNode',
        required: false,
        description: 'Icon rendered on the left side of the input.',
      },
      {
        name: 'rightIcon',
        type: 'React.ReactNode',
        required: false,
        description: 'Icon rendered on the right side of the input.',
      },
      {
        name: 'clearable',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Shows a clear (×) button when input has value.',
      },
      {
        name: 'onClear',
        type: '() => void',
        required: false,
        description: 'Called when the clear button is clicked.',
      },
    ],
  },

  {
    component: 'InputCounter',
    description: 'Character counting support.',
    props: [
      {
        name: 'showCount',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Displays a live character counter.',
      },
      {
        name: 'maxLength',
        type: 'number',
        required: false,
        description: 'Maximum allowed input length.',
      },
    ],
  },

  {
    component: 'InputRender',
    description: 'Advanced rendering control.',
    props: [
      {
        name: 'render',
        type: '(api) => React.ReactNode',
        required: false,
        description: 'Fully replace the UI while keeping internal input logic.',
      },
    ],
  },
]
