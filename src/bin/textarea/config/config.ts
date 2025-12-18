import {
  TsCode1,
  JsCode1,
  InstallCommands,
  Component,
  Title,
  Description,
  Lastupdated,
  Version,
} from "./textarea";

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
  category: "Forms" as const, // Textarea = text input control
  version: Version,
  lastUpdated: Lastupdated,

  // Only include real dependencies
  dependencies: ["react", "tailwindcss"],

  // Accurate, relevant tags
  tags: ["textarea", "input", "form", "multiline", "text", "field"],

  // Preview customization
  previewBackground: "default" as const,
  previewPadding: "lg" as const,
  centerPreview: true,
  tabVariant: "default" as const,
  tabSize: "md" as const,
};
