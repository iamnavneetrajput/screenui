'use client';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/packages/Button';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

export default function DocsSwitchButton() {
  const router = useRouter();
  const pathname = usePathname();

  const buttons = [
    {
      label: "Components",
      href: "/docs/components",
      active: pathname.includes("/components"),
    },
    {
      label: "Templates",
      href: "/docs/templates",
      active: pathname.includes("/templates"),
    },
  ];

  return (
    <div className="flex w-full">
      <div className="
        inline-flex p-1 rounded-lg 
        bg-[hsl(var(--background))] 
        border border-[hsl(var(--border))]
      ">
        {buttons.map((btn) => (
          <Button
            key={btn.href}
            onClick={() => router.push(btn.href)}
            variant="ghost"
            iconPosition='right'
            icon={btn.active ? <ChevronRight className="w-4 h-4" /> : undefined}
            className={cn(
              `
              px-4 py-2 rounded-md font-medium text-sm
              transition-all duration-200
              `,
              btn.active
                ? `
                  bg-[hsl(var(--button))] 
                  text-white 
                  shadow 
                  scale-[1.03]
                `
                : `
                  text-[hsl(var(--foreground))]/70 
                  hover:text-[hsl(var(--foreground))] 
                  hover:bg-[hsl(var(--foreground))]/5
                `
            )}
          >
            {btn.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
