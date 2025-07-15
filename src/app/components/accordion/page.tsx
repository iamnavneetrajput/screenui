import { MainLayout } from '@/components/layout/main-layout';
import { ComponentHeader } from '@/app/library/component/component-header';
import { ComponentDemo } from '@/app/library/component/component-demo';
import Accordion from '@/components/ui/Accordion';
import { accordionItems } from '@/data/demo-data/accordion-items';
import {
  accordionTsCode,
  accordionJsCode,
  accordionNextjsCode,
  accordionMultipleTsCode,
  accordionMultipleJsCode,
} from '@/data/code-snippets/accordion';

export default function AccordionPage() {
  return (
    <MainLayout>
      <div className="pt-12 md:p-10 max-w-5xl mx-auto space-y-10">
        <ComponentHeader
          title="Accordion"
          description="Accordions are used to display collapsible content panels for presenting information in a limited amount of space."
        />

        <ComponentDemo
          title="Accordion with Single Item"
          description="Use the Accordion component with a single item that can be expanded or collapsed."
          component="Accordion"
          dependencyCommand="npm install lucide-react"
          npmCommandTs="npm install @radix-ui/react-accordion"
          npmCommandJs="npm install @radix-ui/react-accordion"
          tsCode={accordionTsCode}
          jsCode={accordionJsCode}
          nextjsCode={accordionNextjsCode}
        >
          <div className="flex flex-wrap gap-4">
            <Accordion items={accordionItems} />
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Accordion with Multiple Items"
          description="Allow multiple items to be expanded at once."
          component="Accordion"
          tsCode={accordionMultipleTsCode}
          jsCode={accordionMultipleJsCode}
          nextjsCode={accordionNextjsCode}
        >
          <div className="flex flex-wrap gap-4">
            <Accordion items={accordionItems} allowMultiple />
          </div>
        </ComponentDemo>

        <div className="border border-dashed border-[hsl(var(--border))] rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Usage Notes</h2>
          <p className="text-muted-foreground mb-4">
            Accordions help reduce clutter by allowing users to expand or collapse sections as needed.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Use <code className="text-primary bg-primary/10 px-1 py-0.5 rounded">Accordion items=&#123;items&#125;</code> to allow only one open panel at a time.</li>
            <li>Use <code className="text-primary bg-primary/10 px-1 py-0.5 rounded">Accordion items=&#123;items&#125; allowMultiple</code> to allow multiple open panels.</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}
