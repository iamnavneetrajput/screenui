import React from 'react';
import { Card } from '@/packages/Card';
import { Badge } from '@/packages/Badge';
import { InfoIcon } from '@/utils/InfoIcon';

interface PropsTableProps {
  title?: string;
  description?: string;
  propsData: PropItem[];
  tip?: string;
}

interface PropItem {
  prop: string;
  type: string;
  default?: string;
  description: string;
}

const CodeBlock: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <code
    className={`font-mono text-sm px-2 py-1 rounded-md bg-[hsl(var(--surface))] text-[hsl(var(--foreground))] ${className}`}
  >
    {children}
  </code>
);

export function PropsTable({ title = 'Component Props', description, propsData, tip }: PropsTableProps) {
  return (
    <Card className="bg-[hsl(var(--background))] p-0 text-[hsl(var(--foreground))]">
      {/* Header */}
      <div className="border-b border-[hsl(var(--border))]">
        <h3 className="text-xl font-bold">{title}</h3>
        {description && <p className="mt-2 mb-4">{description}</p>}
      </div>

      {/* Content */}
      <div>
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-[hsl(var(--surface))]">
              <tr className="border-b border-[hsl(var(--border))]">
                {['Property', 'Type', 'Default', 'Description'].map((h) => (
                  <th
                    key={h}
                    className="py-3 px-6 text-left font-semibold text-[hsl(var(--foreground))] text-xs uppercase tracking-wider opacity-70"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {propsData.map((item, index) => (
                <tr
                  key={item.prop + index}
                  className="hover:bg-[hsl(var(--surface))] transition-colors duration-150"
                >
                  <td className="py-4 px-6 align-top">
                    <CodeBlock className="text-[hsl(var(--blue))]">{item.prop}</CodeBlock>
                  </td>

                  <td className="py-4 px-6 align-top">
                    <CodeBlock className="text-[hsl(var(--button))] break-words">{item.type}</CodeBlock>
                  </td>

                  <td className="py-4 px-6 align-top">
                    {item.default ? (
                      <CodeBlock className="text-[hsl(var(--sucess))]">{item.default}</CodeBlock>
                    ) : (
                      <span className="opacity-50">—</span>
                    )}
                  </td>

                  <td className="py-4 px-6 text-sm leading-relaxed max-w-md align-top opacity-90">
                    {item.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden mt-2 space-y-2 mb-2">
          {propsData.map((item, index) => (
            <div
              key={item.prop + index}
              className="rounded-lg p-4 bg-[hsl(var(--surface))] border border-[hsl(var(--border))]"
            >
              <div className="mb-3">
                <CodeBlock className="text-[hsl(var(--blue))] text-base">
                  {item.prop}
                </CodeBlock>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-start gap-4">
                  <span className="font-medium w-1/4 shrink-0 opacity-70">Type</span>
                  <CodeBlock className="text-[hsl(var(--button))] text-right flex-1 break-words">
                    {item.type}
                  </CodeBlock>
                </div>

                <div className="flex justify-between items-start gap-4">
                  <span className="font-medium w-1/4 shrink-0 opacity-70">Default</span>
                  <div className="text-right flex-1">
                    {item.default ? (
                      <CodeBlock className="text-[hsl(var(--sucess))]">
                        {item.default}
                      </CodeBlock>
                    ) : (
                      <span className="opacity-50">—</span>
                    )}
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-[hsl(var(--border))]">
                  <p className="leading-relaxed opacity-90">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      {tip && (
        <div className="px-6 py-4 bg-[hsl(var(--surface))] border-t border-[hsl(var(--border))]">
          <div className="flex items-center gap-3 text-sm opacity-90">
            <Badge>
              <InfoIcon className="h-4 w-4 mr-1.5" />
              Tip
            </Badge>
            <span>{tip}</span>
          </div>
        </div>
      )}
    </Card>
  );
}
