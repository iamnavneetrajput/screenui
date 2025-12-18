'use client';

import {
    Terminal,
    Download,
    Play,
    Info,
    ListChecks,
    CheckCircle2,
    Sparkles,
} from "lucide-react";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/packages/Card";

import IntroBanner from "@/components/ui/main/banner";
import DocsSwitchButton from "../components/DocsSwitchButton";
import TerminalCommand from "@/components/ui/main/TerminalCommand";

interface StepCardProps {
    step: number;
    icon: React.ElementType;
    title: string;
    description: string;
    code?: string;
    isLast?: boolean;
}

const StepCard = ({ step, icon: Icon, title, description, code, isLast = false }: StepCardProps) => (
    <div className="flex gap-4 sm:gap-6 group relative">

        {/* Step Indicator */}
        <div className="flex flex-col items-center">
            <div className="relative">
                <div className="
                    w-10 h-10 sm:w-12 sm:h-12
                    bg-[hsl(var(--foreground))]
                    rounded-full flex items-center justify-center
                ">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-[hsl(var(--background))]" />
                </div>

                <div className="
                    absolute -top-1 -right-1 w-6 h-6
                    bg-[hsl(var(--surface))]
                    rounded-full flex items-center justify-center
                    border border-[hsl(var(--border))]
                ">
                    <span className="text-xs font-bold text-[hsl(var(--foreground))]">
                        {step}
                    </span>
                </div>
            </div>

            {!isLast && (
                <div className="w-px h-14 sm:h-20 bg-[hsl(var(--border))] mt-4" />
            )}
        </div>

        {/* Content */}
        <div className="flex-1 pb-8 sm:pb-12">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[hsl(var(--foreground))]">
                {title}
            </h3>

            <p className="text-[hsl(var(--foreground)/0.7)] mb-4 text-sm sm:text-base leading-relaxed">
                {description}
            </p>

            {code && (
                <TerminalCommand command={code} copy={false} />
            )}

            {isLast && (
                <div className="
                    mt-5 p-4 sm:p-6 
                    rounded-lg 
                    border border-[hsl(var(--border))]
                    bg-[hsl(var(--surface))]
                ">
                    <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="h-5 w-5 text-[hsl(var(--foreground))]" />
                        <span className="font-semibold">Success!</span>
                    </div>
                    <p className="text-sm sm:text-base text-[hsl(var(--foreground)/0.9)]">
                        Your project is now running at{" "}
                        <code className="
                            bg-[hsl(var(--background))] 
                            px-2 py-1 rounded 
                            font-mono text-sm 
                            border border-[hsl(var(--border))]
                        ">
                            http://localhost:3000
                        </code>
                    </p>
                </div>
            )}
        </div>

    </div>
);

export default function TemplateDocsPage() {
    const steps = [
        {
            step: 1,
            icon: ListChecks,
            title: "List Available Templates",
            description: "Before creating a project, list all available templates.",
            code: "npx screenui-cli@latest list",
        },
        {
            step: 2,
            icon: Terminal,
            title: "Run CLI Command",
            description: "Use the CLI to create a new project.",
            code: "npx screenui-cli@latest create layout",
        },
        {
            step: 3,
            icon: Info,
            title: "Enter Project Name",
            description: "Rename your project or press Enter to use the default.",
            code: `? Project name: › layout\n✔ Project name: … my-app`,
        },
        {
            step: 4,
            icon: Download,
            title: "Install Dependencies",
            description: "Choose Yes when prompted.",
            code: "? Install dependencies now? › Yes",
        },
        {
            step: 5,
            icon: CheckCircle2,
            title: "Verify Successful Setup",
            description: "CLI confirms installation and next steps.",
            code: `Dependencies installed successfully\nNext:\n  cd my-app\n  npm run dev`,
        },
        {
            step: 6,
            icon: Play,
            title: "Start Dev Server",
            description: "Start the project.",
            code: `cd my-app\nnpm run dev`,
            isLast: true,
        },
    ];

    const options = [
        {
            flag: "--template <framework>",
            desc: "Specify the base framework (e.g., nextjs, react-vite)",
            badge: "optional",
            example: "npx screenui-cli@latest create layout --template nextjs",
        },
        {
            flag: "--lang <lang>",
            desc: "Choose ts (TypeScript) or js (JavaScript)",
            badge: "default: ts",
            example: "npx screenui-cli@latest create dashboard --lang js",
        },
        {
            flag: "--no-install",
            desc: "Skip automatic dependency installation",
            badge: "default: false",
            example: "npx screenui-cli@latest create blog --no-install",
        },
    ];

    const tips = [
        "Always use npx screenui-cli@latest to get the newest version.",
        "Run screenui-cli@latest list to explore templates.",
        "Template names are case-insensitive (layout, Layout, LAYOUT).",
        "If a template exists in multiple frameworks, CLI will prompt you.",
    ];

    return (
        <main className="min-h-screen custom-container mx-auto pt-12">

            <IntroBanner
                title="Template Docs"
                description="Commands and options for creating and managing templates."
                customButton={<DocsSwitchButton />}
            />

            <div className="w-full max-w-7xl mx-auto space-y-8">
                <div className="pt-8 ml-2">
                    <h1 className="text-2xl font-extrabold mb-3">
                        Template CLI
                    </h1>
                    <p className="mt-2 opacity-90">
                        Commands and options for creating and managing ScreenUI template projects.
                    </p>
                </div>

                {/* Steps Card */}
                <Card className="bg-[hsl(var(--surface))]">
                    <CardHeader className="pb-6 sm:pb-8 flex-col items-start">
                        <CardTitle className="text-2xl sm:text-3xl">
                            Setup Guide
                        </CardTitle>
                        <CardDescription className="text-base sm:text-lg">
                            Follow these steps to create and run a ScreenUI template project.
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-8">
                        {steps.map(step => (
                            <StepCard key={step.step} {...step} />
                        ))}
                    </CardContent>
                </Card>

                {/* Additional Options */}
                <Card className="bg-[hsl(var(--surface))]">
                    <CardHeader className="flex flex-col">
                        <CardTitle className="text-xl">Additional Options</CardTitle>
                        <CardDescription>
                            Customize your template creation.
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        {options.map((opt, i) => (
                            <div key={i} className="border border-[hsl(var(--border))] rounded-lg p-4">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <code className="text-sm font-mono text-[hsl(var(--primary))]">
                                            {opt.flag}
                                        </code>
                                        <p className="text-sm text-[hsl(var(--foreground)/0.7)] mt-1">
                                            {opt.desc}
                                        </p>
                                    </div>
                                    <span className="text-xs px-2 py-1 rounded-full bg-[hsl(var(--background))]/50 border border-[hsl(var(--border))]">
                                        {opt.badge}
                                    </span>
                                </div>

                                <div className="mt-3">
                                    <TerminalCommand command={opt.example} copy={false} />
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Tips */}
                <Card className="bg-[hsl(var(--surface))]">
                    <CardHeader>
                        <CardTitle className="text-xl flex items-center gap-2">
                            <Info className="w-5 h-5" />
                            Tips
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-3">
                        {tips.map((tip, i) => (
                            <div key={i} className="flex gap-2 text-sm text-[hsl(var(--foreground)/0.9)]">
                                <span>💡</span>
                                <p>{tip}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>

            </div>
        </main>
    );
}
