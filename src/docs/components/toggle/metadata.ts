export const toggleMetadata = {
  id: 'toggle',
  name: 'Toggle',
  description:
    'A simple, accessible toggle switch supporting controlled and uncontrolled usage, headless rendering, and form compatibility.',

  cli: [
    'npx screenui-cli@latest add toggle --lang ts --path src/components',
    'npx screenui-cli@latest add toggle --lang js --path src/components',
  ],
   dependencyCommand: [],

  dependencies: ['react', 'clsx', 'tailwind-merge', 'tailwindcss', 'class-variance-authority'],

  version: '1.0.0',
  category: 'Forms',
  tags: ['toggle', 'switch', 'boolean', 'form', 'headless'],
  lastUpdated: "2025-09-19",
}
