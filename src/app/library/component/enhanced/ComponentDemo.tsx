'use client';
import React, { useMemo, memo, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Star, Package, Code2, FileText, Boxes, Box } from 'lucide-react';
import { EnhancedTabs } from './Tabs';
import { useLocalStorageState } from "@/utils/useLocalStorageState";
import { InstallationGuide } from './InstallationGuide';
import { CodeBlock } from './CodeBlock';
import { SEOContent } from './SEOContent';
import ChatGPTButton from './ChatGPTButton';
import { cn } from '@/lib/utils';
import { Badge } from '@/packages/Badge';
import { ComponentDocData, InstallationStep } from '@/types/component-docs';

interface EnhancedComponentDemoProps {
  // Basic props
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
  showDependencies?: boolean; // NEW: Control dependency display

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

const BACKGROUND_STYLES = {
  default: 'bg-secondary',
  gray: 'bg-gray-50 dark:bg-gray-900',
  dark: 'bg-gray-900',
  gradient: 'bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950'
} as const;

const PADDING_STYLES = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8'
} as const;

const ANIMATION_VARIANTS = {
  container: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] }
  },
  preview: {
    whileHover: { scale: 1.01 },
    transition: { type: 'spring', stiffness: 400, damping: 25 }
  }
};

const DependencyBadge = memo(({ name }: { name: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.1 }}
  >
    <Badge
      size="sm"
      variant='soft'
      color='info'
      className="flex items-center gap-1.5 cursor-default"
      icon={<Box className="w-3 h-3" />}
    >
      {name}
    </Badge>
  </motion.div>
));

DependencyBadge.displayName = 'DependencyBadge';


const DependenciesSection = memo(({ dependencies }: { dependencies: string[] }) => {
  if (!dependencies || dependencies.length === 0) return null;
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      transition={{ duration: 0.3 }}
      className="pt-3 mt-3 border-t border-border/50"
    >
      <div className="flex flex-col lg:gap-2">
        <button
          type="button"
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          className="
    flex items-center gap-2 w-full text-left
    text-xs font-semibold uppercase tracking-wider
    text-foreground/70
    sm:pointer-events-none
  "
        >
          <Boxes className="w-3.5 h-3.5" />
          <span>Dependencies ({dependencies.length})</span>

          {/* Chevron only on mobile */}
          <ChevronDown
            className={cn(
              'ml-auto w-3.5 h-3.5 transition-transform sm:hidden',
              open && 'rotate-180'
            )}
          />
        </button>

        <motion.div
          initial={false}
          animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden sm:!h-auto sm:!opacity-100"
        >
          <div className="flex flex-wrap gap-2 pt-2">
            {dependencies.map((dep) => (
              <DependencyBadge key={dep} name={dep} />
            ))}
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
});
DependenciesSection.displayName = 'DependenciesSection';

const PreviewContent = memo(({
  background,
  padding,
  center,
  children,
}: {
  background: 'default' | 'gray' | 'dark' | 'gradient';
  padding: 'sm' | 'md' | 'lg';
  center: boolean;
  children: React.ReactNode;
}) => (
  <div
    className={cn(
      'rounded-lg transition-colors duration-200',
      BACKGROUND_STYLES[background],
      PADDING_STYLES[padding],
      center && 'flex justify-center items-center',
      'min-h-[200px]'
    )}
  >
    {children}
  </div>
));
PreviewContent.displayName = 'PreviewContent';

const ComponentHeader = memo(({
  title,
  description,
  category,
  version,
  lastUpdated,
  dependencies,
  showDependencies,
}: {
  title: string;
  description: string;
  category?: string;
  version?: string;
  lastUpdated?: string;
  dependencies?: string[];
  showDependencies: boolean;
}) => (
  <div className="space-y-3">
    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
      <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
        {title}
      </h2>
      {category && (
        <Badge variant='soft' color='success'>
          {category}
        </Badge>
      )}
      {version && (
        <Badge variant='soft' color='success'>
          v{version}
        </Badge>
      )}
    </div>
    <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">
      {description}
    </p>
    {lastUpdated && (
      <p className="text-xs text-foreground/60 flex items-center gap-1.5">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-foreground/40"></span>
        Last updated: {lastUpdated}
      </p>
    )}
    {showDependencies && dependencies && dependencies.length > 0 && (
      <DependenciesSection dependencies={dependencies} />
    )}
  </div>
));
ComponentHeader.displayName = 'ComponentHeader';

