export const accordionMetadata = {
  id: 'accordion',
  name: 'Accordion',
  description: 'A flexible, accessible, and fully controllable accordion system built with React and Tailwind.',
  
  cli: [
    'npx screenui-cli@latest add accordion --lang ts --path src/components',
    'npx screenui-cli@latest add accordion --lang js --path src/components',
  ],
  
  dependencies: ['react', 'clsx', 'tailwind-merge', 'tailwindcss', 'class-variance-authority'],
  
  version: '1.0.0',
  category: 'UI Components',
  tags: ['accordion', 'collapse', 'expand', 'ui', 'toggle', 'disclosure'],
}