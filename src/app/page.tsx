// src/app/page.tsx

import IntroBanner from "@/components/ui/main/banner";
import Feature from "@/components/ui/main/Feature";
import { mergeMetadata } from '@/lib/seo.utils';
import { Metadata } from "next";

export const metadata: Metadata = mergeMetadata({
  title: 'screenui',
  description: 'Craft components your way Plug-and-play components. Share, reuse, and build fast — all open source.',
});

export default function Home() {
  return (
    <main className="min-h-screen w-full pt-12 bg-[hsl(var(--background))]">
      <IntroBanner
        title="Craft components your way"
        description="Plug-and-play components. Share, reuse, and build fast — all open source."
        installCmd="npx create-screenui@latest"
        buttonLabel="Get Started"
        buttonLink="/library"
      />
      <Feature />
      {/* Other content can go here */}
    </main>
  );
}
