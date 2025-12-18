export const cardMetadata = {
  id: 'card',
  name: 'Card',
  description:
    'A versatile, composable Card component for layouts, dashboards, and UI sections.',

  cli: [
    'npx screenui-cli@latest add card --lang ts --path src/components',
    'npx screenui-cli@latest add card --lang js --path src/components',
  ],

  dependencies: ['react', 'tailwindcss'],

  version: '1.0.0',
  category: 'Layout',
  tags: ['card', 'layout', 'container'],
}
