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
} from "@/app/components/button/config/button";

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

  // Proper metadata
  category: "Actions" as const,  // Buttons trigger actions — this is the correct taxonomy
  version: Version,
  lastUpdated: Lastupdated,

  // Real dependencies only
  dependencies: ["react", "tailwindcss"],

  // Accurate tags
  tags: ["button", "action", "control", "cta", "interactive", "ui"],

  // Preview customization
  previewBackground: "default" as const,
  previewPadding: "lg" as const,
  centerPreview: true,
  tabVariant: "default" as const,
  tabSize: "md" as const,
};
