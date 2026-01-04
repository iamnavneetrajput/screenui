import React from 'react'

interface FeaturesItemProps {
  label: string
  description: string
}

export function FeaturesItem({
  label,
  description,
}: FeaturesItemProps) {
  return (
    <li className="flex items-start gap-3">
      <code className="shrink-0 rounded-md border border-border bg-muted px-2 py-0.5 text-xs font-mono text-foreground">
        {label}
      </code>

      <p className="text-sm text-foreground/80 leading-relaxed">
        {description}
      </p>
    </li>
  )
}
