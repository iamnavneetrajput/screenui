import type { ComponentConfig } from '@/docs/schema'
import { stepcardMetadata } from './metadata'

export const stepcardConfig: ComponentConfig = {
  showInstallation: true,
  centerPreview: false,
  previewBackground: 'default',
  previewPadding: 'lg',

  installCommands: stepcardMetadata.cli,

  demoMap: {
    basic: 0,
    vertical: 1,
  },
}
