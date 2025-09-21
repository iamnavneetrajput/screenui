import { MainLayout } from '@/components/layout/main-layout';
import { ComponentHeader } from '@/app/library/component/component-header';
import { ComponentDemo } from '@/app/library/component/component-demo';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/Alert';
import { TsCode1, TsCode2, TsCode3, TsCode4, JsCode1, JsCode2, JsCode3, JsCode4, CommandTs, CommandJs, Component, Title, Description, Lastupdated, Version } from '@/data/code-snippets/alert';
import { UsageNotes } from './usage';


export default function BadgePage() {
  return (
    <MainLayout>
      <div className="pt-12 md:p-10 max-w-5xl mx-auto space-y-10">
        <ComponentHeader
          title={Component}
          description={Description}
        />

        <ComponentDemo
          title={Title}
          description={''}
          component={Component}
          dependencyCommand={''}
          npmCommandTs={CommandTs}
          npmCommandJs={CommandJs}
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
          <div className='space-y-12'>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <Alert dismissible className="border-blue-500 text-blue-700">
                  <AlertTitle>Info</AlertTitle>
                  <AlertDescription>This is an informational alert.</AlertDescription>
                </Alert>
              </div>
            </div>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Alert with Dismiss"
          description="Alert component with filled variant and dismissible functionality."
          component="Alert"
          showInstallation={false}
          showTabs={true}
          showJavascript={true}
          showTypescript={true}
          dependencyCommand=""
          npmCommandTs=""
          npmCommandJs=""
          tsCode={TsCode2}
          jsCode={JsCode2}
        >
          <div className='space-y-12'>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <Alert
                  variant="filled"
                  className="bg-red-500 text-white"
                  dismissible
                >
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>Something went wrong!</AlertDescription>
                </Alert>
              </div>
            </div>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Alert with Soft Variant"
          description=""
          component="Alert"
          showInstallation={false}
          showTabs={true}
          showJavascript={true}
          showTypescript={true}
          dependencyCommand=""
          npmCommandTs=""
          npmCommandJs=""
          tsCode={TsCode3}
          jsCode={JsCode3}
        >
          <div className='space-y-12'>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <Alert
                  variant="soft"
                  className="bg-green-100 text-green-800 border-green-200"
                >
                  <AlertTitle>Success</AlertTitle>
                  <AlertDescription>Operation completed successfully.</AlertDescription>
                </Alert>
              </div>
            </div>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Alert with Outlined Variant"
          description=""
          component="Alert"
          showInstallation={false}
          showTabs={true}
          showJavascript={true}
          showTypescript={true}
          dependencyCommand=""
          npmCommandTs=""
          npmCommandJs=""
          tsCode={TsCode4}
          jsCode={JsCode4}
        >
          <div className='space-y-12'>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <Alert
                  variant="outlined"
                  className="border-yellow-400 text-yellow-700 hover:bg-yellow-50"
                >
                  <AlertTitle>Warning</AlertTitle>
                  <AlertDescription>Please review your settings.</AlertDescription>
                </Alert>
              </div>
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