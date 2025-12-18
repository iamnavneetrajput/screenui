'use client';
import dynamic from 'next/dynamic';
import { GlobalLoader } from '@/components/loading/Loader';
import { useDemoSync } from "@/lib/useDemoSync";
import { EnhancedComponentDemo } from '@/app/library/component/enhanced/ComponentDemo';
import { Demos } from '../config/demo';
import { Tabs } from '../sections/button-tabs';

// dynamic demo renderer
const ComponentDemosRenderer = dynamic(
  async () => {
    return function ComponentDemosRenderer() {

      // ✅ Add this
      const demoIds = Demos.map(d => d.id);
      useDemoSync(demoIds);

      const createTabs = Tabs();

      return (
        <>
          {Demos.map((demo, index) => (
            <section id={demo.id} key={demo.id} className="scroll-mt-28">
              <EnhancedComponentDemo
                {...demo.config}
                showInstallation={index === 0}
                additionalTabs={index === 0 ? createTabs : []}
              >
                <demo.component />
              </EnhancedComponentDemo>
            </section>
          ))}
        </>
      );
    };
  },
  {
    ssr: false,
    loading: () => <GlobalLoader />
  }
);

export function PageClient() {
  return <ComponentDemosRenderer />;
}
