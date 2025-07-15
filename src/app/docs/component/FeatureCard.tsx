import { FC } from "react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

export const FeatureCard: FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="group p-4 sm:p-6 rounded-lg border border-[hsl(var(--border))] hover:border-[hsl(var(--border)/0.8)] bg-[hsl(var(--surface))] transition-all duration-300 hover:shadow-md">
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-md bg-[hsl(var(--border)/0.15)] group-hover:bg-[hsl(var(--border)/0.25)] transition-colors duration-300">
        <Icon className="h-5 w-5 text-[hsl(var(--color-border))]" />
      </div>
      <div>
        <h4 className="font-semibold text-[hsl(var(--foreground))]">{title}</h4>
        <p className="text-sm text-[hsl(var(--foreground)/0.7)]">{description}</p>
      </div>
    </div>
  </div>
);
