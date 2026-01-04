export const tabsMetadata = {
  id: 'tabs',
  name: 'Tabs',
  description:
    'An accessible tabs component with keyboard navigation, variants, and composable subcomponents.',

  cli: [
    'npx screenui-cli@latest add tabs --lang ts --path src/components',
    'npx screenui-cli@latest add tabs --lang js --path src/components',
  ],
   dependencyCommand: [],

  dependencies: ['react', 'clsx', 'tailwind-merge', 'tailwindcss', 'class-variance-authority'],

  version: '1.0.0',
  category: 'Navigation',
  tags: ['tabs', 'navigation', 'ui', 'layout'],
}
