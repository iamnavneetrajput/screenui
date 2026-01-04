import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/packages/Card";
import Link from "next/link";

import { Template } from "@/data/templates";
import { Clock, Layout, BookOpen, ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/packages/Badge";
import TerminalCommand from "@/components/ui/main/TerminalCommand";

export default function TemplateCard({ template }: { template: Template }) {
  const Icon = template.category === "Clock" ? Clock : Layout;

  return (
    <Card className="border border-border">
      <CardHeader className="flex flex-row justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-border">
            <Icon className="w-5 h-5 text-foreground" />
          </div>

          <div>
            <CardTitle className="text-base">{template.title}</CardTitle>
            <span className="text-[10px] uppercase tracking-wider">
              {template.category}
            </span>
          </div>
        </div>

        <span className="text-[10px] font-mono px-2 py-1 rounded border border-border">
          {template.version}
        </span>
      </CardHeader>

      <CardContent className="space-y-4">
        <CardDescription>{template.description}</CardDescription>

        <div className="flex flex-wrap gap-2">
          {template.tags.map((tag) => (
            <Badge variant='soft' color='success' key={tag}>{tag}</Badge>
          ))}
        </div>

        <div>
          <span className="text-[10px] uppercase tracking-widest">
            Includes
          </span>

          <div className="grid grid-cols-2 gap-2 mt-2">
            {template.support.map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500/80" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {template.terminalCommand && (
          <TerminalCommand command={template.terminalCommand} />
        )}

        <div className="flex items-center justify-between pt-2 border-t border-border">
          <Link
            href={template.docs}
            className="flex items-center gap-2 text-xs"
          >
            <BookOpen className="w-3.5 h-3.5" />
            Documentation
          </Link>

          <button className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300">
            Details <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
