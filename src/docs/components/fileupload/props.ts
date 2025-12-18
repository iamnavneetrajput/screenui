import type { PropGroup } from '@/docs/schema'

export const fileUploadProps: PropGroup[] = [
  {
    component: 'FileUpload',
    description:
      'Props for the FileUpload component including validation, previews, and drag-and-drop behavior.',
    props: [
      { name: 'variant', type: "'default' | 'filled' | 'outlined' | 'ghost'", default: "'default'", required: false, description: 'Visual style of the uploader.' },
      { name: 'size', type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'", required: false, description: 'Controls spacing and padding.' },
      { name: 'label', type: 'React.ReactNode', required: false, description: 'Label displayed above the uploader.' },
      { name: 'description', type: 'React.ReactNode', required: false, description: 'Helper description text.' },
      { name: 'accept', type: 'string', required: false, description: 'Accepted file types.' },
      { name: 'multiple', type: 'boolean', default: 'false', required: false, description: 'Allows multiple file selection.' },
      { name: 'maxSize', type: 'number', required: false, description: 'Maximum file size in bytes.' },
      { name: 'maxFiles', type: 'number', required: false, description: 'Maximum number of files.' },
      { name: 'disabled', type: 'boolean', default: 'false', required: false, description: 'Disables all interactions.' },
      { name: 'showPreview', type: 'boolean', default: 'true', required: false, description: 'Shows image previews when available.' },
      { name: 'allowRemove', type: 'boolean', default: 'true', required: false, description: 'Allows removing selected files.' },
      { name: 'validateFile', type: '(file: File) => string | null', required: false, description: 'Custom validation function.' },
      { name: 'onChange', type: '(files: FileMeta[]) => void', required: false, description: 'Called whenever files change.' },
      {
        name: 'render',
        type: '(ctx) => React.ReactNode',
        required: false,
        description: 'Fully custom render while keeping FileUpload logic.',
      },
      { name: 'className', type: 'string', required: false, description: 'Custom class names for the container.' },
    ],
  },
]
