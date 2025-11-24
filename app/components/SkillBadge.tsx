interface SkillBadgeProps {
  name: string;
  years?: string;
  variant?: 'primary' | 'secondary';
}

export function SkillBadge({ name, years, variant = 'primary' }: SkillBadgeProps) {
  return (
    <div
      className={`
        inline-flex items-center gap-2 px-4 py-2 rounded-lg
        transition-all duration-300 hover:scale-105
        ${variant === 'primary'
          ? 'bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20'
          : 'bg-accent text-foreground border border-border hover:bg-accent/80'
        }
      `}
    >
      <span className="font-medium text-sm md:text-base">{name}</span>
      {years && (
        <span className="text-xs text-secondary">({years})</span>
      )}
    </div>
  );
}
