import type { ComponentDoc } from '@/docs/schema'

import { selectMetadata } from './metadata'
import { selectProps } from './props'
import { selectFeatures } from './features'
import { selectExamples } from './examples'

export const doc: ComponentDoc = {
  ...selectMetadata,
  propGroups: selectProps,
  features: selectFeatures,
  examples: selectExamples,
}

// runtime-only exports
export { selectDemos as demos } from './demos'
export { selectConfig as config } from './config'
