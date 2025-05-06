import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';
import { CommandSearchProps } from './types';
import { 
  MOCK_TEAM_MEMBERS, 
  NAVIGATION_ITEMS, 
  Components_ITEMS, 
  TOOL_ITEMS 
} from '@/components/data/command';
import NavigateTab from './tabs/NavigateTab';
import ComponentTab from './tabs/Components';
import ToolsTab from './tabs/ToolsTab';
import TeamTab from './tabs/TeamTab';

const CommandSearch: React.FC<CommandSearchProps> = ({ components, onSelectComponent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'navigate' | 'components' | 'team' | 'tools'>('navigate');
  
  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if ((e.key === 'i' || e.key === 'I') && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    },
    [isOpen]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  const handleClose = () => {
    setIsOpen(false);
    setQuery('');
  };

  const handleComponentClick = (component: string) => {
    onSelectComponent(component);
    handleClose();
  };

  const filteredTeamMembers = MOCK_TEAM_MEMBERS.filter(
    member => !query || member.name.toLowerCase().includes(query.toLowerCase())
  );

  const filteredNavigationItems = NAVIGATION_ITEMS.filter(
    item => !query || item.title.toLowerCase().includes(query.toLowerCase()) || 
    item.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredActionItems = Components_ITEMS.filter(
    item => !query || item.title.toLowerCase().includes(query.toLowerCase()) || 
    item.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredToolItems = TOOL_ITEMS.filter(
    item => !query || item.title.toLowerCase().includes(query.toLowerCase()) || 
    item.description.toLowerCase().includes(query.toLowerCase())
  );
  
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full max-w-md px-4 float-end py-0.5 border rounded-md bg-[hsla(var(--background))] text-[hsl(var(--foreground))] text-left flex items-center min-[375px]:min-w-[250px]"
      >
        <Search size={16} className="mr-2 text-[hsl(var(--foreground))]" />
        <span className="text-[hsl(var(--foreground))]">Type a command...</span>
        <span className="ml-auto text-xs text-[hsl(var(--foreground))]">⌘I</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-opacity-60 backdrop-blur-sm flex justify-center items-start pt-28 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div
              className="bg-gray-900 border m-2 border-gray-800 rounded-lg shadow-2xl w-full max-w-lg overflow-hidden"
              initial={{ y: -20, opacity: 0.8 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Search size={16} className="absolute left-4 top-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Type a command or search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-gray-900 text-gray-200 pl-10 pr-10 py-3 border-b border-gray-800 focus:outline-none"
                  autoFocus
                />
                <button 
                  onClick={handleClose} 
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-200 focus:outline-none"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="flex border-b border-gray-800">
                {(['navigate', 'components', 'team', 'tools'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-medium focus:outline-none ${
                      activeTab === tab 
                        ? 'text-white border-b-2 border-white' 
                        : 'text-gray-400 hover:text-gray-300'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <div className="max-h-72 overflow-y-auto">
                {activeTab === 'navigate' && (
                  <NavigateTab items={filteredNavigationItems} onSelect={handleComponentClick} />
                )}
                {activeTab === 'components' && (
                  <ComponentTab items={filteredActionItems} onSelect={handleComponentClick} />
                )}
                {activeTab === 'tools' && (
                  <ToolsTab items={filteredToolItems} onSelect={handleComponentClick} />
                )}
                {activeTab === 'team' && (
                  <TeamTab members={filteredTeamMembers} onSelect={handleComponentClick} />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CommandSearch;