export const checkboxMetadata = {
  id: 'checkbox',
  name: 'Checkbox',
  description:
    'A flexible and accessible checkbox component supporting labels, descriptions, grouping, validation states, and indeterminate behavior.',

  cli: [
    'npx screenui-cli@latest add checkbox --lang ts --path src/components',
    'npx screenui-cli@latest add checkbox --lang js --path src/components',
  ],

  dependencies: ['react', 'tailwindcss'],

  version: '1.0.0',
  category: 'Forms',
  tags: ['checkbox', 'form', 'input', 'selection', 'boolean'],
}
