'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ChevronDown, Package } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarCategory {
  title: string;
  items: {
    name: string;
    href: string;
  }[];
}

const sidebarCategories: SidebarCategory[] = [
  {
    title: 'Elements',
    items: [
      { name: 'Button', href: '/components/button' },
      // { name: 'Badge', href: '/components/badge' },
      // { name: 'Card', href: '/components/card' },
      // { name: 'Input', href: '/components/input' },
    ],
  },
  {
    title: 'Feedback',
    items: [
      { name: 'Alert', href: '/components/alert' },
      // { name: 'Toast', href: '/components/toast' },
      // { name: 'Progress', href: '/components/progress' },
    ],
  },
  {
    title: 'Layout',
    items: [
      { name: 'Accordion', href: '/components/accordion' },
      // { name: 'Tabs', href: '/components/tabs' },
      // { name: 'Dialog', href: '/components/dialog' },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const initialExpanded: Record<string, boolean> = {};

  sidebarCategories.forEach((category) => {
    initialExpanded[category.title] = category.items.some(
      (item) => item.href === pathname
    );
  });

  const [expanded, setExpanded] = useState<Record<string, boolean>>(initialExpanded);

  const toggleCategory = (category: string) => {
    setExpanded((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <aside className="w-64 mt-8 border-r border-[hsl(var(--border))] bg-[hsl(var(--background))] hidden md:block">
      <div className="p-6 border-b border-[hsl(var(--border))]">
        <Link href="/" className="flex items-center gap-2 group">
          <Package className="h-6 w-6 text-[hsl(var(--foreground))] transition-transform group-hover:scale-110" />
          <h1 className="text-sm font-bold text-[hsl(var(--foreground))]">Components ui</h1>
        </Link>
        <p className="text-sm text-[hsl(var(--foreground))] mt-1">Documentation & Examples</p>
      </div>
      <nav className="p-4">
        {sidebarCategories.map((category) => (
          <div key={category.title} className="mb-4">
            <button
              onClick={() => toggleCategory(category.title)}
              className="flex items-center justify-between w-full py-2 px-3 text-sm font-medium text-[hsl(var(--foreground))] hover:bg-[hsl(var(--background))] rounded-md transition-colors"
            >
              {category.title}
              <motion.div
                initial={false}
                animate={{ rotate: expanded[category.title] ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="h-4 w-4 text-[hsl(var(--foreground))]" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {expanded[category.title] && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-1 ml-2 overflow-hidden"
                >
                  <div className="pl-3 border-l-1 border-[hsl(var(--color-border))] space-y-1">
                    {category.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "block py-2 px-2 text-sm rounded-md transition-colors",
                          pathname === item.href
                            ? " text-[hsl(var(--color-border))]"
                            : "text-[hsl(var(--foreground))] hover:bg-[hsl(var(--background))]"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        ))}
      </nav>
    </aside>
  );
}
