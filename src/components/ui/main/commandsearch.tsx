'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface CommandSearchProps {
  components: string[]; // List of components to search through
  onSelectComponent: (component: string) => void; // Callback to handle the component selection
}

const CommandSearch: React.FC<CommandSearchProps> = ({ components, onSelectComponent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [filteredComponents, setFilteredComponents] = useState<string[]>(components);

  // Keyboard shortcut (Cmd/Ctrl + K)
  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if ((e.key === 'i' || e.key === 'I') && (e.metaKey || e.ctrlKey)) {
        setIsOpen((prev) => !prev);
      }
    },
    []
  );

  useEffect(() => {
    // Listen for Cmd/Ctrl + K
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  useEffect(() => {
    // Filter components based on the search query
    if (query === '') {
      setFilteredComponents(components);
    } else {
      setFilteredComponents(components.filter((component) =>
        component.toLowerCase().includes(query.toLowerCase())
      ));
    }
  }, [query, components]);

  const handleClose = () => {
    setIsOpen(false);
    setQuery('');
  };

  const handleComponentClick = (component: string) => {
    onSelectComponent(component); // Call the parent callback
    handleClose(); // Close the search modal
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full max-w-md px-2 border rounded-md bg-[hsla(var(--background))] focus:outline-none float-end text-[hsl(var(--foreground))] text-left min-[375px]:min-w-[250px]"
      >
        search documentation...
      </button>

      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-opacity-50 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[hsl(var(--background))] border border-[hsl(var(--border))] p-4 rounded-md w-96"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
          >
            <input
              type="text"
              placeholder="Search components..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-4 py-2 mb-4 border border-[hsl(var(--border))] rounded-md"
            />
            {filteredComponents.length === 0 ? (
              <p className="text-[hsl(var(--foreground))]">No components found</p>
            ) : (
              <ul className="space-y-2">
                {filteredComponents.map((component, index) => (
                  <li
                    key={index}
                    className="cursor-pointer p-2 rounded-md"
                    onClick={() => handleComponentClick(component)} // Handle click
                  >
                    {component}
                  </li>
                ))}
              </ul>
            )}
            <div className="text-right">
              <button
                onClick={handleClose}
                className="text-[hsl(var(--forefround))] font-semibold"
              >
                <X size={16} className="inline mr-1" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default CommandSearch;