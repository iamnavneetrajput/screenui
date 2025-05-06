'use client';

import { useState } from 'react';
import { Template } from '@/components/data/templates';
import IntroBanner from '@/components/ui/main/banner';
import FilterNav from '@/components/ui/awaken/filter';
import TemplateCard from '@/components/ui/awaken/TemplateCard';

interface Props {
  templates: Template[];
}

export default function AwakenClient({ templates }: Props) {
  const [filteredCategory, setFilteredCategory] = useState('All');

  const categories = ['All', ...new Set(templates.map((t) => t.category))];

  const filteredTemplates =
    filteredCategory === 'All'
      ? templates
      : templates.filter((t) => t.category === filteredCategory);

  return (
    <main className="min-h-screen w-full pt-14">
      <IntroBanner
        title="Explore Templates"
        description="Please read the docs to learn how to use the templates."
        installCmd="npx create-screenui"
        buttonLabel="Installation Guide"
        buttonLink="/docs"
      />

      <div className="container mx-auto">
        <FilterNav
          categories={categories}
          onCategorySelect={(category) => setFilteredCategory(category)}
        />
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTemplates.map((template, index) => (
            <TemplateCard key={index} {...template} />
          ))}
        </div>
      </div>
    </main>
  );
}
