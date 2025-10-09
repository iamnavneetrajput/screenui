import { MainLayout } from '@/components/layout/main-layout';
import { ComponentHeader } from '@/app/library/component/component-header';
import { CheckboxPageClient } from './components/CheckboxClient';
import { checkboxConfig } from './config/checkbox-config';
import  { CheckboxUsageNotes as UsageNotes } from './usage';

export default function CheckboxPage() {
  return (
    <MainLayout>
      <div className="pt-12 md:p-10 max-w-5xl mx-auto space-y-10">
        <ComponentHeader
          title={checkboxConfig.component}
          description={checkboxConfig.description}
        />

        <CheckboxPageClient />

        <div className="border border-[hsl(var(--border))] rounded-lg bg-[hsl(var(--background))]">
          <UsageNotes />
        </div>
      </div>
    </MainLayout>
  );
}
