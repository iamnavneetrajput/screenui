import {
  TsCode1, TsCode2, TsCode3, TsCode4,
  JsCode1, JsCode2, JsCode3, JsCode4,
  InstallCommands
} from '../config/avtar';
import { Variant1 } from '../demo/Varient1';
import { Variant2 } from '../demo/Varient2';
import { Variant3 } from '../demo/Varient3';
import { Variant4 } from '../demo/Varient4';

import { avatarConfig } from './config';

export const Demos = [
  {
    id: 'avatar-basic',
    component: Variant1,
    config: {
      ...avatarConfig,
      title: 'Basic Avatar',
      description: 'Status-based user avatars.',
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
    id: 'avatar-notifications',
    component: Variant2,
    config: {
      ...avatarConfig,
      title: 'Avatar with Notifications',
      description: 'Avatars enhanced with badges, rings, and status indicators.',
      npmCommandTs: '',
      npmCommandJs: '',
      tsCode: TsCode2,
      jsCode: JsCode2,
      showTabs: true,
      showJavascript: true,
      showTypescript: true,
    }
  },
  {
    id: 'avatar-with-text',
    component: Variant3,
    config: {
      ...avatarConfig,
      title: 'Avatar with Message Preview',
      description: 'Avatar + text block used in messaging layouts.',
      npmCommandTs: '',
      npmCommandJs: '',
      tsCode: TsCode3,
      jsCode: JsCode3,
      showTabs: true,
      showJavascript: true,
      showTypescript: true,
    }
  },
  {
    id: 'avatar-card',
    component: Variant4,
    config: {
      ...avatarConfig,
      title: 'Avatar Card Layout',
      description: 'Avatar used inside a UI card element.',
      npmCommandTs: '',
      npmCommandJs: '',
      tsCode: TsCode4,
      jsCode: JsCode4,
      showTabs: true,
      showJavascript: true,
      showTypescript: true,
    }
  },
];
