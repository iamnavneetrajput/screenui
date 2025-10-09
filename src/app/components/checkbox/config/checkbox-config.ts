import { 
  Component, 
  Title, 
  Description, 
  LastUpdated, 
  Version 
} from '@/data/code-snippets/checkbox';

export const checkboxConfig = {
  component: Component,
  title: Title,
  description: Description,
  category: "Forms" as const,
  version: Version,
  lastUpdated: LastUpdated,
  dependencies: ['react', 'tailwindcss', 'lucide-react'],
  tags: ['checkbox', 'form', 'input', 'toggle'],
  previewBackground: "default" as const,
  previewPadding: "lg" as const,
  centerPreview: true,
  tabVariant: "default" as const,
  tabSize: "md" as const,
};
