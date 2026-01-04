'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/packages/Badge';
import { cn } from '@/lib/utils';

interface Tab {
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
  badge?: string | number;
  icon?: React.ComponentType<{ className?: string }>;
}

interface EnhancedTabsProps {
  tabs: Tab[];
  defaultTab?: number;

  /** Controlled mode */
  value?: number;
  onValueChange?: (index: number) => void;

  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
};

export function EnhancedTabs({
  tabs,
  defaultTab = 0,
  value,
  onValueChange,
  className,
  size = 'md',
  animated = true,
}: EnhancedTabsProps) {
  const [internalTab, setInternalTab] = useState(defaultTab);

  const activeTab = value ?? internalTab;

  const setActiveTab = (index: number) => {
    if (tabs[index].disabled) return;

    if (value === undefined) {
      setInternalTab(index);
    }

    onValueChange?.(index);
  };

  return (
    <div className={cn('w-full', className)} role="tablist">
      <div className="relative overflow-x-scroll overflow-y-hidden flex items-center bg-secondary p-1 rounded-lg gap-1">
        {tabs.map((tab, index) => {
          const Icon = tab.icon;
          const isActive = activeTab === index;

          return (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              disabled={tab.disabled}
              className={cn(
                'relative font-medium transition-all duration-200',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                'rounded-md',
                sizeClasses[size],
                isActive
                  ? 'text-foreground shadow-sm'
                  : 'text-foreground/60 hover:text-foreground hover:bg-secondary/80',
                tab.disabled && 'opacity-50 cursor-not-allowed'
              )}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${index}`}
              id={`tab-${index}`}
            >
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-background border border-border rounded-md"
                initial={false}
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                style={{ display: isActive ? 'block' : 'none' }}
              />

              <span className="relative flex items-center space-x-2 whitespace-nowrap">
                {Icon && <Icon className="w-4 h-4" />}
                <span>{tab.label}</span>
                {tab.badge != null && (
                  <Badge
                    size="sm"
                    variant='soft'
                    color='info'
                    className="pointer-events-none"
                  >
                    {tab.badge}
                  </Badge>
                )}

              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-6">
        <AnimatePresence mode="wait">
          {tabs.map(
            (tab, index) =>
              index === activeTab && (
                <motion.div
                  key={index}
                  id={`tabpanel-${index}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${index}`}
                  initial={animated ? { opacity: 0, y: 10 } : false}
                  animate={animated ? { opacity: 1, y: 0 } : false}
                  exit={animated ? { opacity: 0, y: -10 } : undefined}
                  transition={{ duration: 0.2 }}
                >
                  {tab.content}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}