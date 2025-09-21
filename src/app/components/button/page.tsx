'use client';
import React, { useState } from 'react';
import { MainLayout } from '@/components/layout/main-layout';
import { ComponentHeader } from '@/app/library/component/component-header';
import { ComponentDemo } from '@/app/library/component/component-demo';
import { Button } from '@/components/ui/Button';
import { Plus, Trash, ExternalLink } from 'lucide-react';
import { TsCode1, TsCode2, JsCode1, JsCode2, CommandJs, CommandTs, Component, Title, Description, Lastupdated, Version, TsCode3, JsCode3, TsCode4, JsCode4 } from '@/data/code-snippets/button';

import { UsageNotes } from '@/app/components/button/usage';

export default function ButtonPage() {
  const [isLoading, setIsLoading] = useState(false);


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
          version={Version}
          lastUpdated={Lastupdated}
          title={Title}
          description={''}
          component={Component}
          dependencyCommand={''}
          npmCommandTs={CommandTs}
          npmCommandJs={CommandJs}
          tsCode={TsCode1}
          jsCode={JsCode1}
        >
          <div className='space-y-12'>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <Button className="bg-blue-500 text-white hover:bg-blue-600">
                  Click Me
                </Button>
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
          tsCode={TsCode2}
          jsCode={JsCode2}
        >
          <div className="flex flex-wrap gap-4">
            <Button
              icon={<Trash />}
              variant="outline"
              className="border-red-500 text-red-500 hover:bg-red-50"
            >
              Delete
            </Button>
          </div>
        </ComponentDemo>

        <ComponentDemo
          showInstallation={true}
          showJavascript={false}
          showTypescript={false}
          showTabs={true}
          title="Button Loading State"
          description="Buttons can indicate loading states to inform users that an action is being processed."
          component={Component}
          dependencyCommand=""
          npmCommandTs=""
          npmCommandJs=""
          tsCode={TsCode3}
          jsCode={JsCode3}
        >
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-green-500 text-white"
                icon={<Plus />}
                loading={isLoading}
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => setIsLoading(false), 2000); // reset after 2s
                }}
              >
                Add Item
              </Button>
            </div>
          </div>
        </ComponentDemo>

        <ComponentDemo
          showInstallation={true}
          showJavascript={false}
          showTypescript={false}
          showTabs={true}
          title="Button as Link"
          description="Buttons can be rendered as anchor tags for navigation purposes."
          component={Component}
          dependencyCommand=""
          npmCommandTs=""
          npmCommandJs=""
          tsCode={TsCode4}
          jsCode={JsCode4}
        >
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button as="a" href="/dashboard" variant="ghost" icon={<ExternalLink />}>
                Go to Dashboard
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