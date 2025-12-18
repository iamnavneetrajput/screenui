// docs/components/alert/index.ts
import type { ComponentDoc } from '@/docs/schema'

import { alertMetadata } from './metadata'
import { alertProps } from './props'
import { alertFeatures } from './features'
import { alertExamples } from './examples'

// Combine everything into one document
export const doc: ComponentDoc = {
  ...alertMetadata,
  propGroups: alertProps,
  features: alertFeatures,
  examples: alertExamples,
}

// Re-export runtime pieces
export { alertDemos as demos } from './demos'
export { alertConfig as config } from './config'
