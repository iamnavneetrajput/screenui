import type { ComponentDoc } from '@/docs/schema'

import { fileUploadMetadata } from './metadata'
import { fileUploadProps } from './props'
import { fileUploadFeatures } from './features'
import { fileUploadExamples } from './examples'

export const doc: ComponentDoc = {
  ...fileUploadMetadata,
  propGroups: fileUploadProps,
  features: fileUploadFeatures,
  examples: fileUploadExamples,
}

// runtime-only
export { fileUploadDemos as demos } from './demos'
export { fileUploadConfig as config } from './config'
