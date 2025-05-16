import React from 'react';

export type LoaderVariant = 'progress' | 'spinner';
export type LoaderSize = 'sm' | 'md' | 'lg';
export type LoaderColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error';

interface LoaderProps {
  variant: LoaderVariant;
  size?: LoaderSize;
  color?: LoaderColor;
  progress?: number;
  text?: string;
}

const Loader: React.FC<LoaderProps> = ({
  variant,
  size = 'md',
  color = 'primary',
  progress = 0,
  text
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'text-blue-500',
    secondary: 'text-purple-500',
    success: 'text-green-500',
    warning: 'text-yellow-500',
    error: 'text-red-500'
  };

  const progressBarColors = {
    primary: 'bg-blue-500',
    secondary: 'bg-purple-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500'
  };

  if (variant === 'spinner') {
    return (
      <div className="flex flex-col items-center gap-2">
        <div 
          className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-current rounded-full border-r-transparent animate-spin`}
        />
        {text && <p className="text-sm text-gray-600">{text}</p>}
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full ${progressBarColors[color]} transition-all duration-300`}
          style={{ width: `${progress}%` }}
        />
      </div>
      {text && (
        <p className="mt-2 text-sm text-gray-600">
          {text} ({progress}%)
        </p>
      )}
    </div>
  );
};

export default Loader;