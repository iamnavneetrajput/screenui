// written by screenui team and enhanced by ai for seo and ai crawlers
'use client';
import React, { memo } from 'react';
import { ComponentDocData } from '@/types/component-docs';

interface SEOContentProps {
  docData: ComponentDocData;
  testId?: string;
}

export const SEOContent = memo<SEOContentProps>(function SEOContent({ docData, testId }) {
  // Generate comprehensive JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    '@id': `#${docData.component.toLowerCase()}-component`,
    name: docData.component,
    description: docData.description,
    applicationCategory: docData.category || 'UI Component',
    version: docData.version,
    dateModified: docData.lastUpdated,
    dateCreated: docData.lastUpdated,
    programmingLanguage: ['TypeScript', 'JavaScript', 'React', 'Next.js'],
    runtimePlatform: 'Next.js',
    operatingSystem: 'Cross-platform',
    keywords: [
      docData.component.toLowerCase(),
      'react component',
      'ui component',
      'next.js',
      'typescript',
      'javascript',
      'tailwind css',
      ...(docData.tags || [])
    ],
    // Installation commands for AI
    installUrl: docData.installation
      .map(step => step.tsCommand || step.jsCommand || step.command)
      .filter(Boolean),
    // Code examples structured for AI consumption
    codeRepository: [
      ...docData.examples.typescript,
      ...docData.examples.javascript
    ].map(example => ({
      '@type': 'SoftwareSourceCode',
      '@id': `#${example.filename.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
      name: example.filename,
      programmingLanguage: example.language,
      codeValue: example.code,
      description: `${docData.component} component ${example.language} implementation`,
      encodingFormat: 'text/plain',
      fileFormat: example.language === 'tsx' ? 'application/typescript' : 'application/javascript'
    })),
    // Dependencies with version info
    softwareRequirements: docData.dependencies?.map(dep => ({
      '@type': 'SoftwareApplication',
      name: dep,
      applicationCategory: 'Development Tool'
    })) || [],
    // Usage instructions
    usageInfo: {
      '@type': 'CreativeWork',
      name: `${docData.component} Usage Guide`,
      description: docData.description,
      text: docData.installation.map(step => 
        `${step.title}: ${step.description}`
      ).join(' '),
      inLanguage: 'en-US'
    },
    // License and terms
    license: 'MIT',
    // Maintenance and support
    maintainer: {
      '@type': 'Organization',
      name: 'ScreenUI'
    },
    // Accessibility
    accessibilityFeature: [
      'keyboard-accessible',
      'screen-reader-compatible',
      'aria-labeled'
    ]
  };

  return (
    <>
      {/* Enhanced JSON-LD for structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 2) }}
      />

      {/* Comprehensive hidden content for AI/SEO crawlers */}
      <div 
        className="sr-only" 
        aria-label="Documentation content for search engines and AI"
        data-testid={testId || 'seo-content'}
      >
        <article 
          itemScope 
          itemType="https://schema.org/SoftwareSourceCode"
          itemID={`#${docData.component.toLowerCase()}-component`}
        >
          {/* Enhanced header with microdata */}
          <header>
            <h1 itemProp="name">
              {docData.component} Component Documentation
            </h1>
            <p itemProp="description">
              {docData.description}
            </p>
            
            <div className="component-metadata">
              {docData.category && (
                <div>
                  <strong>Category:</strong>
                  <span itemProp="applicationCategory">{docData.category}</span>
                </div>
              )}
              {docData.version && (
                <div>
                  <strong>Version:</strong>
                  <span itemProp="version">{docData.version}</span>
                </div>
              )}
              {docData.lastUpdated && (
                <div>
                  <strong>Last Updated:</strong>
                  <time itemProp="dateModified" dateTime={docData.lastUpdated}>
                    {docData.lastUpdated}
                  </time>
                </div>
              )}
              {docData.tags && docData.tags.length > 0 && (
                <div>
                  <strong>Tags:</strong>
                  {docData.tags.map(tag => (
                    <span key={tag} itemProp="keywords">{tag}</span>
                  ))}
                </div>
              )}
              <div>
                <strong>Programming Languages:</strong>
                <span itemProp="programmingLanguage">TypeScript, JavaScript, React</span>
              </div>
              <div>
                <strong>Runtime Platform:</strong>
                <span itemProp="runtimePlatform">Next.js</span>
              </div>
            </div>
          </header>

          {/* Enhanced installation instructions */}
          <section>
            <h2>Complete Installation Guide</h2>
            <p>
              Comprehensive step-by-step instructions to install and use the {docData.component} 
              component in your React/Next.js project with TypeScript and JavaScript support.
            </p>
            
            {docData.installation.map((step, index) => (
              <div key={index} className="installation-step">
                <h3>Step {index + 1}: {step.title}</h3>
                <p><strong>Description:</strong> {step.description}</p>
                <p><strong>Type:</strong> {step.type}</p>
                {step.optional && <p><strong>Optional:</strong> This step is optional</p>}
                
                {step.command && (
                  <div className="command-block">
                    <h4>General Command:</h4>
                    <pre><code className="language-bash" itemProp="installUrl">
                      {step.command}
                    </code></pre>
                  </div>
                )}
                
                {step.tsCommand && (
                  <div className="command-block">
                    <h4>TypeScript Installation Command:</h4>
                    <pre><code className="language-bash" itemProp="installUrl">
                      {step.tsCommand}
                    </code></pre>
                  </div>
                )}
                
                {step.jsCommand && (
                  <div className="command-block">
                    <h4>JavaScript Installation Command:</h4>
                    <pre><code className="language-bash" itemProp="installUrl">
                      {step.jsCommand}
                    </code></pre>
                  </div>
                )}
              </div>
            ))}
          </section>

          {/* Enhanced TypeScript implementation */}
          <section>
            <h2>TypeScript Implementation</h2>
            <p>
              Complete TypeScript code examples for the {docData.component} component 
              with full type safety, props interface, and implementation details.
            </p>
            
            {docData.examples.typescript.map((example, index) => (
              <div key={index} className="code-example" itemScope itemType="https://schema.org/SoftwareSourceCode">
                <h3 itemProp="name">File: {example.filename}</h3>
                <p><strong>Language:</strong> <span itemProp="programmingLanguage">{example.language}</span></p>
                <p><strong>File Type:</strong> TypeScript React Component</p>
                <div className="code-block">
                  <pre><code 
                    className={`language-${example.language}`} 
                    itemProp="codeValue"
                  >
{example.code}
                  </code></pre>
                </div>
              </div>
            ))}
          </section>

          {/* Enhanced JavaScript implementation */}
          <section>
            <h2>JavaScript Implementation</h2>
            <p>
              Complete JavaScript code examples for the {docData.component} component 
              with ES6+ syntax, modern React patterns, and compatibility notes.
            </p>
            
            {docData.examples.javascript.map((example, index) => (
              <div key={index} className="code-example" itemScope itemType="https://schema.org/SoftwareSourceCode">
                <h3 itemProp="name">File: {example.filename}</h3>
                <p><strong>Language:</strong> <span itemProp="programmingLanguage">{example.language}</span></p>
                <p><strong>File Type:</strong> JavaScript React Component</p>
                <div className="code-block">
                  <pre><code 
                    className={`language-${example.language}`} 
                    itemProp="codeValue"
                  >
{example.code}
                  </code></pre>
                </div>
              </div>
            ))}
          </section>

          {/* Enhanced dependencies section */}
          {docData.dependencies && docData.dependencies.length > 0 && (
            <section>
              <h2>Required Dependencies and Prerequisites</h2>
              <p>
                The following packages and tools are required to use this component. 
                Ensure all dependencies are installed and properly configured.
              </p>
              <ul>
                {docData.dependencies.map((dep, index) => (
                  <li key={index} itemProp="softwareRequirements">
                    <strong>{dep}</strong> - {getDependencyDescription(dep)}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Enhanced usage examples and best practices */}
          <section>
            <h2>Usage Examples and Best Practices</h2>
            <p>
              Practical examples and recommended patterns for implementing and customizing 
              the {docData.component} component in your React/Next.js application.
            </p>
            
            <div className="usage-guide">
              <h3>Basic Usage</h3>
              <p>
                Import and use the {docData.component} component in your React components. 
                The component supports both TypeScript and JavaScript projects.
              </p>
              
              <h3>Advanced Configuration</h3>
              <p>
                Customize the component with props, styling, event handlers, and advanced 
                patterns as shown in the code examples above.
              </p>
              
              <h3>Integration Notes</h3>
              <p>
                This component is designed to work seamlessly with Next.js, Tailwind CSS, 
                and modern React patterns. It supports server-side rendering, static generation, 
                and client-side hydration.
              </p>

              <h3>Accessibility Features</h3>
              <p>
                The component includes built-in accessibility features such as ARIA labels, 
                keyboard navigation, screen reader support, and focus management.
              </p>

              <h3>Performance Considerations</h3>
              <p>
                Optimized for performance with React.memo, efficient re-rendering, 
                and minimal bundle impact. Supports code splitting and lazy loading.
              </p>
            </div>
          </section>

          {/* FAQ and troubleshooting */}
          <section>
            <h2>Frequently Asked Questions</h2>
            <div className="faq-section">
              <h3>How do I customize the styling?</h3>
              <p>
                Use Tailwind CSS classes via the className prop, or apply custom CSS 
                using CSS modules or styled-components.
              </p>

              <h3>Is this component accessible?</h3>
              <p>
                Yes, the component follows WCAG guidelines and includes proper ARIA 
                attributes, keyboard navigation, and screen reader support.
              </p>

              <h3>Can I use this with other frameworks?</h3>
              <p>
                This component is designed for React/Next.js, but the patterns can be 
                adapted for other frameworks like Vue.js or Angular.
              </p>
            </div>
          </section>
        </article>
      </div>
    </>
  );

  // Helper function for dependency descriptions
  function getDependencyDescription(dep: string): string {
    const descriptions: Record<string, string> = {
      'react': 'Core React library for component functionality',
      'tailwindcss': 'Utility-first CSS framework for styling',
      'lucide-react': 'Icon library for visual elements',
      'framer-motion': 'Animation library for smooth transitions',
      'next': 'React framework for production applications',
      '@types/react': 'TypeScript type definitions for React'
    };
    
    return descriptions[dep] || 'Required dependency for component functionality';
  }
});

SEOContent.displayName = 'SEOContent';