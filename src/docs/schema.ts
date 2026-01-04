// docs/schema.ts

import { JSX } from "react";

/**
 * Prop definition for component APIs
 */
export interface PropDefinition {
  name: string;
  type: string;
  default?: string;
  required: boolean;
  description: string;
}

/**
 * Group of props for a specific component or sub-component
 */
export interface PropGroup {
  component: string;
  description: string;
  props: PropDefinition[];
}

/**
 * Feature description
 */
export interface Feature {
  title: string;
  description: string;
}

/**
 * Code example in a specific language
 */
export interface CodeExample {
  language: 'typescript' | 'javascript';
  code: string;
}

/**
 * Complete example with demos and code
 */
export interface Example {
  id: string;
  title: string;
  description: string;
  code: CodeExample[];
}

/**
 * Metadata for component documentation
 */
export interface Metadata {
  version: string;
  category: string;
  tags: string[];
  lastUpdated?: string;
  author?: string;
  status?: 'stable' | 'beta' | 'experimental' | 'deprecated';
}

/**
 * Accessibility information
 */
export interface AccessibilityInfo {
  ariaLabels?: string[];
  keyboardShortcuts?: Array<{
    key: string;
    action: string;
  }>;
  wcagLevel?: 'A' | 'AA' | 'AAA';
  notes?: string[];
}

/**
 * Usage guidelines (do's and don'ts)
 */
export interface UsageGuideline {
  do: string[];
  dont: string[];
}

/**
 * Complete component documentation schema
 * This is the single source of truth for all component documentation
 */
export interface ComponentDoc {
  // Basic Info
  id: string;
  name: string;
  description: string;
  
  // Installation
  cli: string[];
  dependencies: string[];
  dependencyCommand: string[];
  devDependencies?: string[];
  
  // API Documentation
  propGroups: PropGroup[];
  
  // Features
  features: Feature[];
  
  // Examples
  examples: Example[];
  
  // Metadata
  version: string;
  category: string;
  tags: string[];
  lastUpdated?: string;
  author?: string;
  status?: 'stable' | 'beta' | 'experimental' | 'deprecated';
  
  // Optional sections
  accessibility?: AccessibilityInfo;
  usage?: UsageGuideline;
  relatedComponents?: string[];
  customizationGuide?: {
    title: string;
    description: string;
    codeExample: string;
  };
}

//Type for a collection of component documentation
export type ComponentDocRegistry = Record<string, ComponentDoc>;

//Type guard to check if an object is a valid ComponentDoc
export function isComponentDoc(obj: any): obj is ComponentDoc {
  return (
    typeof obj === 'object' &&
    typeof obj.id === 'string' &&
    typeof obj.name === 'string' &&
    typeof obj.description === 'string' &&
    Array.isArray(obj.cli) &&
    Array.isArray(obj.dependencyCommand)&&
    Array.isArray(obj.dependencies) &&
    Array.isArray(obj.propGroups) &&
    Array.isArray(obj.features) &&
    Array.isArray(obj.examples) &&
    typeof obj.version === 'string' &&
    typeof obj.category === 'string' &&
    Array.isArray(obj.tags)
  );
}

//Helper type for component module exports
export interface ComponentModule {
  doc: ComponentDoc;
  demos: Record<string, () => JSX.Element>;
  config: ComponentConfig;
}

 // UI-specific configuration (not part of doc data)
export interface ComponentConfig {
  showInstallation?: boolean;
  centerPreview?: boolean;
  previewBackground?: 'default' | 'grid' | 'dots' | 'transparent';
  previewPadding?: 'none' | 'sm' | 'md' | 'lg';
  installCommands?: string[];
  demoMap?: Record<string, number>;
}