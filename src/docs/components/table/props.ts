import type { PropGroup } from '@/docs/schema'

export const tableProps: PropGroup[] = [
  {
    component: 'Table',
    description: 'Props for the Table root component.',
    props: [
      {
        name: 'columns',
        type: 'TableColumn<T>[]',
        required: true,
        description: 'Column definitions including title, key, sorting, and render.',
      },
      {
        name: 'data',
        type: 'T[]',
        required: true,
        description: 'Array of records rendered as table rows.',
      },
      {
        name: 'variant',
        type: "'default' | 'bordered' | 'striped' | 'minimal'",
        default: "'default'",
        required: false,
        description: 'Visual style of the table.',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        required: false,
        description: 'Controls cell padding and font size.',
      },
      {
        name: 'loading',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Displays a loading row when true.',
      },
      {
        name: 'emptyText',
        type: 'string',
        default: "'No data'",
        required: false,
        description: 'Text shown when no records are available.',
      },
      {
        name: 'selectable',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Enables row selection via checkboxes.',
      },
      {
        name: 'selectedRows',
        type: 'string[]',
        default: '[]',
        required: false,
        description: 'Controlled selected row keys.',
      },
      {
        name: 'onSelectChange',
        type: '(keys: string[]) => void',
        required: false,
        description: 'Called when row selection changes.',
      },
      {
        name: 'rowKey',
        type: 'string | (record: T) => string',
        default: "'id'",
        required: false,
        description: 'Determines how row identity is derived.',
      },
      {
        name: 'pagination',
        type:
          'false | { current?: number; pageSize?: number; total?: number; onChange?: (page: number, pageSize: number) => void }',
        default: 'false',
        required: false,
        description: 'Enables built-in pagination.',
      },
      {
        name: 'sticky',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Makes the table header sticky when scrolling.',
      },
      {
        name: 'caption',
        type: 'string',
        required: false,
        description: 'Accessible caption for screen readers.',
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Custom classes applied to the table element.',
      },
      {
        name: 'containerClassName',
        type: 'string',
        required: false,
        description: 'Classes applied to the scroll container.',
      },
    ],
  },
]
