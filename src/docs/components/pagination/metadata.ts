export const paginationMetadata = {
  id: 'pagination',
  name: 'Pagination',
  description:
    'Accessible, customizable pagination component with styled, simple, compact, and headless rendering modes.',

  cli: [
    'npx screenui-cli@latest add pagination --lang ts --path src/components',
    'npx screenui-cli@latest add pagination --lang js --path src/components',
  ],

  dependencies: ['react', 'tailwindcss'],

  version: '1.0.0',
  category: 'Navigation',
  tags: ['pagination', 'navigation', 'pages', 'list'],
}
