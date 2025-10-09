"use client";

import { MainLayout } from "@/components/layout/main-layout";
import { ComponentHeader } from "@/app/library/component/component-header";
import { EnhancedComponentDemo } from "../../library/component/enhanced/EnhancedComponentDemo";
import { AvatarPreviewDemo } from "./components/AvatarPreviewDemo";
import { avatarConfig } from "./config/avatar-config";
import { avatarTabs } from "./config/avatar-tabs";
import { UsageNotes } from "./usage";

export default function AvatarPage() {
  return (
    <MainLayout>
      <div className="pt-12 md:p-10 max-w-5xl mx-auto space-y-10">
        <ComponentHeader 
          title={avatarConfig.component} 
          description='The Avatar component is used to display user profile images or icons, often in a circular or rounded format. It can be customized in size and shape to fit various design needs.' 
        />

        <EnhancedComponentDemo
          {...avatarConfig}
          additionalTabs={avatarTabs}
        >
          <AvatarPreviewDemo />
        </EnhancedComponentDemo>

        <div className="border border-[hsl(var(--border))] rounded-lg bg-[hsl(var(--background))]">
          <UsageNotes />
        </div>
      </div>
    </MainLayout>
  );
}