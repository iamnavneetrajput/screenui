import type { ComponentConfig } from '@/docs/schema'
import { avatarMetadata } from './metadata'

export const avatarConfig: ComponentConfig = {
  showInstallation: true,
  centerPreview: true,
  previewBackground: 'default',
  previewPadding: 'lg',

  installCommands: avatarMetadata.cli,

  demoMap: {
    basic: 0,
    group: 1,
  },
}
