import type { ComponentDoc } from '@/docs/schema'

import { checkboxMetadata } from './metadata'
import { checkboxProps } from './props'
import { checkboxFeatures } from './features'
import { checkboxExamples } from './examples'

export const doc: ComponentDoc = {
  ...checkboxMetadata,
  propGroups: checkboxProps,
  features: checkboxFeatures,
  examples: checkboxExamples,
}

// runtime-only
export { checkboxDemos as demos } from './demos'
export { checkboxConfig as config } from './config'
