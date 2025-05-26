'use client';

import React, { useState } from 'react';
import { Check, Clipboard } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  filename?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'tsx',
  showLineNumbers = true,
  filename,
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg overflow-hidden border border-[hsl(var(--border))] bg-[hsl(var(--surface))]">
      {filename && (
        <div className="px-4 py-2 bg-[hsl(var(--muted))]/30 border-b border-[hsl(var(--border))] text-xs text-[hsl(var(--foreground))]">
          {filename}
        </div>
      )}
      <div className="relative">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={copyToClipboard}
          className="absolute right-3 top-3 p-2 rounded-md bg-[hsl(var(--color-border))] hover:bg-[hsl(var(--background))]/50 transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <Check className="h-4 w-4 text-green-500" />
            </motion.div>
          ) : (
            <Clipboard className="h-4 w-4 text-[hsl(var(--foreground))]" />
          )}
        </motion.button>

        <SyntaxHighlighter
          language={language}
          style={coldarkDark}
          showLineNumbers={showLineNumbers}
          customStyle={{
            margin: 0,
            borderRadius: '0 0 0.5rem 0.5rem',
            background: 'transparent',
            padding: '1rem',
            fontSize: '0.875rem',
            backgroundColor: '#111827',
          }}
          lineNumberStyle={{
            color: 'hsl(var(--foreground))',
            opacity: 1,
            paddingRight: '1em',
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
