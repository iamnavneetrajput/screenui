'use client';

import React, { useState } from 'react';
import { Check, Clipboard } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion, AnimatePresence } from 'framer-motion';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'tsx',
  filename,
  showLineNumbers = true,
  className = '',
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // intentionally silent — copy failures shouldn’t crash UI
    }
  };

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-border bg-neutral-900 shadow-xl ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-neutral-900/70 ">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>

          {filename && (
            <span className="ml-2 text-xs font-mono text-muted-foreground select-none">
              {filename}
            </span>
          )}
        </div>

        <motion.button
          onClick={handleCopy}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center rounded-md p-1.5 text-muted-foreground hover:text-white hover:bg-white/5 transition"
          aria-label="Copy code"
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.span
                key="check"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 90 }}
              >
                <Check size={14} className="text-green-400" />
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                initial={{ scale: 0, rotate: 90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: -90 }}
              >
                <Clipboard size={14} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Code */}
      <div className="relative">
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          showLineNumbers={showLineNumbers}
          customStyle={{
            margin: 0,
            background: 'transparent',
            padding: '1.25rem',
            fontSize: '0.875rem',
            lineHeight: '1.6',
            fontFamily:
              '"JetBrains Mono","Fira Code","SF Mono",Consolas,monospace',
          }}
          lineNumberStyle={{
            color: '#6b7280',
            paddingRight: '1.25em',
            userSelect: 'none',
            fontSize: '0.75rem',
          }}
          codeTagProps={{
            style: {
              fontFamily:
                '"JetBrains Mono","Fira Code","SF Mono",Consolas,monospace',
            },
          }}
        >
          {code}
        </SyntaxHighlighter>

        {/* subtle fade for header contrast */}
        <div className="pointer-events-none absolute top-0 right-0 h-16 w-32 bg-gradient-to-l from-neutral-900 via-neutral-900/60 to-transparent" />
      </div>
    </div>
  );
};
