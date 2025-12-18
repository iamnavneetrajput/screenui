// docs/components/avatar/metadata.ts
export const avatarMetadata = {
  id: 'avatar',
  name: 'Avatar',
  description:
    'A flexible avatar component supporting images, fallback text, dynamic colors, status indicators, notifications, and grouping.',

  cli: [
    'npx screenui-cli@latest add avatar --lang ts --path src/components',
    'npx screenui-cli@latest add avatar --lang js --path src/components',
  ],

  dependencies: ['react', 'tailwindcss'],

  version: '1.0.0',
  category: 'Identity',
  tags: ['avatar', 'profile', 'user', 'image', 'fallback', 'status'],
}
