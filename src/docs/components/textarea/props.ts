import type { PropGroup } from '@/docs/schema'

export const textareaProps: PropGroup[] = [
  {
    component: 'Textarea',
    description: 'Props for the Textarea component.',
    props: [
      {
        name: 'variant',
        type: "'default' | 'filled' | 'outlined' | 'ghost'",
        default: "'default'",
        required: false,
        description: 'Visual style variant of the textarea.',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        required: false,
        description: 'Controls padding and font size.',
      },
      {
        name: 'resize',
        type: "'none' | 'vertical' | 'horizontal' | 'both'",
        default: "'vertical'",
        required: false,
        description: 'Controls how the textarea can be resized.',
      },
      {
        name: 'label',
        type: 'React.ReactNode',
        required: false,
        description: 'Label displayed above the textarea.',
      },
      {
        name: 'description',
        type: 'React.ReactNode',
        required: false,
        description: 'Helper description displayed above the textarea.',
      },
      {
        name: 'helperText',
        type: 'React.ReactNode',
        required: false,
        description: 'Helper text shown below the textarea when no error is present.',
      },
      {
        name: 'error',
        type: 'string | boolean',
        required: false,
        description: 'Displays error styling and an optional error message.',
      },
      {
        name: 'showCount',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Displays a live character counter.',
      },
      {
        name: 'autoResize',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Automatically grows textarea height based on content.',
      },
      {
        name: 'minRows',
        type: 'number',
        default: '3',
        required: false,
        description: 'Minimum number of rows when autoResize is enabled.',
      },
      {
        name: 'maxRows',
        type: 'number',
        required: false,
        description: 'Maximum number of rows when autoResize is enabled.',
      },
      {
        name: 'containerClassName',
        type: 'string',
        required: false,
        description: 'Custom classes applied to the wrapper container.',
      },
      {
        name: 'labelClassName',
        type: 'string',
        required: false,
        description: 'Custom classes applied to the label.',
      },
      {
        name: 'descriptionClassName',
        type: 'string',
        required: false,
        description: 'Custom classes applied to the description text.',
      },
      {
        name: 'errorClassName',
        type: 'string',
        required: false,
        description: 'Custom classes applied to the error message.',
      },
      {
        name: 'counterClassName',
        type: 'string',
        required: false,
        description: 'Custom classes applied to the character counter.',
      },
    ],
  },

  {
    component: 'TextareaNative',
    description: 'Native textarea behavior and HTML attributes.',
    props: [
      {
        name: 'value',
        type: 'string',
        required: false,
        description: 'Controlled textarea value.',
      },
      {
        name: 'defaultValue',
        type: 'string',
        required: false,
        description: 'Initial value for uncontrolled usage.',
      },
      {
        name: 'maxLength',
        type: 'number',
        required: false,
        description: 'Maximum allowed character length.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Disables the textarea.',
      },
      {
        name: 'required',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Marks the textarea as required.',
      },
      {
        name: 'onChange',
        type: '(e: React.ChangeEvent<HTMLTextAreaElement>) => void',
        required: false,
        description: 'Fires whenever the textarea value changes.',
      },
      {
        name: '...rest',
        type: 'TextareaHTMLAttributes<HTMLTextAreaElement>',
        required: false,
        description: 'Any other native textarea attributes.',
      },
    ],
  },
]
