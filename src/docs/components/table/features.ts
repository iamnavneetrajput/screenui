import type { Feature } from '@/docs/schema'

export const tableFeatures: Feature[] = [
  {
    title: 'Configurable Columns',
    description:
      'Each column supports sorting, alignment, width, and custom render callbacks.',
  },
  {
    title: 'Built-in Sorting',
    description:
      'Toggle ascending, descending, or no-sort states per sortable column.',
  },
  {
    title: 'Row Selection',
    description:
      'Optional checkbox-based row selection with controlled state.',
  },
  {
    title: 'Pagination',
    description:
      'Built-in pagination with controlled current page and page size.',
  },
  {
    title: 'Custom Cell Rendering',
    description:
      'Render any React node inside table cells using the render callback.',
  },
  {
    title: 'Variants & Sizes',
    description:
      'Supports default, bordered, striped, and minimal variants with size controls.',
  },
  {
    title: 'Accessible by Default',
    description:
      'ARIA sorting attributes, keyboard navigation, and screen-reader support.',
  },
]
