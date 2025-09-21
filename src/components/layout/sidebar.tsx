'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useMemo } from 'react';
import { ChevronDown, Package } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Components_ITEMS } from '@/data/command';

export function Sidebar() {
  const pathname = usePathname();

  // 🔹 Group components dynamically by category
  const sidebarCategories = useMemo(() => {
    const grouped: Record<string, { name: string; href: string }[]> = {};

    Components_ITEMS.forEach((comp) => {
      if (!grouped[comp.category]) {
        grouped[comp.category] = [];
      }
      grouped[comp.category].push({
        name: comp.title,
        href: comp.href ?? '/',
      });
    });

    return Object.entries(grouped).map(([category, items]) => ({
      title: category,
      items,
    }));
  }, []);

  // 🔹 Expand the category if current page belongs to it
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
    <aside className="w-64 mt-12 border-r border-[hsl(var(--border))] bg-[hsl(var(--background))] hidden md:block">
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
                  <div className="pl-3 border-l border-[hsl(var(--border))] space-y-1">
                    {category.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          'block py-2 px-2 text-sm rounded-md transition-colors',
                          pathname === item.href
                            ? 'text-primary font-medium'
                            : 'text-[hsl(var(--foreground))] hover:bg-[hsl(var(--background))]'
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
