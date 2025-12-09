// src/app/page.tsx
import IntroBanner from "@/components/ui/main/banner";
import { mergeMetadata } from '@/lib/seo.utils';
import Stargazers from "@/components/ui/main/Stargazers";
import ShowcaseGrid from "@/components/ui/demos/ShowcaseGrid";
import { Metadata } from "next";

export const metadata: Metadata = mergeMetadata({
  title: 'screenui',
  description: 'Designed to be modified.',
});

export default function Home() {
  return (
    <main className="min-h-screen custom-container mx-auto pt-12">
      <IntroBanner
        title="Designed to be modified"
        description="Drop them in, tweak what matters, and move on. All open source."
        installCmd="npx screenui init"
        buttonLabel="Components"
        buttonLink="/library"
      />
      <section className="w-full max-w-7xl mx-auto">
        <div className="pt-8 ml-2">
          <h4 className="text-2xl font-extrabold">
            Component Previews
          </h4>
          <p className="mt-2 opacity-90">
            Explore stable, customizable components designed to work with you not against you.
          </p>
        </div>
        <ShowcaseGrid />
        <Stargazers />
      </section>
    </main>
  );
}