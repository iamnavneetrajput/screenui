"use client";

import LibraryLayout from '@/app/library/layout'
import { ComponentHeader } from "@/app/library/component/enhanced/component-header";
import { ButtonFeatures } from "./sections/Features";
import { PageClient } from "./demo/PageClient";
import { buttonConfig } from "./config/button-config";

export default function Page() {
  return (
    <LibraryLayout>
      <div className="max-w-5xl mx-auto space-y-10">
        <ComponentHeader
          title={buttonConfig.component}
          description={buttonConfig.description}
        />

       <PageClient />

        <div className="border border-[hsl(var(--border))] rounded-xl p-6">
          <ButtonFeatures />
        </div>
      </div>
    </LibraryLayout>
  );
}