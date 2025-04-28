'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { componentCategories } from '@/components/data/components';

interface SidebarProps {
  onSelectComponent: (path: string) => void;
}

interface CategoryItemProps {
  name: string;
  isOpen: boolean;
  toggleOpen: () => void;
  components: { name: string; path: string }[];
  onSelectComponent: (path: string) => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  name,
  isOpen,
  toggleOpen,
  components,
  onSelectComponent
}) => {
  return (
    <div className="mb-2">
      <button
        onClick={toggleOpen}
        className="w-full flex items-center justify-between p-2 hover:bg-accent rounded-md transition-colors"
      >
        <span className="font-medium">{name}</span>
        {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
      </button>

      {isOpen && (
        <div className="ml-4 mt-1 border-l border-muted-foreground pl-2">
          {components.map((component) => (
            <button
              key={component.path}
              onClick={() => onSelectComponent(component.path)}
              className="w-full text-left p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors text-sm"
            >
              {component.name}
            </button>
          ))}
        </div>
      )}

    </div>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ onSelectComponent }) => {
  const [openCategories, setOpenCategories] = useState<string[]>([
    componentCategories[0].name // Open the first category by default
  ]);

  const toggleCategory = (categoryName: string) => {
    if (openCategories.includes(categoryName)) {
      setOpenCategories(openCategories.filter(name => name !== categoryName));
    } else {
      setOpenCategories([...openCategories, categoryName]);
    }
  };

  return (
    <div className="h-full bg-[hsl(var(--background))] flex flex-col text-foreground border-[hsl(var(--border))]">
      {/* Header */}
      <div className="p-4 border-b border-muted-foreground">
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
          />
        ))}
      </div>
    </div>
  );
};
export default Sidebar;