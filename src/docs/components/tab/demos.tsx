'use client'

import type { JSX } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/packages/Tabs'
import { Badge } from '@/packages/Badge'
import { HomeIcon, Bolt } from 'lucide-react'

export const tabsDemos: Record<string, () => JSX.Element> = {
  featured: () => {
    return (
      <div className="max-w-lg mx-auto">
        <div className="rounded-xl border border-border bg-surface">
          <div className="p-4 border-b border-border">
            <h3 className="text-sm font-semibold">
              Workspace Settings
            </h3>
            <p className="text-xs">
              Manage your workspace configuration
            </p>
          </div>

          <div className="p-4">
            <Tabs defaultValue="general" variant="pills">
              <TabsList>
                <TabsTrigger value="general" icon={<HomeIcon />}>
                  general
                </TabsTrigger>

                <TabsTrigger
                  value="advanced"
                  icon={<Bolt />}
                  badge={<Badge color='info'>3</Badge>}>advanced</TabsTrigger>

              </TabsList>

              <TabsContent value="general">
                <div className="mt-4 rounded-lg">
                  Update your workspace name, avatar, and default preferences.
                </div>
              </TabsContent>

              <TabsContent value="advanced">
                <div className="mt-4 rounded-lg">
                  Configure advanced permissions, API access, and integrations.
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    )
  },
}
