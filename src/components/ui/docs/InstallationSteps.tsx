'use client';
import React from 'react';
import TerminalCommand from '@/components/ui/main/TerminalCommand';
import { Bot } from 'lucide-react'

export const InstallationSteps: React.FC = () => {
    return (
        <div className="mb-12">
            <div className="text-2xl font-semibold text-[hsl(var(--foreground))] mt-4 mb-6">
                <Bot className="inline ml-2 mr-2 text-amber-300" size={24} />
                <span>Installation Steps</span>
            </div>

            <div className="space-y-6">
                <div className="p-8 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))]">
                    <h3 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-4">
                        # Interactive mode - select template and tech stack
                    </h3>
                    <div className="space-y-4">
                    < TerminalCommand command="npx create-screenui" />
                        <p className="text-sm text-[hsl(var(--foreground))] opacity-80">
                            This command will prompt you to select a template and tech stack.
                        </p>
                    </div>
                </div>

                <div className="p-8 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))]">
                    <h3 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-4">
                        # Specify template name - select only tech stack
                    </h3>
                    <div className="space-y-4">
                        <TerminalCommand command="npx create-screenui clock" />
                        <p className="text-sm text-[hsl(var(--foreground))] opacity-80">
                            This command creates a project using a specified template along with the chosen tech stack.
                        </p>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))]">
                    <p className="font-medium text-[hsl(var(--foreground))]">After installation, the init command will:</p>
                    <ul className="mt-2 space-y-1 text-sm text-[hsl(var(--foreground))] opacity-80">
                        <li>• Configure Tailwind CSS with UIKit's preset</li>
                        <li>• Set up necessary TypeScript types</li>
                        <li>• Create required configuration files</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
