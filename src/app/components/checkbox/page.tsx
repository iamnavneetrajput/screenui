"use client";

import LibraryLayout from '@/app/library/layout'
import { ComponentHeader } from "@/app/library/component/component-header";
import { CheckboxFeatures } from "./sections/Features";
import { PageClient } from "./demo/PageClient";
import { checkboxConfig } from "./config/config";

export default function ButtonPage() {
  return (
    <LibraryLayout>
      <div className="max-w-5xl mx-auto space-y-10">
        <ComponentHeader
          title={checkboxConfig.component}
          description={checkboxConfig.description}
        />

       <PageClient />

        <div className="border border-[hsl(var(--border))]">
          <CheckboxFeatures />
        </div>
      </div>
    </LibraryLayout>
  );
}