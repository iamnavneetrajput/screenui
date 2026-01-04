'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/packages/Card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/packages/Accordion";
import TerminalCommand from "@/components/ui/main/TerminalCommand";
import IntroBanner from "@/components/ui/main/banner";
import DocsSwitchButton from "@/app/docs/components/DocsSwitchButton";
import { Terminal as TerminalIcon } from "lucide-react";
import { ComponentDoc, commands } from "@/data/componentdocs";

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
          <h1 className="text-2xl font-extrabold mb-3">Component CLI</h1>
          <p className="mt-2 opacity-90">
            Commands for installing, managing, and upgrading ScreenUI components.
          </p>
        </div>

        {/* Quick start */}
        <Card className="bg-secondary">
          <CardHeader className="flex flex-col gap-1">
            <CardTitle className="text-2xl sm:text-3xl flex items-center gap-3">
              <TerminalIcon className="w-6 h-6" />
              <span>quick start</span>
            </CardTitle>

            <CardDescription className="text-base sm:text-lg">
              Get up and running in 3 simple steps
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-8">
            <div>
              <p className="text-sm pb-2 font-semibold">1. Initialize</p>
              <TerminalCommand command="npx screenui-cli@latest init" copy wrap="wrap" />
            </div>

            <div>
              <p className="text-sm pb-2 font-semibold">2. Add component</p>
              <TerminalCommand command="npx screenui-cli@latest add button" copy wrap="wrap" />
            </div>

            <div>
              <p className="text-sm pb-2 font-semibold">3. Check status</p>
              <TerminalCommand command="npx screenui-cli@latest status" copy wrap="wrap" />
            </div>
          </CardContent>
        </Card>

        {/* Commands */}
        <section className="space-y-6">
          {commands.map((cmd: ComponentDoc) => {
            const examples = cmd.examples ?? [];

            return (
              <Card key={cmd.name} className="overflow-visible bg-secondary">
                <CardHeader className="flex-col items-start">
                  <CardTitle className="text-2xl sm:text-3xl flex items-center gap-3">
                    {cmd.icon ?? <TerminalIcon className="w-5 h-5" />}
                    <span className="font-semibold">{cmd.name}</span>
                    <code className="ml-2 text-sm font-mono bg-background rounded px-2 py-1">
                      screenui {cmd.name}
                    </code>
                  </CardTitle>

                  <CardDescription>{cmd.description}</CardDescription>

                  {cmd.longDescription && (
                    <p className="text-sm mt-2 max-w-prose">
                      {cmd.longDescription}
                    </p>
                  )}
                </CardHeader>

                <CardContent className="space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Example</h3>
                    <TerminalCommand command={cmd.example} copy wrap="wrap" />
                  </div>

                  {examples.length > 0 && (
                    <Accordion type="single" collapsible>
                      <AccordionItem value={`examples-${cmd.name}`}>
                        <AccordionTrigger className="text-lg font-semibold py-3">
                          More examples
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pt-4 grid gap-4">
                            {examples.map((ex, idx) => (
                              <div key={idx}>
                                {ex.desc && (
                                  <p className="text-sm mb-1">{ex.desc}</p>
                                )}
                                <TerminalCommand command={ex.cmd} copy wrap="wrap" />
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </section>
      </div>
    </main>
  );
}
