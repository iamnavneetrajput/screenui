'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/main/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Palette, Shield, Settings, Zap } from 'lucide-react';
import { FeatureCard } from '../component/FeatureCard';
import TerminalCommand from '@/components/ui/main/TerminalCommand';
import IntroBanner from '@/components/ui/main/banner';
import DocsSwitchButton from './DocsSwitchButton';

export default function ComponentDocsPage() {
  const commands = [
    {
      name: 'init',
      description: 'Initialize ScreenUI configuration in the current directory',
      example: 'npx screenui init',
      options: [
        { option: '--yes', description: 'Skip prompts and use default configuration', default: 'false' },
        { option: '--force', description: 'Overwrite existing config if present', default: 'false' },
      ],
    },
    {
      name: 'add',
      description: 'Add one or more components to your project',
      example: 'npx screenui add button card --lang ts --path src/components/ui',
      options: [
        { option: '--lang <lang>', description: 'Language: ts or js', default: 'ts' },
        { option: '--path <path>', description: 'Target components directory', default: './components' },
        { option: '--force', description: 'Overwrite existing files', default: 'false' },
        { option: '--silent', description: 'Suppress non-error output', default: 'false' },
      ],
    },
    {
      name: 'diff',
      description: 'Show differences between installed and latest component versions',
      example: 'npx screenui diff button --full',
      options: [
        { option: '--breaking-only', description: 'Show only breaking changes', default: 'false' },
        { option: '--full', description: 'Show full file diff', default: 'false' },
      ],
    },
    {
      name: 'doctor',
      description: 'Run project health checks',
      example: 'npx screenui doctor --fix',
      options: [
        { option: '--fix', description: 'Attempt to automatically fix issues', default: 'false' },
      ],
    },
    {
      name: 'list',
      description: 'List available templates or components',
      example: 'npx screenui list --components --verbose',
      options: [
        { option: '--components', description: 'List components instead of templates', default: 'false' },
        { option: '--verbose', description: 'Show additional details', default: 'false' },
      ],
    },
    {
      name: 'status',
      description: 'Show installed components and their status',
      example: 'npx screenui status --verbose',
      options: [
        { option: '--verbose', description: 'Show extra information', default: 'false' },
      ],
    },
    {
      name: 'upgrade',
      description: 'Upgrade installed components to the latest version',
      example: 'npx screenui upgrade button card --all --force',
      options: [
        { option: '--all', description: 'Upgrade all installed components', default: 'false' },
        { option: '--force', description: 'Overwrite even if version is up-to-date', default: 'false' },
      ],
    }
  ];

  return (
    <main className="min-h-screen w-full bg-[hsl(var(--background))]">
      <div className="pt-12">
        <IntroBanner
          title="ScreenUI CLI Documentation"
          description="All commands and options for installing, managing, and upgrading components."
          customButton={<DocsSwitchButton />}
        />

        <div className="space-y-6 sm:space-y-8 pt-8">
          {commands.map((cmd) => (
            <Card key={cmd.name} className="bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border border-[hsl(var(--border))]">
              <CardHeader className="pb-6 sm:pb-8">
                <CardTitle className="text-2xl sm:text-3xl flex items-center gap-3">
                  {cmd.name}
                </CardTitle>
                <CardDescription className="text-base sm:text-lg">
                  {cmd.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 sm:space-y-8">
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold">Example</h3>
                  <TerminalCommand command={cmd.example} />
                </div>

                {cmd.options.length > 0 && (
                  <div className="space-y-4 sm:space-y-6">
                    <h3 className="text-lg sm:text-xl font-bold">Available Options</h3>
                    <div className="overflow-hidden rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))]">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-[hsl(var(--muted)/0.5)] border-b border-[hsl(var(--border))]">
                              <th className="text-left py-4 px-4 sm:px-6 font-semibold text-[hsl(var(--foreground))] text-sm sm:text-base">Option</th>
                              <th className="text-left py-4 px-4 sm:px-6 font-semibold text-[hsl(var(--foreground))] text-sm sm:text-base">Description</th>
                              <th className="text-left py-4 px-4 sm:px-6 font-semibold text-[hsl(var(--foreground))] text-sm sm:text-base">Default</th>
                            </tr>
                          </thead>
                          <tbody className="bg-[hsl(var(--card))]">
                            {cmd.options.map((opt) => (
                              <tr key={opt.option} className="hover:bg-[hsl(var(--muted)/0.3)] transition-colors duration-200">
                                <td className="py-4 px-4 sm:px-6">
                                  <code className="text-[hsl(var(--foreground))] bg-[hsl(var(--muted))] px-3 py-2 rounded-md text-sm font-mono">{opt.option}</code>
                                </td>
                                <td className="py-4 px-4 sm:px-6 text-[hsl(var(--muted-foreground))] text-sm sm:text-base">{opt.description}</td>
                                <td className="py-4 px-4 sm:px-6">
                                  <Badge className="bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))]">{opt.default}</Badge>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}

          {/* Features Section */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold">What You Get</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <FeatureCard icon={Palette} title="Tailwind Styled" description="Beautiful, modern components with Tailwind CSS" />
              <FeatureCard icon={Shield} title="Responsive & Accessible" description="Mobile-first design with ARIA compliance" />
              <FeatureCard icon={Settings} title="Supports Variants" description="Multiple styles and configurations available" />
              <FeatureCard icon={Zap} title="Easy to Customize" description="Simple to modify and extend for your needs" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
