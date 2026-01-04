export const stepcardMetadata = {
  id: 'stepcard',
  name: 'StepCard',
  description:
    'A flexible step-based card component for multi-step flows with horizontal and vertical layouts.',

  cli: [
    'npx screenui-cli@latest add stepcard --lang ts --path src/components',
    'npx screenui-cli@latest add stepcard --lang js --path src/components',
  ],
   dependencyCommand: [],

  dependencies: ['react', 'clsx', 'tailwind-merge', 'tailwindcss', 'class-variance-authority'],

  version: '1.0.0',
  category: 'Navigation',
  tags: ['stepper', 'steps', 'workflow', 'ui'],
}
