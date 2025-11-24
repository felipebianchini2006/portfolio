'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { SkillBadge } from './SkillBadge';
import { skillsByCategory } from '@/lib/skills';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import CloudIcon from '@mui/icons-material/Cloud';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ExtensionIcon from '@mui/icons-material/Extension';

export function SkillsSection() {
  const categories = [
    {
      title: 'Tecnologias Principais',
      skills: skillsByCategory.primary,
      icon: <CodeIcon className="text-2xl" />,
      color: 'from-blue-500 to-primary',
      category: 'primary',
    },
    {
      title: 'Frontend',
      skills: skillsByCategory.frontend,
      icon: <WebIcon className="text-2xl" />,
      color: 'from-purple-500 to-pink-500',
      category: 'frontend',
    },
    {
      title: 'Backend & Ferramentas',
      skills: skillsByCategory.backend,
      icon: <CloudIcon className="text-2xl" />,
      color: 'from-green-500 to-emerald-500',
      category: 'backend',
    },
    {
      title: 'Arquiteturas',
      skills: skillsByCategory.architecture,
      icon: <AccountTreeIcon className="text-2xl" />,
      color: 'from-orange-500 to-red-500',
      category: 'architecture',
    },
    {
      title: 'Tecnologias Secundárias',
      skills: skillsByCategory.secondary,
      icon: <ExtensionIcon className="text-2xl" />,
      color: 'from-indigo-500 to-purple-500',
      category: 'secondary',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/20" id="skills">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Habilidades & Tecnologias"
          subtitle="Experiência em diversas linguagens, frameworks e arquiteturas modernas"
        />

        <div className="grid gap-8 max-w-6xl mx-auto">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-accent rounded-2xl p-8 transition-all duration-300 [box-shadow:var(--elevation-2)] hover:[box-shadow:var(--elevation-8)]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white group-hover:scale-110 transition-transform [box-shadow:var(--elevation-4)]`}
                >
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    years={skill.years}
                    variant="primary"
                    category={category.category}
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
