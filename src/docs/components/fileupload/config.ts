import type { ComponentConfig } from '@/docs/schema'
import { fileUploadMetadata } from './metadata'

export const fileUploadConfig: ComponentConfig = {
  showInstallation: true,
  centerPreview: true,
  previewBackground: 'default',
  previewPadding: 'lg',

  installCommands: fileUploadMetadata.cli,

  demoMap: {
    basic: 0,
  },
}
