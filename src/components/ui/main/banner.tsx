'use client';

import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/main/button';
import TerminalCommand from '@/components/ui/main/TerminalCommand';
import Link from 'next/link';

interface IntroBannerProps {
  title: string;
  description: string;
  installCmd: string;
  buttonLabel?: string;
  navText?: string;
  buttonLink?: string;
}

export default function IntroBanner({
  title,
  description,
  installCmd,
  buttonLabel,
  navText,
  buttonLink = '#',
}: IntroBannerProps) {
  return (
    <div className="pb-4 border-b border-dotted border-[hsl(var(--border))] bg-[hsl(var(--background))]">
      {/* Optional Navigation */}
      {navText && (
        <nav className="py-2 px-2">
          <div className="max-w-[1400px] mx-auto">
            <Link
              href="https://tailwindcss.com/docs/installation/using-vite"
              target="_blank"
              rel="noopener noreferrer"
              className="text-inherit"
            >
              <div className="flex items-center space-x-2 text-sm font-medium">
                <span className="cursor-pointer">{navText}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </nav>
      )}

      {/* Hero Section */}
      <main className="px-2">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-2xl py-2">
            <h1 className="text-2xl font-bold tracking-tight mb-2">{title}</h1>
            <p className="text-xl mb-10">{description}</p>
            <div className="flex items-center gap-4">
              {buttonLabel && (
                <Link href={buttonLink}>
                  <Button>{buttonLabel}</Button>
                </Link>
              )}
              <TerminalCommand command={installCmd} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
