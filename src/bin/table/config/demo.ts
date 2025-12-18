import {
  TsCode1,
  TsCode2,
  JsCode1,
  JsCode2,
  InstallCommands
} from "./table";

import { UserTableDemo as Variant1 } from "../demo/UserTable";
import { ProductTableDemo as Variant2 } from "../demo/ProductTableDemo";

import { Config } from "./config";

export const Demos = [
  {
    id: "user-management-table",
    component: Variant1,
    config: {
      ...Config,
      title: "User Management Table",
      description:
        "A sortable and selectable data table for managing user accounts, roles, and statuses.",
      npmCommandTs: InstallCommands.ts,
      npmCommandJs: InstallCommands.js,
      tsCode: TsCode1,
      jsCode: JsCode1,
      showTabs: true,
      showJavascript: true,
      showTypescript: true,
    },
  },

  {
    id: "product-inventory-table",
    component: Variant2,
    config: {
      ...Config,
      title: "Product Inventory Table",
      description:
        "A striped table optimized for tracking stock, pricing, and low-inventory alerts.",
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
