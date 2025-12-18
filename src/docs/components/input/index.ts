import type { ComponentDoc } from '@/docs/schema'

import { inputMetadata } from './metadata'
import { inputProps } from './props'
import { inputFeatures } from './features'
import { inputExamples } from './examples'

export const doc: ComponentDoc = {
  ...inputMetadata,
  propGroups: inputProps,
  features: inputFeatures,
  examples: inputExamples,
}

// runtime-only exports
export { inputDemos as demos } from './demos'
export { inputConfig as config } from './config'
