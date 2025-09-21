'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/main/card';
import IntroBanner from '@/components/ui/main/banner';
import DocsSwitchButton from '../component/DocsSwitchButton';
import { CodeBlock } from '@/app/library/component/CodeBlock';

export default function ThemingDocsPage() {
  return (
    <main className="min-h-screen w-full bg-[hsl(var(--background))]">
      <div className="pt-12">
        <IntroBanner
          title="Theming"
          description="Easily customize components with Tailwind CSS and CSS variables. Supports light 🌞 and dark 🌙 modes out of the box."
          customButton={<DocsSwitchButton />}
        />

        {/* Content Section */}
        <div className="space-y-6 sm:space-y-10 pt-8">
          {/* Section 1: CSS Variables */}
          <Card className="bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border border-[hsl(var(--border))]">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl flex items-center gap-3">
                CSS Variables
              </CardTitle>
              <CardDescription className="text-base sm:text-lg">
                Define your design tokens as CSS variables. Using HSL values makes it
                easier to fine-tune lightness and saturation for both themes.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold">Example Variables</h3>
                <CodeBlock
                  language="css"
                  code={`:root {
  --background: 0, 0%, 95%;
  --foreground: 210, 40%, 10%;
  --border: 0, 0%, 80%;
  --surface: 0, 0%, 98%;
  --primary: 240, 100%, 40%;
  --success: 120, 100%, 40%;
  --warning: 60, 100%, 40%;
  --error: 0, 100%, 40%;
}

[data-theme="dark"] {
  --background: 210, 40%, 10%;
  --foreground: 0, 0%, 95%;
  --border: 0, 0%, 20%;
  --surface: 0, 0%, 15%;
  --primary: 240, 100%, 30%;
  --success: 120, 100%, 30%;
  --warning: 60, 100%, 30%;
  --error: 0, 100%, 30%;
}`}
                />
              </div>
            </CardContent>
          </Card>

          {/* Section 2: Usage in Tailwind */}
          <Card className="bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border border-[hsl(var(--border))]">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl flex items-center gap-3">
                Using Variables in Tailwind
              </CardTitle>
              <CardDescription className="text-base sm:text-lg">
                Reference variables directly inside Tailwind utility classes using{' '}
                <code>hsl(var(--token))</code>.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <CodeBlock
                language="tsx"
                code={`<div className="bg-[hsl(var(--background))] text-[hsl(var(--foreground))] p-6 rounded-xl border border-[hsl(var(--border))]">
  <h2 className="text-xl font-semibold">Hello Theme!</h2>
  <p>This card adapts to light & dark mode automatically.</p>
  <button className="mt-4 px-4 py-2 rounded-lg bg-[hsl(var(--primary))] text-white">
    Click Me
  </button>
</div>`}
              />
            </CardContent>
          </Card>

          {/* Section 3: Convention */}
          <Card className="bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border border-[hsl(var(--border))]">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl flex items-center gap-3">
                Token Convention
              </CardTitle>
              <CardDescription className="text-base sm:text-lg">
                A simple and consistent naming convention for theming.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold">Core Tokens</h3>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                  <li><code>--background</code> → component background</li>
                  <li><code>--foreground</code> → text color</li>
                  <li><code>--border</code> → divider / border color</li>
                  <li><code>--surface</code> → elevated surfaces</li>
                  <li><code>--primary</code>, <code>--success</code>, <code>--warning</code>, <code>--error</code></li>
                </ul>
              </div>

              <div className="space-y-2">
                <p>Example usage:</p>
                <CodeBlock
                  language="tsx"
                  code={`<div className="bg-[hsl(var(--primary))] text-[hsl(var(--foreground))]">
  Primary Section
</div>`}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
