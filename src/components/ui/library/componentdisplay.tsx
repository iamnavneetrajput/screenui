'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { ComponentData } from '@/components/data/components';
import CodeBlock from './codeblock';

interface ComponentDisplayProps {
  component: ComponentData;
}

const ComponentDisplay: React.FC<ComponentDisplayProps> = ({ component }) => {
  const [viewMode, setViewMode] = useState<'demo' | 'code'>('demo');
  const [implementation, setImplementation] = useState<'react' | 'core'>('react');
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    const code = implementation === 'react' 
      ? component.reactCode 
      : component.coreCode;
    
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const renderDemo = () => {
    if (implementation === 'react' && component.ReactDemo) {
      return <component.ReactDemo />;
    } else if (implementation === 'core' && component.CoreDemo) {
      return <component.CoreDemo />;
    }
    return <div className="text-[hsl(var(--muted-foreground))]">Demo not available</div>;
  };

  return (
    <div className="bg-[hsl(var(--surface))] rounded-lg shadow-sm border border-[hsl(var(--border))] overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]">
        <h1 className="text-2xl font-bold text-[hsl(var(--foreground))]">{component.name}</h1>
        <p className="mt-2 text-[hsl(var(--muted-foreground))]">{component.description}</p>
      </div>
      
      {/* Toggle controls */}
      <div className="flex border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]">
        <div className="flex-1 flex border-r border-[hsl(var(--border))]">
          <button
            onClick={() => setViewMode('demo')}
            className={`px-4 py-3 text-sm font-medium flex-1 ${
              viewMode === 'demo' 
                ? 'bg-[hsl(var(--muted))] text-[hsl(var(--foreground))] border-b-2 border-[hsl(var(--color-border))]' 
                : 'text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]'
            }`}
          >
            Demo
          </button>
          <button
            onClick={() => setViewMode('code')}
            className={`px-4 py-3 text-sm font-medium flex-1 ${
              viewMode === 'code' 
                ? 'bg-[hsl(var(--muted))] text-[hsl(var(--foreground))] border-b-2 border-[hsl(var(--color-border))]' 
                : 'text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]'
            }`}
          >
            Code
          </button>
        </div>
        <div className="flex">
          <button
            onClick={() => setImplementation('react')}
            className={`px-4 py-3 text-sm font-medium ${
              implementation === 'react' 
                ? 'bg-[hsl(var(--muted))] text-[hsl(var(--foreground))] border-b-2 border-[hsl(var(--color-border))]' 
                : 'text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]'
            }`}
          >
            React
          </button>
          <button
            onClick={() => setImplementation('core')}
            className={`px-4 py-3 text-sm font-medium ${
              implementation === 'core' 
                ? 'bg-[hsl(var(--muted))] text-[hsl(var(--foreground))] border-b-2 border-[hsl(var(--color-border))]' 
                : 'text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]'
            }`}
          >
            HTML/CSS
          </button>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        {viewMode === 'demo' ? (
          <div className="bg-[hsl(var(--muted))] border border-[hsl(var(--border))] rounded-lg p-6 min-h-[200px] flex items-center justify-center">
            {renderDemo()}
          </div>
        ) : (
          <div className="relative">
            <button
              onClick={handleCopyCode}
              className="absolute top-4 right-4 p-2 rounded-md bg-[hsl(var(--foreground))] bg-opacity-70 text-[hsl(var(--background))] hover:bg-opacity-90 transition-all z-10"
              aria-label="Copy code"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
            <CodeBlock
              code={implementation === 'react' ? component.reactCode : component.coreCode}
              language={implementation === 'react' ? 'tsx' : 'html'}
            />
          </div>
        )}
      </div>

      {/* Usage notes */}
      {component.notes && (
        <div className="p-6 bg-[hsl(var(--background))] border-t border-[hsl(var(--border))]">
          <h3 className="text-xl font-bold text-[hsl(var(--foreground))] mb-2">Usage Notes</h3>
          <p className="text-sm text-[hsl(var(--foreground))]">{component.notes}</p>
        </div>
      )}
    </div>
  );
};

export default ComponentDisplay;
