"use client";
import React, { useState, useEffect } from 'react';
import HorizontalSidebar from '@/components/demo/HorizontalSidebar';
import ComponentDisplay from '@/components/demo/displaydemo';
import { ComponentData, getComponentByPath, componentCategories } from '@/components/data/components';

export default function Demo() {
    const [selectedComponent, setSelectedComponent] = useState<ComponentData | null>(null);

    useEffect(() => {
        // Get the first component from componentCategories
        const firstComponent = componentCategories[0]?.components[0];
        if (firstComponent) {
            const component = getComponentByPath(firstComponent.path);
            setSelectedComponent(component);
        }
    }, []);

    const handleComponentSelect = (path: string) => {
        const component = getComponentByPath(path);
        setSelectedComponent(component);
    };

    return (
        <div className="flex-1 bg-[hsl(var(--background))] transition-all duration-300">
            <div className="pb-2">
                <HorizontalSidebar onSelectComponent={handleComponentSelect} />
            </div>
            {selectedComponent && (
                <ComponentDisplay component={selectedComponent} />
            )}
        </div>
    );
}
