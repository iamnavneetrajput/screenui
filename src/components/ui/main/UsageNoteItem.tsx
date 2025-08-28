interface UsageNoteItemProps {
  label: string
  description: string
  colorClass?: string // e.g., "bg-blue-100 text-blue-900"
}

export function UsageNoteItem({
  label,
  description,
  colorClass = "bg-muted text-foreground"
}: UsageNoteItemProps) {
  return (
    <li>
      <code className={`px-1 py-0.5 rounded ${colorClass}`}>{label}</code> : {description}
    </li>
  )
}
