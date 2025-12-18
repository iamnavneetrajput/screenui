import {
  TsCode1,
  TsCode2,
  JsCode1,
  JsCode2,
  InstallCommands,
  Component,
  Title,
  Description,
  Lastupdated,
  Version,
} from "@/bin/card/config/card";

export const Config = {
  title: Title,
  component: Component,
  description: Description,
  dependencyCommand: "",
  npmCommandTs: InstallCommands.ts,
  npmCommandJs: InstallCommands.js,
  tsCode: [ TsCode1, TsCode2 ],
  jsCode: [ JsCode1, JsCode2 ],

  // Display options
  showInstallation: true,
  showTabs: true,
  showJavascript: false,
  showTypescript: false,

  // Correct metadata
  category: "Layout" as const, // Cards group content visually
  version: Version,
  lastUpdated: Lastupdated,

  // Actual dependencies only
  dependencies: ["react", "tailwindcss"],

  // Accurate search tags
  tags: ["card", "container", "surface", "layout", "ui"],

  // Preview customization
  previewBackground: "default" as const,
  previewPadding: "lg" as const,
  centerPreview: true,
  tabVariant: "default" as const,
  tabSize: "md" as const,
};
