import {
  TsCode1,
  JsCode1,
  InstallCommands,
  Component,
  Title,
  Description,
  Lastupdated,
  Version,
} from "./accordion";

export const Config = {
  // Core component info
  title: Title,
  component: Component,
  description: Description,
  dependencyCommand: "",
  npmCommandTs: InstallCommands.ts,
  npmCommandJs: InstallCommands.js,

  // Code examples
  tsCode: TsCode1,
  jsCode: JsCode1,

  // Display options
  showInstallation: true,
  showTabs: true,
  showJavascript: false,
  showTypescript: false,

  // Metadata for SEO/AI
  category: "UI Components" as const,
  version: Version,
  lastUpdated: Lastupdated,

  // Only include what the Accordion actually requires
  dependencies: ["react", "tailwindcss"],

  // Accurate tags (drop the avatar nonsense)
  tags: ["accordion", "collapse", "expand", "ui", "toggle", "disclosure"],

  // Preview settings
  previewBackground: "default" as const,
  previewPadding: "lg" as const,
  centerPreview: true,
  tabVariant: "default" as const,
  tabSize: "md" as const,
};
