'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { GithubIcon, X, EllipsisVertical } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import CommandSearch from '@/components/search/CommandSearch';

const navItems = [
  { name: 'screen/ui', href: '/' },
  { name: 'Docs', href: '/docs' },
  { name: 'Component', href: '/library' },
  { name: 'Colors', href: '/color' },
  { name: 'Awaken', href: '/awaken' },
];

// Filter out 'screen/ui' for desktop-only navigation/search.
const desktopNavItems = navItems.filter(item => item.name !== 'screen/ui');

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-dashed border-[hsl(var(--border))] bg-[hsl(var(--background))] text-[hsla(var(--foreground))]">
      <div className="custom-container mx-auto px-4 flex items-center justify-between h-12">
        {/* Left Section: Logo + Nav */}
        <div className="flex items-center gap-6 flex-1 md:flex-none">
          {/* Logo visible from md down to 360px, hidden below 360px */}
          <div className="text-lg font-semibold block max-[450px]:hidden">
            <Link href="/" className="text-foreground">
              screen/ui
            </Link>
          </div>

          {/* Desktop Nav - excludes 'screen/ui' */}
          <nav className="hidden md:flex items-center gap-6">
            {desktopNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm transition-colors hover:text-foreground ${pathname === item.href
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Search replaces logo below md */}
          <div className="block md:hidden flex-1">
            <CommandSearch components={[]} onSelectComponent={function (component: string): void {
            }} />
          </div>
        </div>

        {/* Right Section: Search (desktop), GitHub, Mobile Menu */}
        <div className="flex items-center">
          {/* Desktop Search - excludes 'screen/ui' */}
          <div className="hidden md:block">
            <CommandSearch components={[]} onSelectComponent={function (component: string): void {
            }} />
          </div>

          {/* GitHub link */}
          <div className='flex items-center gap-2 ml-4'>
          <a
            href="https://github.com/iamnavneetrajput"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:bg-accent rounded-full transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden rounded-md hover:bg-accent transition-colors"
            aria-label="Open menu"
          >
            <EllipsisVertical size={18} />
          </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-[hsl(var(--background))] bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Side Drawer */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-72 bg-background shadow-lg z-40 px-4 py-6 flex flex-col space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-md hover:bg-accent transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Mobile Links - uses full navItems */}
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`py-2 px-1 text-sm transition-colors rounded-md ${pathname === item.href
                        ? 'text-foreground font-medium bg-accent'
                        : 'text-muted-foreground hover:text-foreground'
                      }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
