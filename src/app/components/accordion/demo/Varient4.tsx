'use client';
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@/packages/Accordion';

// Custom Styled Accordion Example
export function Variant4() {
  return (
    <div className="flex flex-wrap gap-4">
            <Accordion
              type="single"
              collapsible
              variant="ghost"
              className="max-w-2xl border-l-4 border-cyan-500 bg-slate-800/80 backdrop-blur-sm p-4 rounded-r-lg shadow-2xl shadow-cyan-500/20"
            >
              <AccordionItem value="item-1" variant="ghost" className="mb-2 border-cyan-500/20">
                <AccordionTrigger
                  variant="ghost"
                  className="bg-gradient-to-r from-cyan-600/40 to-indigo-600/40 hover:from-cyan-500/50 hover:to-indigo-500/50 text-cyan-300 font-bold rounded-lg px-4 border border-cyan-500/30 transition-all duration-300"
                >
                  Custom Styled Question
                </AccordionTrigger>
                <AccordionContent
                  variant="ghost"
                  className="text-slate-300 bg-slate-700/50 backdrop-blur-sm rounded-lg mt-2 px-4 border border-cyan-500/20"
                >
                  This accordion is completely customized using Tailwind classes while still
                  maintaining all the functionality and accessibility features.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
  );
}