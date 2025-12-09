import LibraryLayout from "@/app/library/layout";
import { ComponentHeader } from '@/app/library/component/component-header';
import { PageClient } from './demo/PageClient';
import { avatarConfig } from './config/config';
import { AvatarFeatures } from './sections/Features';

export default function Page() {
  return (
    <LibraryLayout>
      <div className="max-w-5xl mx-auto space-y-10">
        <ComponentHeader
          title={avatarConfig.component}
          description={avatarConfig.description}
        />

        <PageClient />

        <div className="border border-[hsl(var(--border))]">
          <AvatarFeatures />
        </div>
      </div>
    </LibraryLayout>
  );
}