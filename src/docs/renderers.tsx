// docs/renderers.tsx
import * as React from 'react'
import { FeaturesItem } from '@/components/ui/main/FeaturesItem'
import { ExpandSection } from '@/components/ui/main/ExpandSection'
import { PropsTable } from '@/components/ui/main/PropsTable'
import type { ComponentModule, PropGroup } from './schema'

interface PropItem {
  prop: string
  type: string
  default?: string
  description: string
}

// Convert PropGroup to PropsTable format
function convertPropsToTableFormat(propGroup: PropGroup): PropItem[] {
  return propGroup.props.map(prop => ({
    prop: prop.name,
    type: prop.type,
    default: prop.default,
    description: prop.description,
  }))
}

export function renderFeatures(module: ComponentModule) {
  const { doc } = module

  return (
    <ExpandSection>
      <div className="p-4 md:p-8 space-y-8 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
        {/* Header */}
        <div className="border-b border-[hsl(var(--border))] pb-6 mb-6">
          <h1 className="text-2xl font-bold text-[hsl(var(--foreground))]">
            {doc.name} Features
          </h1>
          <p className="mt-2 max-w-2xl">{doc.description}</p>
        </div>

        {/* Features grouped by category */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Features</h3>
          <ul className="list-disc list-inside opacity-80 space-y-2">
            {doc.features.map((feature, index) => (
              <FeaturesItem
                key={index}
                label={feature.title}
                description={feature.description}
              />
            ))}
          </ul>
        </div>

        {/* Customization Guide (if exists) */}
        {doc.customizationGuide && (
          <div>
            <h3 className="text-xl font-semibold mb-3">
              {doc.customizationGuide.title}
            </h3>
            <p className="opacity-80 mb-3">
              {doc.customizationGuide.description}
            </p>
            <code className="block bg-[hsl(var(--surface))] border border-[hsl(var(--border))] text-sm px-4 py-2 rounded-lg w-fit">
              {doc.customizationGuide.codeExample}
            </code>
          </div>
        )}
      </div>
    </ExpandSection>
  )
}

export function renderProps(module: ComponentModule) {
  const { doc } = module

  return (
    <ExpandSection previewHeight={400}>
      <main className="min-h-screen w-full flex flex-col gap-4 mx-auto">
        {doc.propGroups.map((group, index) => (
          <PropsTable
            key={index}
            title={`${group.component} Properties`}
            description={group.description}
            propsData={convertPropsToTableFormat(group)}
          />
        ))}
      </main>
    </ExpandSection>
  )
}

export function renderTabs(module: ComponentModule) {
  const { doc } = module
  const Settings = require('lucide-react').Settings

  return [
    {
      label: 'Props',
      icon: Settings,
      content: renderProps(module),
    },
  ]
}