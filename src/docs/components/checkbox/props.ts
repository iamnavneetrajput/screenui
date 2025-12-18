import type { PropGroup } from '@/docs/schema'

export const checkboxProps: PropGroup[] = [
  {
    component: 'Checkbox',
    description: 'Props for the Checkbox root component.',
    props: [
      {
        name: 'checked',
        type: 'boolean',
        required: false,
        description: 'Controls the checked state of the checkbox.',
      },
      {
        name: 'defaultChecked',
        type: 'boolean',
        required: false,
        description: 'Initial checked state when used uncontrolled.',
      },
      {
        name: 'onChange',
        type: '(event) => void',
        required: false,
        description: 'Called when the checkbox value changes.',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg' | 'xl'",
        default: "'md'",
        required: false,
        description: 'Controls checkbox dimensions and icon size.',
      },
      {
        name: 'variant',
        type: "'default' | 'outline' | 'filled' | 'soft'",
        default: "'default'",
        required: false,
        description: 'Visual style of the checkbox.',
      },
      {
        name: 'rounded',
        type: "'none' | 'sm' | 'md' | 'lg' | 'full'",
        default: "'md'",
        required: false,
        description: 'Border radius of the checkbox.',
      },
      {
        name: 'indeterminate',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Renders a partially checked (tri-state) checkbox.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Disables checkbox interaction.',
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Custom classes applied to the checkbox element.',
      },
    ],
  },

  {
    component: 'CheckboxLabel',
    description: 'Label and description configuration.',
    props: [
      {
        name: 'label',
        type: 'React.ReactNode',
        required: false,
        description: 'Text label displayed next to the checkbox.',
      },
      {
        name: 'labelPosition',
        type: "'left' | 'right'",
        default: "'right'",
        required: false,
        description: 'Position of the label relative to the checkbox.',
      },
      {
        name: 'description',
        type: 'React.ReactNode',
        required: false,
        description: 'Helper text displayed under the label.',
      },
      {
        name: 'error',
        type: 'string | boolean',
        required: false,
        description: 'Displays an error message and error styles.',
      },
    ],
  },

  {
    component: 'CheckboxIcon',
    description: 'Icon customization.',
    props: [
      {
        name: 'icon',
        type: 'React.ReactNode',
        required: false,
        description: 'Custom check or indeterminate icon.',
      },
    ],
  },

  {
    component: 'CheckboxLayout',
    description: 'Layout and alignment options.',
    props: [
      {
        name: 'checkboxAlignment',
        type: "'start' | 'center'",
        default: "'start'",
        required: false,
        description: 'Vertical alignment of the checkbox relative to text.',
      },
    ],
  },

  {
    component: 'CheckboxGroup',
    description: 'Props for grouping multiple checkboxes.',
    props: [
      {
        name: 'label',
        type: 'string',
        required: false,
        description: 'Group label displayed above the checkboxes.',
      },
      {
        name: 'description',
        type: 'string',
        required: false,
        description: 'Helper text displayed below the group label.',
      },
      {
        name: 'error',
        type: 'string',
        required: false,
        description: 'Displays a validation error for the group.',
      },
      {
        name: 'orientation',
        type: "'vertical' | 'horizontal'",
        default: "'vertical'",
        required: false,
        description: 'Layout direction of checkbox items.',
      },
      {
        name: 'gap',
        type: "'none' | 'sm' | 'md' | 'lg' | 'xl'",
        default: "'md'",
        required: false,
        description: 'Spacing between checkbox items.',
      },
      {
        name: 'required',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Marks the checkbox group as required.',
      },
      {
        name: 'children',
        type: 'React.ReactNode',
        required: false,
        description: 'Checkbox elements inside the group.',
      },
    ],
  },
]
