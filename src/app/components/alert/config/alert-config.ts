// src/app/components/alert/config/alert-config.ts
import { 
  Component, 
  Title, 
  Description, 
  Lastupdated, 
  Version 
} from '@/data/code-snippets/alert';

export const alertConfig = {
  component: Component,
  title: Title,
  description: Description,
  category: "Feedback" as const,
  version: Version,
  lastUpdated: Lastupdated,
  dependencies: ['react', 'tailwindcss', 'lucide-react'],
  tags: ['alert', 'notification', 'feedback', 'message'],
  previewBackground: "default" as const,
  previewPadding: "lg" as const,
  centerPreview: true,
  tabVariant: "default" as const,
  tabSize: "md" as const,
};