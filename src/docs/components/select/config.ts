import type { ComponentConfig } from '@/docs/schema'
import { selectMetadata } from './metadata'

export const selectConfig: ComponentConfig = {
  showInstallation: true,
  centerPreview: true,
  previewBackground: 'default',
  previewPadding: 'lg',

  installCommands: selectMetadata.cli,

  demoMap: {
    basic: 0,
  },
}
