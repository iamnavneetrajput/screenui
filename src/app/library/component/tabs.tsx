'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface TabsProps {
  tabs: {
    label: string;
    content: React.ReactNode;
  }[];
  defaultTab?: number;
  onTabChange?: (index: number) => void;
}

export function Tabs({ tabs, defaultTab = 0, onTabChange }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    onTabChange?.(index);
  };

  return (
    <div>
      <div className="flex border-b border-[hsl(var(--border))]  relative overflow-x-auto">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabChange(index)}
            className={cn(
              "px-6 py-3 text-sm font-medium transition-colors relative",
              activeTab === index
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.label}
            {(activeTab === index || 
              (tab.label === "Installation" && activeTab === 1) || 
              (tab.label === "React" && activeTab === 2) ||
              (tab.label === "Next.js" && activeTab === 3)) && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[hsl(var(--color-border))] "
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="py-6"
      >
        {tabs[activeTab].content}
      </motion.div>
    </div>
  );
}