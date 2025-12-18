import type { Feature } from '@/docs/schema'

export const modalFeatures: Feature[] = [
  {
    title: 'Accessible by Default',
    description:
      'Implements focus trapping, aria-labelledby, aria-describedby, and proper role="dialog" semantics.',
  },
  {
    title: 'Focus Management',
    description:
      'Automatically moves focus into the modal on open, restores focus on close, and traps tab navigation.',
  },
  {
    title: 'Keyboard Support',
    description:
      'Supports Escape-to-close and full Tab / Shift+Tab focus cycling.',
  },
  {
    title: 'Portal Rendering',
    description:
      'Renders outside the DOM hierarchy using document.body or a custom container.',
  },
  {
    title: 'Scroll Locking',
    description:
      'Prevents background scrolling and compensates for scrollbar width to avoid layout shift.',
  },
  {
    title: 'Overlay Interaction',
    description:
      'Optionally closes when clicking the backdrop overlay.',
  },
  {
    title: 'Composable Layout',
    description:
      'Includes ModalHeader, ModalBody, and ModalFooter for structured layouts.',
  },
  {
    title: 'Multiple Sizes',
    description:
      'Supports sm through 4xl widths, plus full-screen mode.',
  },
  {
    title: 'Styling Overrides',
    description:
      'Independently customize modal container, overlay, header, body, and footer.',
  },
  {
    title: 'Confirm Dialog Support',
    description:
      'Provides a higher-level confirmation pattern built on top of Modal.',
  },
]
