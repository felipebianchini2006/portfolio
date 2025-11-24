import Link from 'next/link';
import { Project } from '@/lib/types';
import { SkillBadge } from './SkillBadge';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FolderIcon from '@mui/icons-material/Folder';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative bg-white dark:bg-accent rounded-2xl border-2 border-border overflow-hidden hover:border-primary/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3">
      {/* Top accent bar */}
      <div className="h-2 bg-gradient-to-r from-primary via-primary-light to-purple-500" />

      <div className="p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <FolderIcon className="text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-background hover:bg-primary hover:text-white transition-all hover:scale-110 shadow-sm"
              aria-label="View on GitHub"
            >
              <GitHubIcon className="text-xl" />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-background hover:bg-primary hover:text-white transition-all hover:scale-110 shadow-sm"
                aria-label="View demo"
              >
                <OpenInNewIcon className="text-xl" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-secondary text-base leading-relaxed mb-6 min-h-[3rem]">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <SkillBadge key={tech} name={tech} variant="secondary" />
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs font-medium text-secondary bg-accent px-3 py-1.5 rounded-full border border-border">
              +{project.technologies.length - 4} mais
            </span>
          )}
        </div>

        {/* Call to action */}
        <Link
          href={`/projects/${project.slug}`}
          className="group/link inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all border-2 border-primary/20 hover:border-primary"
        >
          Ver detalhes completos
          <ArrowForwardIcon className="text-lg group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
