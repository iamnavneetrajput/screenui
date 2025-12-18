import {
    TsCode1, TsCode2, TsCode3, TsCode4, TsCode5,
    JsCode1, JsCode2, JsCode3, JsCode4, JsCode5,
    InstallCommands
} from '@/bin/textarea/config/textarea';
import {
    Variant1,
    Variant2,
    Variant3,
    Variant4,
    Variant5
} from '../demo/Preview';
import { Config } from './config';

export const Demos = [
    {
        id: 'basic-textarea',
        component: Variant1,
        config: {
            ...Config,
            title: 'Basic Textarea',
            description: '',
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
        id: 'label-placeholder',
        component: Variant2,
        config: {
            ...Config,
            title: 'With label and placeholder',
            description: '',
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
        id: 'custom-styled',
        component: Variant3,
        config: {
            ...Config,
            title: 'Custom Styled',
            description: '',
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
        id: 'text-editor-style',
        component: Variant4,
        config: {
            ...Config,
            title: 'Rich Text Editor Style',
            description: '',
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
        id: 'comment-box',
        component: Variant5,
        config: {
            ...Config,
            title: 'Comment Box',
            description: '',
            npmCommandTs: '',
            npmCommandJs: '',
            dependencyCommand: '',
            tsCode: TsCode5,
            jsCode: JsCode5,
            showTabs: true,
            showJavascript: true,
            showTypescript: true,
        }
    }
];
