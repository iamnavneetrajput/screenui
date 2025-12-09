'use client';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/packages/Card";

import { Badge } from "@/packages/Badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/packages/Accordion";

import { Table } from "@/packages/Table";

import TerminalCommand from "@/components/ui/main/TerminalCommand";
import IntroBanner from "@/components/ui/main/banner";
import DocsSwitchButton from "./DocsSwitchButton";

export default function ComponentDocsPage() {
  const commands = [
    {
      name: "init",
      description: "Initialize ScreenUI configuration in the current directory",
      example: "npx screenui init",
      options: [
        { option: "--yes", description: "Skip prompts and use default configuration", default: "false" },
        { option: "--force", description: "Overwrite existing config if present", default: "false" }
      ]
    },

    {
      name: "add",
      description: "Add one or more components to your project",
      example: "npx screenui add button card --lang ts --path src/components/ui",
      options: [
        { option: "--lang <lang>", description: "Language: ts or js", default: "ts" },
        { option: "--path <path>", description: "Target components directory", default: "./components" },
        { option: "--force", description: "Overwrite existing files", default: "false" },
        { option: "--silent", description: "Suppress non-error output", default: "false" }
      ]
    },

    {
      name: "diff",
      description: "Show differences between installed and latest component versions",
      example: "npx screenui diff button --full",
      options: [
        { option: "--breaking-only", description: "Show only breaking changes", default: "false" },
        { option: "--full", description: "Show full file diff", default: "false" }
      ]
    },

    {
      name: "doctor",
      description: "Run project health checks",
      example: "npx screenui doctor --fix",
      options: [
        { option: "--fix", description: "Attempt to automatically fix issues", default: "false" }
      ]
    },

    {
      name: "list",
      description: "List available templates or components",
      example: "npx screenui list --components --verbose",
      options: [
        { option: "--components", description: "List components instead of templates", default: "false" },
        { option: "--verbose", description: "Show additional details", default: "false" }
      ]
    },

    {
      name: "status",
      description: "Show installed components and their status",
      example: "npx screenui status --verbose",
      options: [
        { option: "--verbose", description: "Show extra information", default: "false" }
      ]
    },

    {
      name: "upgrade",
      description: "Upgrade installed components to the latest version",
      example: "npx screenui upgrade button card --all --force",
      options: [
        { option: "--all", description: "Upgrade all installed components", default: "false" },
        { option: "--force", description: "Overwrite even if version is up-to-date", default: "false" }
      ]
    }
  ];

  return (
    <main className="min-h-screen custom-container mx-auto pt-12">
      <IntroBanner
        title="Component Docs"
        description="All commands and options for installing, managing, and upgrading components."
        customButton={<DocsSwitchButton />}
      />

      <section
        aria-labelledby="commands-title"
        className="space-y-8 sm:space-y-10 pt-8"
      >
        {commands.map((cmd) => (
          <Card key={cmd.name} variant="ghost" className="focus-within:ring-0  focus-within:ring-ring focus-within:ring-offset-0">
            <CardHeader className="flex-col items-start">
              <CardTitle className="text-2xl sm:text-3xl flex items-center gap-3">
                {cmd.name}
              </CardTitle>
              <CardDescription>{cmd.description}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Example */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Example</h3>
                <TerminalCommand command={cmd.example} />
              </div>

              {/* Options */}
              {cmd.options.length > 0 && (
                <Accordion
                  type="multiple"
                  collapsible
                  variant="ghost"
                  className="w-full"
                >
                  <AccordionItem value="options" className="border-[hsl(var(--border))] roundded-md">
                    <AccordionTrigger className="text-xl font-bold py-3">
                      Available Options
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
                              render: (val) => (
                                <Badge variant="soft" color="success">
                                  {val}
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
                          className="
                          border border-[hsl(var(--border))]
                          [&_td]:border [&_td]:border-[hsl(var(--border))]
                          [&_th]:border [&_th]:border-[hsl(var(--border))]
                          "
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )}
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
