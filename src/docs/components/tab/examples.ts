import type { Example } from '@/docs/schema'

const tabsFeaturedCode = `
'use client'

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/Tabs'
import { Badge } from '@/components/Badge'
import { HomeIcon, Settings } from 'lucide-react'

export function Example() {
  return (
    <Tabs defaultValue="general" variant="pills">
      <TabsList aria-label="Workspace settings tabs">
        <TabsTrigger
          value="general"
          icon={<HomeIcon className="w-4 h-4" />}>
          general
          </TabsTrigger>

        <TabsTrigger
          value="advanced"
          icon={<Settings className="w-4 h-4" />}
          badge={<Badge color="info">3</Badge>}>
          advanced
          </TabsTrigger>

      </TabsList>

      <TabsContent value="general">
        <div className="mt-4 rounded-lg bg-gray-50 p-4 text-sm">
          Update your workspace name, avatar, and default preferences.
        </div>
      </TabsContent>

      <TabsContent value="advanced">
        <div className="mt-4 rounded-lg bg-gray-50 p-4 text-sm">
          Configure advanced permissions, API access, and integrations.
        </div>
      </TabsContent>
    </Tabs>
  )
}
`.trim()
export const tabsExamples: Example[] = [
  {
    id: 'featured',
    title: 'Featured Tabs',
    description:
      'A polished tabs layout using the pills variant with icons and a badge.',
    code: [
      { language: 'typescript', code: tabsFeaturedCode },
      { language: 'javascript', code: tabsFeaturedCode },
    ],
  },
]
