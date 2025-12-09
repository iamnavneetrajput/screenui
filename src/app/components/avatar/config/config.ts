import {
  TsCode1,
  JsCode1,
  InstallCommands,
  Component,
  Title,
  Description,
  Lastupdated,
  Version,
} from "./avtar";

export const avatarConfig = {
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
  category: "Identity" as const,
  version: Version,
  lastUpdated: Lastupdated,

  // Only include real dependencies
  dependencies: ["react", "tailwindcss"],

  // Useful, accurate tags
  tags: ["avatar", "profile", "user", "image", "fallback"],

  // Preview config
  previewBackground: "default" as const,
  previewPadding: "lg" as const,
  centerPreview: true,
  tabVariant: "default" as const,
  tabSize: "md" as const,
};
