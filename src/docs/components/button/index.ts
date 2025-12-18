import type { ComponentDoc } from '@/docs/schema'
import { buttonMetadata } from './metadata'
import { buttonProps } from './props'
import { buttonFeatures } from './features'
import { buttonExamples } from './examples'

export const doc: ComponentDoc = {
  ...buttonMetadata,
  propGroups: buttonProps,
  features: buttonFeatures,
  examples: buttonExamples,
}

export { buttonDemos as demos } from './demos'
export { buttonConfig as config } from './config'
