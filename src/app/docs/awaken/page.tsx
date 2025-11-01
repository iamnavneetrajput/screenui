'use client';

import {
    Terminal,
    Download,
    Play,
    Info,
    ListChecks,
    CheckCircle2,
    Sparkles,
} from 'lucide-react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/main/card';
import IntroBanner from '@/components/ui/main/banner';
import DocsSwitchButton from '../component/DocsSwitchButton';
import TerminalCommand from '@/components/ui/main/TerminalCommand';

interface StepCardProps {
    step: number;
    icon: React.ElementType;
    title: string;
    description: string;
    code?: string;
    isLast?: boolean;
}

const StepCard = ({
    step,
    icon: Icon,
    title,
    description,
    code,
    isLast = false,
}: StepCardProps) => (
    <div className="flex gap-4 sm:gap-6 group relative">
        {/* Step Indicator */}
        <div className="flex flex-col items-center">
            <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[hsl(var(--foreground))] rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-[hsl(var(--background))]" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-[hsl(var(--surface))] rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-xs font-bold text-[hsl(var(--foreground))]">{step}</span>
                </div>
            </div>

            {!isLast && <div className="w-px h-14 sm:h-18 bg-[hsl(var(--border))] mt-4" />}
        </div>

        {/* Step Content */}
        <div className="flex-1 pb-8 sm:pb-12">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[hsl(var(--foreground))]">
                {title}
            </h3>
            <p className="text-[hsl(var(--foreground)/0.7)] mb-4 text-sm sm:text-base leading-relaxed">
                {description}
            </p>

            {code && (
                <div className=" w-full rounded-md">
                    <TerminalCommand command={code} copy={false} />
                </div>
            )}

            {isLast && (
                <div className="mt-5 p-4 sm:p-6 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--surface))]">
                    <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="h-5 w-5 text-[hsl(var(--color-border))]" />
                        <span className="font-semibold text-[hsl(var(--foreground))]">Success!</span>
                    </div>
                    <p className="text-sm sm:text-base text-[hsl(var(--foreground)/0.8)]">
                        Your project is now running at{' '}
                        <code className="bg-[hsl(var(--background))] px-2 py-1 rounded font-mono text-sm border border-[hsl(var(--border))]">
                            http://localhost:3000
                        </code>
                    </p>
                </div>
            )}
        </div>
    </div>
);

export default function AwakenDocsPage() {
    const steps = [
        {
            step: 1,
            icon: ListChecks,
            title: 'List Available Templates',
            description:
                'Before creating a project, view the list of available templates. Currently, only the Next.js layout template is available, but React TypeScript templates will appear here once added.',
            code: 'npx screenui list',
        },
        {
            step: 2,
            icon: Terminal,
            title: 'Run CLI Command',
            description:
                'Use the ScreenUI CLI to create a new project using an available template. For example, use the layout template.',
            code: 'npx screenui create layout',
        },
        {
            step: 3,
            icon: Info,
            title: 'Enter Project Name',
            description:
                'When prompted, you can rename your project or press Enter to use the default name. Example below shows renaming from "layout" to "test".',
            code: `? Project name: › layout\n✔ Project name: … test`,


        },
        {
            step: 4,
            icon: Download,
            title: 'Install Dependencies',
            description:
                'After project creation, you’ll be asked whether to install dependencies automatically. Choose "Yes" to continue.',
            code: '? Would you like to install dependencies now? Yes',
        },
        {
            step: 5,
            icon: CheckCircle2,
            title: 'Verify Successful Setup',
            description:
                'Once installation completes, the CLI confirms success and shows next steps.',
            code: `Dependencies installed successfully\nProject "test" created successfully!\nNext steps:\n  cd test\n  npm run dev`,
        },
        {
            step: 6,
            icon: Play,
            title: 'Start the Project',
            description:
                'Navigate into your project folder and start the local development server.',
            code: `cd test\nnpm run dev`,
            isLast: true,
        },
    ];

    return (
        <main className="min-h-screen w-full bg-[hsl(var(--background))]">
            <div className="pt-12">
                <IntroBanner
                    title="Awaken Docs"
                    description="Scaffold modern UIs instantly with the Awaken CLI and ready-made ScreenUI templates."
                    customButton={<DocsSwitchButton />}
                />

                <div className="space-y-6 sm:space-y-8 pt-8">
                    <Card className="bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border border-[hsl(var(--border))]">
                        <CardHeader className="pb-6 sm:pb-8">
                            <CardTitle className="text-2xl sm:text-3xl flex items-center gap-3">
                                ScreenUI CLI Setup Guide
                            </CardTitle>
                            <CardDescription className="text-base sm:text-lg">
                                Follow these steps to create and run your first ScreenUI layout
                                project.
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-6 sm:space-y-8">
                            {steps.map((step) => (
                                <StepCard
                                    key={step.step}
                                    step={step.step}
                                    icon={step.icon}
                                    title={step.title}
                                    description={step.description}
                                    code={step.code}
                                    isLast={step.isLast}
                                />
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    );
}
