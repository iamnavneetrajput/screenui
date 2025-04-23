// components/Pagination.tsx
import React from 'react';

interface PaginationProps {
  currentIndex: number;
  totalItems: number;
  onNext: () => void;
  onPrevious: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentIndex, totalItems, onNext, onPrevious }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        disabled={currentIndex === 0}
        className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
      >
        Previous
      </button>

      {/* Component Index Indicator */}
      <span className="text-lg font-medium">
        {currentIndex + 1} / {totalItems}
      </span>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={currentIndex === totalItems - 1}
        className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
