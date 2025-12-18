import {
  TsCode1,
  JsCode1,
  InstallCommands,
  Component,
  Title,
  Description,
  Lastupdated,
  Version,
} from "./badge";

export const Config = {
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

  // Metadata for AI/SEO
  category: "Feedback" as const, // Badge = status/label indicator
  version: Version,
  lastUpdated: Lastupdated,

  // Real dependencies only
  dependencies: ["react", "tailwindcss"],

  // Correct tagging for Badge component
  tags: ["badge", "label", "tag", "status", "indicator"],

  // Preview configuration
  previewBackground: "default" as const,
  previewPadding: "lg" as const,
  centerPreview: true,
  tabVariant: "default" as const,
  tabSize: "md" as const,
};
