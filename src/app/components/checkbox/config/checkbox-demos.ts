import {
  TsCode1,
  JsCode1,
  TsCode2,
  JsCode2,
  TsCode3,
  JsCode3,
  TsCode4,
  JsCode4,
  TsCode5,
  JsCode5,
  InstallCommands
} from '@/data/code-snippets/checkbox';

import {
  VariantCheckboxDemo,
  SizeCheckboxDemo,
  RoundedCheckboxDemo,
  SpecialStateCheckboxDemo,
  SelectAllCheckboxDemo,
} from '../components/CheckboxDemos';

import { checkboxConfig } from './checkbox-config';

export const checkboxDemos = [
  {
    id: 'variant-checkbox',
    component: VariantCheckboxDemo,
    config: {
      ...checkboxConfig,
      title: 'Variant Checkbox',
      description: 'Checkboxes demonstrating different visual variants: default, filled, outlined, soft.',
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
    id: 'size-checkbox',
    component: SizeCheckboxDemo,
    config: {
      ...checkboxConfig,
      title: 'Size Checkbox',
      description: 'Checkboxes showing various sizes: small, medium, large, XL.',
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
    id: 'rounded-checkbox',
    component: RoundedCheckboxDemo,
    config: {
      ...checkboxConfig,
      title: 'Rounded Checkbox',
      description: 'Checkboxes demonstrating border radius options: none, small, medium, large, full.',
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
    id: 'special-state-checkbox',
    component: SpecialStateCheckboxDemo,
    config: {
      ...checkboxConfig,
      title: 'Special State Checkbox',
      description: 'Checkboxes demonstrating special states like indeterminate and disabled.',
      npmCommandTs: '',
      npmCommandJs: '',
      tsCode: TsCode4,
      jsCode: JsCode4,
      showTabs: true,
      showJavascript: true,
      showTypescript: true,
    },
  },
  {
    id: 'select-all-checkbox',
    component: SelectAllCheckboxDemo,
    config: {
      ...checkboxConfig,
      title: 'Select All Checkbox',
      description: 'A functional select-all pattern controlling multiple checkboxes.',
      npmCommandTs: '',
      npmCommandJs: '',
      tsCode: TsCode5,
      jsCode: JsCode5,
      showTabs: true,
      showJavascript: true,
      showTypescript: true,
    },
  },
];
