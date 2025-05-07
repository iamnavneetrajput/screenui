'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Sidebar from '@/components/ui/library/sidebar';
import ComponentDisplay from '@/components/ui/library/componentdisplay';
import { ComponentData, getComponentByPath, componentCategories } from '@/components/data/components';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import HamburgerToggle from '@/components/ui/library/menu';

const ComponentPageClient: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryComponent = searchParams.get('component');

  const firstComponentPath = componentCategories[0]?.components[0]?.path;
  const [selectedComponent, setSelectedComponent] = useState<ComponentData | null>(
    queryComponent ? getComponentByPath(queryComponent) : firstComponentPath ? getComponentByPath(firstComponentPath) : null
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleComponentSelect = (path: string) => {
    const component = getComponentByPath(path);
    if (component) {
      setSelectedComponent(component);
      router.push(`/library?component=${path}`);
      if (window.innerWidth < 768) setSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (queryComponent) {
      const component = getComponentByPath(queryComponent);
      setSelectedComponent(component);
    }
  }, [queryComponent]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row w-full pt-12">
      {/* Mobile Header */}
      <div className="md:hidden pb-4 flex items-center justify-between">
        <button onClick={() => setSidebarOpen(true)} className="">
          <HamburgerToggle />
        </button>
      </div>

      {/* Mobile Sidebar Drawer */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-30 bg-[hsl(var(--background))] backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed bottom-0 left-0 right-0 z-40 bg-background border-t shadow-2xl h-[70vh] overflow-y-auto rounded-t-xl md:hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-10 h-1.5 bg-muted-foreground rounded-full mx-auto my-2" />
              <Sidebar
                onSelectComponent={handleComponentSelect}
                selectedComponentPath={selectedComponent?.path}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <div className="hidden md:block md:sticky top-0 left-0 bottom-0 w-60 border-r border-gray-200 overflow-y-auto md:h-screen">
        <Sidebar
          onSelectComponent={handleComponentSelect}
          selectedComponentPath={selectedComponent?.path}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-[hsl(var(--background))] p-0 md:p-6 transition-all duration-300">
        {selectedComponent && (
          <ComponentDisplay component={selectedComponent} />
        )}
      </div>
    </div>
  );
};

export default ComponentPageClient;
