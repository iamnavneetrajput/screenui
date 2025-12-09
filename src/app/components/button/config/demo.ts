// src/app/components/alert/config/alert-demos.ts
import {
    TsCode1, TsCode2, TsCode3, TsCode4,
    JsCode1, JsCode2, JsCode3, JsCode4,
    InstallCommands
} from './button';
import { Variant1 } from '../demo/Varient1';
import { Variant2 } from '../demo/Varient2';
import { Variant3 } from '../demo/Varient3';
import { Variant4 } from '../demo/Varient4';

import { buttonConfig } from './button-config';

export const Demos = [
  // Demo 1
  {
    id: "variants-sizes",
    component: Variant1,
    config: {
      ...buttonConfig,
      title: "Variants & Sizes",
      description: "All variants, sizes, and rounded options.",
      npmCommandTs: InstallCommands.ts,
      npmCommandJs: InstallCommands.js,
      tsCode: TsCode1,
      jsCode: JsCode1,
      showTabs: true,
      showJavascript: false,
      showTypescript: false,
    },
  },

  // Demo 2
  {
    id: "icons-loading",
    component: Variant2,
    config: {
      ...buttonConfig,
      title: "Icons & Loading",
      description: "Buttons with icons, interactive loading, and icon-only variants.",
      tsCode: TsCode2,
      jsCode: JsCode2,
      showTabs: true,
      showJavascript: true,
      showTypescript: true,
    },
  },

  // Demo 3
  {
    id: "states-interactions",
    component: Variant3,
    config: {
      ...buttonConfig,
      title: "States & Interactions",
      description: "Normal/disabled states, loading text, and full-width layout options.",
      tsCode: TsCode3,
      jsCode: JsCode3,
      showTabs: true,
      showJavascript: true,
      showTypescript: true,
    },
  },

  // Demo 4
  {
    id: "real-world",
    component: Variant4,
    config: {
      ...buttonConfig,
      title: "Real-World Examples",
      description: "Common UI button patterns with animations, hover states, and accessibility.",
      tsCode: TsCode4,
      jsCode: JsCode4,
      showTabs: true,
      showJavascript: true,
      showTypescript: true,
    },
  },
];