import type { ComponentConfig } from '@/docs/schema'
import { badgeMetadata } from './metadata'

export const badgeConfig: ComponentConfig = {
  showInstallation: true,
  centerPreview: true,
  previewBackground: 'default',
  previewPadding: 'lg',

  installCommands: badgeMetadata.cli,

  demoMap: {
    basic: 0,
  },
}
