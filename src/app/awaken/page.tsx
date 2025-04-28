'use client';
import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/ui/awaken/sidebar';
import TemplateGrid from '@/components/ui/awaken/awakengrid';
import { templates } from '@/components/data/awakentemplates';
import { Template } from '@/types';
import IntroBanner from '@/components/ui/main/banner';

function Awaken() {
  const [activeCategory, setActiveCategory] = useState('');
  const [filteredTemplates, setFilteredTemplates] = useState<Template[]>([]);
  const [showInstallationGuide, setShowInstallationGuide] = useState(true); // To show installation guide by default

  useEffect(() => {
    let result = templates;

    if (activeCategory) {
      if (activeCategory === 'featured') {
        result = result.filter((template) => template.isFeatured);
      } else {
        result = result.filter((template) => template.category === activeCategory);
      }
    }

    setFilteredTemplates(result);
  }, [activeCategory]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setShowInstallationGuide(false); // Hide the installation guide when a category is selected
  };

  const showInstallation = () => {
    setShowInstallationGuide(true); // Show installation guide
    setActiveCategory(''); // Reset active category
  };

  return (
    <div className="min-h-screen w-full pt-14 bg-[hsl(var(--background))]">
      {/* Intro Banner */}
      <IntroBanner
        title="Screenui Awaken"
        description="Explore a collection of stunning templates to kickstart your next project."
        installCmd="npx create-screenui my-app"
        navText="Get Started with Tailwind v4"
      />

      {/* New Horizontal Sidebar */}
      <Sidebar
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        onShowInstallation={showInstallation} // Pass the function to Sidebar
      />

      {/* Main Content */}
      <div className="flex-1 p-4 lg:p-8">
        <div className="max-w-6xl mx-auto">
          {/* Show Installation Guide */}
          {showInstallationGuide ? (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold mb-4">Screenui Awaken</h2>
              <p className="text-lg text-muted-foreground">
                Please select a category from the sidebar to view templates.
              </p>
              <p className="mt-4 text-base">
                Or click on the "Installation Guide" to get started.
              </p>
            </div>
          ) : (
            <TemplateGrid templates={filteredTemplates} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Awaken;
