export const modalMetadata = {
  id: 'modal',
  name: 'Modal',
  description:
    'A fully accessible modal component with focus trapping, scroll locking, portal rendering, and composable layout sections.',

  cli: [
    'npx screenui-cli@latest add modal --lang ts --path src/components',
    'npx screenui-cli@latest add modal --lang js --path src/components',
  ],

  dependencies: ['react', 'tailwindcss'],

  version: '1.0.0',
  category: 'Overlay',
  tags: ['modal', 'dialog', 'overlay', 'popup'],
}
