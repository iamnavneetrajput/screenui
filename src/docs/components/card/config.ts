import type { ComponentConfig } from '@/docs/schema'
import { cardMetadata } from './metadata'

export const cardConfig: ComponentConfig = {
  showInstallation: true,
  centerPreview: true,
  previewBackground: 'default',
  previewPadding: 'lg',

  installCommands: cardMetadata.cli,

  demoMap: {
    default: 0,
  },
}
