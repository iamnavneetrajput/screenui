export const buttonMetadata = {
  id: 'button',
  name: 'Button',
  description:
    'A versatile, accessible button component supporting variants, icons, loading states, and polymorphic rendering.',

  cli: [
    'npx screenui-cli@latest add button --lang ts --path src/components',
    'npx screenui-cli@latest add button --lang js --path src/components',
  ],
   dependencyCommand: [],

  dependencies: ['react', 'clsx', 'tailwind-merge', 'tailwindcss', 'class-variance-authority'],

  version: '1.0.0',
  category: 'Actions',
  tags: ['button', 'action', 'cta', 'interactive', 'ui'],
}
