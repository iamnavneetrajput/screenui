import type { Example } from '@/docs/schema'

// Shared code snippets (TS === JS)

const badgeBasicCode = `
import { Badge } from "@/components/badge"
import { InfoIcon } from "lucide-react"

export function Example() {
  return (
    <div className="flex gap-2 flex-wrap">
      <Badge>New</Badge>

      <Badge variant="dot" color="success">
        Active
      </Badge>

      <Badge
        as="button"
        interactive
        onClick={() => console.log("Clicked")}
      >
        Clickable
      </Badge>

      <Badge icon={<InfoIcon />} variant="outline">
        Warning
      </Badge>

      <Badge onRemove={() => console.log("Removed")}>
        Removable
      </Badge>
    </div>
  )
}
`.trim()

// Export examples

export const badgeExamples: Example[] = [
  {
    id: 'basic',
    title: 'Basic Badge Usage',
    description:
      'Badges with variants, icons, interactivity, and removable behavior.',
    code: [
      { language: 'typescript', code: badgeBasicCode },
      { language: 'javascript', code: badgeBasicCode },
    ],
  },
]
