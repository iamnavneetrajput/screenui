import { MainLayout } from '@/components/layout/main-layout';
import { ComponentHeader } from '@/app/library/component/component-header';
import { ComponentDemo } from '@/app/library/component/component-demo';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { alertJsCode, alertTsCode, CommandJs, CommandTs, Component, Lastupdated, Description, Title } from '@/data/code-snippets/alert';
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
          tsCode={alertTsCode}
          jsCode={alertJsCode}
          showInstallation={true}
          showTabs={true}
          showJavascript={false}
          showTypescript={false}
          category="Feedback"
          version="0.1.0"
          lastUpdated={Lastupdated}
        >
          <div className='space-y-12'>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <Alert variant="success" dismissible>
                  <AlertTitle>Success!</AlertTitle>
                  <AlertDescription>
                    Your changes have been saved.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Example"
          description=""
          component="Alert"
          showInstallation={false}
          showTabs={false}
          dependencyCommand=""
          npmCommandTs=""
          npmCommandJs=""
          tsCode={''}
          jsCode={''}
        >
          <div className='space-y-12'>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <Alert variant="warning">
                  <AlertTitle>Warning!</AlertTitle>
                  <AlertDescription>
                    Warning! Please check your input.
                  </AlertDescription>
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