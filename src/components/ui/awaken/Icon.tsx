import React from 'react';
import * as LucideIcons from 'lucide-react';

type IconName = keyof typeof LucideIcons;

interface IconProps {
  name: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className = 'h-6 w-6' }) => {
  const LucideIcon = LucideIcons[name as IconName] as React.FC<{ className?: string }>;
  
  if (!LucideIcon) {
    console.error(`Icon ${name} not found`);
    return <LucideIcons.HelpCircle className={className} />;
  }
  
  return <LucideIcon className={className} />;
};