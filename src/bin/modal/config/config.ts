import {
  TsCode1,
  JsCode1,
  TsCode2,
  JsCode2,
  InstallCommands,
  Component,
  Title,
  Description,
  Lastupdated,
  Version,
} from "./modal";

export const Config = {
  // Core component info
  title: Title,
  component: Component,
  description: Description,
  dependencyCommand: "",
  npmCommandTs: InstallCommands.ts,
  npmCommandJs: InstallCommands.js,

  // Code examples
  tsCode: [TsCode1, TsCode2],
  jsCode: [JsCode1, JsCode2],

  // Display options
  showInstallation: true,
  showTabs: true,
  showJavascript: false,
  showTypescript: false,

  // Metadata for SEO + AI
  category: "UI Components" as const,
  version: Version,
  lastUpdated: Lastupdated,
  dependencies: ["react", "tailwindcss"],
  tags: ["modal", "dialog", "overlay", "ui", "interaction"],

  // Preview customization
  previewBackground: "default" as const,
  previewPadding: "lg" as const,
  centerPreview: true,
  tabVariant: "default" as const,
  tabSize: "md" as const,
};
