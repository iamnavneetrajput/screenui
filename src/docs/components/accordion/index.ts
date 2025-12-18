import type { ComponentDoc } from '@/docs/schema'
import { accordionMetadata } from './metadata'
import { accordionProps } from './props'
import { accordionFeatures } from './features'
import { accordionExamples } from './examples'

// Combine all parts into single doc
export const doc: ComponentDoc = {
  ...accordionMetadata,
  propGroups: accordionProps,
  features: accordionFeatures,
  examples: accordionExamples,
}

// Re-export demos and config
export { accordionDemos as demos } from './demos'
export { accordionConfig as config } from './config'