'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Tab {
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
  badge?: string | number;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: number;
  onTabChange?: (index: number) => void;
  className?: string;
  variant?: 'default' | 'pills' | 'underline';
  size?: 'sm' | 'md' | 'lg';
}

export function Tabs({
  tabs,
  defaultTab = 0,
  onTabChange,
  className,
  variant = 'default',
  size = 'md',
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (variant === 'underline') {
      const setTabPosition = () => {
        const currentTab = tabsRef.current[activeTab];
        if (currentTab) {
          setTabUnderlineLeft(currentTab.offsetLeft);
          setTabUnderlineWidth(currentTab.getBoundingClientRect().width);
        }
      };

      setTabPosition();
      window.addEventListener('resize', setTabPosition);
      return () => window.removeEventListener('resize', setTabPosition);
    }
  }, [activeTab, variant]);

  const handleTabClick = (index: number) => {
    if (tabs[index].disabled) return;
    setActiveTab(index);
    onTabChange?.(index);
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const getTabClasses = (index: number, isActive: boolean) => {
    const baseClasses = cn(
      'relative font-medium transition-all duration-200',
      sizeClasses[size]
    );

    switch (variant) {
      case 'pills':
        return cn(
          baseClasses,
          'rounded-full',
          isActive
            ? 'bg-blue-600 text-white shadow-lg'
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
        );
      case 'underline':
        return cn(
          baseClasses,
          'border-b-2 border-transparent',
          isActive
            ? 'text-blue-600 border-blue-600'
            : 'text-gray-600 hover:text-gray-900 hover:border-gray-300'
        );
      default:
        return cn(
          baseClasses,
          'border-b-1 border-transparent',
          isActive
            ? 'bg-none text-[hsl(var-(--foreground))] border-blue-600'
            : 'text-gray-600 hover:text-gray-900'
        );
    }
  };

  return (
    <div className={cn('w-full', className)}>
      {/* Tab Navigation */}
      <div className={cn(
        'relative flex',
        variant === 'default' ? 'bg-[hsl(var(--surface))] p-1 overflow-x-scroll rounded-lg' : 'border-b border-gray-200',
        variant === 'pills' ? 'space-x-2' : ''
      )}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            ref={(el) => { tabsRef.current[index] = el; }}
            onClick={() => handleTabClick(index)}
            disabled={tab.disabled}
            className={getTabClasses(index, activeTab === index)}
          >
            <span className="flex items-center space-x-2">
              <span>{tab.label}</span>
              {tab.badge && (
                <span className={cn(
                  'inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium rounded-full',
                  activeTab === index
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-200 text-gray-700'
                )}>
                  {tab.badge}
                </span>
              )}
            </span>
          </button>
        ))}

        {/* Animated underline for underline variant */}
        {variant === 'underline' && (
          <motion.div
            className="absolute bottom-0 h-0.5 bg-blue-600"
            animate={{
              left: tabUnderlineLeft,
              width: tabUnderlineWidth,
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        )}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {tabs[activeTab]?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}