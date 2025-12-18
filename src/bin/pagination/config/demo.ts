import {
    TsCode1, TsCode2, TsCode3, JsCode1, JsCode2, JsCode3,
    InstallCommands
} from './pagination';

import { BasicPagination as Variant1 } from '../demo/BasicPagination';
import { SimpleCompactPagination as Variant2 } from '../demo/SimpleCompactPagination';
import { Custom as Variant3 } from '../demo/Custom';

import { Config } from './config';

export const Demos = [

  {
    id: 'pagination-basic',
    component: Variant1,
    config: {
      ...Config,
      title: 'Basic Pagination',
      description: 'A simple pagination component with previous and next controls.',
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
    id: 'pagination-simple-compact',
    component: Variant2,
    config: {
      ...Config,
      title: 'Simple & Compact Pagination',
      description: 'Clean mobile-friendly pagination components.',
      npmCommandTs: '',
      npmCommandJs: '',
      dependencyCommand: '',
      tsCode: TsCode2,
      jsCode: JsCode2,
      showTabs: true,
      showJavascript: true,
      showTypescript: true,
    },
  },
  {
    id: 'pagination-headless',
    component: Variant3,
    config: {
      ...Config,
      title: 'Headless Pagination',
      description: 'Create fully custom pagination UIs using the render prop.',
      npmCommandTs: '',
      npmCommandJs: '',
      dependencyCommand: '',
      tsCode:TsCode3,
      jsCode:JsCode3,
      showTabs: true,
      showJavascript: true,
      showTypescript: true,
    },
  },
];
