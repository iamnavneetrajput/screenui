'use client';

import { ArrowRight, Terminal } from 'lucide-react';
import Button from '@/components/ui/main/button';
import CopyButton from '@/components/ui/main/copybutton';

interface IntroBannerProps {
  title: string;
  description: string;
  installCmd: string;
  buttonLabel?: string; // Optional
  navText?: string;
}

export default function IntroBanner({
  title,
  description,
  installCmd,
  buttonLabel, // now optional
  navText = 'Get Started with Tailwind v4',
}: IntroBannerProps) {
  return (
    <div className="pb-8 border-b border-dotted bg-[hsl(var(--background))]">
      {/* Navigation */}
      <nav className="py-2 px-2">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center space-x-2 text-sm font-medium">
            <span className="cursor-pointer">{navText}</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="px-2">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-2xl py-2">
            <h1 className="text-2xl font-bold tracking-tight mb-2">{title}</h1>
            <p className="text-xl mb-10">{description}</p>
            <div className="flex items-center gap-4">
              {buttonLabel && <Button>{buttonLabel}</Button>}
              <div className="flex items-center bg-gray-950 text-white border border-gray-800 px-4 py-2 rounded-md font-mono text-sm">
                <Terminal className="w-4 h-4 text-gray-400 mr-2" />
                <code>{installCmd}</code>
                <div className="ml-4">
                  <CopyButton text={installCmd} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
