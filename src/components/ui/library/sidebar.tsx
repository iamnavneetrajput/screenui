'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { componentCategories } from '@/components/data/components';

interface SidebarProps {
  onSelectComponent: (path: string) => void;
  selectedComponentPath?: string;
}

interface CategoryItemProps {
  name: string;
  isOpen: boolean;
  toggleOpen: () => void;
  components: { name: string; path: string }[];
  onSelectComponent: (path: string) => void;
  selectedComponentPath?: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  name,
  isOpen,
  toggleOpen,
  components,
  onSelectComponent,
  selectedComponentPath
}) => {
  return (
    <div className="mb-2">
      <button
        onClick={toggleOpen}
        className="w-full flex items-center justify-between p-2 hover:bg-accent rounded-md transition-colors"
        aria-expanded={isOpen}
        aria-controls={`category-${name}`}
      >
        <span className="font-medium">{name}</span>
        {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
      </button>

      {isOpen && (
        <div id={`category-${name}`} className="ml-4 mt-1 border-l border-[hsl(var(--border))] pl-2">
          {components.map((component) => {
            const isSelected = component.path === selectedComponentPath;
            return (
              <button
                key={component.path}
                onClick={() => onSelectComponent(component.path)}
                className={`w-full text-left p-2 rounded-md transition-colors text-sm ${
                  isSelected
                    ? 'bg-muted text-foreground font-semibold'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
              >
                {component.name}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ onSelectComponent, selectedComponentPath }) => {
  const [openCategories, setOpenCategories] = useState<string[]>([
    componentCategories[0].name // Open first category by default
  ]);

  const toggleCategory = (categoryName: string) => {
    setOpenCategories((prevOpenCategories) =>
      prevOpenCategories.includes(categoryName)
        ? prevOpenCategories.filter((name) => name !== categoryName)
        : [...prevOpenCategories, categoryName]
    );
  };

  return (
    <nav className="h-screen bg-[hsl(var(--background))] flex flex-col text-[hsl(var(--foreground))] border-[hsl(var(--border))]">
      {/* Header */}
      <div className="p-4 border-b border-[hsl(var(--border))]">
        <h1 className="text-xl font-bold">Component Library</h1>
        <p className="text-sm text-muted-foreground mt-1">Documentation & Examples</p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {componentCategories.map((category) => (
          <CategoryItem
            key={category.name}
            name={category.name}
            isOpen={openCategories.includes(category.name)}
            toggleOpen={() => toggleCategory(category.name)}
            components={category.components}
            onSelectComponent={onSelectComponent}
            selectedComponentPath={selectedComponentPath}
          />
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
