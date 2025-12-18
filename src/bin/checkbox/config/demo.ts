import {
  TsCode1,
  JsCode1,
  TsCode2,
  JsCode2,
  TsCode3,
  JsCode3,
  TsCode4,
  JsCode4,
  InstallCommands
} from '@/app/components/checkbox/config/checkbox';

import { BasicCheckbox as Variant1 } from '../demo/BasicCheckbox';
import { CheckboxwithLabel as Variant2 } from '../demo/Label';
import { CheckboxDescription as Variant3 } from '../demo/Description';
import { SettingsPanelCheckboxes as Variant4 } from '../demo/SettingsPanel';

import { checkboxConfig } from './config';

export const Demos = [
  {
    id: 'basic-checkbox',
    component: Variant1,
    config: {
      ...checkboxConfig,
      title: 'Basic Checkbox',
      description: 'A simple checkbox with default styling and behavior.',
      npmCommandTs: InstallCommands.ts,
      npmCommandJs: InstallCommands.js,
      tsCode: TsCode1,
      jsCode: JsCode1,
      showTabs: true,
      showJavascript: false,
      showTypescript: false,
    },
  },
  {
    id: 'labeled-checkbox',
    component: Variant2,
    config: {
      ...checkboxConfig,
      title: 'Checkbox with Label',
      description: 'A checkbox accompanied by a descriptive label for better context.',
      npmCommandTs: '',
      npmCommandJs: '',
      tsCode: TsCode2,
      jsCode: JsCode2,
      showTabs: true,
      showJavascript: true,
      showTypescript: true,
    },
  },
  {
    id: 'labeled-description-checkbox',
    component: Variant3,
    config: {
      ...checkboxConfig,
      title: 'Checkbox with Label and Description',
      description: 'A checkbox that includes both a label and a detailed description for clarity.',
      npmCommandTs: '',
      npmCommandJs: '',
      tsCode: TsCode3,
      jsCode: JsCode3,
      showTabs: true,
      showJavascript: true,
      showTypescript: true,
    },
  },
  {
    id: 'settings-panel-checkboxes',
    component: Variant4,
    config: {
      ...checkboxConfig,
      title: 'Settings Panel with Checkboxes',
      description: 'A settings panel that utilizes multiple checkboxes to enable or disable various options.',
      npmCommandTs: '',
      npmCommandJs: '',
      tsCode: TsCode4,
      jsCode: JsCode4,
      showTabs: true,
      showJavascript: true,
      showTypescript: true,
    },
  },
];
