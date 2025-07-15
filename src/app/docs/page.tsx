'use client';
import IntroBanner from '@/components/ui/main/banner';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Metadata } from 'next';

// Dynamic import just in case it helps delay hydration issues
const InstallationSteps = dynamic(() => import('@/app/docs/component/InstallationSteps'), {
  ssr: false,
});

// export const metadata: Metadata = {
//   title: 'screenui docs',
//   description: 'Build beautiful interfaces faster with our component library and development tools.',
// };

export default function Home() {
  return (
    <main className="min-h-screen w-full pt-12 bg-[hsl(var(--background))]">
      <IntroBanner
        title="Screenui Docs"
        description="Build beautiful interfaces faster with our component library and development tools."
      />
      <Suspense fallback={<div>Loading steps...</div>}>
        <InstallationSteps />
      </Suspense>
    </main>
  );
}
