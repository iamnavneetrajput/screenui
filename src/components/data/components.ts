import React from 'react';
import { Button, ButtonDemo } from '@/lib/react/Button';
import { Card, CardDemo } from '@/lib/react/Card';
import { Alert, AlertDemo } from '@/lib/react/Alert';
import { Badge, BadgeDemo } from '@/lib/react/Badge';
import { CoreButtonDemo } from '@/lib/core/Button';
import { CoreCardDemo } from '@/lib/core/Card';
import { CoreAlertDemo } from '@/lib/core/Alert';
import { CoreBadgeDemo } from '@/lib/core/Badge';

export interface ComponentData {
  name: string;
  path: string;
  description: string;
  category: string;
  reactCode: string;
  coreCode: string;
  ReactDemo?: React.FC;
  CoreDemo?: React.FC;
  notes?: string;
}

export const componentCategories = [
  {
    name: 'Elements',
    components: [
      { name: 'Button', path: 'elements/button' },
      { name: 'Badge', path: 'elements/badge' },
    ]
  },
  {
    name: 'Feedback',
    components: [
      { name: 'Alert', path: 'feedback/alert' },
    ]
  },
  {
    name: 'Layout',
    components: [
      { name: 'Card', path: 'layout/card' },
    ]
  }
];

const components: ComponentData[] = [
  {
    name: 'Button',
    path: 'elements/button',
    category: 'Elements',
    description: 'Buttons are used to trigger actions or events, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.',
    reactCode: `import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
}) => {
  const baseStyles = 'font-medium rounded-md inline-flex items-center justify-center transition-colors';
  
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-50',
    ghost: 'text-gray-700 hover:bg-gray-100',
  };
  
  const sizeStyles = {
    sm: 'text-xs px-2.5 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
  };
  
  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'cursor-pointer';
  
  return (
    <button
      className={\`\${baseStyles} \${variantStyles[variant]} \${sizeStyles[size]} \${disabledStyles}\`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};`,
    coreCode: `<!-- Button Component -->
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
</style>`,
    ReactDemo: ButtonDemo,
    CoreDemo: CoreButtonDemo,
    notes: 'Buttons support multiple variants and sizes. Use the appropriate variant based on the importance of the action.'
  },
  {
    name: 'Card',
    path: 'layout/card',
    category: 'Layout',
    description: 'Cards are flexible containers that group related content and actions. They can contain text, images, buttons, and other UI components.',
    reactCode: `import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  children,
  footer,
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      {title && (
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        </div>
      )}
      <div className="px-6 py-4">
        {children}
      </div>
      {footer && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          {footer}
        </div>
      )}
    </div>
  );
};`,
    coreCode: `<!-- Card Component -->
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Card Title</h3>
  </div>
  <div class="card-body">
    <p>This is the main content of the card. You can put any content here including text, images, and other HTML elements.</p>
  </div>
  <div class="card-footer">
    <button class="button button-primary">Action</button>
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
</style>`,
    ReactDemo: CardDemo,
    CoreDemo: CoreCardDemo,
    notes: 'Cards can be used as containers for various types of content. They can have headers, footers, and different levels of elevation.'
  },
  {
    name: 'Alert',
    path: 'feedback/alert',
    category: 'Feedback',
    description: 'Alerts display short, important messages that attract the user\'s attention without interrupting their task.',
    reactCode: `import React from 'react';
import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';

interface AlertProps {
  children: React.ReactNode;
  variant: 'info' | 'success' | 'warning' | 'error';
  title?: string;
}

export const Alert: React.FC<AlertProps> = ({
  children,
  variant = 'info',
  title,
}) => {
  const variantStyles = {
    info: {
      container: 'bg-blue-50 border-blue-200 text-blue-800',
      icon: <Info className="h-5 w-5 text-blue-500" />,
    },
    success: {
      container: 'bg-green-50 border-green-200 text-green-800',
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
    },
    warning: {
      container: 'bg-yellow-50 border-yellow-200 text-yellow-800',
      icon: <AlertCircle className="h-5 w-5 text-yellow-500" />,
    },
    error: {
      container: 'bg-red-50 border-red-200 text-red-800',
      icon: <XCircle className="h-5 w-5 text-red-500" />,
    },
  };

  return (
    <div className={\`p-4 rounded-md border \${variantStyles[variant].container}\`}>
      <div className="flex">
        <div className="flex-shrink-0">
          {variantStyles[variant].icon}
        </div>
        <div className="ml-3">
          {title && (
            <h3 className="text-sm font-medium mb-1">{title}</h3>
          )}
          <div className="text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
};`,
    coreCode: `<!-- Alert Component -->
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

<style>
  .alert {
    display: flex;
    padding: 1rem;
    border-radius: 0.375rem;
    border-width: 1px;
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
</style>`,
    ReactDemo: AlertDemo,
    CoreDemo: CoreAlertDemo,
    notes: 'Alert variants include info, success, warning, and error. Use them appropriately based on the content of the message.'
  },
  {
    name: 'Badge',
    path: 'elements/badge',
    category: 'Elements',
    description: 'Badges are small elements that represent a status, category, or count. They are commonly used in navigation, notifications, and labels.',
    reactCode: `import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
}) => {
  const variantStyles = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-blue-100 text-blue-800',
    secondary: 'bg-purple-100 text-purple-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
  };

  return (
    <span className={\`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium \${variantStyles[variant]}\`}>
      {children}
    </span>
  );
};`,
    coreCode: `<!-- Badge Component -->
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
</style>`,
    ReactDemo: BadgeDemo,
    CoreDemo: CoreBadgeDemo,
    notes: 'Badges should be used sparingly to highlight important information. Too many badges can create visual noise.'
  },
];

export const getComponentByPath = (path: string): ComponentData | null => {
  return components.find(component => component.path === path) || null;
};