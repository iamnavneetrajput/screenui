import type { ComponentConfig } from '@/docs/schema'
import { tableMetadata } from './metadata'

export const tableConfig: ComponentConfig = {
  showInstallation: true,
  centerPreview: false,
  previewBackground: 'default',
  previewPadding: 'lg',

  installCommands: tableMetadata.cli,

  demoMap: {
    default: 0,
  },
}
