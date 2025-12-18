export const badgeMetadata = {
  id: 'badge',
  name: 'Badge',
  description:
    'A versatile and accessible badge component with support for variants, icons, interactivity, and removal.',

  cli: [
    'npx screenui-cli@latest add badge --lang ts --path src/components',
    'npx screenui-cli@latest add badge --lang js --path src/components',
  ],

  dependencies: ['react', 'tailwindcss'],

  version: '1.0.0',
  category: 'UI Components',
  tags: ['badge', 'tag', 'chip', 'label', 'status'],
}
