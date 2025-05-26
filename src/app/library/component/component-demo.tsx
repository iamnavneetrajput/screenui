'use client';

import { useState } from 'react';
import { Tabs } from './tabs';
import { CodeBlock } from './code-block';
import { InstallationGuide } from './installation-guide';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ComponentDemoProps {
  title: string;
  description: string;
  component: string;
  npmCommand: string;
  dependencyCommand: string;
  tsCode: string;
  jsCode: string;
  nextjsCode?: string;
  children: React.ReactNode;
}

export function ComponentDemo({
  title,
  description,
  component,
  npmCommand,
  dependencyCommand,
  tsCode,
  jsCode,
  nextjsCode,
  children,
}: ComponentDemoProps) {
  const [showInstallation, setShowInstallation] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="border border-dashed border-[hsl(var(--border))]  rounded-lg overflow-hidden">
      <div className="p-6 bg-[hsl(var(--background))] border-b border-[hsl(var(--border))] ">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-muted-foreground mt-1">{description}</p>
      </div>

      <Tabs
        tabs={[
          {
            label: "Preview",
            content: (
              <motion.div 
                className="flex items-center justify-center p-10 bg-muted/30 rounded-lg mx-6 bg-[hsl(var(--surface))]"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div
                  className={cn(
                    "transition-all cursor-pointer"
                  )}
                >
                  {children}
                </div>
              </motion.div>
            ),
          },
          {
            label: "Installation",
            content: (
              <div className="px-6">
                <InstallationGuide
                  component={component}
                  npmCommand={npmCommand}
                  tsCode={tsCode}
                  jsCode={jsCode}
                  dependencyCommand={dependencyCommand}
                />
              </div>
            ),
          },
          {
            label: "React",
            content: (
              <div className="px-6">
                <CodeBlock code={jsCode} language="jsx" />
              </div>
            ),
          },
          {
            label: "Next.js",
            content: (
              <div className="px-6">
                <CodeBlock
                  code={nextjsCode ?? ''}
                  language="tsx"
                />
              </div>
            ),
          },
        ]}
        defaultTab={activeTab}
        onTabChange={setActiveTab}
      />

      {showInstallation && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="p-6 border-t border-dashed border-[hsl(var(--border))] "
        >
          <InstallationGuide
            component={component}
            dependencyCommand={dependencyCommand}
            npmCommand={npmCommand}
            tsCode={tsCode}
            jsCode={jsCode} />
        </motion.div>
      )}
    </div>
  );
}