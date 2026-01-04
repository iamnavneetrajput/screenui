'use client';
import { Sparkles } from 'lucide-react';
import { CodeBlock } from '@/app/library/component/enhanced/CodeBlock';

interface StepCardProps {
  index: number;
  label: string;
  description?: string;
  code?: string;
  language?: string;
  filename?: string;
  isLast?: boolean;
}

export default function StepCard({
  index,
  label,
  description,
  code,
  language = 'tsx',
  filename,
  isLast = false,
}: StepCardProps) {
  return (
    <div className="flex gap-4 sm:gap-6 items-start min-w-0">

      {/* STEP COLUMN — DESKTOP ONLY */}
      <div className="hidden lg:flex w-12 shrink-0 flex-col items-center">
        <div className="w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center font-bold">
          {index}
        </div>

        {!isLast && (
          <div className="w-px h-20 bg-border mt-3" />
        )}
      </div>

      {/* CONTENT */}
      <div className="flex-1 min-w-0 pb-10">

        {/* Title row */}
        <div className="flex items-center gap-3 mb-2">
          {/* Step number — mobile & tablet */}
          <span className="lg:hidden inline-flex w-7 h-7 shrink-0 rounded-full border border-border bg-background items-center justify-center text-sm font-bold">
            {index}
          </span>

          <h3 className="text-lg sm:text-xl font-semibold">
            {label}
          </h3>
        </div>

        {description && (
          <p className="mb-4 text-sm sm:text-base opacity-90">
            {description}
          </p>
        )}

        {code && (
          <div className="overflow-x-auto">
            <CodeBlock
              code={code}
              language={language}
              filename={filename}
              showLineNumbers
            />
          </div>
        )}

        {isLast && (
          <div className="mt-6 rounded-lg border border-border bg-secondary p-4 sm:p-5">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="h-4 w-4" />
              <span className="font-medium">Completed</span>
            </div>
            <p className="text-sm opacity-90">
              Theme support is now active. Light and dark mode will work
              automatically across all ScreenUI components.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
