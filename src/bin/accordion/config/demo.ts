import {
    TsCode1, TsCode2,
    JsCode1, JsCode2,
    InstallCommands
} from '@/bin/accordion/config/accordion';

import { AccordionSingle as Variant1 } from '../demo/AccordionSingle';
import { AccordionMultiple as Variant2 } from '../demo/AccordionMultiple';

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
];