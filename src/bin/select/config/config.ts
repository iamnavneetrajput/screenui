import {
  TsCode1,
  JsCode1,
  InstallCommands,
  Component,
  Title,
  Description,
  Lastupdated,
  Version,
} from "./select";

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

  // Correct metadata
  category: "Forms" as const, // Select is an input control
  version: Version,
  lastUpdated: Lastupdated,

  // Only list actual deps
  dependencies: ["react", "tailwindcss"],

  // Relevant tags for a Select input
  tags: ["select", "dropdown", "form", "input", "options", "chooser"],

  // Preview settings
  previewBackground: "default" as const,
  previewPadding: "lg" as const,
  centerPreview: true,
  tabVariant: "default" as const,
  tabSize: "md" as const,
};
