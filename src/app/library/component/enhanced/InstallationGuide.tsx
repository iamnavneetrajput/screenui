'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, Terminal, FileText, CheckCircle, ChevronDown } from 'lucide-react';
import { CodeBlock } from './CodeBlock';
import { Button } from '@/packages/Button';
import { cn } from '@/lib/utils';

interface InstallationGuideProps {
  component: string;
  dependencyCommand?: string;
  npmCommandTs?: string;
  npmCommandJs?: string;
  tsCode: string;
  jsCode: string;
  className?: string;
}

export function InstallationGuide({
  component,
  dependencyCommand,
  npmCommandTs,
  npmCommandJs,
  tsCode,
  jsCode,
  className,
}: InstallationGuideProps) {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [codeLanguage, setCodeLanguage] = useState<'typescript' | 'javascript'>('typescript');

  const toggleStep = (stepIndex: number) => {
    setCompletedSteps(prev =>
      prev.includes(stepIndex)
        ? prev.filter(i => i !== stepIndex)
        : [...prev, stepIndex]
    );
  };

  const currentCode = codeLanguage === 'typescript' ? tsCode : jsCode;
  const currentFileExtension = codeLanguage === 'typescript' ? 'tsx' : 'jsx';

  const steps = [];

  // Step 1: Dependencies (if provided)
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

  // Step 2: CLI Installation (if provided)
  if (npmCommandTs || npmCommandJs) {
    steps.push({
      title: 'Installation',
      description: 'install using our CLI tool',
      icon: Terminal,
      content: (
        <div className="space-y-4">
          <div className="flex space-x-2 mb-4">
            <Button
              onClick={() => setCodeLanguage('typescript')}
              className={cn(
                'px-3 py-1.5 text-sm rounded-md transition-colors font-medium',
                codeLanguage === 'typescript'
                  ? 'bg-blue-100 text-blue-800 border border-blue-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
            >
              TypeScript
            </Button>
            <Button
              onClick={() => setCodeLanguage('javascript')}
              className={cn(
                'px-3 py-1.5 text-sm rounded-md transition-colors font-medium',
                codeLanguage === 'javascript'
                  ? 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
            >
              JavaScript
            </Button>
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

  // Step 3: Copy Component Code
  steps.push({
    title: 'Usage Example',
    description: 'Copy the component code into your project',
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

  return (
    <div className={cn('space-y-6', className)}>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">Installation Guide</h3>
        <p className="[hsl(var(--foreground))]">
          Follow these steps to add the {component} component to your project.
        </p>
      </div>

      <div className="space-y-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isCompleted = completedSteps.includes(index);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-[hsl(var(--border))] rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleStep(index)}
                className="w-full px-4 sm:px-6 py-4 text-left bg-[hsl(var(--surface))] cursor-pointer flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <div className={cn(
                    'flex items-center justify-center w-8 h-8 rounded-full transition-colors',
                    isCompleted
                      ? 'bg-green-100 text-green-600'
                      : 'bg-gray-200 text-gray-600'
                  )}>
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
                    <p className="text-xs sm:text-sm text-[hsl(var(--foreground))]">{step.description}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: isCompleted ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 [hsl(var(--foreground))]" />
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
                    <div className="p-4 sm:p-6 bg-[hsl(var(--surface))] border-t border-[hsl(var(--border))]">
                      {step.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}