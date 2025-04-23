import React from 'react';

// This component demonstrates the HTML/CSS implementation
export const CoreCardDemo: React.FC = () => {
  return (
    <div className="w-full max-w-md" dangerouslySetInnerHTML={{
      __html: `
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Card Title</h3>
          </div>
          <div class="card-body">
            <p>This is the main content of the card. You can put any content here including text, images, and other HTML elements.</p>
          </div>
          <div class="card-footer">
            <button class="button button-primary">Action</button>
            <button class="button button-outline">Cancel</button>
          </div>
        </div>
        
        <style>
          .card {
            background-color: white;
            border-radius: 0.5rem;
            border: 1px solid #e5e7eb;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            overflow: hidden;
          }
          
          .card-header {
            padding: 1rem 1.5rem;
            border-bottom: 1px solid #e5e7eb;
          }
          
          .card-title {
            font-size: 1.125rem;
            font-weight: 500;
            color: #111827;
            margin: 0;
          }
          
          .card-body {
            padding: 1rem 1.5rem;
          }
          
          .card-footer {
            padding: 1rem 1.5rem;
            background-color: #f9fafb;
            border-top: 1px solid #e5e7eb;
            display: flex;
            justify-content: flex-end;
            gap: 0.5rem;
          }
          
          /* Button styles from the Button component */
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
          
          .button-outline {
            background-color: white;
            color: #1f2937;
            border: 1px solid #d1d5db;
          }
          
          .button-outline:hover {
            background-color: #f9fafb;
          }
        </style>
      `
    }} />
  );
};