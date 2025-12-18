export const inputMetadata = {
  id: 'input',
  name: 'Input',
  description:
    'A flexible and accessible input component supporting icons, clearable behavior, variants, sizes, and controlled or uncontrolled usage.',

  cli: [
    'npx screenui-cli@latest add input --lang ts --path src/components',
    'npx screenui-cli@latest add input --lang js --path src/components',
  ],

  dependencies: ['react', 'tailwindcss'],

  version: '1.0.0',
  category: 'Form',
  tags: [
    'input',
    'textfield',
    'form',
    'controlled',
    'uncontrolled',
    'icons',
  ],
}
