import React from 'react';

interface FilterNavProps {
  categories: string[];
  onCategorySelect: (category: string) => void;
}

const FilterNav: React.FC<FilterNavProps> = ({ categories, onCategorySelect }) => {
  return (
    <nav className="mb-6 border-b border-gray-200">
      <div className="flex overflow-x-auto space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            className="text-sm py-2 px-4 rounded-full border-none cursor-pointer"
            onClick={() => onCategorySelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default FilterNav;
