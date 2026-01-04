'use client';
import { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/packages/Card';
import { Button } from '@/packages/Button';
import ThemeToggle from '../components/toggle';
import IntroBanner from '@/components/ui/main/banner';
import DocsSwitchButton from '@/app/docs/components/DocsSwitchButton';
import StepCard from '../data/StepCard';
import { themeData } from '../data/theme-steps';
import { CodeBlock } from '@/app/library/component/enhanced/CodeBlock';
import { useLocalStorageState } from '@/utils/useLocalStorageState';

interface ThemeStep {
  label: string;
  code?: string;
  language?: string;
  filename?: string;
}

interface ThemeSection {
  title: string;
  description?: string;
  steps: ThemeStep[];
}

interface NormalizedThemeData {
  folderStructure: string;
  freshProject: ThemeSection;
  existingProject: ThemeSection;
}

export default function ThemeDocsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [framework, setFramework] =
    useLocalStorageState<'next' | 'vite'>(
      'screenui-theme-framework',
      'next'
    );

  if (!mounted) {
    return null;
  }

  // Normalize data shape for TypeScript safety
  const normalized: NormalizedThemeData =
    framework === 'next'
      ? {
        folderStructure: themeData.folderStructure,
        freshProject: themeData.freshProject,
        existingProject: themeData.existingProject,
      }
      : {
        folderStructure: themeData.viteReact.folderStructure,
        freshProject: themeData.viteReact.freshProject,
        existingProject: themeData.viteReact.existingProject,
      };

  return (
    <main className="min-h-screen custom-container mx-auto pt-12">
      <IntroBanner
        title="Theme"
        description="Add light and dark mode support to your project."
        customButton={<DocsSwitchButton />}
      />

      <div className="w-full max-w-7xl mx-auto space-y-8">

        {/* Page Header */}
        <div className="pt-8 ml-2">
          <h1 className="text-2xl font-extrabold mb-3">Theme Setup</h1>
          <p className="mt-2 opacity-90">
            Step-by-step guide to add light and dark theme support.
          </p>
        </div>

        {/* Framework Switch */}
        <div className="flex gap-2 px-2">
          <Button
            onClick={() => setFramework('next')}
            className={`px-4 py-2 rounded-md border ${framework === 'next'
                ? 'bg-secondary font-semibold'
                : 'opacity-70'
              }`}
          >
            Next.js
          </Button>

          <Button
            onClick={() => setFramework('vite')}
            className={`px-4 py-2 rounded-md border ${framework === 'vite'
                ? 'bg-secondary font-semibold'
                : 'opacity-70'
              }`}
          >
            Vite + React
          </Button>
        </div>

        {/* Folder Structure */}
        <Card>
          <CardHeader className="flex-col">
            <CardTitle>Folder & File Structure</CardTitle>
            <CardDescription>
              These are the only files required for ScreenUI theme support.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={normalized.folderStructure}
              language="bash"
              showLineNumbers={false}
            />
          </CardContent>
        </Card>

        {/* Fresh Project */}
        <Card>
          <CardHeader className="flex-col">
            <CardTitle>{normalized.freshProject.title}</CardTitle>
            {normalized.freshProject.description && (
              <CardDescription>
                {normalized.freshProject.description}
              </CardDescription>
            )}
          </CardHeader>

          <CardContent className="space-y-10">
            {normalized.freshProject.steps.map((step, i) => (
              <StepCard
                key={i}
                index={i + 1}
                label={step.label}
                code={step.code}
                language={step.language}
                filename={step.filename}
                isLast={i === normalized.freshProject.steps.length - 1}
              />
            ))}
          </CardContent>
        </Card>

        {/* Existing Project */}
        <Card>
          <CardHeader className="flex-col">
            <CardTitle>{normalized.existingProject.title}</CardTitle>
          </CardHeader>

          <CardContent className="space-y-10">
            {normalized.existingProject.steps.map((step, i, arr) => (
              <StepCard
                key={i}
                index={i + 1}
                label={step.label}
                code={step.code}
                language={step.language}
                filename={step.filename}
                isLast={i === arr.length - 1}
              />
            ))}
          </CardContent>
        </Card>

        {/* Theme Toggle Preview */}
        <Card className="flex items-center justify-center p-6">
          <ThemeToggle />
        </Card>

      </div>
    </main>
  );
}
