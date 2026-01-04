export const fileUploadMetadata = {
  id: 'file-upload',
  name: 'File Upload',
  description:
    'A customizable drag-and-drop file uploader with previews, validation, and flexible rendering options.',

  cli: [
    'npx screenui-cli@latest add fileupload --lang ts --path src/components',
    'npx screenui-cli@latest add fileupload --lang js --path src/components',
  ],
   dependencyCommand: [],

  dependencies: ['react', 'clsx', 'tailwind-merge', 'tailwindcss', 'class-variance-authority'],

  version: '1.0.1',
  category: 'Forms',
  tags: [
    'file-upload',
    'drag-drop',
    'uploader',
    'input',
    'validation',
    'preview',
  ],
}
