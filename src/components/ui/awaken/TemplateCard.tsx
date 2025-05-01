import { ExternalLink, ArrowRight } from 'lucide-react';
import { Template } from '@/components/data/templates';

export default function TemplateCard(template: Template) {
  return (
    <div className="group relative border border-[hsl(var(--border))] rounded-lg p-6 hover:border-zinc-600 transition-colors bg-[hsl(var(--background))]">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[hsl(var(--foreground))]">{template.title}</h3>
          <p className="mt-2 text-sm text-[hsl(var(--foreground))]">{template.description}</p>
        </div>
        <ArrowRight className="w-5 h-5 text-[hsl(var(--foreground))] group-hover:text-zinc-300 transition-colors" />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {template.tags.map((tag, i) => (
          <span
            key={i}
            className="px-2 py-1 text-xs rounded-full bg-[hsl(var(--background))] text-[hsl(var(--foreground))] border border-[hsl(var(--border))]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4 justify-between">
        <a
          href={template.demoUrl}
          className="flex items-center gap-2 text-sm text-[hsl(var(--foreground))] hover:text-zinc-200 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="w-4 h-4" />
          Demo
        </a>
        <span className="px-2 py-1 text-xs rounded-full bg-purple-900 text-purple-300 border border-purple-700">
          {template.category}
        </span>
      </div>
    </div>
  );
}
