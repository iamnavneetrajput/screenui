import type { PropGroup } from '@/docs/schema'

export const buttonProps: PropGroup[] = [
  {
    component: 'Button',
    description: 'Props for the Button root component.',
    props: [
      {
        name: 'variant',
        type: "'solid' | 'outline' | 'ghost' | 'link' | 'soft'",
        default: "'solid'",
        required: false,
        description: 'Visual style of the button.',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg' | 'xl' | 'icon'",
        default: "'md'",
        required: false,
        description: 'Controls button dimensions, spacing, and font size.',
      },
      {
        name: 'rounded',
        type: "'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'",
        default: "'md'",
        required: false,
        description: 'Controls border-radius of the button.',
      },
      {
        name: 'fullWidth',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Expands the button to fill its container width.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Disables button interactions.',
      },
      {
        name: 'loading',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Disables interaction and displays a loading spinner.',
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Custom classes applied to the button element.',
      },
    ],
  },

  {
    component: 'ButtonIcon',
    description: 'Icon-related props for the Button component.',
    props: [
      {
        name: 'icon',
        type: 'React.ReactNode',
        required: false,
        description: 'Optional icon displayed before or after the label.',
      },
      {
        name: 'iconPosition',
        type: "'left' | 'right'",
        default: "'left'",
        required: false,
        description: 'Placement of the icon relative to the label.',
      },
    ],
  },

  {
    component: 'ButtonLoading',
    description: 'Advanced loading state configuration.',
    props: [
      {
        name: 'loadingIcon',
        type: 'React.ReactNode',
        required: false,
        description: 'Custom loading indicator node.',
      },
      {
        name: 'showIconOnLoading',
        type: 'boolean',
        default: 'false',
        required: false,
        description:
          'Shows the original icon while loading instead of the spinner.',
      },
      {
        name: 'loadingText',
        type: 'string',
        required: false,
        description:
          'Screen-reader text announced while the button is in loading state.',
      },
    ],
  },

  {
    component: 'ButtonPolymorphic',
    description: 'Polymorphic rendering and composition.',
    props: [
      {
        name: 'as',
        type: "'button' | 'a'",
        default: "'button'",
        required: false,
        description:
          'Renders as a native button or anchor element with correct semantics.',
      },
      {
        name: 'asChild',
        type: 'boolean',
        default: 'false',
        required: false,
        description:
          'Renders children directly using Slot for advanced composition.',
      },
    ],
  },

  {
    component: 'ButtonAccessibility',
    description: 'Accessibility-specific requirements.',
    props: [
      {
        name: 'aria-label',
        type: 'string',
        required: false,
        description:
          'Required when using icon-only buttons for accessibility.',
      },
    ],
  },

  {
    component: 'ButtonContent',
    description: 'Standard React content props.',
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        required: false,
        description: 'Button label or custom content.',
      },
    ],
  },
]
