'use client';
import React from 'react';
import { componentCategories } from '@/components/data/components';

interface HorizontalSidebarProps {
  onSelectComponent: (path: string) => void;
}

const HorizontalSidebar: React.FC<HorizontalSidebarProps> = ({ onSelectComponent }) => {
  return (
    <div className="w-full flex gap-3 overflow-x-auto px-4 py-2 border-b border-dotted bg-[hsl(var(--background))]">
      {componentCategories.flatMap((category) =>
        category.components.map((component) => (
          <button
            key={component.path}
            onClick={() => onSelectComponent(component.path)}
            className="text-sm whitespace-nowrap text-muted-foreground hover:text-foreground px-3 py-1 rounded-md transition-colors cursor-pointer"
          >
            {component.name}
          </button>
        ))
      )}
    </div>
  );
};

export default HorizontalSidebar;
