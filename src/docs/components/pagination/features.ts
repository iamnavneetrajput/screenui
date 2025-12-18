import type { Feature } from '@/docs/schema'

export const paginationFeatures: Feature[] = [
  {
    title: 'Styled Pagination',
    description:
      'Full-featured pagination UI with variants, sizes, ellipsis handling, and numbered page buttons.',
  },
  {
    title: 'Headless Mode',
    description:
      'Render pagination with complete UI control using a render function while preserving logic.',
  },
  {
    title: 'Ellipsis Logic',
    description:
      'Automatically collapses long page ranges using centered ellipsis around the active page.',
  },
  {
    title: 'Accessible Controls',
    description:
      'Built-in keyboard navigation, focus management, and ARIA labels.',
  },
  {
    title: 'Disabled State Handling',
    description:
      'Disables all navigation controls consistently when pagination is inactive.',
  },
  {
    title: 'SimplePagination',
    description:
      'Minimal previous/next pagination for lightweight interfaces.',
  },
  {
    title: 'CompactPagination',
    description:
      'Compact pagination with numeric input for large datasets.',
  },
  {
    title: 'Variants & Sizes',
    description:
      'Supports default, outlined, and ghost variants with multiple size options.',
  },
  {
    title: 'First & Last Controls',
    description:
      'Optional controls to jump directly to the first or last page.',
  },
  {
    title: 'usePagination Hook',
    description:
      'Manages pagination state, clamps page bounds, and slices data automatically.',
  },
]
