import type { ComponentConfig } from '@/docs/schema'
import { buttonMetadata } from './metadata'

export const buttonConfig: ComponentConfig = {
  showInstallation: true,
  centerPreview: true,
  previewBackground: 'default',
  previewPadding: 'lg',

  installCommands: buttonMetadata.cli,

  demoMap: {
    basic: 0,
    loading: 1,
  },
}
