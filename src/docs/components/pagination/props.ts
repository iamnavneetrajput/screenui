import type { PropGroup } from '@/docs/schema'

export const paginationProps: PropGroup[] = [
  {
    component: 'Pagination',
    description: 'Props for the styled Pagination component.',
    props: [
      {
        name: 'currentPage',
        type: 'number',
        required: true,
        description: 'The currently active page number.',
      },
      {
        name: 'totalPages',
        type: 'number',
        required: true,
        description: 'Total number of available pages.',
      },
      {
        name: 'onPageChange',
        type: '(page: number) => void',
        required: true,
        description: 'Called when the page changes.',
      },
      {
        name: 'totalItems',
        type: 'number',
        required: false,
        description: 'Optional total item count used for info displays.',
      },
      {
        name: 'pageSize',
        type: 'number',
        required: false,
        description: 'Items per page when showing item ranges.',
      },
      {
        name: 'variant',
        type: "'default' | 'outlined' | 'ghost'",
        default: "'default'",
        required: false,
        description: 'Visual style of pagination controls.',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        required: false,
        description: 'Controls button size and spacing.',
      },
      {
        name: 'showFirstLast',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Shows first and last page controls.',
      },
      {
        name: 'showPrevNext',
        type: 'boolean',
        default: 'true',
        required: false,
        description: 'Shows previous and next controls.',
      },
      {
        name: 'showPageInfo',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Displays “Page X of Y” text.',
      },
      {
        name: 'showItemsInfo',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Displays item range information.',
      },
      {
        name: 'maxVisiblePages',
        type: 'number',
        default: '7',
        required: false,
        description: 'Maximum number of page buttons shown.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Disables all pagination controls.',
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Custom wrapper classes.',
      },
    ],
  },

  {
    component: 'Pagination (Headless)',
    description: 'Props when using Pagination in headless render mode.',
    props: [
      {
        name: 'render',
        type: '(ctx) => React.ReactNode',
        required: true,
        description:
          'Custom render function providing full pagination control.',
      },
      {
        name: 'currentPage',
        type: 'number',
        required: true,
        description: 'Controlled page state.',
      },
      {
        name: 'totalPages',
        type: 'number',
        required: true,
        description: 'Total number of pages.',
      },
      {
        name: 'onPageChange',
        type: '(page: number) => void',
        required: true,
        description: 'Handles page updates.',
      },
      {
        name: 'maxVisiblePages',
        type: 'number',
        required: false,
        description: 'Maximum displayed page buttons.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Disables pagination logic.',
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Wrapper class overrides.',
      },
    ],
  },

  {
    component: 'SimplePagination',
    description: 'Minimal previous/next pagination controls.',
    props: [
      {
        name: 'currentPage',
        type: 'number',
        required: true,
        description: 'Active page.',
      },
      {
        name: 'totalPages',
        type: 'number',
        required: true,
        description: 'Total page count.',
      },
      {
        name: 'onPageChange',
        type: '(page: number) => void',
        required: true,
        description: 'Handles page changes.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Disables navigation.',
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Layout styling.',
      },
    ],
  },

  {
    component: 'CompactPagination',
    description: 'Compact pagination with numeric input.',
    props: [
      {
        name: 'currentPage',
        type: 'number',
        required: true,
        description: 'Active page.',
      },
      {
        name: 'totalPages',
        type: 'number',
        required: true,
        description: 'Total page count.',
      },
      {
        name: 'onPageChange',
        type: '(page: number) => void',
        required: true,
        description: 'Handles page changes.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Disables controls and input.',
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Custom styling.',
      },
    ],
  },

  {
    component: 'usePagination',
    description: 'Hook for managing paginated data.',
    props: [
      {
        name: 'data',
        type: 'T[]',
        required: true,
        description: 'Input array to paginate.',
      },
      {
        name: 'totalItems',
        type: 'number',
        required: true,
        description: 'Total number of items.',
      },
      {
        name: 'pageSize',
        type: 'number',
        default: '10',
        required: false,
        description: 'Items per page.',
      },
      {
        name: 'initialPage',
        type: 'number',
        default: '1',
        required: false,
        description: 'Starting page.',
      },
    ],
  },
]
