'use client';

import IntroBanner from '@/components/ui/main/banner';
import DocsSwitchButton from '../component/DocsSwitchButton';

export default function ThemingDocsPage() {
    return (

        <div className="min-h-screen w-full bg-[hsl(var(--background))]">
            <div className="pt-12">

                <IntroBanner
                    title="Theming"
                    description="Using CSS Variables and color utilities for theming."
                    customButton={<DocsSwitchButton />}
                />
            </div>
        </div>
    );
}
