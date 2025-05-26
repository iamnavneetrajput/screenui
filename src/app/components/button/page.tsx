import { MainLayout } from '@/components/layout/main-layout';
import { ComponentHeader } from '@/app/library/component/component-header';
import { ComponentDemo } from '@/app/library/component/component-demo';
import { Button } from '@/components/ui/button';
import { TrashIcon } from 'lucide-react';

const buttonTsCode = `import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Primary</Button>
    </div>
  );
}`;

const buttonJsCode = `import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Primary</Button>
    </div>
  );
}`;

const buttonNextjsCode = `import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
export function ButtonDemo() {
  const router = useRouter();
  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="default" onClick={() => router.push("/path")}>
        Primary
      </Button>
    </div>
  );
}`;


export default function ButtonPage() {
  return (
    <MainLayout>
      <div className="pt-12 md:p-10 max-w-5xl mx-auto space-y-10">
        <ComponentHeader
          title="Button"
          description="Buttons are used to trigger actions or events, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation."
        />

        <ComponentDemo
          title="Button Variants"
          description="Buttons support multiple variants and sizes. Use the appropriate variant based on the importance of the action."
          component="Button"
          dependencyCommand="npm install lucide-react"
          npmCommand="screenui add button --lang js --path src/components/ui"
          
          tsCode={buttonTsCode}
          jsCode={buttonJsCode}
          nextjsCode={buttonNextjsCode}
        >
          <div className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Delete</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="subtle">Subtle</Button>
            <Button shape="pill" variant="primary">Pill Button</Button>
            <Button fullWidth>Full Width</Button>

          </div>
        </ComponentDemo>

        <div className="border border-[hsl(var(--border))]  rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Usage Notes</h2>
          <p className="text-muted-foreground mb-4">
            Buttons support multiple variants and sizes. Use the appropriate variant based on the importance of the action.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Use <code className="text-primary bg-primary/10 px-1 py-0.5 rounded">Primary</code> buttons for main actions</li>
            <li>Use <code className="text-primary bg-primary/10 px-1 py-0.5 rounded">Secondary</code> buttons for secondary actions</li>
            <li>Use <code className="text-primary bg-primary/10 px-1 py-0.5 rounded">Outline</code> buttons for less important actions</li>
            <li>Use <code className="text-primary bg-primary/10 px-1 py-0.5 rounded">Ghost</code> buttons for the least important actions</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}