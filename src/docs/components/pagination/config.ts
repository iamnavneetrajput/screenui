import type { ComponentConfig } from '@/docs/schema'
import { paginationMetadata } from './metadata'

export const paginationConfig: ComponentConfig = {
  showInstallation: true,
  centerPreview: true,
  previewBackground: 'default',
  previewPadding: 'lg',

  installCommands: paginationMetadata.cli,

  demoMap: {
    basic: 0,
  },
}
