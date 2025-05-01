
import IntroBanner from '@/components/ui/main/banner';
import { Bot } from 'lucide-react'
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

      <div className="flex items-center justify-center w-full h-16 bg-[hsl(var(--background))]">
        <Bot className="w-6 h-6 mr-2 text-blue-500" />
        <h1 className="text-2xl font-bold text-gray-900">ScreenUI Docs</h1>
      </div>
    </main>
  );
}