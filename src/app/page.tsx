// src/app/page.tsx

import IntroBanner from "@/components/ui/main/banner";
import Demo from "@/components/demo/demo";
import { mergeMetadata } from '@/lib/seo.utils';
import { Metadata } from "next";

export const metadata: Metadata = mergeMetadata({
  title: 'screenui',
  description: 'Craft components your way Plug-and-play components. Share, reuse, and build fast — all open source.',
  openGraph: {
    images: [
      {
        url: '/trans-sui-logo.png',
        width: 1200,
        height: 630,
        alt: 'screenui',
      },
    ],
  },
  twitter: {
    images: ['https://www.screenui.com/trans-sui-logo.png'],
  },
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
      {/* Other content can go here */}
      <Demo />
    </main>
  );
}
