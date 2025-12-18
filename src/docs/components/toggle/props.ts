import type { PropGroup } from '@/docs/schema'

export const toggleProps: PropGroup[] = [
  {
    component: 'Toggle',
    description: 'Core props for the Toggle component.',
    props: [
      {
        name: 'checked',
        type: 'boolean',
        required: false,
        description: 'Controlled checked state of the toggle.',
      },
      {
        name: 'defaultChecked',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Initial checked value for uncontrolled usage.',
      },
      {
        name: 'onChange',
        type: '(checked: boolean) => void',
        required: false,
        description: 'Called whenever the toggle state changes.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Disables toggle interaction and focus behavior.',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg' | 'xl'",
        default: "'md'",
        required: false,
        description: 'Controls overall toggle dimensions.',
      },
      {
        name: 'color',
        type: "'primary' | 'success'",
        default: "'primary'",
        required: false,
        description: 'Semantic color used when the toggle is enabled.',
      },
      {
        name: 'label',
        type: 'string',
        required: false,
        description: 'Optional label displayed next to the toggle.',
      },
      {
        name: 'labelPosition',
        type: "'left' | 'right'",
        default: "'right'",
        required: false,
        description: 'Position of the label relative to the toggle.',
      },
      {
        name: 'required',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Marks the toggle as required in forms.',
      },
      {
        name: 'name',
        type: 'string',
        required: false,
        description: 'Adds a hidden checkbox input for form submission.',
      },
      {
        name: 'value',
        type: 'string',
        required: false,
        description: 'Value submitted when the toggle is checked.',
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Custom classes applied to the root wrapper.',
      },
      {
        name: 'toggleClassName',
        type: 'string',
        required: false,
        description: 'Custom classes applied to the toggle track.',
      },
      {
        name: 'thumbClassName',
        type: 'string',
        required: false,
        description: 'Custom classes applied to the toggle thumb.',
      },
    ],
  },

  {
    component: 'ToggleHeadless',
    description: 'Headless rendering via render prop.',
    props: [
      {
        name: 'render',
        type: '(ctx: { checked: boolean; toggle: () => void; disabled: boolean; isControlled: boolean }) => React.ReactNode',
        required: true,
        description:
          'Replaces the entire UI while preserving toggle state and logic.',
      },
    ],
  },

  {
    component: 'ToggleGroup',
    description: 'Grouping and layout props for multiple toggles.',
    props: [
      {
        name: 'orientation',
        type: "'horizontal' | 'vertical'",
        default: "'vertical'",
        required: false,
        description: 'Layout direction of grouped toggles.',
      },
      {
        name: 'gap',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        required: false,
        description: 'Spacing between toggles in the group.',
      },
      {
        name: 'label',
        type: 'string',
        required: false,
        description: 'Optional group label.',
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Custom wrapper classes for the group.',
      },
      {
        name: 'children',
        type: 'React.ReactNode',
        required: true,
        description: 'Toggle elements inside the group.',
      },
    ],
  },
]
