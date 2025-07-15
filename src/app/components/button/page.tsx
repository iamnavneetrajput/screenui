'use client';
import React, { useState } from 'react';
import { MainLayout } from '@/components/layout/main-layout';
import { ComponentHeader } from '@/app/library/component/component-header';
import { ComponentDemo } from '@/app/library/component/component-demo';
import { Button } from '@/components/ui/button';
import { Heart, Download, Mail, Trash2, ExternalLink, User } from 'lucide-react';


// TypeScript usage
const buttonTsCode = `import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return (
    <Button variant="default">Primary</Button>
  );
}`;


// JavaScript usage
const buttonJsCode = `import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return (
    <Button variant="default">Primary</Button>
  );
}`;


// Next.js usage
const buttonNextjsCode = `import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

export function ButtonDemo() {
  const router = useRouter();
  return (
    <Button variant="default" onClick={() => router.push("/path")}>
      Go to page
    </Button>
  );
}`;



export default function ButtonPage() {
  const [loading, setLoading] = useState(false);

  const handleLoadingTest = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };
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
          npmCommandTs="screenui add button --lang ts --path src/components/ui"
          npmCommandJs="screenui add button --lang js --path src/components/ui"

          tsCode={buttonTsCode}
          jsCode={buttonJsCode}
          nextjsCode={buttonNextjsCode}
        >
          <div className='space-y-12'>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4">

                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>

            {/* Sizes Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            {/* With Icons Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <Button icon={<Heart className="h-4 w-4" />}>
                  Like
                </Button>
                <Button variant="secondary" icon={<Download className="h-4 w-4" />}>
                  Download
                </Button>
                <Button variant="outline" icon={<Mail className="h-4 w-4" />}>
                  Email
                </Button>
                <Button variant="destructive" icon={<Trash2 className="h-4 w-4" />}>
                  Delete
                </Button>
              </div>
            </div>

            {/* Loading States Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <Button loading>Loading...</Button>
                <Button variant="secondary" loading>
                  Processing
                </Button>
                <Button variant="outline" loading>
                  Saving
                </Button>
                <Button
                  variant="destructive"
                  loading={loading}
                  onClick={handleLoadingTest}
                >
                  {loading ? 'Deleting...' : 'Delete Item'}
                </Button>
              </div>
            </div>

            {/* Full Width Section */}
            <div className="space-y-6">
              <div className="space-y-4">
                <Button fullWidth>Full Width Button</Button>
                <Button variant="outline" fullWidth icon={<Download className="h-4 w-4" />}>
                  Download All Files
                </Button>
              </div>
            </div>
          </div>
        </ComponentDemo>

        <div className="p-6 space-y-8">
          <h2 className="text-2xl font-bold">Usage Notes</h2>

          {/* Variant Notes */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Variants</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><code className="text-primary bg-primary/10 px-1 py-0.5 rounded">Default</code>: Use for primary actions like “Submit” or “Save”.</li>
              <li><code className="text-primary bg-primary/10 px-1 py-0.5 rounded">Secondary</code>: Use for supporting actions that aren’t the main focus.</li>
              <li><code className="text-primary bg-primary/10 px-1 py-0.5 rounded">Outline</code>: Best for actions that should look minimal or subtle.</li>
              <li><code className="text-primary bg-primary/10 px-1 py-0.5 rounded">Ghost</code>: Ideal when the button sits on colored backgrounds or inside cards.</li>
              <li><code className="text-primary bg-primary/10 px-1 py-0.5 rounded">Destructive</code>: Use for delete, remove, or irreversible actions.</li>
              <li><code className="text-primary bg-primary/10 px-1 py-0.5 rounded">Link</code>: Styled as a link. Use when you want a less “button-like” call-to-action.</li>
            </ul>
          </div>

          {/* Size Notes */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Sizes</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><code className="bg-muted px-1 py-0.5 rounded">sm</code>: Use in compact spaces like forms, modals, or toolbars.</li>
              <li><code className="bg-muted px-1 py-0.5 rounded">md</code>: Default size. Good for general use.</li>
              <li><code className="bg-muted px-1 py-0.5 rounded">lg</code>: Use when the action needs emphasis, like hero sections.</li>
              <li><code className="bg-muted px-1 py-0.5 rounded">icon</code>: Use when the button only contains an icon (e.g., delete or settings).</li>
            </ul>
          </div>

          {/* Icon Notes */}
          <div>
            <h3 className="text-xl font-semibold mb-2">With Icons</h3>
            <p className="text-muted-foreground mb-2">You can add icons to the left of the button label to visually represent the action.</p>
            <code className="block bg-muted text-sm px-2 py-1 rounded w-fit">
              &lt;Button icon=&#123;&lt;Mail /&gt;&#125;&gt;Email&lt;/Button&gt;
            </code>
          </div>

          {/* Loading Notes */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Loading State</h3>
            <p className="text-muted-foreground mb-2">To show loading state, use the <code className="bg-muted px-1 py-0.5 rounded">loading</code> prop. It automatically disables the button and shows a spinner.</p>
            <code className="block bg-muted text-sm px-2 py-1 rounded w-fit">
              &lt;Button loading&gt;Saving...&lt;/Button&gt;
            </code>
          </div>

          {/* Full Width Notes */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Full Width</h3>
            <p className="text-muted-foreground mb-2">To make a button stretch across its container, pass the <code className="bg-muted px-1 py-0.5 rounded">fullWidth</code> prop.</p>
            <code className="block bg-muted text-sm px-2 py-1 rounded w-fit">
              &lt;Button fullWidth&gt;Submit&lt;/Button&gt;
            </code>
          </div>
        </div>

      </div>
    </MainLayout>
  );
}