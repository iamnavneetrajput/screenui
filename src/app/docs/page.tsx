
import IntroBanner from '@/components/ui/main/banner';
import { InstallationSteps } from '@/components/ui/docs/InstallationSteps';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'screenui docs',
  description: 'A CLI tool for scaffolding ready-made full-stack frontend projects built using either Next.js (with TypeScript) or Vite React (with TypeScript).',
};

export default function Home() {
  return (
    <main className="min-h-screen w-full pt-14 bg-[hsl(var(--background))]">
      <IntroBanner
        title="create-screenui"
        description="A CLI tool for scaffolding ready-made full-stack frontend projects built using either Next.js (with TypeScript) or Vite React (with TypeScript)." installCmd={'npx create-screenui'}
      />
      < InstallationSteps />
    </main>
  );
}