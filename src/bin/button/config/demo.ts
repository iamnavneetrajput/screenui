import {
    TsCode1, TsCode2, TsCode3, TsCode4,
    JsCode1, JsCode2, JsCode3, JsCode4,
    InstallCommands
} from './button';

import { ButtonVariants as Variant1 } from '../demo/ButtonVariants';
import { ButtonWithIcons as Variant2 } from '../demo/ButtonWithIcons';
import { ButtonLoadingDemo as Variant3 } from '../demo/ButtonLoadingDemo';
import { ButtonRealWorldDemo as Variant4 } from '../demo/ButtonRealWorldDemo';

import { buttonConfig } from './button-config';

export const Demos = [
  // Demo 1: Variants
  {
    id: "button-variants",
    component: Variant1,
    config: {
      ...buttonConfig,
      title: "Button Variants",
      description: "Core visual styles such as solid, outline, ghost, soft, and link.",
      npmCommandTs: InstallCommands.ts,
      npmCommandJs: InstallCommands.js,
      tsCode: TsCode1,
      jsCode: JsCode1,
      showTabs: true,
      showJavascript: false,
      showTypescript: false,
    },
  },

  // Demo 2: Icons
  {
    id: "button-icons",
    component: Variant2,
    config: {
      ...buttonConfig,
      title: "Buttons with Icons",
      description: "Buttons with left or right icons for common actions.",
      tsCode: TsCode2,
      jsCode: JsCode2,
      showTabs: true,
      showJavascript: true,
      showTypescript: true,
    },
  },

  // Demo 3: Loading
  {
    id: "button-loading",
    component: Variant3,
    config: {
      ...buttonConfig,
      title: "Loading States",
      description: "Interactive loading buttons with dynamic text and icon support.",
      tsCode: TsCode3,
      jsCode: JsCode3,
      showTabs: true,
      showJavascript: true,
      showTypescript: true,
    },
  },

  // Demo 4: Real World
  {
    id: "button-real-world",
    component: Variant4,
    config: {
      ...buttonConfig,
      title: "Real-World Example",
      description: "A practical social-action pattern using icons, counts, and loading.",
      tsCode: TsCode4,
      jsCode: JsCode4,
      showTabs: true,
      showJavascript: true,
      showTypescript: true,
    },
  },
];