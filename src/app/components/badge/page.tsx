"use client";

import { MainLayout } from "@/components/layout/main-layout";
import { ComponentHeader } from "@/app/library/component/component-header";
import { EnhancedComponentDemo } from "../../library/component/enhanced/EnhancedComponentDemo";
import { BadgePreviewDemo } from "./components/BadgePreview";
import { badgeConfig } from "./config/badge-config";
import { badgeTabs } from "./config/badge-tabs";
import { UsageNotes } from "./usage";

export default function BadgePage() {
  return (
    <MainLayout>
      <div className="pt-12 md:p-10 max-w-5xl mx-auto space-y-10">
        <ComponentHeader
          title={badgeConfig.component}
          description='The Badge component is used to display status information, often in a compact and visually distinct format. It can be customized in size and shape to fit various design needs.'
        />

        <EnhancedComponentDemo
          {...badgeConfig}
          additionalTabs={badgeTabs}
        >
          <BadgePreviewDemo />
        </EnhancedComponentDemo>

        <div className="border border-[hsl(var(--border))] rounded-lg bg-[hsl(var(--background))]">
          <UsageNotes />
        </div>
      </div>
    </MainLayout>
  );
}