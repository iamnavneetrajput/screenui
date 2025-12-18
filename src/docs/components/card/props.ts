import type { PropGroup } from '@/docs/schema'

export const cardProps: PropGroup[] = [
  {
    component: 'Card',
    description: 'Root container props for the Card component.',
    props: [
      {
        name: 'variant',
        type: "'elevated' | 'outlined' | 'filled' | 'ghost'",
        default: "'elevated'",
        required: false,
        description: 'Visual style of the card surface.',
      },
      {
        name: 'padding',
        type: "'none' | 'sm' | 'md' | 'lg' | 'xl'",
        default: "'md'",
        required: false,
        description: 'Controls internal padding of the card.',
      },
      {
        name: 'interactive',
        type: 'boolean',
        default: 'false',
        required: false,
        description:
          'Enables keyboard and pointer interaction when onClick is provided.',
      },
      {
        name: 'hover',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Adds an enhanced shadow effect on hover.',
      },
      {
        name: 'fullWidth',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Expands the card to fill its container width.',
      },
      {
        name: 'as',
        type: "'div' | 'article' | 'section'",
        default: "'div'",
        required: false,
        description: 'Polymorphic root element.',
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Custom classes applied to the card container.',
      },
    ],
  },

  {
    component: 'CardHeader',
    description: 'Header section for titles, actions, or media.',
    props: [
      {
        name: 'spacing',
        type: "'none' | 'sm' | 'md' | 'lg' | 'xl'",
        default: "'md'",
        required: false,
        description: 'Spacing below the header.',
      },
      {
        name: 'align',
        type: "'start' | 'center' | 'end' | 'between'",
        default: "'start'",
        required: false,
        description: 'Alignment of header content.',
      },
      {
        name: 'as',
        type: "'div' | 'header'",
        default: "'div'",
        required: false,
        description: 'Element rendered for the header.',
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Custom header styles.',
      },
    ],
  },

  {
    component: 'CardTitle',
    description: 'Primary heading inside the card.',
    props: [
      {
        name: 'size',
        type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",
        default: "'md'",
        required: false,
        description: 'Font size scale.',
      },
      {
        name: 'truncate',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Prevents text wrapping.',
      },
      {
        name: 'as',
        type: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'",
        default: "'h3'",
        required: false,
        description: 'Semantic element to render.',
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Custom title styles.',
      },
    ],
  },

  {
    component: 'CardDescription',
    description: 'Supporting text below the title.',
    props: [
      {
        name: 'size',
        type: "'xs' | 'sm' | 'md' | 'lg'",
        default: "'sm'",
        required: false,
        description: 'Text size.',
      },
      {
        name: 'spacing',
        type: "'none' | 'xs' | 'sm' | 'md' | 'lg'",
        default: "'sm'",
        required: false,
        description: 'Spacing relative to the title.',
      },
      {
        name: 'truncate',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Prevents text wrapping.',
      },
      {
        name: 'as',
        type: "'p' | 'span' | 'div'",
        default: "'p'",
        required: false,
        description: 'Element to render.',
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Custom description styles.',
      },
    ],
  },

  {
    component: 'CardContent',
    description: 'Main body content of the card.',
    props: [
      {
        name: 'size',
        type: "'xs' | 'sm' | 'md' | 'lg'",
        default: "'md'",
        required: false,
        description: 'Text size inside the content area.',
      },
      {
        name: 'spacing',
        type: "'none' | 'sm' | 'md' | 'lg'",
        default: "'none'",
        required: false,
        description: 'Vertical spacing between children.',
      },
      {
        name: 'as',
        type: "'div' | 'section'",
        default: "'div'",
        required: false,
        description: 'Wrapper element.',
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Custom content styles.',
      },
    ],
  },

  {
    component: 'CardFooter',
    description: 'Footer section for actions and metadata.',
    props: [
      {
        name: 'spacing',
        type: "'none' | 'sm' | 'md' | 'lg' | 'xl'",
        default: "'md'",
        required: false,
        description: 'Spacing above the footer.',
      },
      {
        name: 'align',
        type: "'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'",
        default: "'start'",
        required: false,
        description: 'Alignment of footer content.',
      },
      {
        name: 'direction',
        type: "'row' | 'col'",
        default: "'row'",
        required: false,
        description: 'Layout direction.',
      },
      {
        name: 'gap',
        type: "'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'",
        default: "'sm'",
        required: false,
        description: 'Spacing between footer items.',
      },
      {
        name: 'wrap',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Allows footer content to wrap.',
      },
      {
        name: 'as',
        type: "'div' | 'footer'",
        default: "'div'",
        required: false,
        description: 'Element to render.',
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Custom footer styles.',
      },
    ],
  },

  {
    component: 'CardImage',
    description: 'Image utility component for cards.',
    props: [
      {
        name: 'height',
        type: "'sm' | 'md' | 'lg' | 'xl' | 'auto'",
        default: "'md'",
        required: false,
        description: 'Fixed height or auto sizing.',
      },
      {
        name: 'aspectRatio',
        type: "'square' | 'video' | 'auto'",
        default: "'auto'",
        required: false,
        description: 'Constrains image aspect ratio.',
      },
      {
        name: 'position',
        type: "'top' | 'center' | 'bottom'",
        default: "'center'",
        required: false,
        description: 'Object-fit alignment.',
      },
      {
        name: 'alt',
        type: 'string',
        required: true,
        description: 'Image alt text.',
      },
      {
        name: 'loading',
        type: "'lazy' | 'eager'",
        default: "'lazy'",
        required: false,
        description: 'Browser image loading behavior.',
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Custom image styles.',
      },
    ],
  },

  {
    component: 'CardDivider',
    description: 'Visual separator between card sections.',
    props: [
      {
        name: 'spacing',
        type: "'none' | 'sm' | 'md' | 'lg'",
        default: "'md'",
        required: false,
        description: 'Spacing around the divider.',
      },
      {
        name: 'orientation',
        type: "'horizontal' | 'vertical'",
        default: "'horizontal'",
        required: false,
        description: 'Divider direction.',
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Custom divider styles.',
      },
    ],
  },
]
