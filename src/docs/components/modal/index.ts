import type { ComponentDoc } from '@/docs/schema'

import { modalMetadata } from './metadata'
import { modalExamples } from './examples'
import { modalFeatures } from './features'
import { modalProps } from './props'

export const doc: ComponentDoc = {
  ...modalMetadata,
  propGroups: modalProps,
  features: modalFeatures,
  examples: modalExamples,
}

export { modalDemos as demos } from './demos'
export { modalConfig as config } from './config'
