'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { ProjectCard } from './ProjectCard';
import { getFeaturedProjects } from '@/lib/projects';

export function ProjectsSection() {
  const projects = getFeaturedProjects();

  return (
    <section className="py-24 bg-gradient-to-b from-accent/20 to-background" id="projects">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Projetos em Destaque"
          subtitle="Seleção dos meus melhores trabalhos e projetos desenvolvidos"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
