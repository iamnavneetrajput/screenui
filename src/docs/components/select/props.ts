import type { PropGroup } from '@/docs/schema'

export const selectProps: PropGroup[] = [
  {
    component: 'Select',
    description: 'Props for the Select root component.',
    props: [
      {
        name: 'options',
        type: 'SelectOption[]',
        required: true,
        description:
          'Array of options containing label, value, and optional disabled flag.',
      },
      {
        name: 'value',
        type: 'string',
        required: false,
        description: 'Controlled selected value.',
      },
      {
        name: 'defaultValue',
        type: 'string',
        required: false,
        description: 'Initial selected value in uncontrolled mode.',
      },
      {
        name: 'onChange',
        type: '(value: string) => void',
        required: false,
        description: 'Called when a new option is selected.',
      },
      {
        name: 'placeholder',
        type: 'string',
        default: "'Select...'",
        required: false,
        description: 'Placeholder shown when no value is selected.',
      },
      {
        name: 'name',
        type: 'string',
        required: false,
        description:
          'Binds selected value to a hidden input for form submission.',
      },
      {
        name: 'label',
        type: 'string',
        required: false,
        description: 'Label displayed above the select trigger.',
      },
      {
        name: 'helperText',
        type: 'string',
        required: false,
        description: 'Helper text displayed below the select field.',
      },
      {
        name: 'error',
        type: 'string | boolean',
        required: false,
        description: 'Displays error styling and optional error message.',
      },
      {
        name: 'required',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Marks the select field as required.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Disables all interactions.',
      },
      {
        name: 'variant',
        type: "'default' | 'filled' | 'outlined' | 'ghost'",
        default: "'default'",
        required: false,
        description: 'Visual style of the select trigger.',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg' | 'xl'",
        default: "'md'",
        required: false,
        description: 'Controls height, padding, and text size.',
      },
      {
        name: 'containerClassName',
        type: 'string',
        required: false,
        description: 'Custom classes for the root container.',
      },
      {
        name: 'triggerClassName',
        type: 'string',
        required: false,
        description: 'Custom classes for the trigger element.',
      },
      {
        name: 'dropdownClassName',
        type: 'string',
        required: false,
        description: 'Custom classes for the dropdown panel.',
      },
      {
        name: 'labelClassName',
        type: 'string',
        required: false,
        description: 'Custom classes for the label.',
      },
      {
        name: 'errorClassName',
        type: 'string',
        required: false,
        description: 'Custom classes for the error message.',
      },
    ],
  },

  {
    component: 'SelectHeadless',
    description: 'Headless rendering and advanced composition.',
    props: [
      {
        name: 'render',
        type: '(ctx: SelectHeadlessContext) => React.ReactNode',
        required: false,
        description:
          'Replaces the entire UI while preserving select logic and state.',
      },
    ],
  },
]
