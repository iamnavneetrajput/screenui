import type { ComponentDoc } from '@/docs/schema'

import { tabsMetadata } from './metadata'
import { tabsProps } from './props'
import { tabsFeatures } from './features'
import { tabsExamples } from './examples'

export const doc: ComponentDoc = {
  ...tabsMetadata,
  propGroups: tabsProps,
  features: tabsFeatures,
  examples: tabsExamples,
}

export { tabsDemos as demos } from './demos'
export { tabsConfig as config } from './config'
