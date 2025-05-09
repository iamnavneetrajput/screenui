'use client';

import React, { memo } from 'react';
import { componentCategories } from '@/components/data/components';

interface HorizontalSidebarProps {
  onSelectComponent: (path: string) => void;
}

const HorizontalSidebar: React.FC<HorizontalSidebarProps> = memo(({ onSelectComponent }) => {
  return (
    <div
      className="w-full flex gap-3 overflow-x-auto px-4 py-2 border-b border-dotted border-[hsl(var(--border))] bg-[hsl(var(--background))]"
      role="navigation"
      aria-label="Component categories"
    >
      {componentCategories.flatMap((category) =>
        category.components.map((component) => (
          <button
            key={component.path}
            onClick={() => onSelectComponent(component.path)}
            className="text-sm whitespace-nowrap text-muted-foreground hover:text-foreground px-3 py-1 rounded-md transition-colors cursor-pointer"
            aria-label={`Select ${component.name}`}
            title={`Select ${component.name}`}
          >
            {component.name}
          </button>
        ))
      )}
    </div>
  );
});

HorizontalSidebar.displayName = 'HorizontalSidebar';
export default HorizontalSidebar;
