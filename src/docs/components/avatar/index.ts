// docs/components/avatar/index.ts
import type { ComponentDoc } from '@/docs/schema'

import { avatarMetadata } from './metadata'
import { avatarProps } from './props'
import { avatarFeatures } from './features'
import { avatarExamples } from './examples'

export const doc: ComponentDoc = {
  ...avatarMetadata,
  propGroups: avatarProps,
  features: avatarFeatures,
  examples: avatarExamples,
}

// Runtime exports
export { avatarDemos as demos } from './demos'
export { avatarConfig as config } from './config'
