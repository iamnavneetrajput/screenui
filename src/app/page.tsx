"use client";
import IntroBanner from "@/components/ui/main/banner";
import Demo from "@/components/demo/demo";

export default function Home() {
  return (
    <main className="min-h-screen w-full pt-14 bg-[hsl(var(--background))]">

      <IntroBanner
        title="Craft components your way"
        description="Plug-and-play components. Share, reuse, and build fast — all open source."
        installCmd="npx create-screenui"
        buttonLabel="Get Started"
        buttonLink="/library"
      />
      {/* Other content can go here */}

      <Demo/>

    </main>
  );
}
