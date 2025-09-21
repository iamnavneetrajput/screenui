// src/components/layout/Footer.tsx
'use client';

import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="w-full border-t border-dashed border-[hsl(var(--border))] bg-[hsl(var(--background))] py-4 text-sm">
      <div className="custom-container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-center md:text-left">
          Built by <span className="font-medium text-foreground">screen/ui</span>. The source code is available on{' '}
          <a
            href="https://github.com/iamnavneetrajput/screenui"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground inline-flex items-center gap-1"
          >
            GitHub
          </a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
