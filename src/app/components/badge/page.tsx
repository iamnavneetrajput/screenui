'use client';
import { MainLayout } from '@/components/layout/main-layout';
import { ComponentHeader } from '@/app/library/component/component-header';
import { ComponentDemo } from '@/app/library/component/component-demo';
import { Badge } from '@/components/ui/badge';
import { TsCode1, JsCode1, CommandJs, CommandTs, Component, Title, Description, Lastupdated, Version } from '@/data/code-snippets/badge';
import { UsageNotes } from './usage';
import { InfoIcon } from 'lucide-react';


export default function BadgePage() {
    return (
        <MainLayout>
            <div className="pt-12 md:p-10 max-w-5xl mx-auto space-y-10">
                <ComponentHeader
                    title={"Badge"}
                    description="A versatile and accessible badge component with support for variants, sizes, rounded corners, icons, interactivity, and removal."
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
                                <div className="flex gap-2 flex-wrap">
                                    <Badge className="bg-blue-100 text-blue-800">New</Badge>
                                    <Badge variant="dot" className="bg-green-50 text-green-700">Active</Badge>
                                    <Badge
                                        as="button"
                                        interactive
                                        className="bg-purple-100 text-purple-800 hover:bg-purple-200"
                                        onClick={() => console.log("Badge clicked")}
                                    >
                                        Clickable
                                    </Badge>

                                    <Badge
                                        className="border-red-300 text-red-700"
                                        icon={<InfoIcon />}
                                    >
                                        Warning
                                    </Badge>

                                    <Badge
                                        className="bg-gray-100 text-gray-800"
                                        onRemove={() => console.log("Badge removed")}
                                    >
                                        Removable
                                    </Badge>
                                </div>
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