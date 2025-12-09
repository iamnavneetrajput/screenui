import { TsCode1, TsCode2, JsCode1, JsCode2, InstallCommands} from './modal';

import { ContentDemo as Variant1 } from '../demo/ContentDemo';
import { ConfirmationDemo as Variant2 } from '../demo/ConfirmationDialog';
import { Config } from './config';

export const Demos = [
    {
        id: 'ContentDemo',
        component: Variant1,
        config: {
            ...Config,
            title: 'Content Modal',
            description: 'A modal for displaying rich content such as text, forms, or custom layouts.',
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
        id: 'ConfirmationDemo',
        component: Variant2,
        config: {
            ...Config,
            title: 'Confirmation Modal',
            description: 'A modal designed for confirmation flows, featuring clear actions for approval or cancellation.',
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
