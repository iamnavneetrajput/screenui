'use client';
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Star, Package, Code2, FileText } from 'lucide-react';
import { EnhancedTabs } from './Tabs';
import { InstallationGuide } from './InstallationGuide';
import { CodeBlock } from './CodeBlock';
import { SEOContent } from './SEOContent';
import ChatGPTButton from './ChatGPTButton';
import { cn } from '@/lib/utils';
import { ComponentDocData, InstallationStep } from '@/types/component-docs';

interface EnhancedComponentDemoProps {
  // Basic props (compatible with your existing ComponentDemo)
  title: string;
  description: string;
  component: string;
  npmCommandTs?: string;
  npmCommandJs?: string;
  dependencyCommand?: string;
  tsCode: string;
  jsCode: string;
  children: React.ReactNode;

  // Metadata
  category?: string;
  version?: string;
  lastUpdated?: string;
  dependencies?: string[];
  tags?: string[];

  // Display options
  className?: string;
  showTabs?: boolean;
  showInstallation?: boolean;
  showTypescript?: boolean;
  showJavascript?: boolean;

  // Preview customization
  previewBackground?: 'default' | 'gray' | 'dark' | 'gradient';
  previewPadding?: 'sm' | 'md' | 'lg';
  centerPreview?: boolean;

  // Tab customization
  tabVariant?: 'default' | 'pills' | 'underline' | 'bordered';
  tabSize?: 'sm' | 'md' | 'lg';

  // Additional content
  additionalTabs?: Array<{
    label: string;
    content: React.ReactNode;
    icon?: React.ComponentType<{ className?: string }>;
  }>;
}

