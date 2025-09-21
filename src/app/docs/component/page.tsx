'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/main/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Palette, Shield, Settings, Zap } from 'lucide-react';
import { FeatureCard } from '../component/FeatureCard';
import TerminalCommand from '@/components/ui/main/TerminalCommand';
import IntroBanner from '@/components/ui/main/banner';
import DocsSwitchButton from './DocsSwitchButton';

export default function ComponentDocsPage() {
    return (
        <main className="min-h-screen w-full bg-[hsl(var(--background))]">
            <div className="pt-12">
                <IntroBanner
                    title="Component Docs"
                    description="Build beautiful interfaces faster with our component library and development tools."
                    customButton={<DocsSwitchButton />}
                />

                {/* Content Section */}
                <div className="space-y-6 sm:space-y-8 pt-8">
                    <Card className="bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border border-[hsl(var(--border))]">
                        <CardHeader className="pb-6 sm:pb-8">
                            <CardTitle className="text-2xl sm:text-3xl flex items-center gap-3">
                                Component Installation
                            </CardTitle>
                            <CardDescription className="text-base sm:text-lg">
                                Install individual components with a single command
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-6 sm:space-y-8">
                            {/* Basic Command */}
                            <div className="space-y-4">
                                <h3 className="text-lg sm:text-xl font-bold">Basic Command</h3>
                                <TerminalCommand command="npx screenui add [component-name]" />
                                <div className="p-4 sm:p-6 rounded-lg border bg-[hsl(var(--muted)/0.3)] border-[hsl(var(--border))]">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 rounded-md bg-[hsl(var(--primary)/0.1)]">
                                            <Sparkles className="h-5 w-5 text-[hsl(var(--primary))]" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-[hsl(var(--foreground))] mb-1">Pro Tip</p>
                                            <p className="text-[hsl(var(--muted-foreground))] text-sm sm:text-base">
                                                Replace{' '}
                                                <code className="text-[hsl(var(--button))] px-2 py-1 rounded font-mono text-sm">
                                                    [component-name]
                                                </code>{' '}
                                                with the actual component you want to install
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Example Commands */}
                            <div className="space-y-4 sm:space-y-6">
                                <h3 className="text-lg sm:text-xl font-bold">Example Commands</h3>
                                <div className="grid gap-4 sm:gap-6">
                                    <div className="space-y-2">
                                        <p className="text-sm sm:text-base font-medium">Install a button component:</p>
                                        <TerminalCommand command="npx screenui add button" />
                                    </div>

                                    <div className="space-y-2">
                                        <p className="text-sm sm:text-base font-medium">Install with JavaScript variant:</p>
                                        <TerminalCommand command="npx screenui add card --lang js" />
                                    </div>

                                    <div className="space-y-2">
                                        <p className="text-sm sm:text-base font-medium">Install to custom path:</p>
                                        <TerminalCommand command="npx screenui add accordion --path src/components/ui" />
                                    </div>
                                </div>
                            </div>

                            {/* Options Table */}
                            <div className="space-y-4 sm:space-y-6">
                                <h3 className="text-lg sm:text-xl font-bold text-[hsl(var(--foreground))]">
                                    Available Options
                                </h3>

                                <div className="overflow-hidden rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))]">
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="bg-[hsl(var(--muted)/0.5)] border-b border-[hsl(var(--border))]">
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

                                            <tbody className="bg-[hsl(var(--card))]">
                                                <tr className="border-b border-[hsl(var(--border)/0.5)] hover:bg-[hsl(var(--muted)/0.3)] transition-colors duration-200">
                                                    <td className="py-4 px-4 sm:px-6">
                                                        <code className="text-[hsl(var(--foreground))] bg-[hsl(var(--muted))] px-3 py-2 rounded-md text-sm font-mono">
                                                            --lang
                                                        </code>
                                                    </td>
                                                    <td className="py-4 px-4 sm:px-6 text-[hsl(var(--muted-foreground))] text-sm sm:text-base">
                                                        Language variant (js or ts)
                                                    </td>
                                                    <td className="py-4 px-4 sm:px-6">
                                                        <Badge className="bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))]">
                                                            ts
                                                        </Badge>
                                                    </td>
                                                </tr>

                                                <tr className="hover:bg-[hsl(var(--muted)/0.3)] transition-colors duration-200">
                                                    <td className="py-4 px-4 sm:px-6">
                                                        <code className="text-[hsl(var(--foreground))] bg-[hsl(var(--muted))] px-3 py-2 rounded-md text-sm font-mono">
                                                            --path
                                                        </code>
                                                    </td>
                                                    <td className="py-4 px-4 sm:px-6 text-[hsl(var(--muted-foreground))] text-sm sm:text-base">
                                                        Installation destination path
                                                    </td>
                                                    <td className="py-4 px-4 sm:px-6">
                                                        <Badge className="bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))]">
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
        </main>
    );
}
