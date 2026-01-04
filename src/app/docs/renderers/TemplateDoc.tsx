'use client';

import React from "react";
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
import DocsSwitchButton from "@/app/docs/components/DocsSwitchButton";
import TerminalCommand from "@/components/ui/main/TerminalCommand";

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
  <div className="flex gap-4 sm:gap-6 relative">
    {/* Step Indicator */}
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-background rounded-full flex items-center justify-center border border-border">
          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>

        <div className="absolute -top-1 -right-1 w-6 h-6 bg-secondary rounded-full flex items-center justify-center border border-border">
          <span className="text-xs font-bold">{step}</span>
        </div>
      </div>

      {!isLast && <div className="w-px h-14 sm:h-20 bg-border mt-4" />}
    </div>

    {/* Content */}
    <div className="flex-1 pb-8 sm:pb-12">
      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
        {title}
      </h3>

      <p className="mb-4 text-sm sm:text-base leading-relaxed">
        {description}
      </p>

      {code && <TerminalCommand command={code} copy={false} />}

      {isLast && (
        <div className="mt-5 p-4 sm:p-6 rounded-lg border border-border bg-secondary">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold">Success</span>
          </div>
          <p className="text-sm sm:text-base">
            Your project is now running at{" "}
            <code className="bg-background px-2 py-1 rounded font-mono text-sm border border-border">
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
      description: "View all available templates before creating a project.",
      code: "npx screenui-cli@latest list",
    },
    {
      step: 2,
      icon: Terminal,
      title: "Create Project",
      description: "Run the CLI command to scaffold a new project.",
      code: "npx screenui-cli@latest create layout",
    },
    {
      step: 3,
      icon: Info,
      title: "Confirm Project Name",
      description: "Accept the default or enter a custom name.",
      code: `? Project name: › layout\n✔ Project name: … my-app`,
    },
    {
      step: 4,
      icon: Download,
      title: "Install Dependencies",
      description: "Allow the CLI to install dependencies.",
      code: "? Install dependencies now? › Yes",
    },
    {
      step: 5,
      icon: CheckCircle2,
      title: "Verify Setup",
      description: "Ensure installation completed successfully.",
      code: `Dependencies installed successfully\nNext:\n  cd my-app\n  npm run dev`,
    },
    {
      step: 6,
      icon: Play,
      title: "Start Dev Server",
      description: "Run the project locally.",
      code: `cd my-app\nnpm run dev`,
      isLast: true,
    },
  ];

  return (
    <main className="min-h-screen custom-container mx-auto pt-12">
      <IntroBanner
        title="Template Docs"
        description="Create and run a ScreenUI template project in minutes."
        customButton={<DocsSwitchButton />}
      />

      <div className="w-full max-w-7xl mx-auto space-y-8">
        <div className="pt-8 ml-2">
          <h1 className="text-2xl font-extrabold mb-3">Template CLI</h1>
          <p className="mt-2 opacity-90">
            Step-by-step guide to scaffold and run a ScreenUI template project.
          </p>
        </div>

        <Card className="bg-secondary">
          <CardHeader className="pb-6 sm:pb-8 flex-col items-start">
            <CardTitle className="text-2xl sm:text-3xl">
              Setup Guide
            </CardTitle>
            <CardDescription className="text-base sm:text-lg">
              Follow these steps to get your project running locally.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-10">
            {steps.map(step => (
              <StepCard key={step.step} {...step} />
            ))}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
