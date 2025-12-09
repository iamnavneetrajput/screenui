'use client';

import { useRouter, usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import clsx from 'clsx';
import { Button } from '@/packages/Button';

export default function DocsSwitchButton() {
  const router = useRouter();
  const pathname = usePathname();

  const buttons = [
    {
      label: 'Component',
      shortLabel: 'Component',
      mini: 'Component',
      href: '/docs/component',
      active: pathname.includes('/component'),
    },
    {
      label: 'Templates',
      shortLabel: 'Templates',
      mini: 'Templates',
      href: '/docs/templates',
      active: pathname.includes('/templates'),
    },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <div className="inline-flex gap-1 p-1 bg-(hsl(var(--background))) rounded-lg min-w-max">
        {buttons.map((btn) => (
          <Button
            key={btn.href}
            onClick={() => router.push(btn.href)}
            variant="ghost"
            className={clsx(
              `relative px-2 xs:px-2.5 sm:px-3 md:px-4 
               py-1 xs:py-1.5 sm:py-2 rounded-md font-medium 
               text-xs xs:text-xs sm:text-sm md:text-base 
               whitespace-nowrap flex-shrink-0 transition-all 
               duration-200 ease-out`,
              btn.active
                ? "bg-(hsl(var(--surface))) text-(hsl(var(--foreground))) shadow-sm scale-[1.02]"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
            )}
          >
            {/* LG label */}
            <span className="hidden lg:inline relative">
              {btn.label}
              {btn.active && (
                <ChevronRight
                  className="inline-block ml-1 w-4 h-4 animate-pulse"
                  strokeWidth={2.5}
                />
              )}
            </span>

            {/* MD */}
            <span className="hidden md:inline lg:hidden relative">
              {btn.shortLabel}
              {btn.active && (
                <ChevronRight
                  className="inline-block ml-0.5 w-3 h-3 animate-pulse"
                  strokeWidth={2.5}
                />
              )}
            </span>

            {/* Mobile */}
            <span className="md:hidden relative">
              {btn.mini}
              {btn.active && (
                <ChevronRight
                  className="inline-block ml-0.5 w-2.5 h-2.5 animate-pulse"
                  strokeWidth={2.5}
                />
              )}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
}
