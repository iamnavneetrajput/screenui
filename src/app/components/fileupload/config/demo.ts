import {
  TsCode1, TsCode2, TsCode3, TsCode4,
  JsCode1, JsCode2, JsCode3, JsCode4,
  InstallCommands
} from '@/app/components/fileupload/config/file-upload';

import { SimpleDropDemo as Variant1 } from '../demo/SimpleDropDemo';
import { ProfilePictureDemo as Variant2 } from '../demo/ProfilePictureDemo';
import { DocumentUploadDemo as Variant3 } from '../demo/DocumentUploadDemo';
import { GalleryUploadDemo as Variant4 } from '../demo/GalleryUploadDemo';

import { Config } from './config';

export const Demos = [
  {
    id: 'basic-file-upload',
    component: Variant1,
    config: {
      ...Config,
      title: 'Basic File Upload',
      description: 'A simple drag-and-drop uploader with label and description.',
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
    id: 'image-upload-preview',
    component: Variant2,
    config: {
      ...Config,
      title: 'Image Upload with Preview',
      description: 'Shows preview thumbnails and supports image-only uploads.',
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
    id: 'document-upload',
    component: Variant3,
    config: {
      ...Config,
      title: 'Document Upload',
      description: 'Demonstrates multi-file uploads, maxFiles, and size limits.',
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
    id: 'validated-upload',
    component: Variant4,
    config: {
      ...Config,
      title: 'Upload with Custom Validation',
      description: 'Includes async validation, file name rules, and dimension checks.',
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
];
