import React from 'react';

// This component demonstrates the HTML/CSS implementation
export const CoreBadgeDemo: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-2" dangerouslySetInnerHTML={{
      __html: `
        <span class="badge badge-default">Default</span>
        <span class="badge badge-primary">Primary</span>
        <span class="badge badge-secondary">Secondary</span>
        <span class="badge badge-success">Success</span>
        <span class="badge badge-warning">Warning</span>
        <span class="badge badge-error">Error</span>
        
        <style>
          .badge {
            display: inline-flex;
            align-items: center;
            border-radius: 9999px;
            padding: 0.125rem 0.625rem;
            font-size: 0.75rem;
            font-weight: 500;
          }
          
          .badge-default {
            background-color: #f3f4f6;
            color: #1f2937;
          }
          
          .badge-primary {
            background-color: #dbeafe;
            color: #1e40af;
          }
          
          .badge-secondary {
            background-color: #f3e8ff;
            color: #6b21a8;
          }
          
          .badge-success {
            background-color: #dcfce7;
            color: #166534;
          }
          
          .badge-warning {
            background-color: #fef3c7;
            color: #92400e;
          }
          
          .badge-error {
            background-color: #fee2e2;
            color: #b91c1c;
          }
        </style>
      `
    }} />
  );
};