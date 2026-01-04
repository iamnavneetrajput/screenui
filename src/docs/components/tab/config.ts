import type { ComponentConfig } from '@/docs/schema'
import { tabsMetadata } from './metadata'

export const tabsConfig: ComponentConfig = {
  showInstallation: true,
  centerPreview: false,
  previewBackground: 'default',
  previewPadding: 'lg',

  installCommands: tabsMetadata.cli,

  demoMap: {
    featured: 0,
  },
}
