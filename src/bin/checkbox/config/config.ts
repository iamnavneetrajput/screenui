import { 
  Component, 
  Title, 
  Description, 
  LastUpdated, 
  Version 
} from '@/app/components/checkbox/config/checkbox';

export const checkboxConfig = {
  component: Component,
  title: Title,
  description: Description,

  // Correct category
  category: "Forms" as const,

  version: Version,
  lastUpdated: LastUpdated,

  // Only real dependencies
  dependencies: ["react", "tailwindcss"],

  // Useful and accurate tags
  tags: ["checkbox", "form", "input", "selection", "toggle", "control"],

  // Preview configuration
  previewBackground: "default" as const,
  previewPadding: "lg" as const,
  centerPreview: true,
  tabVariant: "default" as const,
  tabSize: "md" as const,
};
