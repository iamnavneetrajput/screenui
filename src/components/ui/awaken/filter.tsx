import React, { useState } from 'react';

interface FilterNavProps {
  categories: string[];
  onCategorySelect: (category: string) => void;
}

const FilterNav: React.FC<FilterNavProps> = ({ categories, onCategorySelect }) => {
  const [active, setActive] = useState<string>('All');

  const handleClick = (category: string) => {
    setActive(category);
    onCategorySelect(category);
  };

  return (
    <nav className="mb-6 border-b border-gray-200">
      <div className="flex overflow-x-auto space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleClick(category)}
            className={`text-sm py-2 px-4 rounded-full transition-all ${
              active === category
                ? 'bg-zinc-900 text-white border border-zinc-700'
                : 'text-zinc-400 hover:text-white'
            }`}
            aria-pressed={active === category}
          >
            {category}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default FilterNav;
