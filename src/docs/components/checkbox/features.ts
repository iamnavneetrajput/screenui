import type { Feature } from '@/docs/schema'

export const checkboxFeatures: Feature[] = [
  {
    title: 'Multiple Variants',
    description:
      'Default, outline, filled, and soft variants support different visual contexts.',
  },
  {
    title: 'Accessible by Default',
    description:
      'Includes proper labeling, keyboard navigation, and ARIA attributes.',
  },
  {
    title: 'Indeterminate State',
    description:
      'Built-in tri-state logic for partial selections.',
  },
  {
    title: 'Label & Description Support',
    description:
      'Attach labels and helper text for clarity and form validation.',
  },
  {
    title: 'Checkbox Groups',
    description:
      'Group related checkboxes with shared labels, descriptions, and error states.',
  },
  {
    title: 'Custom Styling',
    description:
      'Fully themeable using Tailwind utilities and CVA variants.',
  },
]
