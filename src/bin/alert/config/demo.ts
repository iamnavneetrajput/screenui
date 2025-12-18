import {
  TsCode1, TsCode2, TsCode3, TsCode4,
  JsCode1, JsCode2, JsCode3, JsCode4,
  CommandTs, CommandJs
} from '@/app/components/alert/config/alert';
import { Variant1 } from '../demo/Varient1';
import { Variant2 } from '../demo/Varient2';
import { Variant3 } from '../demo/Varient3';
import { Variant4 } from '../demo/Varient4';

import { alertConfig } from './config';

export const Demos = [
  {
    id: 'basic-alert',
    component: Variant1,
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
    component: Variant2,
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
    component: Variant4,
    config: {
      ...alertConfig,
      title: 'Alert with Soft Variant',
      description: 'Soft styled alert for less intrusive notifications',
      npmCommandTs: '',
      npmCommandJs: '',
      dependencyCommand: '',
      tsCode: TsCode4,
      jsCode: JsCode4,
      showTabs: true,
      showJavascript: true,
      showTypescript: true,
    }
  },
  {
    id: 'outlined-alert',
    component: Variant3,
    config: {
      ...alertConfig,
      title: 'Alert with Outlined Variant',
      description: 'Outlined alert with hover effects',
      npmCommandTs: '',
      npmCommandJs: '',
      dependencyCommand: '',
      tsCode: TsCode3,
      jsCode: JsCode3,
      showTabs: true,
      showJavascript: true,
      showTypescript: true,
    }
  }
];
