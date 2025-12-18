import type { PropGroup } from '@/docs/schema'

export const accordionProps: PropGroup[] = [
  {
    component: 'Accordion',
    description: 'Props for the Accordion root component',
    props: [
      {
        name: 'variant',
        type: "'default' | 'separated' | 'bordered' | 'ghost'",
        default: "'default'",
        required: false,
        description: 'Visual style of the accordion container.',
      },
      {
        name: 'type',
        type: "'single' | 'multiple'",
        default: "'single'",
        required: false,
        description: 'Allows one (single) or many (multiple) items to be open.',
      },
      {
        name: 'value',
        type: 'string | string[]',
        required: false,
        description: 'Controlled open item(s).',
      },
      {
        name: 'defaultValue',
        type: 'string | string[]',
        required: false,
        description: 'Initial open item(s) in uncontrolled mode.',
      },
      {
        name: 'collapsible',
        type: 'boolean',
        default: 'false',
        required: false,
        description: "Allows collapsing the currently open item when using type='single'.",
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Disables the entire accordion.',
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Custom classes for the accordion wrapper.',
      },
    ],
  },
  {
    component: 'AccordionItem',
    description: 'Props for individual items within the Accordion.',
    props: [
      {
        name: 'value',
        type: 'string',
        required: true,
        description: 'Unique identifier for the accordion item.',
      },
      {
        name: 'variant',
        type: "'default' | 'separated' | 'bordered' | 'ghost'",
        default: "'default'",
        required: false,
        description: 'Visual style for the item container.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Disables this specific item.',
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Custom classes applied to the item wrapper.',
      },
    ],
  },
  {
    component: 'AccordionTrigger',
    description: 'Props for the clickable header that opens and closes an item.',
    props: [
      {
        name: 'icon',
        type: 'React.ReactNode',
        required: false,
        description: 'Custom icon to replace the default chevron.',
      },
      {
        name: 'iconPosition',
        type: "'left' | 'right'",
        default: "'right'",
        required: false,
        description: 'Controls icon placement relative to label.',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        required: false,
        description: 'Controls spacing and font size.',
      },
    ],
  },
  {
    component: 'AccordionContent',
    description: 'Props for the animated content region of an item.',
    props: [
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        required: false,
        description: 'Controls text size.',
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Custom classes applied to the content wrapper.',
      },
    ],
  },
]