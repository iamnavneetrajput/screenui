// src/components/ui/PropsTable.tsx
'use client';

import React from 'react';
import { Card } from './card';
import { Badge } from '../badge';

export interface PropItem {
  prop: string;
  type: string;
  default?: string;
  description: string;
}

interface PropsTableProps {
  title?: string;
  description?: string;
  propsData: PropItem[];
  tip?: string;
}

export function PropsTable({ title = 'Component Props', description, propsData, tip }: PropsTableProps) {
  return (
    <Card className="overflow-hidden border border-[hsl(var(--border))] bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      {/* Header */}
      <div className="px-8 py-6">
        <h3 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-2">{title}</h3>
        {description && <p>{description}</p>}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-[hsl(var(--border))]">
              {['Property', 'Type', 'Default', 'Description'].map((h) => (
                <th
                  key={h}
                  className="text-left py-4 px-6 font-semibold text-[hsl(var(--foreground))] text-sm uppercase tracking-wide"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[hsl(var(--border))]">
            {propsData.map((item) => (
              <tr key={item.prop} className="hover:bg-[hsl(var(--surface))] transition-colors duration-150 group">
                <td className="py-5 px-6">
                  <div className="flex items-center gap-3">
                    <code className="text-sm font-mono bg-[hsl(var(--surface))] text-[hsl(var(--foreground))] px-2 py-1 rounded-md group-hover:bg-[hsl(var(--background))] transition-colors">
                      {item.prop}
                    </code>
                  </div>
                </td>
                <td className="py-5 px-6">
                  <code className="text-sm text-[hsl(var(--blue))] bg-[hsl(var(--surface))] px-2 py-1 rounded-md font-medium">
                    {item.type}
                  </code>
                </td>
                <td className="py-5 px-6">
                  {item.default ? (
                    <code className="text-sm text-[hsl(var(--sucess))] bg-[hsl(var(--surface))] px-2 py-1 rounded-md">
                      {item.default}
                    </code>
                  ) : (
                    <span className="italic text-[hsl(var(--border))]">—</span>
                  )}
                </td>
                <td className="py-5 px-6">
                  <p className="text-sm leading-relaxed max-w-md text-[hsl(var(--foreground))]">{item.description}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      {tip && (
        <div className="px-8 py-6 bg-[hsl(var(--surface))] border-t border-[hsl(var(--border))]">
          <div className="flex items-center gap-4 text-sm text-[hsl(var(--foreground))]">
            <Badge size="sm">Tip</Badge>
            <span>{tip}</span>
          </div>
        </div>
      )}
    </Card>
  );
}
