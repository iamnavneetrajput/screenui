import { MainLayout } from '@/components/layout/main-layout';
import { ComponentHeader } from '@/app/library/component/component-header';
import { AlertPageClient } from './components/AlertPageClient';
import { alertConfig } from './config/alert-config';
import { UsageNotes } from './usage';

export default function AlertPage() {
  return (
    <MainLayout>
      <div className="pt-12 md:p-10 max-w-5xl mx-auto space-y-10">
        <ComponentHeader
          title={alertConfig.component}
          description={alertConfig.description}
        />

        <AlertPageClient />

        <div className="border border-[hsl(var(--border))] rounded-lg bg-[hsl(var(--background))]">
          <UsageNotes />
        </div>
      </div>
    </MainLayout>
  );
}