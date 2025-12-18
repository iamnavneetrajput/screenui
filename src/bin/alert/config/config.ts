import { 
  Component, 
  Title, 
  Description, 
  Lastupdated, 
  Version 
} from '@/app/components/alert/config/alert';

export const alertConfig = {
  component: Component,
  title: Title,
  description: Description,

  // Logical category for UI systems
  category: "Feedback" as const,

  version: Version,
  lastUpdated: Lastupdated,

  // Only include what the alert component *actually* needs
  dependencies: ["react", "tailwindcss"],

  // Accurate tagging — no fluff
  tags: ["alert", "notification", "feedback", "message", "status"],

  // Preview preferences
  previewBackground: "default" as const,
  previewPadding: "lg" as const,
  centerPreview: true,
  tabVariant: "default" as const,
  tabSize: "md" as const,
};
