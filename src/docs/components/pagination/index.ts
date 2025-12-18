import type { ComponentDoc } from '@/docs/schema'

import { paginationMetadata } from './metadata'
import { paginationProps } from './props'
import { paginationFeatures } from './features'
import { paginationExamples } from './examples'

export const doc: ComponentDoc = {
  ...paginationMetadata,
  propGroups: paginationProps,
  features: paginationFeatures,
  examples: paginationExamples,
}

// runtime-only
export { paginationDemos as demos } from './demos'
export { paginationConfig as config } from './config'
