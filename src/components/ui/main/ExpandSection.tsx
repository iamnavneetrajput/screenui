'use client';
import React, { useState, useRef, useLayoutEffect } from 'react';
import { ChevronDownIcon } from '@/utils/ChevronDownIcon';
import { Button } from '@/packages/Button';

interface ExpandSectionProps {
  previewHeight?: number;
  children: React.ReactNode;
}

export function ExpandSection({
  previewHeight = 300,
  children
}: ExpandSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [fullHeight, setFullHeight] = useState<number>(previewHeight);
  const contentRef = useRef<HTMLDivElement | null>(null);

  // Measure content height after render
  useLayoutEffect(() => {
    if (contentRef.current) {
      setFullHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  return (
    <div className="relative bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">

      {/* Collapsible content */}
      <div
        ref={contentRef}
        className="relative overflow-hidden transition-[max-height] duration-700 ease-in-out"
        style={{
          maxHeight: isExpanded ? `${fullHeight}px` : `${previewHeight}px`
        }}
      >
        {children}

        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none bg-gradient-to-t from-[hsl(var(--background))] to-transparent" />
        )}
      </div>

      {/* Toggle button */}
      <div className="flex justify-center py-6 border-t border-[hsl(var(--border))]">
        <Button
          variant="ghost"
          iconPosition="right"
          icon={
            <ChevronDownIcon
              className={`ml-2 h-4 w-4 transform transition-transform duration-300 ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          }
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-center px-6 py-2 rounded-full text-sm font-medium
                     text-[hsl(var(--foreground))] bg-[hsl(var(--surface))] cursor-pointer
                     hover:bg-[hsl(var(--surface))]/80 transition-all duration-300"
        >
          <span>{isExpanded ? 'Show Less' : 'View Full'}</span>
        </Button>
      </div>
    </div>
  );
}