const ComponentFooter = memo(({ component }: { component: string }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs sm:text-sm text-foreground/70">
    <div className="flex flex-wrap items-center gap-2 sm:gap-4">
      <span className="font-medium">{component} Examples</span>
    </div>
  </div>
));
ComponentFooter.displayName = 'ComponentFooter';

// MAIN COMPONENT
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
  showDependencies = true, // Default to showing dependencies

  // Preview customization
  previewBackground = 'default',
  previewPadding = 'lg',
  centerPreview = true,

  // Tab customization
  tabSize = 'md',

  // Additional content
  additionalTabs = [],
}: EnhancedComponentDemoProps) {

  const [tab, setTab] = useLocalStorageState(
    "screenui:component-docs:tab",
    0
  );

  // Generate structured data for AI/SEO
  const docData: ComponentDocData = useMemo(() => {
    const installation: InstallationStep[] = [];

    if (dependencyCommand) {
      installation.push({
        title: 'Install Dependencies',
        description: 'Install the required dependencies for this component',
        command: dependencyCommand,
        type: 'dependency'
      });
    }

    if (npmCommandTs || npmCommandJs) {
      installation.push({
        title: 'Install Component',
        description: 'Install the component using our CLI tool',
        tsCommand: npmCommandTs,
        jsCommand: npmCommandJs,
        type: 'cli'
      });
    }

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

  // Build tabs dynamically
  const tabs = useMemo(() => {
    const tabList = [];

    // Preview tab (always first)
    tabList.push({
      label: 'Preview',
      content: (
        <motion.div
          className="relative overflow-hidden rounded-lg"
          {...ANIMATION_VARIANTS.preview}
        >
          <PreviewContent
            background={previewBackground}
            padding={previewPadding}
            center={centerPreview}
          >
            {children}
          </PreviewContent>
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
    tsCode, jsCode, additionalTabs, previewBackground,
    previewPadding, centerPreview
  ]);

  if (!showTabs) {
    return (
      <>
        <SEOContent docData={docData} />
        <motion.div
          {...ANIMATION_VARIANTS.container}
          className={cn(
            'border border-border rounded-xl overflow-hidden backdrop-blur-sm',
            'shadow-sm hover:shadow-md transition-shadow duration-300',
            className
          )}
        >
          {/* Header */}
          <div className="p-4 sm:p-6 bg-background/50">
            <div className="flex max-[375px]:flex-col sm:flex-row items-start justify-between gap-4">
              <ComponentHeader
                title={title}
                description={description}
                category={category}
                version={version}
                lastUpdated={lastUpdated}
                dependencies={dependencies}
                showDependencies={showDependencies}
              />
              <div className="flex items-center space-x-2 shrink-0">
                <ChatGPTButton />
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="p-4 sm:p-6">
            <motion.div {...ANIMATION_VARIANTS.preview}>
              <PreviewContent
                background={previewBackground}
                padding={previewPadding}
                center={centerPreview}
              >
                {children}
              </PreviewContent>
            </motion.div>
          </div>
        </motion.div>
      </>
    );
  }

  return (
    <>
      <SEOContent docData={docData} />
      <motion.div
        {...ANIMATION_VARIANTS.container}
        className={cn(
          'border border-border rounded-xl overflow-hidden backdrop-blur-sm',
          'shadow-sm hover:shadow-md transition-shadow duration-300',
          className
        )}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 bg-background/50 border-b border-border/50">
          <div className="flex max-[375px]:flex-col sm:flex-row items-start justify-between gap-4">
            <ComponentHeader
              title={title}
              description={description}
              category={category}
              version={version}
              lastUpdated={lastUpdated}
              showDependencies={showDependencies}
            />
            <div className="flex items-center space-x-2 shrink-0">
              <ChatGPTButton />
            </div>
          </div>

          {showDependencies && dependencies?.length > 0 && (
            <DependenciesSection dependencies={dependencies} />
          )}
        </div>

        {/* Tabs */}
        <div className="p-4 sm:p-6">
          <EnhancedTabs
            tabs={tabs}
            value={tab}
            onValueChange={setTab}
            size={tabSize}
            animated
          />
        </div>

        {/* Footer */}
        <div className="px-4 sm:px-6 py-4 border-t border-border/50 bg-background/30">
          <ComponentFooter component={component} />
        </div>
      </motion.div>
    </>
  );
}