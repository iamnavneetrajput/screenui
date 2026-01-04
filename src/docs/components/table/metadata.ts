export const tableMetadata = {
  id: 'table',
  name: 'Table',
  description:
    'A flexible data table component with support for custom columns, loading states, and reusable layouts.',

  cli: [
    'npx screenui-cli@latest add table --lang ts --path src/components',
    'npx screenui-cli@latest add table --lang js --path src/components',
  ],
   dependencyCommand: [],

  dependencies: ['react', 'clsx', 'tailwind-merge', 'tailwindcss', 'class-variance-authority'],

  version: '1.0.0',
  category: 'Data Display',
  tags: ['table', 'data', 'list', 'grid', 'ui'],
}
