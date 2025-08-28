'use client';
import React, { useState } from 'react';
import { Check, Clipboard } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion, AnimatePresence } from 'framer-motion';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  filename?: string;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'tsx',
  showLineNumbers = true,
  filename,
  className = '',
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className={`relative rounded-xl overflow-hidden border border-[hsl(var(--border))] bg-gray-900 shadow-2xl ${className}`}>
      {/* Header with filename */}
      {filename && (
        <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-sm text-gray-300 font-medium ml-3">{filename}</span>
          </div>
        </div>
      )}

      {/* Code content with copy button */}
      <div className="relative">
        {/* Perfect Copy Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={copyToClipboard}
          className="absolute right-4 top-4 z-10 flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-800/90 backdrop-blur-sm border border-gray-600/50 text-gray-300 hover:bg-gray-700/90 hover:border-gray-500 transition-all duration-200 shadow-lg"
          aria-label={copied ? 'Copied!' : 'Copy code'}
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div
                key="check"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ duration: 0.2 }}
                className="flex items-center space-x-1"
              >
                <Check className="h-4 w-4 text-green-400" />
              </motion.div>
            ) : (
              <motion.div
                key="clipboard"
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: -180 }}
                transition={{ duration: 0.2 }}
                className="flex items-center space-x-1"
              >
                <Clipboard className="h-4 w-4" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Syntax Highlighter */}
        <div className="overflow-x-auto">
          <SyntaxHighlighter
            language={language}
            style={oneDark}
            showLineNumbers={showLineNumbers}
            customStyle={{
              margin: 0,
              padding: '1.5rem',
              paddingTop: '2rem',
              background: 'transparent',
              fontSize: '0.875rem',
              lineHeight: '1.5',
              fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", Consolas, monospace',
            }}
            lineNumberStyle={{
              color: '#6b7280',
              paddingRight: '1.5em',
              userSelect: 'none',
              fontSize: '0.8rem',
            }}
            codeTagProps={{
              style: {
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", Consolas, monospace',
              }
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>

        {/* Gradient overlay for better copy button visibility */}
        <div className="absolute top-0 right-0 w-32 h-20 bg-gradient-to-l from-gray-900 via-gray-900/50 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};