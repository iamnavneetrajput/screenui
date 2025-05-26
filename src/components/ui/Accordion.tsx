'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export default function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenIndexes(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      }
      if (allowMultiple) {
        return [...prev, index];
      }
      return [index];
    });
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div 
          key={index} 
          className={cn(
            "border rounded-md overflow-hidden transition-all duration-300 ease-in-out",
            openIndexes.includes(index) && "shadow-sm"
          )}
        >
          <button
            onClick={() => toggleItem(index)}
            className="flex justify-between items-center w-full p-4 text-left transition-colors duration-200 hover:bg-slate-50"
          >
            <span className="font-medium">{item.title}</span>
            <ChevronDown
              className={cn(
                'h-4 w-4 transition-transform duration-300 ease-out',
                openIndexes.includes(index) && 'rotate-180'
              )}
            />
          </button>
          <div
            className={cn(
              'grid transition-all duration-300 ease-in-out',
              openIndexes.includes(index) ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            )}
          >
            <div className="overflow-hidden">
              <div className={cn(
                "p-4 border-t transform transition-all duration-300 ease-in-out",
                openIndexes.includes(index) ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
              )}>
                {item.content}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}