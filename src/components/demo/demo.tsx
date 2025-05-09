'use client';

import React, { useState, useEffect, Suspense } from 'react';
import HorizontalSidebar from '@/components/demo/HorizontalSidebar';
import ComponentDisplay from '@/components/demo/displaydemo';
import { ComponentData, getComponentByPath, componentCategories } from '@/components/data/components';

const Demo: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState<ComponentData | null>(null);

  useEffect(() => {
    const firstComponent = componentCategories[0]?.components[0];
    if (firstComponent) {
      const component = getComponentByPath(firstComponent.path);
      setSelectedComponent(component);
    }
  }, []);

  const handleComponentSelect = (path: string) => {
    const component = getComponentByPath(path);
    setSelectedComponent(component);
  };

  if (!selectedComponent) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex-1 bg-[hsl(var(--background))] transition-all duration-300">
      <div className="pb-2">
        <HorizontalSidebar onSelectComponent={handleComponentSelect} />
      </div>
      <Suspense fallback={<div>Loading component...</div>}>
        <ComponentDisplay component={selectedComponent} />
      </Suspense>
    </div>
  );
};

export default Demo;
