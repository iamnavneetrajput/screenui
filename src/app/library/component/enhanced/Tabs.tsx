'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  onTabChange?: (index: number) => void;
  className?: string;
  variant?: 'default' | 'pills' | 'underline' | 'bordered';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export function EnhancedTabs({
  tabs,
  defaultTab = 0,
  onTabChange,
  className,
  variant = 'default',
  size = 'md',
  animated = true,
}: EnhancedTabsProps) {
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
      const timeoutId = setTimeout(setTabPosition, 100); // Ensure DOM is ready
      window.addEventListener('resize', setTabPosition);
      
      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('resize', setTabPosition);
      };
    }
  }, [activeTab, variant, tabs]);

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
      'relative font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
      sizeClasses[size],
      tabs[index].disabled && 'opacity-50 cursor-not-allowed'
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
      case 'bordered':
        return cn(
          baseClasses,
          'border rounded-lg',
          isActive
            ? 'bg-blue-50 border-blue-200 text-blue-700'
            : 'border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50'
        );
      default: // 'default'
        return cn(
          baseClasses,
          'rounded-md',
          isActive
            ? 'bg-white text-black shadow-sm border border-[hsl(var(--border))]'
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
        );
    }
  };

  return (
    <div className={cn('w-full', className)} role="tablist">
      {/* Tab Navigation */}
      <div className={cn(
        'relative flex items-center',
        variant === 'default' ? 'bg-[hsl(var(--surface))] p-1 rounded-lg gap-1' : '',
        variant === 'pills' ? 'space-x-2' : '',
        variant === 'bordered' ? 'space-x-2' : '',
        variant === 'underline' ? 'border-b border-gray-200' : '',
        'overflow-x-auto scrollbar-hide'
      )}>
        {tabs.map((tab, index) => {
          const Icon = tab.icon;
          return (
            <button
              key={index}
              ref={(el) => { tabsRef.current[index] = el; }}
              onClick={() => handleTabClick(index)}
              disabled={tab.disabled}
              className={getTabClasses(index, activeTab === index)}
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={`tabpanel-${index}`}
              id={`tab-${index}`}
              tabIndex={activeTab === index ? 0 : -1}
            >
              <span className="flex items-center space-x-2 whitespace-nowrap">
                {Icon && <Icon className="w-4 h-4" />}
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={cn(
                    'inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium rounded-full min-w-[1.25rem]',
                    activeTab === index
                      ? variant === 'pills' 
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-blue-100 text-blue-800'
                      : 'bg-gray-200 text-gray-700'
                  )}>
                    {tab.badge}
                  </span>
                )}
              </span>
            </button>
          );
        })}

        {/* Animated underline for underline variant */}
        {variant === 'underline' && tabUnderlineWidth > 0 && (
          <motion.div
            className="absolute bottom-0 h-0.5 bg-blue-600 rounded-full"
            initial={false}
            animate={{
              left: tabUnderlineLeft,
              width: tabUnderlineWidth,
            }}
            transition={{ 
              type: 'spring', 
              stiffness: 500, 
              damping: 30,
              duration: animated ? undefined : 0 
            }}
          />
        )}
      </div>

      {/* Tab Content - ALL content rendered in DOM for AI/SEO accessibility */}
      <div className="mt-6">
        {tabs.map((tab, index) => (
          <div
            key={index}
            id={`tabpanel-${index}`}
            role="tabpanel"
            aria-labelledby={`tab-${index}`}
            tabIndex={0}
            className={cn(
              // Visual hiding for inactive tabs while keeping in DOM
              index === activeTab 
                ? 'block' 
                : 'absolute left-[-9999px] top-[-9999px] w-[1px] h-[1px] overflow-hidden opacity-0 pointer-events-none'
            )}
            aria-hidden={index !== activeTab}
          >
            {animated && index === activeTab ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {tab.content}
              </motion.div>
            ) : (
              <div>{tab.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
