'use client';
import React from 'react';
import { Icon } from './Icon';
import { Template } from '@/types';

interface TemplateCardProps {
  template: Template;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
  const handleExpand = () => {
    if (template.url) {
      window.open(template.url, '_blank');
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      {/* Top Controls */}
      <div className="flex justify-between items-center border-b border-[hsl(var(--border))] pb-2">
        {template.isFeatured && (
          <div className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
            <Icon name="Star" className="h-3 w-3" />
            Featured
          </div>
        )}
        <button
          onClick={handleExpand}
          className="p-2 bg-[hsl(var(--surface))] rounded-full shadow-lg hover:bg-[hsl(var(--border))]"
          title="Open in new tab"
        >
          <Icon name="ExternalLink" className="h-5 w-5 text-[hsl(var(--foreground))]" />
        </button>
      </div>

      {/* Card */}
      <div className="bg-[hsl(var(--background))] rounded-lg shadow-md overflow-hidden border border-[hsl(var(--border))]">
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
          <iframe
            src={template.url}
            title={template.title}
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
