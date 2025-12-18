import type { ComponentConfig } from '@/docs/schema'
import { toggleMetadata } from './metadata'

export const toggleConfig: ComponentConfig = {
  showInstallation: true,
  centerPreview: true,
  previewBackground: 'default',
  previewPadding: 'lg',

  installCommands: toggleMetadata.cli,

  demoMap: {
    ios: 0,
  },
}
