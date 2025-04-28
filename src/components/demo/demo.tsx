"use client";
import React, { useState } from 'react';
import HorizontalSidebar from '@/components/demo/HorizontalSidebar';
import ComponentDisplay from '@/components/demo/displaydemo';
import { ComponentData, getComponentByPath } from '@/components/data/components';


export default function Demo() {
    const [selectedComponent, setSelectedComponent] = useState<ComponentData | null>(null);

    const handleComponentSelect = (path: string) => {
        const component = getComponentByPath(path);
        setSelectedComponent(component);
    };

    return (
        <div className="flex-1 bg-[hsl(var(--background))]  transition-all duration-300">
            <div className='pb-2'>
                <HorizontalSidebar onSelectComponent={handleComponentSelect} /></div>
            {selectedComponent ? (
                <ComponentDisplay component={selectedComponent} />
            ) : (
                <div className="h-full flex items-center justify-center text-[hsl(var(--foreground))]">
                    <div className="max-w-lg p-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">screen/ui component demo</h2>
                        <p className="mb-6">
                            Select a component from the nav to view its demo.
                            This library includes both React components and core HTML/CSS implementations.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}