import React from 'react';
import { Button } from './Button';

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
};

export const CardDemo: React.FC = () => {
  return (
    <div className="w-full max-w-md">
      <Card
        title="Card Title"
        footer={
          <div className="flex justify-end space-x-2">
            <Button variant="outline">Cancel</Button>
            <Button>Submit</Button>
          </div>
        }
      >
        <p className="text-gray-600">
          This is a card component that can be used to display content with an optional header and footer.
          It's perfect for dashboards, settings pages, and more.
        </p>
      </Card>
    </div>
  );
};