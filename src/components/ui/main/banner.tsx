'use client';

import { ArrowRight } from 'lucide-react';
import {Button} from '@/packages/Button';
import TerminalCommand from '@/components/ui/main/TerminalCommand';
import Link from 'next/link';
import type { ReactNode } from 'react';

interface IntroBannerProps {
  title: string;
  description: string;
  installCmd?: string;
  buttonLabel?: string;
  navText?: string;
  buttonLink?: string;
  customButton?: ReactNode;
}

export default function IntroBanner({
  title,
  description,
  installCmd,
  buttonLabel,
  navText,
  buttonLink = '#',
  customButton,
}: IntroBannerProps) {
  return (
    <div className="pb-2 border-b border-dashed border-[hsl(var(--border))]">
      {/* Optional Navigation */}
      {navText && (
        <nav className="py-2 px-2">
          <div className="max-w-[1400px] mx-auto">
            <Link
              href=""
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
            <p className="text-xl mb-4">{description}</p>
            <div className="flex items-center gap-4">
              {/* Custom button (preferred) or fallback to label-based button */}
              {customButton ? (
                customButton
              ) : buttonLabel ? (
                <Link href={buttonLink}>
                  <Button variant='solid' className='bg-[hsl(var(--button))] text-white cursor-pointer'>{buttonLabel}</Button>
                </Link>
              ) : null}

              {installCmd && <TerminalCommand command={installCmd} wrap="nowrap" />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
