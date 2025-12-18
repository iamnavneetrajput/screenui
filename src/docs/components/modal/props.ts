import type { PropGroup } from '@/docs/schema'

export const modalProps: PropGroup[] = [
  {
    component: 'Modal',
    description: 'Root modal container and behavior control.',
    props: [
      {
        name: 'open',
        type: 'boolean',
        required: true,
        description: 'Controls whether the modal is visible.',
      },
      {
        name: 'onClose',
        type: '() => void',
        required: true,
        description:
          'Called when the modal requests to close (overlay click, escape key, or close button).',
      },
      {
        name: 'size',
        type:
          "'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'full'",
        default: "'md'",
        required: false,
        description: 'Controls modal width and full-screen behavior.',
      },
      {
        name: 'centered',
        type: 'boolean',
        default: 'true',
        required: false,
        description: 'Centers the modal vertically when true.',
      },
      {
        name: 'closeOnOverlayClick',
        type: 'boolean',
        default: 'true',
        required: false,
        description: 'Closes the modal when clicking the backdrop.',
      },
      {
        name: 'closeOnEscape',
        type: 'boolean',
        default: 'true',
        required: false,
        description: 'Closes the modal when pressing the Escape key.',
      },
      {
        name: 'showCloseButton',
        type: 'boolean',
        default: 'true',
        required: false,
        description: 'Displays a close button in the top-right corner.',
      },
      {
        name: 'preventScroll',
        type: 'boolean',
        default: 'true',
        required: false,
        description:
          'Locks background scrolling and prevents layout shift.',
      },
      {
        name: 'blur',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Applies a backdrop blur behind the modal.',
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Custom classes for the modal content container.',
      },
      {
        name: 'overlayClassName',
        type: 'string',
        required: false,
        description: 'Custom classes for the backdrop overlay.',
      },
      {
        name: 'title',
        type: 'string',
        required: false,
        description:
          'Accessible modal title for screen readers.',
      },
      {
        name: 'description',
        type: 'string',
        required: false,
        description:
          'Accessible modal description for screen readers.',
      },
      {
        name: 'container',
        type: 'HTMLElement',
        required: false,
        description:
          'Custom portal mount node. Defaults to document.body.',
      },
    ],
  },

  {
    component: 'ModalHeader',
    description: 'Header section for titles and close controls.',
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        required: true,
        description: 'Header content, typically a title.',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg' | 'xl'",
        default: "'md'",
        required: false,
        description: 'Controls padding and spacing.',
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Custom header styling.',
      },
    ],
  },

  {
    component: 'ModalBody',
    description: 'Scrollable main content area.',
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        required: true,
        description: 'Main modal content.',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg' | 'xl'",
        default: "'md'",
        required: false,
        description: 'Controls padding size.',
      },
      {
        name: 'noPadding',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Removes internal padding for custom layouts.',
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Custom body styling.',
      },
    ],
  },

  {
    component: 'ModalFooter',
    description: 'Footer section for actions and controls.',
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        required: true,
        description: 'Footer actions such as buttons.',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg' | 'xl'",
        default: "'md'",
        required: false,
        description: 'Controls padding size.',
      },
      {
        name: 'align',
        type: "'left' | 'center' | 'right' | 'between'",
        default: "'right'",
        required: false,
        description: 'Alignment of footer actions.',
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Custom footer styling.',
      },
    ],
  },

  {
    component: 'ConfirmDialog',
    description: 'High-level confirmation dialog built on Modal.',
    props: [
      {
        name: 'open',
        type: 'boolean',
        required: true,
        description: 'Controls visibility.',
      },
      {
        name: 'onClose',
        type: '() => void',
        required: true,
        description: 'Closes the dialog.',
      },
      {
        name: 'onConfirm',
        type: '() => void',
        required: true,
        description: 'Called when the confirm action is triggered.',
      },
      {
        name: 'title',
        type: 'string',
        required: true,
        description: 'Dialog title.',
      },
      {
        name: 'message',
        type: 'string',
        required: true,
        description: 'Confirmation message.',
      },
      {
        name: 'confirmText',
        type: 'string',
        default: "'Confirm'",
        required: false,
        description: 'Confirm button label.',
      },
      {
        name: 'cancelText',
        type: 'string',
        default: "'Cancel'",
        required: false,
        description: 'Cancel button label.',
      },
      {
        name: 'variant',
        type: "'danger' | 'warning' | 'info'",
        default: "'danger'",
        required: false,
        description: 'Visual intent of the confirm action.',
      },
    ],
  },
]
