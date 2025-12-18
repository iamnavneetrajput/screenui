import {
  TsCode1,
  JsCode1,
  InstallCommands
} from "./badge";

import { BadgePreviewDemo as Variant1 } from "../demo/Varient1";

import { Config } from "./config";

export const Demos = [
  {
    id: "badge-preview",
    component: Variant1,
    config: {
      ...Config,
      title: "Badge Component",
      description: "A versatile badge component with variants, icons, interaction, and removal support.",
      npmCommandTs: InstallCommands.ts,
      npmCommandJs: InstallCommands.js,
      tsCode: TsCode1,
      jsCode: JsCode1,
      showTabs: true,
      showJavascript: false,
      showTypescript: false,
    },
  },
];
