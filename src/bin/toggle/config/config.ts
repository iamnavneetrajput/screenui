import {
  TsCode1, TsCode2, TsCode3, TsCode4,
  JsCode1, JsCode2, JsCode3, JsCode4,
  InstallCommands,
  Component,
  Title,
  Description,
  Lastupdated,
  Version,
} from "./toggle";

export const Config = {
  title: Title,
  component: Component,
  description: Description,
  dependencyCommand: "",
  npmCommandTs: InstallCommands.ts,
  npmCommandJs: InstallCommands.js,

  // Correct syntax: arrays of code examples
  tsCode: [TsCode1, TsCode2, TsCode3, TsCode4],
  jsCode: [JsCode1, JsCode2, JsCode3, JsCode4],

  // Display options
  showInstallation: true,
  showTabs: true,
  showJavascript: false,
  showTypescript: false,

  // Correct metadata
  category: "Forms" as const, // Toggles are form controls / UI switches
  version: Version,
  lastUpdated: Lastupdated,

  // Real dependencies only
  dependencies: ["react", "tailwindcss"],

  // Accurate search tags
  tags: ["toggle", "switch", "form", "control", "input", "ui"],

  // Preview configuration
  previewBackground: "default" as const,
  previewPadding: "lg" as const,
  centerPreview: true,
  tabVariant: "default" as const,
  tabSize: "md" as const,
};
