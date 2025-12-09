"use client";

import LibraryLayout from '@/app/library/layout'
import { ComponentHeader } from "@/app/library/component/component-header";
import { TableFeatures } from "./sections/Features";
import { PageClient } from "./demo/PageClient";
import { Config } from "./config/config";

export default function Page() {
  return (
    <LibraryLayout>
      <div className="max-w-5xl mx-auto space-y-10">
        <ComponentHeader
          title={Config.component}
          description={Config.description}
        />

       <PageClient />

        <div className="border border-[hsl(var(--border))]">
          <TableFeatures />
        </div>
      </div>
    </LibraryLayout>
  );
}