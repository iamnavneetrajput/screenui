// src/app/page.tsx

import IntroBanner from "@/components/ui/main/banner";
import Feature from "@/components/ui/main/Feature";
import { mergeMetadata } from '@/lib/seo.utils';
import { Metadata } from "next";

export const metadata: Metadata = mergeMetadata({
  title: 'screenui',
  description: 'Designed to be modified.',
});

export default function Home() {
  return (
    <main className="min-h-screen w-full pt-12 bg-[hsl(var(--background))]">
      <IntroBanner
        title="Designed to be modified"
        description="Drop them in, tweak what matters, and move on. All open source."
        installCmd="npx screenui add component-name"
        buttonLabel="Components"
        buttonLink="/library"
      />
      <Feature />
      {/* Other content can go here */}
    </main>
  );
}
