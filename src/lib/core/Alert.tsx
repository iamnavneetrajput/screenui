import React from 'react';

// This component demonstrates the HTML/CSS implementation
export const CoreAlertDemo: React.FC = () => {
  return (
    <div className="w-full space-y-3" dangerouslySetInnerHTML={{
      __html: `
        <div class="alert alert-info">
          <div class="alert-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </div>
          <div class="alert-content">
            <h3 class="alert-title">Information</h3>
            <p class="alert-message">This is an informational alert — check it out!</p>
          </div>
        </div>
        
        <div class="alert alert-success">
          <div class="alert-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <div class="alert-content">
            <h3 class="alert-title">Success</h3>
            <p class="alert-message">This is a success alert — check it out!</p>
          </div>
        </div>
        
        <div class="alert alert-warning">
          <div class="alert-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </div>
          <div class="alert-content">
            <h3 class="alert-title">Warning</h3>
            <p class="alert-message">This is a warning alert — check it out!</p>
          </div>
        </div>
        
        <div class="alert alert-error">
          <div class="alert-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
          </div>
          <div class="alert-content">
            <h3 class="alert-title">Error</h3>
            <p class="alert-message">This is an error alert — check it out!</p>
          </div>
        </div>
        
        <style>
          .alert {
            display: flex;
            padding: 1rem;
            border-radius: 0.375rem;
            border-width: 1px;
            margin-bottom: 0.75rem;
          }
          
          .alert-info {
            background-color: #eff6ff;
            border-color: #bfdbfe;
            color: #1e40af;
          }
          
          .alert-success {
            background-color: #f0fdf4;
            border-color: #bbf7d0;
            color: #166534;
          }
          
          .alert-warning {
            background-color: #fffbeb;
            border-color: #fef3c7;
            color: #92400e;
          }
          
          .alert-error {
            background-color: #fef2f2;
            border-color: #fecaca;
            color: #b91c1c;
          }
          
          .alert-icon {
            flex-shrink: 0;
          }
          
          .alert-info .alert-icon {
            color: #3b82f6;
          }
          
          .alert-success .alert-icon {
            color: #22c55e;
          }
          
          .alert-warning .alert-icon {
            color: #eab308;
          }
          
          .alert-error .alert-icon {
            color: #ef4444;
          }
          
          .alert-content {
            margin-left: 0.75rem;
          }
          
          .alert-title {
            font-size: 0.875rem;
            font-weight: 500;
            margin-top: 0;
            margin-bottom: 0.25rem;
          }
          
          .alert-message {
            font-size: 0.875rem;
            margin: 0;
          }
        </style>
      `
    }} />
  );
};