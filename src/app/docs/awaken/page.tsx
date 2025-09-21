'use client';

import { Terminal, Download, Settings, Play, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/main/card';
import IntroBanner from '@/components/ui/main/banner';
import DocsSwitchButton from '../component/DocsSwitchButton';
import { StepCard } from '../component/StepCard';

export default function AwakenDocsPage() {
    return (
        <main className="min-h-screen w-full bg-[hsl(var(--background))]">
            <div className="pt-12">
                <IntroBanner
                    title="Awaken Docs"
                    description="Scaffold modern UIs instantly with the Awaken CLI and ready-made ScreenUI templates."
                    customButton={<DocsSwitchButton />}
                />

                {/* Content */}
                <div className="space-y-6 sm:space-y-8 pt-8">
                    <Card className="bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border border-[hsl(var(--border))]">
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
                                    description="Start by running the ScreenUI CLI to create a new project from templates."
                                    code="npx create-screenui@latest"
                                />
                                <StepCard
                                    step={2}
                                    icon={Info}
                                    title="Optional: Skip Prompts with One Liner"
                                    description="To skip template selection, pass the template name directly. The CLI will still ask for tech stack and project name."
                                    code="npx create-screenui@latest layout"
                                />
                                <StepCard
                                    step={3}
                                    icon={Settings}
                                    title="Select Tech Stack"
                                    description="Choose between Next.js (TypeScript) or Vite (React with JavaScript). Use arrow keys to navigate and press Enter to confirm."
                                />
                                <StepCard
                                    step={4}
                                    icon={Settings}
                                    title="Choose Template"
                                    description="Pick a starter template for your layout. For example, select 'layout' when prompted."
                                    code="❯ layout"
                                />
                                <StepCard
                                    step={5}
                                    icon={Settings}
                                    title="Enter Project Name"
                                    description="Type your desired project name (e.g. 'layout') or press Enter to use the default shown in parentheses (e.g. 'layout-nextjs'). This name will be used to create your project folder."
                                    code={`? Project name: (layout-nextjs)\n> layout`}
                                />
                                <StepCard
                                    step={6}
                                    icon={Download}
                                    title="Install Dependencies"
                                    description="When asked, choose 'Yes' to automatically install all required dependencies."
                                    code="? Would you like to install dependencies now? Yes"
                                />
                                <StepCard
                                    step={7}
                                    icon={Play}
                                    title="Start the Project"
                                    description="Navigate to your project folder and run the development server."
                                    code={`cd layout\nnpm run dev`}
                                    isLast
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    );
}
