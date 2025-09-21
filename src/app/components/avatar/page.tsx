"use client";

import { MainLayout } from "@/components/layout/main-layout";
import { ComponentHeader } from "@/app/library/component/component-header";
import { ComponentDemo } from "@/app/library/component/component-demo";
import { Avatar } from "@/components/ui/Avatar";
import {
  TsCode1,
  JsCode1,
  InstallCommands,
  Component,
  Title,
  Description,
  Lastupdated,
  Version,
} from "@/data/code-snippets/avtar";
import { UsageNotes } from "./usage";
import { Star } from "lucide-react";

export default function AvatarPage() {
  return (
    <MainLayout>
      <div className="pt-12 md:p-10 max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <ComponentHeader title={Component} description={Description} />

        {/* Demo + Installation */}
        <ComponentDemo
          title={"Avatar Component"}
          component={Component}
          description={Description}
          dependencyCommand={InstallCommands.npm}
          npmCommandTs={InstallCommands.ts}
          npmCommandJs={InstallCommands.js}
          tsCode={TsCode1}
          jsCode={JsCode1}
          showInstallation={true}
          showTabs={true}
          showJavascript={false}
          showTypescript={false}
          category="Feedback"
          version={Version}
          lastUpdated={Lastupdated}
        >
          <div className="space-y-12">
            <div className="flex flex-wrap gap-4">
              <Avatar
                as="button"
                src="https://github.com/evilrabbit.png"
                clickable
                className="hover:ring-2 hover:ring-blue-200"
                onClick={() => console.log("Avatar clicked")}
              />
              <Avatar
                src="https://github.com/evilrabbit.png"
                alt="screenui"
                className="bg-blue-500 text-white ring-2 ring-blue-300"
              />
              <Avatar
                fallbackContent={<Star className="w-6 h-6" />}
                className="bg-yellow-100 text-yellow-600"
              />
              <Avatar
                variant="square"
                size="md"
                src="https://github.com/evilrabbit.png"
                className="bg-gray-100 border-1 border-gray-300"
              />
            </div>
          </div>
        </ComponentDemo>

        {/* Usage Notes */}
        <div className="border border-[hsl(var(--border))] rounded-lg">
          <UsageNotes />
        </div>

        {/* JSON-LD for SEO/AI */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareSourceCode",
              name: Component,
              version: Version,
              description: Description,
              programmingLanguage: "TypeScript",
              installCommand: InstallCommands,
              dateModified: Lastupdated,
            }),
          }}
        />
      </div>
    </MainLayout>
  );
}
