import type { ComponentConfig } from '@/docs/schema'
import { modalMetadata } from './metadata'

export const modalConfig: ComponentConfig = {
  showInstallation: true,
  centerPreview: true,
  previewPadding: 'lg',
  previewBackground: 'default',

  installCommands: modalMetadata.cli,

  demoMap: {
    confirmation: 0,
  },
}