export function EnhancedComponentDemo({
  // Basic props
  title,
  description,
  component,
  npmCommandTs,
  npmCommandJs,
  dependencyCommand,
  tsCode,
  jsCode,
  children,

  // Metadata
  category,
  version,
  lastUpdated,
  dependencies = [],
  tags = [],

  // Display options
  className,
  showTabs = true,
  showInstallation = true,
  showTypescript = true,
  showJavascript = true,

  // Preview customization
  previewBackground = 'default',
  previewPadding = 'lg',
  centerPreview = true,

  // Tab customization
  tabVariant = 'default',
  tabSize = 'md',

  // Additional content
  additionalTabs = [],
}: EnhancedComponentDemoProps) {

  // Generate structured data for AI/SEO
  const docData: ComponentDocData = useMemo(() => {
    const installation: InstallationStep[] = [];

    // Add dependency installation step
    if (dependencyCommand) {
      installation.push({
        title: 'Install Dependencies',
        description: 'Install the required dependencies for this component',
        command: dependencyCommand,
        type: 'dependency'
      });
    }

    // Add CLI installation step
    if (npmCommandTs || npmCommandJs) {
      installation.push({
        title: 'Install Component',
        description: 'Install the component using our CLI tool',
        tsCommand: npmCommandTs,
        jsCommand: npmCommandJs,
        type: 'cli'
      });
    }

    // Add usage step
    installation.push({
      title: 'Usage Example',
      description: 'Copy and use the component in your project',
      type: 'usage'
    });

    return {
      component,
      title,
      description,
      category,
      version,
      lastUpdated,
      dependencies,
      tags,
      installation,
      examples: {
        typescript: [{
          filename: `${component}.tsx`,
          language: 'tsx' as const,
          code: tsCode,
          showLineNumbers: true
        }],
        javascript: [{
          filename: `${component}.jsx`,
          language: 'jsx' as const,
          code: jsCode,
          showLineNumbers: true
        }]
      },
      preview: {
        background: previewBackground,
        center: centerPreview,
        padding: previewPadding
      }
    };
  }, [
    component, title, description, category, version, lastUpdated,
    dependencies, tags, dependencyCommand, npmCommandTs, npmCommandJs,
    tsCode, jsCode, previewBackground, centerPreview, previewPadding
  ]);

  // PreviewContent component definition
  function PreviewContent({
    background,
    padding,
    center,
    children,
  }: {
    background: 'default' | 'gray' | 'dark' | 'gradient';
    padding: 'sm' | 'md' | 'lg';
    center: boolean;
    children: React.ReactNode;
  }) {
    const backgroundStyles = {
      default: 'bg-[hsl(var(--surface))]',
      gray: 'bg-gray-50',
      dark: 'bg-gray-900',
      gradient: 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    };
    const paddingStyles = {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8'
    };
    return (
      <div
        className={cn(
          backgroundStyles[background],
          paddingStyles[padding],
          center ? 'flex justify-center items-center' : ''
        )}
      >
        {children}
      </div>
    );
  }

  // Build tabs dynamically
  const tabs = useMemo(() => {
    const tabList = [];

    // Preview tab (always first)
    tabList.push({
      label: 'Preview',
      content: (
      <motion.div
        className="flex items-center justify-center p-8 bg-[hsl(var(--surface))] rounded-lg min-h-[300px]"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <motion.div
          className="transition-all duration-300 w-full flex items-center justify-center"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          {children}
        </motion.div>
      </motion.div>
      ),
      icon: Star
    });

    // Installation tab
    if (showInstallation) {
      tabList.push({
        label: 'Installation',
        content: (
          <InstallationGuide
            component={component}
            dependencyCommand={dependencyCommand}
            npmCommandTs={npmCommandTs}
            npmCommandJs={npmCommandJs}
            tsCode={tsCode}
            jsCode={jsCode}
          />
        ),
        icon: Package
      });
    }

    // TypeScript tab
    if (showTypescript) {
      tabList.push({
        label: 'TypeScript',
        content: (
          <CodeBlock
            code={tsCode}
            language="tsx"
            filename={`${component}.tsx`}
            showLineNumbers={true}
          />
        ),
        badge: 'TS',
        icon: Code2
      });
    }

    // JavaScript tab
    if (showJavascript) {
      tabList.push({
        label: 'JavaScript',
        content: (
          <CodeBlock
            code={jsCode}
            language="jsx"
            filename={`${component}.jsx`}
            showLineNumbers={true}
          />
        ),
        badge: 'JS',
        icon: FileText
      });
    }

    // Additional custom tabs
    tabList.push(...additionalTabs);

    return tabList;
  }, [
    children, showInstallation, showTypescript, showJavascript,
    component, dependencyCommand, npmCommandTs, npmCommandJs,
    tsCode, jsCode, additionalTabs, previewBackground, previewPadding, centerPreview
  ]);

  // Preview backgrounds
  const backgroundStyles = {
    default: 'bg-[hsl(var(--surface))]',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900',
    gradient: 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
  };

  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  // PreviewOnlyLayout component definition
  function PreviewOnlyLayout({
    title,
    description,
    component,
    category,
    version,
    lastUpdated,
    className,
    background,
    padding,
    center,
    children,
  }: {
    title: string;
    description: string;
    component: string;
    category?: string;
    version?: string;
    lastUpdated?: string;
    className?: string;
    background: 'default' | 'gray' | 'dark' | 'gradient';
    padding: 'sm' | 'md' | 'lg';
    center: boolean;
    children: React.ReactNode;
  }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          'border border-[hsl(var(--border))] rounded-xl',
          className
        )}
      >
        {/* Header */}
        <div className="p-4 sm:p-6">
          <div className="flex max-[375px]:flex-col sm:flex-row items-start justify-between gap-4">
            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <h2 className="text-xl sm:text-2xl font-bold text-[hsl(var(--foreground))]">{title}</h2>
                {category && (
                  <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    {category}
                  </span>
                )}
                {version && (
                  <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    v{version}
                  </span>
                )}
              </div>
              <p className="text-[hsl(var(--foreground))] text-sm sm:text-base">{description}</p>
              {lastUpdated && (
                <p className="text-xs text-[hsl(var(--foreground))]">
                  Last updated: {lastUpdated}
                </p>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <ChatGPTButton />
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="p-4 sm:p-6">
          <PreviewContent
            background={background}
            padding={padding}
            center={center}
          >
            {children}
          </PreviewContent>
        </div>
      </motion.div>
    );
  }

  // If tabs are disabled, show preview only
  if (!showTabs) {
    return (
      <>
        <SEOContent docData={docData} />
        <PreviewOnlyLayout
          title={title}
          description={description}
          component={component}
          category={category}
          version={version}
          lastUpdated={lastUpdated}
          className={className}
          background={previewBackground}
          padding={previewPadding}
          center={centerPreview}
        >
          {children}
        </PreviewOnlyLayout>
      </>
    );
  }

  return (
    <>
      <SEOContent docData={docData} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          'border border-[hsl(var(--border))] rounded-xl',
          className
        )}
      >
        {/* Header */}
        <div className="p-4 sm:p-6">
          <div className="flex max-[375px]:flex-col sm:flex-row items-start justify-between gap-4">
            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <h2 className="text-xl sm:text-2xl font-bold text-[hsl(var(--foreground))]">{title}</h2>
                {category && (
                  <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    {category}
                  </span>
                )}
                {version && (
                  <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    v{version}
                  </span>
                )}
              </div>
              <p className="text-[hsl(var(--foreground))] text-sm sm:text-base">{description}</p>
              {lastUpdated && (
                <p className="text-xs text-[hsl(var(--foreground))]">
                  Last updated: {lastUpdated}
                </p>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <ChatGPTButton />
            </div>
          </div>
        </div>

        {/* Enhanced Tabs - All content stays in DOM for AI/SEO */}
        <div className="p-4 sm:p-6">
          <EnhancedTabs
            tabs={tabs}
            defaultTab={0}
            variant={tabVariant}
            size={tabSize}
            animated={true}
          />
        </div>

        {/* Footer */}
        <div className="px-4 sm:px-6 py-4 border-t border-[hsl(var(--border))]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs sm:text-sm text-[hsl(var(--foreground))]">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              <span>{component} Examples</span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}