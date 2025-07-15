
import IntroBanner from '@/components/ui/main/banner';
import InstallationSteps from '@/app/docs/component/InstallationSteps';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'screenui docs',
  description: 'Build beautiful interfaces faster with our component library and development tools.',
};

export default function Home() {
  return (
    <main className="min-h-screen w-full pt-12 bg-[hsl(var(--background))]">
      <IntroBanner
        title="Screenui Docs"
        description="Build beautiful interfaces faster with our component library and development tools." />
      < InstallationSteps />
    </main>
  );
}