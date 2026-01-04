import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/packages/Accordion'
import { Badge } from '@/packages/Badge'

export interface UIPropItem {
  prop: string
  type: string
  default?: string
  description: string
  required: boolean
}

export interface UIPropGroup {
  component: string
  description?: string
  props: UIPropItem[]
}

interface PropsTableProps {
  groups: UIPropGroup[]
  tip?: string
}

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const CodeBlock: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className }) => (
  <code
    className={`
      code-font text-[13px] px-1.5 py-0.5 rounded
      border border-border
      text-foreground
      transition-colors
      ${className ?? ''}
    `}
  >
    {children}
  </code>
)

function dedupeGroups(groups: UIPropGroup[]): UIPropGroup[] {
  const map = new Map<string, UIPropGroup>()

  for (const group of groups) {
    if (!map.has(group.component)) {
      map.set(group.component, {
        ...group,
        props: [...group.props],
      })
      continue
    }

    const existing = map.get(group.component)!
    const propMap = new Map<string, UIPropItem>()

    for (const p of existing.props) propMap.set(p.prop, p)
    for (const p of group.props) propMap.set(p.prop, p)

    existing.props = Array.from(propMap.values())

    if (process.env.NODE_ENV !== 'production') {
      console.warn(
        `[PropsTable] Duplicate prop group "${group.component}" merged.`
      )
    }
  }

  return Array.from(map.values())
}

export const PropsTable: React.FC<PropsTableProps> = ({
  groups,
  tip,
}) => {
  const normalizedGroups = React.useMemo(
    () => dedupeGroups(groups),
    [groups]
  )

  if (!normalizedGroups.length) return null

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-foreground/70">
          Props grouped by component.
        </p>
      </div>
      <Accordion type="multiple">
        {normalizedGroups.map(group => (
          <AccordionItem
            key={group.component}
            value={group.component}
            className="border border-border"
          >
            {/* Header */}
            <AccordionTrigger className="px-4 py-4 border-b border-border text-left">
              <div>
                <h6 className="tracking-tight text-foreground">
                  {group.component} Properties
                </h6>
                {group.description && (
                  <p className="mt-1 line-clamp-1 text-sm text-foreground/70">
                    {group.description}
                  </p>
                )}
              </div>
            </AccordionTrigger>

            {/* Content — NO height animation */}
            <AccordionContent className="pt-0">
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-foreground/60">
                        Property
                      </th>
                      <th className="px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-foreground/60">
                        Type
                      </th>
                      <th className="px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-foreground/60">
                        Default
                      </th>
                      <th className="px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-foreground/60">
                        Description
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-border">
                    {group.props.map(item => (
                      <tr
                        key={`${group.component}:${item.prop}`}
                        className="hover:bg-primary/[0.02] transition-colors"
                      >
                        <td className="px-6 py-4 align-top">
                          <div className="flex flex-col items-start gap-1.5">
                            <CodeBlock className="border-indigo-500/20 text-indigo-600 font-semibold">
                              {item.prop}
                            </CodeBlock>
                            {item.required && (
                              <Badge color="danger">Required</Badge>
                            )}
                          </div>
                        </td>

                        <td className="px-6 py-4 align-top">
                          <CodeBlock className="border-sky-500/20 text-sky-600">
                            {item.type}
                          </CodeBlock>
                        </td>

                        <td className="px-6 py-4 align-top">
                          {item.default && item.default !== '—' ? (
                            <CodeBlock className="border-emerald-500/20 text-emerald-400">
                              {item.default}
                            </CodeBlock>
                          ) : (
                            <span className="font-mono text-xs italic px-2 text-foreground/60">
                              null
                            </span>
                          )}
                        </td>

                        <td className="px-6 py-4 align-top">
                          <p className="text-sm leading-relaxed max-w-sm text-foreground/80">
                            {item.description}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-4">
                {group.props.map(item => (
                  <div
                    key={`${group.component}:${item.prop}`}
                    className="rounded-xl border border-border bg-background p-4 space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <CodeBlock className="border-indigo-500/20 bg-indigo-500/5 text-indigo-600 text-sm">
                        {item.prop}
                      </CodeBlock>
                      {item.required && (
                        <Badge color="danger">Req</Badge>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-[11px]">
                      <div className="space-y-1">
                        <span className="text-foreground/60 uppercase font-bold tracking-tighter">
                          Type
                        </span>
                        <CodeBlock className="border-sky-500/20 bg-sky-500/5 text-sky-600 block">
                          {item.type}
                        </CodeBlock>
                      </div>

                      <div className="space-y-1">
                        <span className="text-foreground/60 uppercase font-bold tracking-tighter">
                          Default
                        </span>
                        <CodeBlock className="border-emerald-500/20 bg-emerald-500/5 text-emerald-400 block">
                          {item.default && item.default !== '—'
                            ? item.default
                            : 'null'}
                        </CodeBlock>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-border">
                      <p className="text-xs text-foreground/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Optional Tip */}
              {tip && (
                <div className="px-6 py-4 bg-primary/[0.03] border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold uppercase tracking-wider">
                      <InfoIcon className="h-3.5 w-3.5" />
                      Tip
                    </div>
                    <span className="text-xs text-foreground/60 font-medium italic">
                      {tip}
                    </span>
                  </div>
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
