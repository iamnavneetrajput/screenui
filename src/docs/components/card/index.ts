import type { ComponentDoc } from '@/docs/schema'

import { cardMetadata } from './metadata'
import { cardProps } from './props'
import { cardFeatures } from './features'
import { cardExamples } from './examples'

export const doc: ComponentDoc = {
  ...cardMetadata,
  propGroups: cardProps,
  features: cardFeatures,
  examples: cardExamples,
}

// runtime-only
export { cardDemos as demos } from './demos'
export { cardConfig as config } from './config'
