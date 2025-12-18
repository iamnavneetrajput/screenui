import type { ComponentConfig } from '@/docs/schema'
import { alertMetadata } from './metadata'

export const alertConfig: ComponentConfig = {
  showInstallation: true,
  centerPreview: true,
  previewBackground: 'default',
  previewPadding: 'lg',

  installCommands: alertMetadata.cli,

  demoMap: {
    basic: 0,
    dismissible: 1,
  },
}
