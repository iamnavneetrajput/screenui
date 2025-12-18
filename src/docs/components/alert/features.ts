// docs/components/alert/features.ts
import type { Feature } from '@/docs/schema'

export const alertFeatures: Feature[] = [
  {
    title: 'Multiple Variants',
    description:
      'Default, filled, outlined, soft, and glass styles provide broad design flexibility.',
  },
  {
    title: 'Status Colors',
    description:
      'Supports info, success, warning, and error states with predefined color mappings and icons.',
  },
  {
    title: 'Dismissible Alerts',
    description:
      'Optional close button with smooth exit animations and auto-dismiss support.',
  },
  {
    title: 'Icon Support',
    description:
      'Uses built-in SVG icons or accepts fully custom icons.',
  },
  {
    title: 'Accessible by Default',
    description:
      'Applies proper ARIA roles and structured content for assistive technologies.',
  },
  {
    title: 'Compound Variant System',
    description:
      'Variants and color states combine cleanly using class-variance-authority.',
  },
  {
    title: 'Composable Structure',
    description:
      'AlertTitle, AlertDescription, and AlertActions allow semantic layouts.',
  },
  {
    title: 'Theme Friendly',
    description:
      'Integrates seamlessly with Tailwind design tokens and CSS variables.',
  },
  {
    title: 'Zero External Dependencies',
    description:
      'Built with React and Tailwind utilities only.',
  },
]
