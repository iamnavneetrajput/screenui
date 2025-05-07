'use client';

import React, { useState } from 'react';
import { ComponentData } from '@/components/data/components';

interface ComponentDisplayProps {
  component: ComponentData;
}

const ComponentDisplay: React.FC<ComponentDisplayProps> = ({ component }) => {
  const [implementation, setImplementation] = useState<'react' | 'core'>('react');

  const renderDemo = () => {
    if (implementation === 'react' && component.ReactDemo) {
      return <component.ReactDemo />;
    } else if (implementation === 'core' && component.CoreDemo) {
      return <component.CoreDemo />;
    }
    return <div className="text-gray-500">Demo not available</div>;
  };

  return (
    <div className="bg-[hsl(var(--surface))] rounded-lg shadow-sm border border-[hsl(var(--border))] overflow-hidden">
      {/* Header */}
      <div className="p-6 bg-[hsl(var(--background))] border-b border-[hsl(var(--border))]">
        <h1 className="text-2xl font-bold text-[hsl(var(--foreground))]">{component.name}</h1>
        <p className="mt-2 text-[hsl(var(--foreground))]">{component.description}</p>
      </div>

      {/* Implementation Switcher */}
      {/* <div className="flex border-b border-[hsl(var(--border))]">
        <button
          onClick={() => setImplementation('react')}
          className={`flex-1 px-4 py-3 text-sm font-medium ${
            implementation === 'react'
              ? 'bg-[hsl(var(--background))] text-[hsl(var(--foreground))] border-b-2 border-[hsl(var(--color-border))]'
              : 'text-[hsl(var(--foreground))] cursor-pointer'
          }`}
        >
          React
        </button>
        <button
          onClick={() => setImplementation('core')}
          className={`flex-1 px-4 py-3 text-sm font-medium ${
            implementation === 'core'
              ? 'bg-[hsl(var(--background))] text-[hsl(var(--foreground))] border-b-2 border-[hsl(var(--color-border))]'
              : 'text-[hsl(var(--foreground))] cursor-pointer'
          }`}
        >
          HTML/CSS
        </button>
      </div> */}

      {/* Demo Preview */}
      <div className="p-6">
        <div className="bg-[hsl(var(--background))] border border-[hsl(var(--border))] rounded-lg p-6 min-h-[200px] flex items-center justify-center">
          {renderDemo()}
        </div>
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
