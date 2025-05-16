//src/app/library/client/ComponentPageClient.tsx
'use client';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Sidebar from '@/components/ui/library/sidebar';
import ComponentDisplay from '@/components/ui/library/componentdisplay';
import { ComponentData, getComponentByPath, componentCategories } from '@/components/data/components';
import { AnimatePresence, motion } from 'framer-motion';
import HamburgerToggle from '@/components/ui/library/menu';
import Loader from '@/components/ui/main/loader';

// Custom hook to get the selected component
const useSelectedComponent = (queryComponent: string | null): ComponentData | null => {
  const firstComponentPath = componentCategories[0]?.components[0]?.path;

  return useMemo(() => {
    return queryComponent ? getComponentByPath(queryComponent) : firstComponentPath ? getComponentByPath(firstComponentPath) : null;
  }, [queryComponent, firstComponentPath]);
};

const ComponentPageClient: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryComponent = searchParams.get('component');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState<ComponentData | null>(null);

  // Memoize the selected component based on the query param
  const selectedComponentData = useSelectedComponent(queryComponent);

  useEffect(() => {
    if (selectedComponentData) {
      setSelectedComponent(selectedComponentData); // Set selected component when the data is available
    }
  }, [selectedComponentData]);

  // Handle selecting a component
  const handleComponentSelect = useCallback((path: string) => {
    const component = getComponentByPath(path);
    if (component) {
      setSelectedComponent(component);
      router.push(`/library?component=${path}`);
      if (window.innerWidth < 768) setSidebarOpen(false); // Close sidebar on mobile
    }
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row w-full pt-12">
      {/* Mobile Header */}
      <div className="md:hidden pb-4 flex items-center justify-between">
        <button onClick={() => setSidebarOpen(true)}>
          <HamburgerToggle />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-30 bg-[hsl(var(--background))] backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            />
            <motion.div
              initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
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
      <div className="hidden md:block md:sticky top-0 left-0 bottom-0 w-60 border-r border-[hsl(var(--border))] overflow-y-auto md:h-screen">
        <Sidebar
          onSelectComponent={handleComponentSelect}
          selectedComponentPath={selectedComponent?.path}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-[hsl(var(--background))] p-0 md:p-6 transition-all duration-300">
        {selectedComponent ? (
          <ComponentDisplay component={selectedComponent} />
        ) : (
          <div className='mt-6'><Loader variant='spinner' text='Loading...'/></div> // Add a loading state until the component is available
        )}
      </div>
    </div>
  );
};

export default ComponentPageClient;
