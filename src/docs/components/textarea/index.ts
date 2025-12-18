import type { ComponentDoc } from '@/docs/schema'

import { textareaMetadata } from './metadata'
import { textareaProps } from './props'
import { textareaFeatures } from './features'
import { textareaExamples } from './examples'

export const doc: ComponentDoc = {
  ...textareaMetadata,
  propGroups: textareaProps,
  features: textareaFeatures,
  examples: textareaExamples,
}

// runtime-only exports
export { textareaDemos as demos } from './demos'
export { textareaConfig as config } from './config'
