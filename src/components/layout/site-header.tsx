'use client';
import { useState } from 'react';
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
  { name: 'Templates', href: '/templates' },
];

const desktopNav = navItems.filter((x) => x.name !== 'screen/ui');

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-dashed 
                       border-border bg-background">
      <div className="custom-container mx-auto px-4 h-12 flex items-center justify-between">

        {/* LEFT SIDE — LOGO & DESKTOP NAV */}
        <div className="flex items-center gap-6">
          <Link href="/" className="text-lg font-semibold">screen/ui</Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6">
            {desktopNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm ${
                  pathname === item.href ? 'text-foreground font-medium' : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* RIGHT SIDE — SEARCH + GITHUB + MENU */}
        <div className="flex items-center gap-3">

          {/* Desktop search */}
          <div className="hidden md:block">
            <CommandSearch components={[]} onSelectComponent={() => {}} />
          </div>

          {/* Mobile search icon-only */}
          <div className="block md:hidden">
            <CommandSearch components={[]} onSelectComponent={() => {}} />
          </div>

          {/* GitHub */}
          <a
            href="https://github.com/iamnavneetrajput"
            target="_blank"
            className="ml-1 hover:bg-accent rounded-md"
          >
            <GithubIcon size={18} />
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden hover:bg-accent rounded-md"
            onClick={() => setOpen(true)}
          >
            <EllipsisVertical size={20} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-72 h-full bg-background shadow-xl p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium">Menu</span>
                <button onClick={() => setOpen(false)}>
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`py-2 px-1 text-sm rounded-md ${
                      pathname === item.href ? 'bg-accent text-foreground' : 'text-foreground'
                    }`}
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
