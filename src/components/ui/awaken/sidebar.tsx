import React from 'react';
import { categories } from '@/components/data/awakencategories';
import { Icon } from './Icon';
import { Info } from 'lucide-react';

interface SidebarProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
  onShowInstallation: () => void; // Function to show installation guide
}

const Sidebar: React.FC<SidebarProps> = ({ activeCategory, onCategoryChange, onShowInstallation }) => {
  return (
    <aside className="w-full bg-[hsl(var(--background))]  border-b border-dotted overflow-x-auto py-2">
      <div className="flex space-x-2 px-4 ">
        {/* Installation Guide Link */}
        <button
          onClick={onShowInstallation}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-[hsl(var(--foreground))] hover:bg-[hsl(var(--surface))] transition-colors"
        >
          <Info className="h-5 w-5" />
          <span className="font-medium">Installation</span>
        </button>

        {/* Category Buttons */}
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
              activeCategory === category.id
                ? 'bg-[hsl(var(--surface))] text-[hsl(var(--foreground))]'
                : 'text-[hsl(var(--foreground))] hover:bg-[hsl(var(--surface))]'
            }`}
          >
            <Icon name={category.icon} className="h-5 w-5" />
            <span className="font-medium">{category.name}</span>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
