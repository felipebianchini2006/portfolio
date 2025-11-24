'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code2, Calendar } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import { workExperiences, educationExperiences } from '@/lib/experiences';
import type { Metadata } from 'next';

export default function AboutPage() {
  const techTimeline = [
    { tech: 'C# .NET', years: '3 anos', description: 'Desktop e Web com ASP.NET' },
    { tech: 'HTML, CSS, JavaScript', years: '4 anos', description: 'Desenvolvimento web completo' },
    { tech: 'Estrutura de Dados & Algoritmos', years: '4 anos', description: 'Base sólida em CS' },
    { tech: 'React', years: '2 anos', description: 'Aplicações web modernas' },
    { tech: 'Angular', years: '1 ano', description: 'Framework enterprise' },
    { tech: 'Java', years: '1 ano', description: 'Backend com Spring Boot' },
    { tech: 'PHP', years: '2 anos', description: 'Desenvolvimento web tradicional' },
    { tech: 'Ruby & Go', years: '~3 meses cada', description: 'Linguagens modernas' },
    { tech: 'Docker, AWS, Azure DevOps', years: '1 ano', description: 'DevOps e cloud' },
    { tech: 'Git & GitHub', years: 'Desde 2019', description: 'Versionamento de código' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre Mim
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-secondary leading-relaxed mb-4">
              Olá! Sou <span className="text-primary font-semibold">Felipe Pacheco Bianchini</span>,
              um desenvolvedor Full-Stack apaixonado por criar soluções tecnológicas que fazem a diferença.
            </p>
            <p className="text-lg text-secondary leading-relaxed mb-4">
              Atualmente cursando <span className="text-primary font-semibold">Análise e Desenvolvimento de Sistemas na Fatec Jales</span>,
              com previsão de conclusão em 2026, somando 4 anos de experiência prática em desenvolvimento de software.
            </p>
            <p className="text-lg text-secondary leading-relaxed">
              Minha jornada começou com o ensino técnico em Análise e Desenvolvimento de Sistemas,
              onde desenvolvi uma base sólida em programação e estruturas de dados. Desde então,
              venho aprimorando minhas habilidades em diversas tecnologias e arquiteturas modernas.
            </p>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <SectionTitle
            title="Experiência Profissional"
            align="left"
          />
          <div className="space-y-6">
            {workExperiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-primary pb-8 last:pb-0"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background" />
                <div className="bg-accent rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {exp.type === 'freelance' ? <Code2 size={24} /> : <Briefcase size={24} />}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium mb-2">{exp.company}</p>
                      <div className="flex items-center gap-2 text-secondary text-sm">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                  <p className="text-secondary leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <SectionTitle
            title="Formação Acadêmica"
            align="left"
          />
          <div className="space-y-6">
            {educationExperiences.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-primary pb-8 last:pb-0"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background" />
                <div className="bg-accent rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <GraduationCap size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {edu.title}
                      </h3>
                      <p className="text-primary font-medium mb-2">{edu.company}</p>
                      <div className="flex items-center gap-2 text-secondary text-sm">
                        <Calendar size={16} />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                  <p className="text-secondary leading-relaxed">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <SectionTitle
            title="Experiência com Tecnologias"
            subtitle="Timeline detalhada do meu desenvolvimento técnico"
            align="left"
          />
          <div className="grid md:grid-cols-2 gap-4">
            {techTimeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-accent rounded-lg p-5 border border-border hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-foreground">{item.tech}</h3>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {item.years}
                  </span>
                </div>
                <p className="text-sm text-secondary">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 bg-primary/10 rounded-xl border border-primary/20">
            <div className="text-4xl font-bold text-primary mb-2">4</div>
            <div className="text-sm text-secondary">Anos de Experiência</div>
          </div>
          <div className="text-center p-6 bg-primary/10 rounded-xl border border-primary/20">
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-secondary">Tecnologias Dominadas</div>
          </div>
          <div className="text-center p-6 bg-primary/10 rounded-xl border border-primary/20">
            <div className="text-4xl font-bold text-primary mb-2">4</div>
            <div className="text-sm text-secondary">Arquiteturas</div>
          </div>
          <div className="text-center p-6 bg-primary/10 rounded-xl border border-primary/20">
            <div className="text-4xl font-bold text-primary mb-2">2026</div>
            <div className="text-sm text-secondary">Conclusão Fatec</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
