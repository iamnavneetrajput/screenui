// docs/components/accordion/config.ts
import type { ComponentConfig } from '@/docs/schema'
import { accordionMetadata } from './metadata'

export const accordionConfig: ComponentConfig = {
  // UI-specific display settings
  showInstallation: true,
  centerPreview: true,
  previewBackground: 'default',
  previewPadding: 'lg',

  // Derived from metadata
  installCommands: accordionMetadata.cli,
  
  // Demo mapping (which demo ID corresponds to which example index)
  demoMap: {
    single: 0,
    multiple: 1,
  },
}