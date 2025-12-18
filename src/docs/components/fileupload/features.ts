import type { Feature } from '@/docs/schema'

export const fileUploadFeatures: Feature[] = [
  {
    title: 'Drag & Drop Support',
    description:
      'Handles drag-enter, drag-leave, drag-over, and drop interactions with visual feedback.',
  },
  {
    title: 'Multiple File Upload',
    description:
      'Supports single or multiple file selection with optional max file limits.',
  },
  {
    title: 'File Validation',
    description:
      'Built-in file size validation with optional custom validation logic.',
  },
  {
    title: 'Image Previews',
    description:
      'Automatically generates preview thumbnails for supported image files.',
  },
  {
    title: 'Removable Files',
    description:
      'Users can remove selected files and the internal state updates automatically.',
  },
  {
    title: 'Variants & Sizes',
    description:
      'Supports default, filled, outlined, and ghost variants with sm–xl sizing.',
  },
  {
    title: 'Custom Rendering',
    description:
      'Replace the entire UI using a render prop while keeping upload logic intact.',
  },
  {
    title: 'Accessible & Form-Friendly',
    description:
      'Includes ARIA attributes, keyboard support, and integrates cleanly with forms.',
  },
]
