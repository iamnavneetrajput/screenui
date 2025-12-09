import {
  TsCode1, TsCode2,
  JsCode1, JsCode2,
  InstallCommands
} from '@/app/components/select/config/select';

import { StandardDemo as Variant1 } from '../demo/StandardDemo';
import { HeadlessDemo as Variant2 } from '../demo/HeadlessDemo';

import { Config } from './config';

export const Demos = [
  {
    id: 'standard-select',
    component: Variant1,
    config: {
      ...Config,
      title: 'Standard Select',
      description: 'A simple select.',
      npmCommandTs: InstallCommands.ts,
      npmCommandJs: InstallCommands.js,
      tsCode: TsCode1,
      jsCode: JsCode1,
      showTabs: true,
      showJavascript: false,
      showTypescript: false,
    }
  },

  {
    id: 'custom-headless-select',
    component: Variant2,
    config: {
      ...Config,
      title: 'Custom Headless Select',
      description: 'Fully-customizable select built using the headless render prop.',
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
];
