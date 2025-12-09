import {
    TsCode1, TsCode2, TsCode3,
    JsCode1, JsCode2, JsCode3,
    InstallCommands
} from './card';

import { DashboardCardDemo as Variant1 } from '../demo/DashboardCard';
import { ProductCardDemo as Variant2 } from '../demo/ProductCard';
import { NotificationCardDemo as Variant3 } from '../demo/NotificationCard';
import { Config } from './config';

export const Demos = [
  // Demo 1 — Dashboard / Analytics Card
  {
    id: "dashboard-card",
    component: Variant1,
    config: {
      ...Config,
      title: "Dashboard Analytics Card",
      description:
        "A dashboard analytics card with metrics, progress bar, and data highlights.",
      npmCommandTs: InstallCommands.ts,
      npmCommandJs: InstallCommands.js,
      tsCode: TsCode1,
      jsCode: JsCode1,
      showTabs: true,
      showJavascript: false,
      showTypescript: false,
    },
  },

  // Demo 2 — Product / E-commerce Card
  {
    id: "product-card",
    component: Variant2,
    config: {
      ...Config,
      title: "Product Card",
      description:
        "An e-commerce product card featuring image, pricing, discount, and action buttons.",
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

  // Demo 3 — Notification / Dismissible Card
  {
    id: "notification-card",
    component: Variant3,
    config: {
      ...Config,
      title: "Notification Card",
      description:
        "A dismissible notification card with actions and animated UI feedback.",
      npmCommandTs: "",
      npmCommandJs: "",
      dependencyCommand: "",
      tsCode: TsCode3,
      jsCode: JsCode3,
      showTabs: true,
      showJavascript: true,
      showTypescript: true,
    },
  },
];