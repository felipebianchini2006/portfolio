import CodeIcon from '@mui/icons-material/Code';
import DataObjectIcon from '@mui/icons-material/DataObject';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import TerminalIcon from '@mui/icons-material/Terminal';

interface SkillBadgeProps {
  name: string;
  years?: string;
  variant?: 'primary' | 'secondary';
  category?: string;
}

const getIconForSkill = (name: string, category?: string) => {
  const iconClass = "text-lg";

  // Backend & DevOps
  if (['Docker', 'AWS', 'Azure DevOps', 'Git', 'GitHub'].includes(name)) {
    return <CloudIcon className={iconClass} />;
  }

  // Databases
  if (name.includes('SQL') || name.includes('Database')) {
    return <StorageIcon className={iconClass} />;
  }

  // Architecture
  if (category === 'architecture' || ['DDD', 'MVC', 'Clean Architecture', 'Microserviços'].includes(name)) {
    return <DataObjectIcon className={iconClass} />;
  }

  // Terminal/CLI tools
  if (['Go', 'Ruby', 'PHP'].includes(name)) {
    return <TerminalIcon className={iconClass} />;
  }

  // Default code icon
  return <CodeIcon className={iconClass} />;
};

export function SkillBadge({ name, years, variant = 'primary', category }: SkillBadgeProps) {
  return (
    <div
      className={`
        group inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-medium text-sm md:text-base
        transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-default
        [box-shadow:var(--elevation-2)] hover:[box-shadow:var(--elevation-8)]
        ${variant === 'primary'
          ? 'bg-gradient-to-r from-primary/15 to-primary/10 text-primary hover:shadow-primary/20'
          : 'bg-white dark:bg-accent text-foreground'
        }
      `}
    >
      <span className="group-hover:scale-125 transition-transform">
        {getIconForSkill(name, category)}
      </span>
      <span className="font-semibold">{name}</span>
      {years && (
        <span className="text-xs font-medium text-secondary bg-background/50 px-2.5 py-1 rounded-full">
          {years}
        </span>
      )}
    </div>
  );
}
