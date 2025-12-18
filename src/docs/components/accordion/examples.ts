import type { Example } from '@/docs/schema'

// Shared code snippets (TS === JS)

const accordionSingleCode = `
'use client'

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/accordion'

export function AccordionSingle() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full max-w-2xl divide-y divide-border"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          What is ScreenUI?
        </AccordionTrigger>
        <AccordionContent>
          ScreenUI is a modern UI component library and scaffolding tool.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>
          Why use ScreenUI?
        </AccordionTrigger>
        <AccordionContent>
          It removes boilerplate and speeds up UI development.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
`.trim()

const accordionMultipleCode = `
'use client'

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/accordion'

export function AccordionMultiple() {
  return (
    <Accordion
      type="multiple"
      defaultValue={['item-1']}
      className="w-full max-w-2xl divide-y divide-border"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          How does the CLI work?
        </AccordionTrigger>
        <AccordionContent>
          The CLI generates components directly into your project.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>
          Is ScreenUI open source?
        </AccordionTrigger>
        <AccordionContent>
          Yes, ScreenUI is fully open source and community-driven.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
`.trim()

// Export examples

export const accordionExamples: Example[] = [
  {
    id: 'single',
    title: 'Single Accordion',
    description: 'An accordion where only one item can be open at a time.',
    code: [
      { language: 'typescript', code: accordionSingleCode },
      { language: 'javascript', code: accordionSingleCode },
    ],
  },
  {
    id: 'multiple',
    title: 'Multiple Accordion',
    description: 'An accordion where multiple items can be expanded at once.',
    code: [
      { language: 'typescript', code: accordionMultipleCode },
      { language: 'javascript', code: accordionMultipleCode },
    ],
  },
]
