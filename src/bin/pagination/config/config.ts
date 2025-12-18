import {
  TsCode1,
  JsCode1,
  InstallCommands,
  Component,
  Title,
  Description,
  Lastupdated,
  Version,
} from "./pagination";

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

  // Proper metadata
  category: "Navigation" as const, // Pagination = navigation pattern
  version: Version,
  lastUpdated: Lastupdated,

  // Real dependencies only
  dependencies: ["react", "tailwindcss"],

  // Accurate keywords
  tags: ["pagination", "navigation", "pages", "list control", "pager", "ui"],

  // Preview config
  previewBackground: "default" as const,
  previewPadding: "lg" as const,
  centerPreview: true,
  tabVariant: "default" as const,
  tabSize: "md" as const,
};
