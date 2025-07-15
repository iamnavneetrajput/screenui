"use client";

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/main/card';
import { Badge } from '@/components/ui/badge';
import { Terminal, Download, Settings, Play, Sparkles, Zap, Shield, Palette } from 'lucide-react';
import { StepCard } from './StepCard';
import { cn } from '@/lib/utils';
import { FeatureCard } from './FeatureCard';
import TerminalCommand from '@/components/ui/main/TerminalCommand';

type GuideType = 'component' | 'awaken';

export default function ScreenUIDocsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeGuide, setActiveGuide] = useState<GuideType>('component');

  // Initialize from URL
  useEffect(() => {
    const guideParam = searchParams.get('guide') as GuideType;
    if (guideParam === 'component' || guideParam === 'awaken') {
      setActiveGuide(guideParam);
    }
  }, [searchParams]);

  // Handle tab switch and update URL
  const handleGuideChange = (guide: GuideType) => {
    setActiveGuide(guide);
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set('guide', guide);
    router.push(`/docs?${params.toString()}`);
  };

  return (
    <div className="min-h-screen w-full bg-[hsl(var(--background))] text-[hsl(var(--foreground))] py-6 sm:py-12">
      <div className="mx-auto sm:px-6">

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="bg-[hsl(var(--background))] p-1 rounded-lg shadow-sm border border-[hsl(var(--border))]">
            <Button
              variant={activeGuide === 'component' ? 'default' : 'ghost'}
              onClick={() => handleGuideChange('component')}
              className={cn(
                "transition-all duration-300 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3",
                activeGuide === 'component'
                  ? "bg-[hsl(var(--foreground))] text-[hsl(var(--background))] shadow-sm"
                  : "hover:bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]"
              )}
            >
              <Zap className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Component Installation Guide</span>
              <span className="sm:hidden">Components</span>
            </Button>
            <Button
              variant={activeGuide === 'awaken' ? 'default' : 'ghost'}
              onClick={() => handleGuideChange('awaken')}
              className={cn(
                "transition-all duration-300 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3",
                activeGuide === 'awaken'
                  ? "bg-[hsl(var(--foreground))] text-[hsl(var(--background))] shadow-sm"
                  : "hover:bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]"
              )}
              aria-pressed={activeGuide === 'awaken'}
            >
              <Settings className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Awaken Installation Guide</span>
              <span className="sm:hidden">Awaken</span>
            </Button>
          </div>
        </div>

        {/* Content Switcher */}
        <div className="relative overflow-hidden">
          {/* Component Guide */}
          <div
            className={`transition-all duration-500 ease-in-out transform ${activeGuide === 'component'
              ? 'translate-x-0 opacity-100'
              : '-translate-x-full opacity-0 absolute inset-0'
              }`}
          >
            <div className="space-y-6 sm:space-y-8">
              <Card className="bg-[hsl(var(--background))] text-[hsl(var(--foreground))] border-none">
                <CardHeader className="pb-6 sm:pb-8">
                  <CardTitle className="text-2xl sm:text-3xl flex items-center gap-3">
                    ScreenUI Component Installation
                  </CardTitle>
                  <CardDescription className="text-base sm:text-lg">
                    Install individual components with a single command
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 sm:space-y-8">
                  {/* Main Command */}
                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-bold">Basic Command</h3>
                    <TerminalCommand command='npx screenui add [component-name]' />
                    <div className="p-4 sm:p-6 rounded-lg border bg-[hsl(var(--surface))] border-[hsl(var(--border))]">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-md bg-[hsl(var(--border)/0.2)]">
                          <Sparkles className="h-5 w-5 text-[hsl(var(--color-border))]" />
                        </div>
                        <div>
                          <p className="font-semibold text-[hsl(var(--foreground))] mb-1">Pro Tip</p>
                          <p className="text-[hsl(var(--foreground)/0.8)] text-sm sm:text-base">
                            Replace <code className=" bg-blue-200 text-black px-2 py-1 rounded font-mono">[component-name]</code> with the actual component you want to install
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Examples */}
                  <div className="space-y-4 sm:space-y-6">
                    <h3 className="text-lg sm:text-xl font-bold">Example Commands</h3>
                    <div className="grid gap-4 sm:gap-6">

                      <div className="space-y-2">
                        <p className="text-sm sm:text-base font-medium">Install a button component:</p>
                        <TerminalCommand command="npx screenui add button" />
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm sm:text-base font-medium">Install with JavaScript variant:</p>
                        <TerminalCommand command='npx screenui add card --lang js' />
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm sm:text-base font-medium">Install to custom path:</p>
                        <TerminalCommand command='npx screenui add accordion --path src/components/ui' />
                      </div>
                    </div>
                  </div>

                  {/* Options Table */}
                  <div className="space-y-4 sm:space-y-6">
                    <h3 className="text-lg sm:text-xl font-bold text-[hsl(var(--foreground))]">
                      Available Options
                    </h3>

                    <div className="overflow-hidden rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--surface))]">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-[hsl(var(--background))] border-b border-[hsl(var(--border))]">
                              <th className="text-left py-4 px-4 sm:px-6 font-semibold text-[hsl(var(--foreground))] text-sm sm:text-base">
                                Option
                              </th>
                              <th className="text-left py-4 px-4 sm:px-6 font-semibold text-[hsl(var(--foreground))] text-sm sm:text-base">
                                Description
                              </th>
                              <th className="text-left py-4 px-4 sm:px-6 font-semibold text-[hsl(var(--foreground))] text-sm sm:text-base">
                                Default
                              </th>
                            </tr>
                          </thead>

                          <tbody className="bg-[hsl(var(--background))]">
                            <tr className="border-b border-[hsl(var(--border)/0.5)] hover:bg-[hsl(var(--surface))] transition-colors duration-200">
                              <td className="py-4 px-4 sm:px-6">
                                <code className="text-[hsl(var(--foreground))] bg-[hsl(var(--border)/0.15)] px-3 py-2 rounded-md text-sm font-mono">
                                  --lang
                                </code>
                              </td>
                              <td className="py-4 px-4 sm:px-6 text-[hsl(var(--foreground)/0.8)] text-sm sm:text-base">
                                Language variant (js or ts)
                              </td>
                              <td className="py-4 px-4 sm:px-6">
                                <Badge variant="green" className="bg-[hsl(var(--border)/0.1)] text-[hsl(var(--foreground))]">
                                  ts
                                </Badge>
                              </td>
                            </tr>

                            <tr className="hover:bg-[hsl(var(--surface))] transition-colors duration-200">
                              <td className="py-4 px-4 sm:px-6">
                                <code className="text-[hsl(var(--foreground))] bg-[hsl(var(--border)/0.15)] px-3 py-2 rounded-md text-sm font-mono">
                                  --path
                                </code>
                              </td>
                              <td className="py-4 px-4 sm:px-6 text-[hsl(var(--foreground)/0.8)] text-sm sm:text-base">
                                Installation destination path
                              </td>
                              <td className="py-4 px-4 sm:px-6">
                                <Badge variant="green" className="bg-[hsl(var(--border)/0.1)] text-[hsl(var(--foreground))]">
                                  ./components/ui
                                </Badge>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>


                  {/* What You Get */}
                  <div className="space-y-4 sm:space-y-6">
                    <h3 className="text-lg sm:text-xl font-bold text-[hsl(var(--foreground))]">
                      What You Get
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <FeatureCard
                        icon={Palette}
                        title="Tailwind Styled"
                        description="Beautiful, modern components with Tailwind CSS"
                      />
                      <FeatureCard
                        icon={Shield}
                        title="Responsive & Accessible"
                        description="Mobile-first design with ARIA compliance"
                      />
                      <FeatureCard
                        icon={Settings}
                        title="Supports Variants"
                        description="Multiple styles and configurations available"
                      />
                      <FeatureCard
                        icon={Zap}
                        title="Easy to Customize"
                        description="Simple to modify and extend for your needs"
                      />
                    </div>
                  </div>

                </CardContent>
              </Card>
            </div>
          </div>

          <div
            className={`transition-all duration-500 ease-in-out transform ${activeGuide === 'awaken'
              ? 'translate-x-0 opacity-100'
              : 'translate-x-full opacity-0 absolute inset-0'
              }`}
          >
            {/* Awaken Installation Guide */}
            <div className="space-y-6 sm:space-y-8">
              <Card className="bg-[hsl(var(--background))] text-[hsl(var(--foreground))] border-none">
                <CardHeader className="pb-6 sm:pb-8">
                  <CardTitle className="text-2xl sm:text-3xl flex items-center gap-3">
                    Awaken Setup Guide
                  </CardTitle>
                  <CardDescription className="text-base sm:text-lg">
                    Complete project setup with templates and configurations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-0">
                    <StepCard
                      step={1}
                      icon={Terminal}
                      title="Run CLI Command"
                      description="Initialize your project with the Awaken CLI. This will set up the basic structure and configuration files needed for your development environment."
                      code="npx create-screenui@latest"
                    />

                    <StepCard
                      step={2}
                      icon={Settings}
                      title="Choose Template or Mode"
                      description="Select from available templates or configure your preferred development mode. Options include React, Next setups with JavaScript and TypeScript support."
                    />

                    <StepCard
                      step={3}
                      icon={Download}
                      title="Install Dependencies"
                      description="Navigate to your project directory and install all required dependencies automatically. This includes all necessary packages and development tools."
                      code={`cd your-project-name
npm install`}
                    />

                    <StepCard
                      step={4}
                      icon={Play}
                      title="Run the Project"
                      description="Start the development server and begin building your application with all the tools and components ready to use."
                      code="npm run dev"
                      isLast={true}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}