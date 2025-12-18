import type { ComponentDoc } from '@/docs/schema'
import { tableMetadata } from './metadata'
import { tableProps } from './props'
import { tableFeatures } from './features'
import { tableExamples } from './examples'

export const doc: ComponentDoc = {
  ...tableMetadata,
  propGroups: tableProps,
  features: tableFeatures,
  examples: tableExamples,
}

export { tableDemos as demos } from './demos'
export { tableConfig as config } from './config'
