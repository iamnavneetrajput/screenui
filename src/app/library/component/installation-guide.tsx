'use client';

import { useState } from 'react';
import { Terminal, Code } from 'lucide-react';
import { CodeBlock } from './code-block';
import { motion } from 'framer-motion';

interface InstallationGuideProps {
  component: string;
  npmCommand: string;
  dependencyCommand: string;
  tsCode: string;
  jsCode: string;
}

export function InstallationGuide({
  component,
  npmCommand,
  dependencyCommand,
  tsCode,
  jsCode,
}: InstallationGuideProps) {
  const [language, setLanguage] = useState<'ts' | 'js'>('ts');

  return (
    <div className="rounded-lg border-dashed border border-[hsl(var(--border))]  p-4 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2">
          <Terminal className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-medium">Installation</h3>
        </div>
        
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Required Dependencies:</p>
          <CodeBlock
            code={dependencyCommand}
            language="bash"
            showLineNumbers={false}
          />
        </div>

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Install Component:</p>
          <CodeBlock
            code={npmCommand}
            language="bash"
            showLineNumbers={false}
          />
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center justify-between border-b border-dashed border-[hsl(var(--border))]  pb-2">
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-medium">Usage</h3>
          </div>
          
          <div className="flex rounded-md overflow-hidden border border-dashed border-[hsl(var(--border))]  text-xs">
            <button
              onClick={() => setLanguage('ts')}
              className={`px-3 py-1 font-medium transition-colors ${
                language === 'ts'
                  ? 'bg-[hsl(var(--color-border))]  text-[hsl(var(--foreground))] '
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              TS
            </button>
            <button
              onClick={() => setLanguage('js')}
              className={`px-3 py-1 font-medium transition-colors ${
                language === 'js'
                  ? 'bg-[hsl(var(--color-border))]  text-[hsl(var(--foreground))] '
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              JS
            </button>
          </div>
        </div>
        
        <div className="mt-4">
          <CodeBlock
            code={language === 'ts' ? tsCode : jsCode}
            language={language}
            filename={`${component}.${language}x`}
          />
        </div>
      </motion.div>
    </div>
  );
}