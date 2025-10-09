export interface CodeExample {
  filename: string;
  language: 'tsx' | 'jsx' | 'bash' | 'json' | 'typescript' | 'javascript';
  code: string;
  showLineNumbers?: boolean;
  highlightLines?: number[];
  testId?: string;
}

export interface InstallationStep {
  title: string;
  description: string;
  command?: string;
  tsCommand?: string;
  jsCommand?: string;
  type: 'dependency' | 'cli' | 'manual' | 'usage';
  optional?: boolean;
  testId?: string;
}

export interface ComponentDocData {
  component: string;
  title: string;
  description: string;
  category?: string;
  version?: string;
  lastUpdated?: string;
  dependencies?: string[];
  tags?: string[];
  installation: InstallationStep[];
  examples: {
    typescript: CodeExample[];
    javascript: CodeExample[];
  };
  preview?: {
    background?: 'default' | 'gray' | 'dark' | 'gradient';
    center?: boolean;
    padding?: 'sm' | 'md' | 'lg';
  };
  // Testing support
  testId?: string;
  // Bundle optimization
  lazyLoad?: boolean;
  // Analytics
  trackingId?: string;
}

// Error handling types
export interface ComponentError {
  message: string;
  code: string;
  component: string;
  timestamp: Date;
}

export type ErrorSeverity = 'low' | 'medium' | 'high' | 'critical';
