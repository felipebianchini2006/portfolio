'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { SkillBadge } from './SkillBadge';
import { skillsByCategory } from '@/lib/skills';

export function SkillsSection() {
  const categories = [
    {
      title: 'Tecnologias Principais',
      skills: skillsByCategory.primary,
    },
    {
      title: 'Frontend',
      skills: skillsByCategory.frontend,
    },
    {
      title: 'Backend & Ferramentas',
      skills: skillsByCategory.backend,
    },
    {
      title: 'Arquiteturas',
      skills: skillsByCategory.architecture,
    },
    {
      title: 'Tecnologias Secundárias',
      skills: skillsByCategory.secondary,
    },
  ];

  return (
    <section className="py-20 bg-accent/30" id="skills">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Habilidades & Tecnologias"
          subtitle="Experiência em diversas linguagens, frameworks e arquiteturas modernas"
        />

        <div className="grid gap-8 max-w-5xl mx-auto">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl p-6 border border-border"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    years={skill.years}
                    variant="primary"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
