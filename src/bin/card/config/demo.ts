import {
    TsCode1, TsCode2,
    JsCode1, JsCode2,
    InstallCommands
} from './card';

import { LoginCardDemo as Variant1 } from '../demo/LoginCardDemo';
import { MessagePreviewCardDemo as Variant2 } from '../demo/MessagePreviewCardDemo';
import { Config } from './config';

export const Demos = [
  // Demo 1 — Login Card
  {
    id: "login-card",
    component: Variant1,
    config: {
      ...Config,
      title: "Login Card",
      description:
        "A user login card with email and password fields, and a submit button.",
      npmCommandTs: InstallCommands.ts,
      npmCommandJs: InstallCommands.js,
      tsCode: TsCode1,
      jsCode: JsCode1,
      showTabs: true,
      showJavascript: false,
      showTypescript: false,
    },
  },

  // Demo 2 — Message Preview Card
  {
    id: "message-preview-card",
    component: Variant2,
    config: {
      ...Config,
      title: "Message Preview Card",
      description:
        "A message preview card displaying the sender's name, timestamp, and message snippet.",
      npmCommandTs: "",
      npmCommandJs: "",
      dependencyCommand: "",
      tsCode: TsCode2,
      jsCode: JsCode2,
      showTabs: true,
      showJavascript: true,
      showTypescript: true,
    },
  },
];