"use client";
import IntroBanner from "@/components/ui/main/banner";
import { staticTemplates } from "@/data/templates";
import TemplatesHeader from "./components/TemplatesHeader";
import TemplateCard from "./TemplateCard";

export default function TemplatesPage() {
  return (
    <main className="min-h-screen custom-container mx-auto pt-12">
      <IntroBanner
        title="Build with templates."
        description="From forms to landing pages, everything is customizable and production-ready."
        buttonLabel="Docs"
        buttonLink="/docs/templates"
        installCmd="npx screenui-cli@latest create layout"
      />

      <section className="space-y-8 mt-4">
        <div className="p-2 lg:p-8">
          <TemplatesHeader />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {staticTemplates.map((template) => (
              <TemplateCard key={template.title} template={template} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
