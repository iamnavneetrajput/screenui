// app/components/[component]/page.tsx
'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import type { ComponentModule } from '@/docs/schema'
import LibraryLayout from '@/app/library/layout'
import { ComponentHeader } from '@/app/library/component/enhanced/component-header'
import { EnhancedComponentDemo } from '@/app/library/component/enhanced/ComponentDemo'
import { GlobalLoader } from '@/components/loading/Loader'
import { useDemoSync } from '@/lib/useDemoSync'
import { renderFeatures, renderTabs } from '@/docs/renderers'

export default function ComponentPage() {
  const { component } = useParams<{ component: string }>()
  const [module, setModule] = useState<ComponentModule | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadModule = async () => {
      try {
        const mod = await import(`@/docs/components/${component}`)
        setModule(mod as ComponentModule)
      } catch (error) {
        console.error('Failed to load component:', error)
      } finally {
        setLoading(false)
      }
    }
    loadModule()
  }, [component])

  if (loading) {
    return (
      <LibraryLayout>
        <div className="max-w-5xl mx-auto p-6 flex items-center justify-center min-h-[60vh]">
          <GlobalLoader />
        </div>
      </LibraryLayout>
    )
  }

  if (!module) {
    return (
      <LibraryLayout>
        <div className="max-w-5xl mx-auto p-6">
          <h1 className="text-2xl font-bold">Component not found</h1>
          <p className="text-muted-foreground mt-2">
            The component &quot;{component}&quot; could not be loaded.
          </p>
        </div>
      </LibraryLayout>
    )
  }

  return <ComponentPageContent module={module} />
}

function ComponentPageContent({ module }: { module: ComponentModule }) {
  const { doc, demos, config } = module

  // Create demo IDs for sync
  const demoIds = doc.examples.map(ex => ex.id)
  useDemoSync(demoIds)

  // Create tabs using the renderer
  const tabs = renderTabs(module)

  // Notify sidebar that demos are ready for scroll spy
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('demo-anchors-ready'))
    }, 100)

    return () => clearTimeout(timer)
  }, [doc.id])

  return (
    <LibraryLayout>
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <ComponentHeader title={doc.name} description={doc.description} />

        {/* Demos */}
        {doc.examples.map((example, index) => {
          const DemoComponent = demos[example.id]
          const tsCode = example.code.find(c => c.language === 'typescript')?.code || ''
          const jsCode = example.code.find(c => c.language === 'javascript')?.code || ''

          if (!DemoComponent) {
            console.warn(`Demo not found for example: ${example.id}`)
            return null
          }

          return (
            <section key={example.id} id={example.id} className="scroll-mt-28">
              <EnhancedComponentDemo
                title={example.title}
                description={example.description}
                component={doc.id}
                npmCommandTs={index === 0 ? doc.cli[0] : ''}
                npmCommandJs={index === 0 ? doc.cli[1] : ''}
                dependencyCommand={index === 0 ? doc.dependencyCommand?.[0] ?? '' : ''}
                tsCode={tsCode}
                jsCode={jsCode}
                showInstallation={index === 0 && config.showInstallation}
                showTabs={true}
                showJavascript={index > 0}
                showTypescript={index > 0}
                additionalTabs={index === 0 ? tabs : []}
                category={doc.category}
                version={doc.version}
                lastUpdated={doc.lastUpdated}
                dependencies={doc.dependencies}
                tags={doc.tags}
                previewBackground="default"
                previewPadding={config.previewPadding === 'none' ? 'lg' : config.previewPadding}
                centerPreview={config.centerPreview}
                tabVariant="default"
                tabSize="md"

              >
                <DemoComponent />
              </EnhancedComponentDemo>
            </section>
          )
        })}

        {/* Features */}
        <div className="border border-border rounded-xl ">
          {renderFeatures(module)}
        </div>
      </div>
    </LibraryLayout>
  )
}