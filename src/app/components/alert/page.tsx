import { MainLayout } from '@/components/layout/main-layout';
import { ComponentHeader } from '@/app/library/component/component-header';
import { ComponentDemo } from '@/app/library/component/component-demo';
import { Badge } from '@/components/ui/badge';

const badgeTsCode = `import { Badge } from "@/components/ui/badge";

export function BadgeDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
    </div>
  );
}`;

const badgeJsCode = 
`✅ This component works out of the box with **React** (both JavaScript and TypeScript).
No additional setup is required.
Refer to the "Usage" section above for example code.`;

const badgeNextjsCode = 
`✅ This component is fully compatible with **Next.js** (Pages Router and App Router).
No extra configuration is needed.
> 💡 Using **Next.js App Router**?  
> Add [use client] at the top of your file when using interactive components.
Refer to the "Usage" section above for example code.`;


export default function BadgePage() {
  return (
    <MainLayout>
      <div className="pt-12 md:p-10 max-w-5xl mx-auto space-y-10">
        <ComponentHeader
          title="Badge"
          description="Badges are used to highlight an item's status for quick recognition."
        />

        <ComponentDemo
          title="Badge Variants"
          description="Badges come in different variants to indicate different states and priorities."
          component="Badge"
          dependencyCommand="npm install lucide-react"
          npmCommand="screenui add badge --lang js --path src/components/ui"
          tsCode={badgeTsCode}
          jsCode={badgeJsCode}
          nextjsCode={badgeNextjsCode}
        >
          <div className="flex flex-wrap gap-4">
            <Badge>Default</Badge>
            {/* <Badge variant="secondary">Secondary</Badge> */}
            <Badge variant="outline">Outline</Badge>
            {/* <Badge variant="destructive">Destructive</Badge> */}
          </div>
        </ComponentDemo>

        <div className="border border-dashed border-[hsl(var(--border))]  rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Usage Notes</h2>
          <p className="text-muted-foreground mb-4">
            Badges are used for labeling, categorization, and indicating status. Use them sparingly to avoid visual noise.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Use <code className="text-primary bg-primary/10 px-1 py-0.5 rounded">Default</code> badges for standard status indicators</li>
            <li>Use <code className="text-primary bg-primary/10 px-1 py-0.5 rounded">Secondary</code> badges for less important information</li>
            <li>Use <code className="text-primary bg-primary/10 px-1 py-0.5 rounded">Outline</code> badges for subtle indicators</li>
            <li>Use <code className="text-primary bg-primary/10 px-1 py-0.5 rounded">Destructive</code> badges for error or warning states</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}