import TerminalCommand from "@/components/ui/main/TerminalCommand";
import { Sparkles } from "lucide-react";

interface StepCardProps {
  step: number;
  icon: React.ElementType;
  title: string;
  description: string;
  code?: string;
  isLast?: boolean;
}

export const StepCard = ({
  step,
  icon: Icon,
  title,
  description,
  code,
  isLast = false,
}: StepCardProps) => (
  <div className="flex gap-4 sm:gap-6 group">
    {/* Step Indicator */}
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[hsl(var(--foreground))] rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-[hsl(var(--background))]" />
        </div>
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-[hsl(var(--surface))] rounded-full flex items-center justify-center shadow-sm">
          <span className="text-xs font-bold text-[hsl(var(--forefround))]">{step}</span>
        </div>
      </div>
      {!isLast && <div className="w-px h-16 sm:h-20 bg-[hsl(var(--border))] mt-4"></div>}
    </div>

    {/* Step Content */}
    <div className="flex-1 pb-8 sm:pb-12">
      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[hsl(var(--foreground))]">{title}</h3>
      <p className="text-[hsl(var(--foreground)/0.7)] mb-4 text-sm sm:text-base leading-relaxed">{description}</p>

      {code && <TerminalCommand command={code} />}

      {step === 3 && (
        <div className="mt-4 p-4">
          <TerminalCommand
            command={`? Select a template: (Use arrow keys)
❯ nextjs
  vite-react`}
            copy={false}
          />
        </div>
      )}

      {step === 7 && (
        <div className="mt-4 p-4 sm:p-6 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--surface))]">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-5 w-5 text-[hsl(var(--color-border))]" />
            <span className="font-semibold text-[hsl(var(--foreground))]">Success!</span>
          </div>
          <p className="text-sm sm:text-base text-[hsl(var(--foreground)/0.8)]">
            Your project is now running at{" "}
            <code className="bg-[hsl(var(--background))] px-2 py-1 rounded font-mono text-sm border border-[hsl(var(--border))]">
              http://localhost:3000
            </code>
          </p>
        </div>
      )}
    </div>
  </div>
);
