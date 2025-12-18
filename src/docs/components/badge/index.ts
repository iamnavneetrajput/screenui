import type { ComponentDoc } from '@/docs/schema'

import { badgeMetadata } from './metadata'
import { badgeProps } from './props'
import { badgeFeatures } from './features'
import { badgeExamples } from './examples'

export const doc: ComponentDoc = {
  ...badgeMetadata,
  propGroups: badgeProps,
  features: badgeFeatures,
  examples: badgeExamples,
}

// runtime-only exports
export { badgeDemos as demos } from './demos'
export { badgeConfig as config } from './config'
