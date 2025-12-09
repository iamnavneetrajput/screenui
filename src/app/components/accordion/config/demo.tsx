import {
    TsCode1, TsCode2, TsCode3, TsCode4,
    JsCode1, JsCode2, JsCode3, JsCode4,
    InstallCommands
} from '@/app/components/accordion/config/accordion';
import { Variant1 } from '../demo/Varient1';
import { Variant2 } from '../demo/Varient2';
import { Variant3 } from '../demo/Varient3';
import { Variant4 } from '../demo/Varient4';

import { Config } from './config';

export const Demos = [
    {
        id: 'single-accordion',
        component: Variant1,
        config: {
            ...Config,
            title: 'Single Accordion',
            description: 'A single collapsible accordion item.',
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
        id: 'multiple-accordion',
        component: Variant2,
        config: {
            ...Config,
            title: 'Multiple Accordion',
            description: 'An accordion component with multiple collapsible items.',
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
        id: 'settings-panel',
        component: Variant3,
        config: {
            ...Config,
            title: 'Settings Panel Accordion',
            description: 'A settings panel with multiple options.',
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
        id: 'custom-styled-accordion',
        component: Variant4,
        config: {
            ...Config,
            title: 'Custom Styled Accordion',
            description: 'An accordion with custom styles.',
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