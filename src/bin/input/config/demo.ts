import {
  TsCode1, TsCode2, TsCode3, TsCode4,
  JsCode1, JsCode2, JsCode3, JsCode4,
  InstallCommands
} from '@/bin/input/config/input';

import {BasicInput as Variant1} from '../demo/BasicInput';
import {InputWithIcon as Variant2} from '../demo/InputWithIcon';
import {PasswordInput as Variant3} from '../demo/PasswordInput';
import { PremiumStyledInput as Variant4 } from '../demo/PremiumStyledInput'

import { Config } from './config';

export const Demos = [
  {
    id: 'basic-input',
    component: Variant1,
    config: {
      ...Config,
      title: 'Basic Input',
      description: 'A simple input with label, description, and placeholder.',
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
    id: 'input-with-icons',
    component: Variant2,
    config: {
      ...Config,
      title: 'Input With Icon',
      description: 'An input using leftIcon for enhanced UX and clarity.',
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
    id: 'input-password',
    component: Variant3,
    config: {
      ...Config,
      title: 'Password Input',
      description: 'Includes built-in password visibility toggle and character counter.',
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
    id: 'premium-input',
    component: Variant4,
    config: {
      ...Config,
      title: 'Premium Styled Input',
      description: 'Advanced Tailwind customization with icons, clearable input, gradients, and counters.',
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
