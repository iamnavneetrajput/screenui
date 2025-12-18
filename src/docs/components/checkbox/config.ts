import type { ComponentConfig } from '@/docs/schema'
import { checkboxMetadata } from './metadata'

export const checkboxConfig: ComponentConfig = {
  showInstallation: true,
  centerPreview: true,
  previewBackground: 'default',
  previewPadding: 'lg',

  installCommands: checkboxMetadata.cli,

  demoMap: {
    basic: 0,
  },
}
