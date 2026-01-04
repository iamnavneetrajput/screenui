import type { ComponentDoc } from '@/docs/schema'

import { stepcardMetadata } from './metadata'
import { stepcardProps } from './props'
import { stepcardFeatures } from './features'
import { stepcardExamples } from './examples'

export const doc: ComponentDoc = {
  ...stepcardMetadata,
  propGroups: stepcardProps,
  features: stepcardFeatures,
  examples: stepcardExamples,
}

export { stepcardDemos as demos } from './demos'
export { stepcardConfig as config } from './config'
