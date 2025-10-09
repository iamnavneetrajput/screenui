import React, { useState } from 'react';
import { 
  Clock, 
  ExternalLink, 
  Copy, 
  Check, 
  Tag as TagIcon, 
  Terminal,
  BookOpen,
  Folder
} from 'lucide-react';

export interface Template {
    title: string;
    description: string;
    tags: string[];
    support: string[];
    docs: string;
    category: string;
    terminalCommand?: string;
    installCommandDescription?: string;
}

export const staticTemplates: Template[] = [
    {
        title: 'Chrono',
        description: 'A beautiful, modern clock application with multiple features including analog/digital clocks, world clock, stopwatch, and timer functionality.',
        tags: ['Next.js', 'TypeScript', 'Tailwind'],
        support: ['Dark Mode', 'Light Mode', 'Screenui Components easily'],
        docs: 'https://screenui/docs/awaken',
        category: 'Clock',
        terminalCommand: 'npx create-screenui clock',
    },
];

const TemplateCard: React.FC<{ template: Template }> = ({ template }) => {
    const [copied, setCopied] = useState(false);

    const handleCopyCommand = async () => {
        if (template.terminalCommand) {
            await navigator.clipboard.writeText(template.terminalCommand);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const getCategoryIcon = (category: string) => {
        switch (category.toLowerCase()) {
            case 'clock':
                return <Clock className="w-5 h-5" />;
            default:
                return <Folder className="w-5 h-5" />;
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg border-2 border-black overflow-hidden transition-all duration-300 hover:shadow-xl">
            {/* Header */}
            <div className="bg-black p-4 sm:p-6 text-white">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                        <div className="p-1.5 bg-white text-black rounded">
                            {getCategoryIcon(template.category)}
                        </div>
                        <div>
                            <h1 className="text-xl sm:text-2xl font-bold">{template.title}</h1>
                            <div className="flex items-center space-x-2 mt-1">
                                <Folder className="w-3 h-3" />
                                <span className="text-xs font-medium">{template.category}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-sm sm:text-base leading-relaxed">{template.description}</p>
            </div>

            {/* Main content */}
            <div className="p-4 sm:p-6 space-y-4">
                {/* Tags section */}
                <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                        <TagIcon className="w-4 h-4 text-black" />
                        <h3 className="text-sm font-semibold text-black">Technologies</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {template.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 bg-black text-white rounded-full text-xs font-medium transition-all duration-200 hover:bg-gray-800"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Support features */}
                <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        </div>
                        <h3 className="text-sm font-semibold text-black">Key Features</h3>
                    </div>
                    <div className="space-y-2">
                        {template.support.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-2 p-2 border border-black rounded hover:bg-gray-50 transition-colors duration-200"
                            >
                                <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></div>
                                <span className="text-xs sm:text-sm text-black font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Terminal command */}
                {template.terminalCommand && (
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <Terminal className="w-4 h-4 text-black" />
                            <h3 className="text-sm font-semibold text-black">Get Started</h3>
                        </div>
                        <div className="bg-black rounded p-3 relative">
                            <div className="flex items-center justify-between">
                                <code className="text-white font-mono text-xs sm:text-sm break-all">
                                    {template.terminalCommand}
                                </code>
                                <button
                                    onClick={handleCopyCommand}
                                    className="ml-2 p-1.5 bg-white text-black hover:bg-gray-200 rounded transition-colors duration-200 flex-shrink-0"
                                    title="Copy command"
                                >
                                    {copied ? (
                                        <Check className="w-3 h-3" />
                                    ) : (
                                        <Copy className="w-3 h-3" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Documentation link */}
                <div className="pt-3 border-t border-black">
                    <a
                        href={template.docs}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-black text-white px-4 py-2 rounded text-sm font-semibold transition-all duration-200 hover:bg-gray-800 w-full justify-center sm:w-auto"
                    >
                        <BookOpen className="w-4 h-4" />
                        <span>View Documentation</span>
                        <ExternalLink className="w-3 h-3" />
                    </a>
                </div>
            </div>
        </div>
    );
};

const Awaken: React.FC = () => {
    return (
        <div className="min-h-screen bg-white py-6 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-black mb-3">
                        Template Showcase
                    </h1>
                    <p className="text-sm sm:text-base text-gray-600 max-w-lg mx-auto">
                        Discover beautifully crafted templates for your next project
                    </p>
                </div>
                
                <div className="space-y-8">
                    {staticTemplates.map((template, index) => (
                        <TemplateCard key={index} template={template} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Awaken;