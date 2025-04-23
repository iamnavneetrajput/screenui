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
    return <div className="text-gray-500">Demo not available</div>;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800">{component.name}</h1>
        <p className="mt-2 text-gray-600">{component.description}</p>
      </div>
      
      {/* Toggle controls */}
      <div className="flex border-b border-gray-200">
        <div className="flex-1 flex border-r border-gray-200">
          <button
            onClick={() => setViewMode('demo')}
            className={`px-4 py-3 text-sm font-medium flex-1 ${
              viewMode === 'demo' 
                ? 'bg-gray-100 text-gray-900 border-b-2 border-blue-500' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Demo
          </button>
          <button
            onClick={() => setViewMode('code')}
            className={`px-4 py-3 text-sm font-medium flex-1 ${
              viewMode === 'code' 
                ? 'bg-gray-100 text-gray-900 border-b-2 border-blue-500' 
                : 'text-gray-700 hover:bg-gray-50'
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
                ? 'bg-gray-100 text-gray-900 border-b-2 border-blue-500' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            React
          </button>
          <button
            onClick={() => setImplementation('core')}
            className={`px-4 py-3 text-sm font-medium ${
              implementation === 'core' 
                ? 'bg-gray-100 text-gray-900 border-b-2 border-blue-500' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            HTML/CSS
          </button>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        {viewMode === 'demo' ? (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
            {renderDemo()}
          </div>
        ) : (
          <div className="relative">
            <button
              onClick={handleCopyCode}
              className="absolute top-4 right-4 p-2 rounded-md bg-gray-800 bg-opacity-70 text-white hover:bg-opacity-90 transition-all z-10"
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
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h3 className="font-medium text-gray-700 mb-2">Usage Notes</h3>
          <p className="text-sm text-gray-600">{component.notes}</p>
        </div>
      )}
    </div>
  );
};

export default ComponentDisplay;