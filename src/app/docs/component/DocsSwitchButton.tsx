'use client';

import { useRouter, usePathname } from 'next/navigation';
import Button from '@/components/ui/main/button';

export default function DocsSwitchButton() {
  const router = useRouter();
  const pathname = usePathname();

  const isComponent = pathname.includes('/component');

  // Config for buttons
  const buttons = [
    {
      label: isComponent ? 'Awaken Docs' : 'Component Docs',
      shortLabel: isComponent ? 'Awaken' : 'Component',
      href: isComponent ? '/docs/awaken' : '/docs/component',
      active: pathname.includes('/component') || pathname.includes('/awaken'),
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
      href: '/docs/DarkMode',
      active: pathname.includes('/DarkMode'),
    },
  ];

  return (
    <div className="flex gap-2">
      {buttons.map((btn) => (
        <Button
          key={btn.href}
          onClick={() => router.push(btn.href)}
        >
          <span className="hidden sm:inline">{btn.label}</span>
          <span className="sm:hidden">{btn.shortLabel}</span>
        </Button>
      ))}
    </div>
  );
}
