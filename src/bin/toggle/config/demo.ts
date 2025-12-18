import {
    TsCode1, TsCode2, TsCode3, TsCode4,
    JsCode1, JsCode2, JsCode3, JsCode4,
    InstallCommands
} from './toggle';
import {
    Variant1,
    Variant2,
    Variant3,
    Variant4,
} from '../demo/Preview';

import { Config } from './config';

export const Demos = [
    {
        id: 'toggle-basic',
        component: Variant1,
        config: {
            ...Config,
            title: 'Basic Toggle',
            description: 'A simple controlled toggle example.',
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
        id: 'toggle-size',
        component: Variant2,
        config: {
            ...Config,
            title: 'Size Variants',
            description: 'Toggle with multiple sizes.',
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
        id: 'toggle-ios',
        component: Variant3,
        config: {
            ...Config,
            title: 'iOS Style Toggle',
            description: 'A custom animated iOS-style switch.',
            npmCommandTs: '',
            npmCommandJs: '',
            dependencyCommand: '',
            tsCode: TsCode3,
            jsCode: JsCode3,
            showTabs: true,
            showJavascript: true,
            showTypescript: true,
        },
    },

    {
        id: 'toggle-card',
        component: Variant4,
        config: {
            ...Config,
            title: 'Card Toggle',
            description: 'A card-style interactive toggle.',
            npmCommandTs: '',
            npmCommandJs: '',
            dependencyCommand: '',
            tsCode: TsCode4,
            jsCode: JsCode4,
            showTabs: true,
            showJavascript: true,
            showTypescript: true,
        },
    },
];
