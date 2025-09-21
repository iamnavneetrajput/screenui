'use client';

import { useRouter, usePathname } from 'next/navigation';
import Button from '@/components/ui/main/button';
import clsx from 'clsx';

export default function DocsSwitchButton() {
  const router = useRouter();
  const pathname = usePathname();

  // Config for buttons
  const buttons = [
    {
      label: 'Component',
      shortLabel: 'Component',
      href: '/docs/component',
      active: pathname.includes('/component'),
    },
    {
      label: 'Awaken',
      shortLabel: 'Awaken',
      href: '/docs/awaken',
      active: pathname.includes('/awaken'),
    },
    {
      label: 'Theming',
      shortLabel: 'Theme',
      href: '/docs/theming',
      active: pathname.includes('/theming'),
    },
    {
      label: 'Dark Mode',
      shortLabel: 'Dark',
      href: '/docs/darkmode',
      active: pathname.includes('/darkmode'),
    },
  ];

  return (
    <div className="flex gap-2">
      {buttons.map((btn) => (
        <Button
          key={btn.href}
          onClick={() => router.push(btn.href)}
          className={clsx(
            "transition-colors",
            btn.active
              ? "underline bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]"
              : "bg-[hsl(var(--button))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--border))]"
          )}
        >
          <span className="hidden sm:inline">{btn.label}</span>
          <span className="sm:hidden">{btn.shortLabel}</span>
        </Button>
      ))}
    </div>
  );
}
