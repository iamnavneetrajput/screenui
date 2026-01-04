// docs/renderers.tsx
import { FeaturesItem } from '@/components/ui/main/FeaturesItem'
import { ExpandSection } from '@/components/ui/main/ExpandSection'
import { PropsTable } from '@/components/ui/main/PropsTable'
import type { ComponentModule, PropGroup } from './schema'

function convertPropsToTableFormat(propGroup: PropGroup) {
  return {
    component: propGroup.component,
    description: propGroup.description,
    props: propGroup.props.map(prop => ({
      prop: prop.name,
      type: prop.type,
      default: prop.default,
      description: prop.description,
      required: prop.required,
    })),
  }
}

export function renderFeatures(module: ComponentModule) {
  const { doc } = module

  return (
    <ExpandSection>
      <div className="p-4 md:p-8 space-y-8">
        <div className="border-b border-border pb-6 mb-6">
          <h1 className="text-2xl font-bold">
            {doc.name} Features
          </h1>
          <p className="mt-2 max-w-2xl">
            {doc.description}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">
            Features
          </h3>
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

        {doc.customizationGuide && (
          <div>
            <h3 className="text-xl font-semibold mb-3">
              {doc.customizationGuide.title}
            </h3>
            <p className="opacity-80 mb-3">
              {doc.customizationGuide.description}
            </p>
            <code className="block bg-card border border-border text-sm px-4 py-2 rounded-lg w-fit">
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
      <main className="w-full flex flex-col mx-auto">
        <PropsTable
          groups={doc.propGroups.map(convertPropsToTableFormat)}
        />
      </main>
  )
}

export function renderTabs(module: ComponentModule) {
  const Settings = require('lucide-react').Settings

  return [
    {
      label: 'Props',
      icon: Settings,
      content: renderProps(module),
    },
  ]
}
