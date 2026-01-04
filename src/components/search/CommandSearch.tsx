import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';
import { Input } from '@/packages/Input';
import { Button } from '@/packages/Button';
import { CommandSearchProps } from './types';
import { cn } from '@/lib/utils';
import {
  MOCK_TEAM_MEMBERS,
  NAVIGATION_ITEMS,
  Components_ITEMS,
  SOCIAL_ITEMS
} from '@/data/command';

import NavigateTab from './tabs/NavigateTab';
import ComponentTab from './tabs/Components';
import ToolsTab from './tabs/SocialTab';
import TeamTab from './tabs/TeamTab';

const CommandSearch: React.FC<CommandSearchProps> = ({ onSelectComponent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'navigate' | 'components' | 'team' | 'social'>('components');

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    const isCmdK = (e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey);
    if (isCmdK) {
      e.preventDefault();
      setIsOpen(prev => !prev);
    }
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  const handleClose = () => {
    setIsOpen(false);
    setQuery('');
  };

  const filteredTeamMembers = MOCK_TEAM_MEMBERS.filter(member =>
    member.name.toLowerCase().includes(query.toLowerCase())
  );

  const filteredNavigationItems = NAVIGATION_ITEMS.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredActionItems = Components_ITEMS.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredToolItems = SOCIAL_ITEMS.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      {/* === Trigger Button === */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:w-full md:max-w-md md:px-4 md:py-0.5 md:border md:border-border]
         md:rounded-md md:bg-[hsla(var(--background))] md:text-left md:flex md:items-center md:gap-2
         w-8 h-8 flex items-center justify-center rounded-md border border-border bg-[hsl(var(--background))]"
      >
        <Search size={16} className="text-[hsl(var(--foreground))]" />

        {/* Desktop text only */}
        <span className="hidden md:inline text-[hsl(var(--foreground))]">Type a command...</span>
        <span className="hidden md:inline ml-auto text-xs text-[hsl(var(--foreground))]">⌘k</span>
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
              {/* === Search Input === */}
              <div className="relative">
                <Input
                  type='text'
                  placeholder='Type a command or search...'
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-gray-900 text-gray-200 pl-10 pr-10 py-3 border-b border-gray-800 focus:outline-none focus:ring-0 focus:border-transparent"
                  autoFocus
                  leftIcon={<Search size={16} className='text-white' />}
                />
                <Button
                  variant='ghost'
                  onClick={handleClose}
                  className="absolute right-0 top-0 bg-transparent text-white"
                >
                  <X size={16} />
                </Button>
              </div>

              {/* === Tabs === */}
              <div className="flex border-b border-gray-800 overflow-x-auto">
                {(['navigate', 'components', 'team', 'social'] as const).map((tab) => (
                  <Button
                  variant='ghost'
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      'px-4 py-2 rounded-none text-sm font-medium focus:outline-none bg-transparent',
                      activeTab === tab
                        ? 'border-b border-border text-red-400'
                        : 'border-b border-transparent text-white'
                    )}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </Button>

                ))}
              </div>

              {/* === Content === */}
              <div className="max-h-72 overflow-y-auto">
                {activeTab === 'navigate' && (
                  <NavigateTab
                    items={filteredNavigationItems}
                    onSelect={(title) => {
                      console.log(`Navigated to: ${title}`);
                      handleClose();
                    }}
                  />
                )}

                {activeTab === 'components' && (
                  <ComponentTab
                    items={filteredActionItems}
                    onSelect={(component) => {
                      onSelectComponent(component);
                      handleClose();
                    }}
                  />
                )}

                {activeTab === 'social' && (
                  <ToolsTab items={filteredToolItems} onSelect={() => handleClose()} />
                )}

                {activeTab === 'team' && (
                  <TeamTab members={filteredTeamMembers} onSelect={() => handleClose()} />
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
