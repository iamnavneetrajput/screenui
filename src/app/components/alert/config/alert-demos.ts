// src/app/components/alert/config/alert-demos.ts
import {
  TsCode1, TsCode2, TsCode3, TsCode4,
  JsCode1, JsCode2, JsCode3, JsCode4,
  CommandTs, CommandJs
} from '@/data/code-snippets/alert';
import {
  BasicAlertDemo,
  DismissibleAlertDemo,
  SoftAlertDemo,
  OutlinedAlertDemo
} from '../components/AlertDemos';
import { alertConfig } from './alert-config';

export const alertDemos = [
  {
    id: 'basic-alert',
    component: BasicAlertDemo,
    config: {
      ...alertConfig,
      title: 'Basic Alert',
      description: 'Simple alert with info styling',
      npmCommandTs: CommandTs,
      npmCommandJs: CommandJs,
      tsCode: TsCode1,
      jsCode: JsCode1,
      showTabs: true,
      showJavascript: false,
      showTypescript: false,
    }
  },
  {
    id: 'dismissible-alert',
    component: DismissibleAlertDemo,
    config: {
      ...alertConfig,
      title: 'Alert with Dismiss',
      description: 'Alert component with filled variant and dismissible functionality.',
      npmCommandTs: '',
      npmCommandJs: '',
      dependencyCommand: '',
      tsCode: TsCode2,
      jsCode: JsCode2,
      showTabs: true,
      showJavascript: true,
      showTypescript: true,
    }
  },
  {
    id: 'soft-alert',
    component: SoftAlertDemo,
    config: {
      ...alertConfig,
      title: 'Alert with Soft Variant',
      description: 'Soft styled alert for less intrusive notifications',
      npmCommandTs: '',
      npmCommandJs: '',
      dependencyCommand: '',
      tsCode: TsCode3,
      jsCode: JsCode3,
      showTabs: true,
      showJavascript: true,
      showTypescript: true,
    }
  },
  {
    id: 'outlined-alert',
    component: OutlinedAlertDemo,
    config: {
      ...alertConfig,
      title: 'Alert with Outlined Variant',
      description: 'Outlined alert with hover effects',
      npmCommandTs: '',
      npmCommandJs: '',
      dependencyCommand: '',
      tsCode: TsCode4,
      jsCode: JsCode4,
      showTabs: true,
      showJavascript: true,
      showTypescript: true,
    }
  }
];
