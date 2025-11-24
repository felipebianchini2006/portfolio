import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/lib/types';
import { SkillBadge } from './SkillBadge';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative bg-accent rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-background hover:bg-primary hover:text-white transition-colors"
              aria-label="View on GitHub"
            >
              <Github size={18} />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background hover:bg-primary hover:text-white transition-colors"
                aria-label="View demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="text-secondary mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <SkillBadge key={tech} name={tech} variant="secondary" />
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs text-secondary self-center">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
        >
          Ver detalhes
          <ExternalLink size={16} />
        </Link>
      </div>
    </div>
  );
}
