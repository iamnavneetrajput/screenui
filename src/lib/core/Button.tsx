import React from 'react';

// This component demonstrates the HTML/CSS implementation
export const CoreButtonDemo: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-3" dangerouslySetInnerHTML={{
      __html: `
        <button class="button button-primary">
          Primary Button
        </button>
        
        <button class="button button-secondary">
          Secondary Button
        </button>
        
        <button class="button button-outline">
          Outline Button
        </button>
        
        <button class="button button-ghost">
          Ghost Button
        </button>
        
        <style>
          .button {
            font-weight: 500;
            border-radius: 0.375rem;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
            transition: all 0.2s;
            cursor: pointer;
          }
          
          .button-primary {
            background-color: #2563eb;
            color: white;
          }
          
          .button-primary:hover {
            background-color: #1d4ed8;
          }
          
          .button-secondary {
            background-color: #e5e7eb;
            color: #1f2937;
          }
          
          .button-secondary:hover {
            background-color: #d1d5db;
          }
          
          .button-outline {
            background-color: white;
            color: #1f2937;
            border: 1px solid #d1d5db;
          }
          
          .button-outline:hover {
            background-color: #f9fafb;
          }
          
          .button-ghost {
            background-color: transparent;
            color: #374151;
          }
          
          .button-ghost:hover {
            background-color: #f3f4f6;
          }
          
          .button[disabled] {
            opacity: 0.5;
            cursor: not-allowed;
          }
        </style>
      `
    }} />
  );
};