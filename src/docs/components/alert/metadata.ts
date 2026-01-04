// docs/components/alert/metadata.ts
export const alertMetadata = {
  id: 'alert',
  name: 'Alert',
  description:
    'Alerts display important messages to the user and support semantic colors, icons, and dismissible behavior.',

  cli: [
    'npx screenui-cli@latest add alert --lang ts --path src/components',
    'npx screenui-cli@latest add alert --lang js --path src/components',
  ],
   dependencyCommand: [],

  dependencies: ['react', 'clsx', 'tailwind-merge', 'tailwindcss', 'class-variance-authority'],

  version: '1.0.0',
  category: 'Feedback',
  tags: ['alert', 'notification', 'feedback', 'message', 'status'],
  lastUpdated: '2025-12-18',
}
