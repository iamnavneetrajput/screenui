export const selectMetadata = {
  id: 'select',
  name: 'Select',
  description:
    'An accessible select component with keyboard navigation, controlled mode, and optional headless rendering.',

  cli: [
    'npx screenui-cli@latest add select --lang ts --path src/components',
    'npx screenui-cli@latest add select --lang js --path src/components',
  ],

  dependencies: ['react', 'clsx', 'tailwind-merge', 'tailwindcss', 'class-variance-authority'],

  version: '1.0.0',
  category: 'Forms',
  tags: ['select', 'dropdown', 'combobox', 'form', 'input'],
}
