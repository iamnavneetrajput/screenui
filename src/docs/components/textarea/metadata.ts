export const textareaMetadata = {
  id: 'textarea',
  name: 'Textarea',
  description:
    'A customizable and accessible textarea component with auto-resizing, validation states, labels, and character counting.',

  cli: [
    'npx screenui-cli@latest add textarea --lang ts --path src/components',
    'npx screenui-cli@latest add textarea --lang js --path src/components',
  ],
   dependencyCommand: [],

  dependencies: ['react', 'clsx', 'tailwind-merge', 'tailwindcss', 'class-variance-authority'],

  version: '1.0.0',
  category: 'Form',
  tags: [
    'textarea',
    'multiline',
    'form',
    'autosize',
    'validation',
    'input',
  ],
}
