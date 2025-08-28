'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ChatGPTButton from './ChatGPTButton';
import { Tabs } from './tabs';
import { InstallationGuide } from './InstallationGuide';
import { CodeBlock } from './CodeBlock';
import { cn } from '@/lib/utils';

interface ComponentDemoProps {
  title: string;
  description: string;
  component: string;
  npmCommandTs?: string;
  npmCommandJs?: string;
  dependencyCommand?: string;
  tsCode: string;
  jsCode: string;
  children: React.ReactNode;
  category?: string;
  version?: string;
  lastUpdated?: string;
  className?: string;
  showTabs?: boolean;
  showInstallation?: boolean;
  showTypescript?: boolean;
  showJavascript?: boolean;
}

export function ComponentDemo({
  title,
  description,
  component,
  npmCommandTs,
  npmCommandJs,
  dependencyCommand,
  tsCode,
  jsCode,
  children,
  category,
  version,
  lastUpdated,
  className,
  showTabs = true,
  showInstallation = true,
  showTypescript = true, // default on
  showJavascript = true, // default on
}:
  ComponentDemoProps) {
  const [codeLanguage, setCodeLanguage] = useState<'typescript' | 'javascript'>('typescript');

  const currentCode = codeLanguage === 'typescript' ? tsCode : jsCode;
  const currentFileExtension = codeLanguage === 'typescript' ? 'tsx' : 'jsx';


  const tabs = [];

  // Always include Preview tab
  tabs.push({
    label: 'Preview',
    content: (
      <div className="relative">
        <motion.div
          className="flex items-center justify-center p-8 bg-[hsl(var(--surface))] rounded-lg min-h-[300px]"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <motion.div
            className="transition-all duration-300 w-full flex items-center justify-center"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            {children}
          </motion.div>
        </motion.div>
      </div>
    ),
  });

  // Add Installation tab if enabled
  if (showInstallation) {
    tabs.push({
      label: 'Installation',
      content: (
        <InstallationGuide
          component={component}
          dependencyCommand={dependencyCommand}
          npmCommandTs={npmCommandTs}
          npmCommandJs={npmCommandJs}
          tsCode={tsCode}
          jsCode={jsCode}
        />
      ),
    });
  }

  // TypeScript tab
  if (showTypescript) {
    tabs.push({
      label: 'TypeScript',
      content: (
        <CodeBlock
          code={tsCode}
          language="tsx"
          filename={`${component}.tsx`}
        />
      ),
    });
  }

  // JavaScript tab
  if (showJavascript) {
    tabs.push({
      label: 'JavaScript',
      content: (
        <CodeBlock
          code={jsCode}
          language="jsx"
          filename={`${component}.jsx`}
        />
      ),
    });
  }

  // If tabs are disabled, just show the preview
  if (!showTabs) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          'border border-[hsl(var(--border))] rounded-xl overflow-hidden shadow-lg bg-[hsl(var(--background))]',
          className
        )}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 bg-[hsl(var(--background))]">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <h2 className="text-xl sm:text-2xl font-bold text-[hsl(var(--foreground))]">{title}</h2>
                {category && (
                  <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    {category}
                  </span>
                )}
                {version && (
                  <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    v{version}
                  </span>
                )}
              </div>
              <p className="text-[hsl(var(--foreground))] text-sm sm:text-base">{description}</p>
              {lastUpdated && (
                <p className="text-xs">
                  Last updated: {lastUpdated}
                </p>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <ChatGPTButton />
            </div>
          </div>
        </div>

        {/* Preview Only */}
        <div className="p-4 sm:p-6 bg-[hsl(var(--background))]">
          <motion.div
            className="flex items-center justify-center p-8 bg-[hsl(var(--surface))] rounded-lg min-h-[300px]"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <motion.div
              className="transition-all duration-300 w-full flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              {children}
            </motion.div>
          </motion.div>
        </div>
        {/* Footer */}
        <div className="px-4 sm:px-6 py-4 bg-[hsl(var(--background))] border-t border-[hsl(var(--border))]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs sm:text-sm text-[hsl(var(--foreground))]">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              <span>{component} Example</span>
            </div>
            {/* <div className="flex items-center space-x-2">
              <span>Powered by</span>
              <span className="font-semibold text-[hsl(var(--foreground))]">Next.js + Tailwind</span>
            </div> */}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'border border-[hsl(var(--border))] rounded-xl overflow-hidden shadow-lg bg-white',
        className
      )}
    >
      {/* Header */}
      <div className="p-4 sm:p-6 bg-[hsl(var(--background))]">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
          <div className="space-y-2 flex-1">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[hsl(var(--foreground))]">{title}</h2>
              {category && (
                <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                  {category}
                </span>
              )}
              {version && (
                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                  v{version}
                </span>
              )}
            </div>
            <p className="text-[hsl(var(--foreground))] text-sm sm:text-base">{description}</p>
            {lastUpdated && (
              <p className="text-xs text-[hsl(var(--foreground))]">
                Last updated: {lastUpdated}
              </p>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <ChatGPTButton />
            {/* 
            <button
              className="p-2 rounded-lg text-[hsl(var(--foreground))] hover:bg-white hover:text-gray-900 transition-colors"
              title="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </button> */}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4 sm:p-6 bg-[hsl(var(--background))]">
        <Tabs
          tabs={tabs}
          defaultTab={0}
          variant="default"
          size="md"
        />
      </div>

      {/* Footer */}
      <div className="px-4 sm:px-6 py-4 bg-[hsl(var(--background))] border-t border-[hsl(var(--border))]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs sm:text-sm text-[hsl(var(--foreground))]">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <span>{component} Examples</span>
          </div>
          {/* <div className="flex items-center space-x-2">
            <span>Powered by</span>
            <span className="font-semibold text-[hsl(var(--foreground))]">Next.js + Tailwind</span>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
}