'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Maximize2,
  Minimize2,
  Copy,
  ExternalLink,
  Smartphone,
  Tablet,
  Monitor,
  Package,
  Terminal,
  FileText,
  CheckCircle,
  ChevronDown
} from 'lucide-react';
import { Tabs } from './tabs';
import { CodeBlock } from './code-block';
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
  nextjsCode?: string;
  children: React.ReactNode;
  category?: string;
  version?: string;
  lastUpdated?: string;
  className?: string;
}

type ViewportSize = 'mobile' | 'tablet' | 'desktop';
type CodeLanguage = 'typescript' | 'javascript';

export const ComponentDemo: React.FC<ComponentDemoProps> = ({
  title,
  description,
  component,
  npmCommandTs,
  npmCommandJs,
  dependencyCommand,
  tsCode,
  jsCode,
  nextjsCode,
  children,
  category,
  version,
  lastUpdated,
  className,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [viewportSize, setViewportSize] = useState<ViewportSize>('desktop');
  const [showGrid, setShowGrid] = useState(false);
  const [codeLanguage, setCodeLanguage] = useState<CodeLanguage>('typescript');
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const handleTabChange = useCallback((index: number) => {
    setActiveTab(index);
  }, []);

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen(prev => !prev);
  }, []);

  const toggleStep = useCallback((stepIndex: number) => {
    setCompletedSteps(prev =>
      prev.includes(stepIndex)
        ? prev.filter(i => i !== stepIndex)
        : [...prev, stepIndex]
    );
  }, []);

  const getViewportClasses = useMemo(() => {
    switch (viewportSize) {
      case 'mobile':
        return 'max-w-sm mx-auto';
      case 'tablet':
        return 'max-w-2xl mx-auto';
      default:
        return 'w-full';
    }
  }, [viewportSize]);

  const currentCode = useMemo(() => {
    return codeLanguage === 'typescript' ? tsCode : jsCode;
  }, [codeLanguage, tsCode, jsCode]);

  const currentFileExtension = useMemo(() => {
    return codeLanguage === 'typescript' ? 'tsx' : 'jsx';
  }, [codeLanguage]);

  const installationSteps = useMemo(() => {
    const steps = [];

    if (dependencyCommand) {
      steps.push({
        title: 'Install Dependencies',
        description: 'Install the required dependencies for this component',
        icon: Package,
        content: (
          <CodeBlock
            code={dependencyCommand}
            language="bash"
            filename="Terminal"
            showLineNumbers={false}
          />
        ),
      });
    }

    if (npmCommandTs || npmCommandJs) {
      steps.push({
        title: 'CLI Installation (Optional)',
        description: 'Or install using our CLI tool',
        icon: Terminal,
        content: (
          <div className="space-y-4">
            <div className="flex space-x-2 mb-4">
              <button
                onClick={() => setCodeLanguage('typescript')}
                className={cn(
                  'px-3 py-1.5 text-sm rounded-md transition-colors font-medium',
                  codeLanguage === 'typescript'
                    ? 'bg-blue-100 text-blue-800 border border-blue-200'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}
              >
                TypeScript
              </button>
              <button
                onClick={() => setCodeLanguage('javascript')}
                className={cn(
                  'px-3 py-1.5 text-sm rounded-md transition-colors font-medium',
                  codeLanguage === 'javascript'
                    ? 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}
              >
                JavaScript
              </button>
            </div>
            <CodeBlock
              code={codeLanguage === 'typescript' ? (npmCommandTs || '') : (npmCommandJs || '')}
              language="bash"
              filename={`${codeLanguage === 'typescript' ? 'TypeScript' : 'JavaScript'} Installation`}
              showLineNumbers={false}
            />
          </div>
        ),
      });
    }

    steps.push({
      title: 'Copy Component Code',
      description: 'Copy the component code to your project',
      icon: FileText,
      content: (
        <div className="space-y-4">
          <div className="flex space-x-2 mb-4">
            <button
              onClick={() => setCodeLanguage('typescript')}
              className={cn(
                'px-3 py-1.5 text-sm rounded-md transition-colors font-medium',
                codeLanguage === 'typescript'
                  ? 'bg-blue-100 text-blue-800 border border-blue-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
            >
              TypeScript
            </button>
            <button
              onClick={() => setCodeLanguage('javascript')}
              className={cn(
                'px-3 py-1.5 text-sm rounded-md transition-colors font-medium',
                codeLanguage === 'javascript'
                  ? 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
            >
              JavaScript
            </button>
          </div>
          <CodeBlock
            code={currentCode}
            language={currentFileExtension}
            filename={`${component}.${currentFileExtension}`}
          />
        </div>
      ),
    });

    return steps;
  }, [dependencyCommand, npmCommandTs, npmCommandJs, component, currentCode, currentFileExtension, codeLanguage]);

  const tabs = useMemo(() => [
    {
      label: 'Preview',
      badge: '1',
      content: (
        <div className="relative">
          {/* Viewport Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 p-4 bg-[hsl(var(--background))] border-b border-[hsl(var(--border))]">
            {/* Viewport size buttons - hidden on screens ≤ 900px */}
            <div className="hidden lg:flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <span className="text-sm font-medium text-[hsl(var(--foreground))]">Viewport:</span>
              <div className="flex space-x-1">
                {[
                  { size: 'mobile' as ViewportSize, icon: Smartphone, label: 'Mobile (375px)' },
                  { size: 'tablet' as ViewportSize, icon: Tablet, label: 'Tablet (768px)' },
                  { size: 'desktop' as ViewportSize, icon: Monitor, label: 'Desktop (1200px)' },
                ].map(({ size, icon: Icon, label }) => (
                  <button
                    key={size}
                    onClick={() => setViewportSize(size)}
                    className={cn(
                      'p-2 rounded-md transition-colors',
                      viewportSize === size
                        ? 'bg-[hsl(210, 100%, 90%)] text-[hsl(210, 100%, 40%)]'
                        : 'text-[hsl(210, 10%, 40%)] hover:bg-[hsl(210, 20%, 95%)]'
                    )}
                    title={label}
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>

            {/* Grid & Fullscreen buttons - always visible */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowGrid(!showGrid)}
                className={cn(
                  'px-3 py-1.5 text-sm rounded-md transition-colors font-medium',
                  showGrid
                    ? 'bg-[hsl(270, 100%, 95%)] text-[hsl(270, 80%, 40%)]'
                    : 'text-[hsl(210, 10%, 40%)] hover:bg-[hsl(210, 20%, 95%)]'
                )}
                title="Toggle Grid"
              >
                Grid
              </button>
              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-md text-[hsl(210, 10%, 40%)] hover:bg-[hsl(210, 20%, 95%)] transition-colors"
                title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              >
                {isFullscreen ? (
                  <Minimize2 className="w-4 h-4" />
                ) : (
                  <Maximize2 className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Preview Container */}
          <motion.div
            className={cn(
              'relative overflow-hidden bg-white rounded-lg shadow-lg',
              isFullscreen && 'fixed inset-4 z-50 shadow-2xl',
              showGrid && 'bg-grid-pattern'
            )}
            layout
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className={cn(
              'flex items-center justify-center p-4 sm:p-8 min-h-[200px] sm:min-h-[300px]',
              getViewportClasses,
              isFullscreen && 'min-h-[calc(100vh-8rem)]'
            )}>
              <motion.div
                className="transition-all duration-300 w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                {children}
              </motion.div>
            </div>

            {/* Fullscreen Overlay */}
            <AnimatePresence>
              {isFullscreen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/20 z-40"
                  onClick={toggleFullscreen}
                />
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )
    },
    {
      label: 'Installation',
      content: (
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">Installation Guide</h3>
            <p className="text-[hsl(210, 10%, 40%)]">
              Follow these steps to add the {component} component to your project.
            </p>
          </div>

          <div className="space-y-4">
            {installationSteps.map((step, index) => {
              const Icon = step.icon;
              const isCompleted = completedSteps.includes(index);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-[hsl(var(--color-border))] rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleStep(index)}
                    className="w-full px-4 sm:px-6 py-4 text-left bg-[hsl(0, 0%, 98%)] hover:bg-[hsl(0, 0%, 95%)] transition-colors flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={cn(
                          'flex items-center justify-center w-8 h-8 rounded-full transition-colors',
                          isCompleted
                            ? 'bg-[hsl(140, 80%, 90%)] text-[hsl(140, 60%, 30%)]'
                            : 'bg-[hsl(210, 20%, 85%)] text-[hsl(210, 10%, 40%)]'
                        )}
                      >
                        {isCompleted ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <Icon className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium text-[hsl(var(--foreground))] text-sm sm:text-base">
                          Step {index + 1}: {step.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[hsl(210, 10%, 40%)]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isCompleted ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-[hsl(210, 10%, 60%)]" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isCompleted && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 sm:p-6 bg-[hsl(var(--background))] border-t border-[hsl(var(--color-border))]">
                          {step.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          <div className="bg-[hsl(210, 100%, 97%)] border border-[hsl(210, 100%, 80%)] rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg
                  className="w-5 h-5 text-[hsl(210, 100%, 40%)] mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-medium text-[hsl(210, 100%, 20%)]">Need Help?</h4>
                <p className="text-sm text-[hsl(210, 80%, 30%)] mt-1">
                  Check our documentation or join our community for support and examples.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: 'TypeScript',
      content: (
        <div className="space-y-4">
          <CodeBlock
            code={tsCode}
            language="tsx"
            filename={`${component}.tsx`}
          />
        </div>
      ),
    },
    {
      label: 'JavaScript',
      content: (
        <div className="space-y-4">
          <CodeBlock
            code={jsCode}
            language="jsx"
            filename={`${component}.jsx`}
          />
        </div>
      ),
    },
  ], [
    children,
    component,
    currentCode,
    currentFileExtension,
    nextjsCode,
    viewportSize,
    isFullscreen,
    showGrid,
    getViewportClasses,
    toggleFullscreen,
    installationSteps,
    completedSteps,
    toggleStep,
    codeLanguage,
  ]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'border border-[hsl(var(--border))] rounded-xl overflow-hidden shadow-lg bg-[hsl(0,0%,100%)]',
        className
      )}
    >
      {/* Header */}
      <div className="p-4 sm:p-6 bg-[hsl(var(--background))] border-b border-[hsl(var(--border))]">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
          <div className="space-y-2 flex-1">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[hsl(var(--foreground))]">{title}</h2>
              {category && (
                <span className="px-2 py-1 text-xs font-medium bg-[hsl(210, 100%, 95%)] text-[hsl(210, 100%, 30%)] rounded-full">
                  {category}
                </span>
              )}
              {version && (
                <span className="px-2 py-1 text-xs font-medium bg-[hsl(120, 60%, 90%)] text-[hsl(120, 40%, 30%)] rounded-full">
                  v{version}
                </span>
              )}
            </div>
            <p className="text-[hsl(210, 10%, 40%)] text-sm sm:text-base">{description}</p>
            {lastUpdated && (
              <p className="text-xs text-[hsl(210, 10%, 55%)]">
                Last updated: {lastUpdated}
              </p>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <button
              className="p-2 rounded-lg text-[hsl(210, 10%, 40%)] hover:bg-[hsl(0,0%,100%)] hover:text-[hsl(var(--foreground))] transition-colors"
              title="Copy component link"
            >
              <Copy className="w-4 h-4" />
            </button>
            <button
              className="p-2 rounded-lg text-[hsl(210, 10%, 40%)] hover:bg-[hsl(0,0%,100%)] hover:text-[hsl(var(--foreground))] transition-colors"
              title="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4 sm:p-6 bg-[hsl(var(--background))]">
        <Tabs
          tabs={tabs}
          defaultTab={activeTab}
          onTabChange={handleTabChange}
        />
      </div>

      {/* Footer */}
      <div className="px-4 sm:px-6 py-4 bg-[hsl(var(--background))] border-t border-[hsl(var(--border))]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs sm:text-sm text-[hsl(210, 10%, 40%)]">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <span>Component: {component}</span>
            <span className="hidden sm:inline">•</span>
            <span>Production Ready</span>
            <span className="hidden sm:inline">•</span>
            <span>TypeScript Support</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>Powered by</span>
            <span className="font-semibold text-[hsl(var(--foreground))]">React + Tailwind</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};