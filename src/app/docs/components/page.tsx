'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/packages/Card";
import { Badge } from "@/packages/Badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/packages/Accordion";
import { Table } from "@/packages/Table";
import { ComponentDoc, commands } from "@/data/componentdocs";
import TerminalCommand from "@/components/ui/main/TerminalCommand";
import IntroBanner from "@/components/ui/main/banner";
import DocsSwitchButton from "./DocsSwitchButton";
import { Terminal as TerminalIcon } from "lucide-react";
import { CaseSensitive, Package, Settings, Lock } from "lucide-react";
import React from "react";

const iconColors: Record<string, string> = {
  init: "text-blue-600",
  add: "text-green-600",
  status: "text-indigo-600",
  diff: "text-orange-600",
  upgrade: "text-purple-600",
  list: "text-teal-600",
  doctor: "text-red-600",
};

export default function ComponentDocsPage() {
  return (
    <main className="min-h-screen custom-container mx-auto pt-12">
      <IntroBanner
        title="Component Docs"
        description="Commands and options for installing, and managing components."
        customButton={<DocsSwitchButton />}
      />

      <div className="w-full max-w-7xl mx-auto space-y-8">
        <div className="pt-8 ml-2">
          <h1 className="text-2xl font-extrabold mb-3">
            Component CLI
          </h1>
          <p className="mt-2 opacity-90">
            Commands for installing, managing, and upgrading ScreenUI components.
          </p>
        </div>

        <Card className="bg-[hsl(var(--surface))] border-blue-200 focus-within:ring-0 focus-within:ring-offset-0">
          <CardHeader className="flex flex-col gap-1">
            <CardTitle className="text-2xl sm:text-3xl flex items-center gap-3">
              <TerminalIcon className="w-6 h-6 text-blue-600" />
               <span className="text-blue-600">quick start</span>
            </CardTitle>

            <CardDescription className="text-base sm:text-lg">
              Get up and running in 3 simple steps
            </CardDescription>
          </CardHeader>


          <CardContent className="space-y-8">
            <div>
              <p className="text-sm pb-2 font-semibold text-foreground">1. Initialize</p>
              <TerminalCommand command="npx screenui-cli@latest init" copy={true} wrap="wrap" />
            </div>

            <div>
              <p className="text-sm pb-2 font-semibold text-foreground">2. Add component</p>
              <TerminalCommand command="npx screenui-cli@latest add button" copy={true} wrap="wrap" />
            </div>

            <div>
              <p className="text-sm pb-2 font-semibold text-foreground">3. Check status</p>
              <TerminalCommand command="npx screenui-cli@latest status" copy={true} wrap="wrap" />
            </div>
          </CardContent>
        </Card>

        <section className="space-y-6">
          {commands.map((cmd: ComponentDoc) => {
            const name = cmd.name;
            const hasOptions = Array.isArray(cmd.options) && cmd.options.length > 0;
            const examples = Array.isArray((cmd as any).examples) ? (cmd as any).examples : [];
            const longDescription = (cmd as any).longDescription ?? cmd.description ?? "";
            const usage = (cmd as any).usage ?? "";

            return (
              <Card key={name} className="overflow-visible bg-[hsl(var(--surface))] focus-within:ring-0 focus-within:ring-offset-0 ">
                <CardHeader className="flex-col items-start ">
                  <CardTitle className="text-2xl sm:text-3xl flex items-center gap-3">

                    {/* ICON WRAPPER */}
                    <div
                      aria-hidden
                      className={`rounded-lg inline-flex items-center justify-center ${iconColors[name]}`}
                    >
                      {(cmd as any).icon
                        ? React.cloneElement((cmd as any).icon, { className: `w-5 h-5 ${iconColors[name]}` })
                        : <TerminalIcon className={`w-5 h-5 ${iconColors[name]}`} />
                      }
                    </div>

                    {/* TITLE TEXT */}
                    <span className={`font-semibold mb-2 ${iconColors[name]}`}>
                      {name}
                    </span>

                    {/* CODE LABEL */}
                    <code
                      className={`
                      ml-2 
                      ${iconColors[name]}
                      text-sm font-mono 
                      bg-[hsl(var(--background))]
                      rounded px-2 py-1
                      `}
                    >
                      screenui {name}
                    </code>
                  </CardTitle>


                  <CardDescription>{cmd.description}</CardDescription>

                  {longDescription && (
                    <p className="text-sm mt-2 max-w-prose">{longDescription}</p>
                  )}
                </CardHeader>

                <CardContent className="space-y-8">
                  {/* Primary example (top-level example from data) */}
                  {cmd.example && (
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Example</h3>
                      <TerminalCommand command={cmd.example} copy={true} wrap="wrap" />
                    </div>
                  )}

                  {/* Multiple examples list */}
                  {examples.length > 0 && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Examples</h3>
                      <div className="grid gap-3">
                        {examples.map((ex: any, idx: number) => (
                          <div key={idx} className="space-y-1">
                            {ex.desc && <p className="text-sm ml-1">{ex.desc}</p>}
                            <TerminalCommand
                              command={ex.cmd ?? ex.command ?? String(ex)}
                              copy={true}
                              wrap="wrap"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {hasOptions && (
                    <div className="space-y-2">
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value={`options-${name}`} className="border-[hsl(var(--border))] rounded-md">
                          <AccordionTrigger className="text-lg font-semibold py-3 flex items-center justify-between">
                            <span>Available Options</span>
                            <span className="sr-only">Toggle options</span>
                          </AccordionTrigger>

                          <AccordionContent>
                            <div className="pt-4">
                              <Table
                                columns={[
                                  { key: "option", title: "Option", width: "25%" },
                                  { key: "description", title: "Description" },
                                  {
                                    key: "default",
                                    title: "Default",
                                    width: "15%",
                                    render: (val: any) => (
                                      <Badge variant="soft" color="success">
                                        {String(val)}
                                      </Badge>
                                    )
                                  }
                                ]}
                                data={cmd.options}
                                variant="minimal"
                                rowKey="option"
                                size="sm"
                                selectable={false}
                                pagination={false}
                                className={`
                                  border border-[hsl(var(--border))]
                                  [&_td]:border [&_td]:border-[hsl(var(--border))]
                                  [&_th]:border [&_th]:border-[hsl(var(--border))]
                                `}
                              />
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  )}

                  {/* Usage tip area */}
                  {usage && (
                    <div className="border border-[hsl(var(--border))] rounded-md p-4">
                      <div className="flex items-start gap-3">
                        <span className="text-primary/90 font-semibold">💡</span>
                        <div>
                          <p className="text-sm font-semibold text-foreground">Tip</p>
                          <p className="text-sm text-muted-foreground">{usage}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </section>

        {/* Important notes */}
        <Card className="bg-[hsl(var(--surface))] focus-within:ring-0 focus-within:ring-offset-0">
          <CardHeader>
            <CardTitle>Important Notes</CardTitle>
          </CardHeader>

          <CardContent className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-2">

              {/* Case Insensitive */}
              <div className="flex gap-3 border border-[hsl(var(--border))] rounded-md p-4">
                <CaseSensitive className="w-6 h-6 text-muted-foreground" />
                <div>
                  <h4 className="font-semibold">Case Insensitive</h4>
                  <p className="text-sm text-muted-foreground">
                    Component names are normalized —
                    <code className="px-1 py-0.5 rounded bg-muted text-xs">button</code>,{" "}
                    <code className="px-1 py-0.5 rounded bg-muted text-xs">Button</code>, and{" "}
                    <code className="px-1 py-0.5 rounded bg-muted text-xs">BUTTON</code> all become{" "}
                    <code className="px-1 py-0.5 rounded bg-muted text-xs">Button</code>.
                  </p>
                </div>
              </div>

              {/* Always Use @latest */}
              <div className="flex gap-3 border border-[hsl(var(--border))] rounded-md p-4">
                <Package className="w-6 h-6 text-muted-foreground" />
                <div>
                  <h4 className="font-semibold">Always Use @latest</h4>
                  <p className="text-sm text-muted-foreground">
                    Use <code className="px-1 py-0.5 rounded bg-muted text-xs">npx screenui-cli@latest</code>
                    to ensure the newest registry and bugfixes.
                  </p>
                </div>
              </div>

              {/* Config File */}
              <div className="flex gap-3 border border-[hsl(var(--border))] rounded-md p-4">
                <Settings className="w-6 h-6 text-muted-foreground" />
                <div>
                  <h4 className="font-semibold">Config File</h4>
                  <p className="text-sm text-muted-foreground">
                    Your <code className="px-1 py-0.5 rounded bg-muted text-xs">screenui.config.json</code>
                    holds preferences. Use <code className="px-1 py-0.5 rounded bg-muted text-xs">init --force</code> to reset safely.
                  </p>
                </div>
              </div>

              {/* Lock File */}
              <div className="flex gap-3 border border-[hsl(var(--border))] rounded-md p-4">
                <Lock className="w-6 h-6 text-muted-foreground" />
                <div>
                  <h4 className="font-semibold">Lock File</h4>
                  <p className="text-sm text-muted-foreground">
                    The <code className="px-1 py-0.5 rounded bg-muted text-xs">screenui.lock.json</code>
                    keeps installed versions - don’t delete it.
                  </p>
                </div>
              </div>

            </div>

          </CardContent>
        </Card>
      </div>
    </main>
  );
}
