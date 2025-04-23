"use client";
import IntroBanner from "@/components/ui/main/banner";

export default function Home() {
  return (
    <main className="min-h-screen w-full pt-14 bg-[hsl(var(--background))]">

      <IntroBanner
        title="Craft components your way"
        description="Plug-and-play components. Share, reuse, and build fast — all open source."
        installCmd="npm i screenui/react"
        buttonLabel="Get Started"
        navText="Get Started with Tailwind v4"
      />
      {/* Other content can go here */}

    </main>
  );
}
