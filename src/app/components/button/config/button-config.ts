// src/app/components/button/config/button-config.ts
import {
  TsCode1,
  JsCode1,
  InstallCommands,
  Component,
  Title,
  Description,
  Lastupdated,
  Version,
} from "@/data/code-snippets/button";

export const buttonConfig = {
  title: Title,
  component: Component,
  description: Description,
  dependencyCommand: "",
  npmCommandTs: InstallCommands.ts,
  npmCommandJs: InstallCommands.js,
  tsCode: TsCode1,
  jsCode: JsCode1,
  
  // Display options
  showInstallation: true,
  showTabs: true,
  showJavascript: false,
  showTypescript: false,
  
  // Enhanced metadata for AI/SEO
  category: "UI Components" as const,
  version: Version,
  lastUpdated: Lastupdated,
  dependencies: ['react', 'tailwindcss', 'lucide-react'],
  tags: ['avatar', 'profile', 'user', 'image', 'fallback'],
  
  // Enhanced customization
  previewBackground: "default" as const,
  previewPadding: "lg" as const,
  centerPreview: true,
  tabVariant: "default" as const,
  tabSize: "md" as const,
};