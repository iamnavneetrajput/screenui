import type { ComponentDoc } from '@/docs/schema'

import { toggleMetadata } from './metadata'
import { toggleProps } from './props'
import { toggleFeatures } from './features'
import { toggleExamples } from './examples'

export const doc: ComponentDoc = {
  ...toggleMetadata,
  propGroups: toggleProps,
  features: toggleFeatures,
  examples: toggleExamples,
}

// runtime-only
export { toggleDemos as demos } from './demos'
export { toggleConfig as config } from './config'
