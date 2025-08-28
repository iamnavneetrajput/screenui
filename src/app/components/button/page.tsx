'use client';
import React, { useState } from 'react';
import { MainLayout } from '@/components/layout/main-layout';
import { ComponentHeader } from '@/app/library/component/component-header';
import { ComponentDemo } from '@/app/library/component/component-demo';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import {
  buttonTsCode, buttonJsCode, DependencyCommand, CommandTs, CommandJs, Component, Title, Lastupdated
  , sizebuttonJsCode, sizebuttonTsCode, iconbuttonJsCode, iconbuttonTsCode, loadingbuttonTsCode, loadingbuttonJsCode
} from '@/data/code-snippets/button';
import { UsageNotes } from '@/app/components/button/usage';

export default function ButtonPage() {
  const [loading, setLoading] = useState(false);

  const handleLoadingTest = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };
  return (
    <MainLayout>
      <div className="pt-12 md:p-10 max-w-5xl mx-auto space-y-10">
        <ComponentHeader
          title={Component}
          description="Buttons are used to trigger actions or events, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation."
        />

        <ComponentDemo
          showTabs={true}
          showInstallation={true}
          showJavascript={false}
          showTypescript={false}
          category="Form"
          version="0.1.0"
          lastUpdated={Lastupdated}
          title={Title}
          description={''}
          component={Component}
          dependencyCommand={DependencyCommand}
          npmCommandTs={CommandTs}
          npmCommandJs={CommandJs}
          tsCode={buttonTsCode}
          jsCode={buttonJsCode}
        >
          <div className='space-y-12'>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <Button variant="default">Default</Button>
              </div>
            </div>
          </div>
        </ComponentDemo>

        <ComponentDemo
          showInstallation={true}
          showJavascript={false}
          showTypescript={false}
          showTabs={true}
          title="Button with Icons"
          description="Buttons can include icons to enhance usability and visual appeal."
          component="Button"
          dependencyCommand=""
          npmCommandTs=""
          npmCommandJs=""
          tsCode={iconbuttonTsCode}
          jsCode={iconbuttonJsCode}
        >
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" icon={<ExternalLink className="h-4 w-4" />}>
              Open Link
            </Button>
          </div>
        </ComponentDemo>

        <ComponentDemo
          showInstallation={true}
          showJavascript={false}
          showTypescript={false}
          showTabs={true}
          title="Button Sizes"
          description='Buttons can have different sizes to fit various use cases.'
          component="Button"
          dependencyCommand=""
          npmCommandTs=""
          npmCommandJs=""
          tsCode={sizebuttonTsCode}
          jsCode={sizebuttonJsCode}
        >
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button size="lg">Large</Button>
            </div>
          </div>
        </ComponentDemo>

        <ComponentDemo
          showInstallation={true}
          showJavascript={false}
          showTypescript={false}
          showTabs={true}
          title="Button Loading State"
          description="Buttons can indicate loading states to inform users that an action is being processed."
          component="Button"
          dependencyCommand=""
          npmCommandTs=""
          npmCommandJs=""
          tsCode={loadingbuttonTsCode}
          jsCode={loadingbuttonJsCode}
        >
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button loading variant="destructive" onClick={handleLoadingTest}>
                Delete
              </Button>
            </div>
          </div>
        </ComponentDemo>

        <div className="border border-[hsl(var(--border))]  rounded-lg ">
          <UsageNotes />
        </div>

      </div>
    </MainLayout>
  );
}