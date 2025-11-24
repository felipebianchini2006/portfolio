'use client';

import { Download, ArrowRight, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/lib/site.config';
import { motion } from 'framer-motion';

export function HeroSection() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Olá, eu sou <br />
              <span className="text-primary">Felipe Pacheco Bianchini</span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-secondary mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Full-Stack Developer especializado em <span className="text-primary font-semibold">.NET</span>,
            <span className="text-primary font-semibold"> Java</span>,
            <span className="text-primary font-semibold"> React</span> e arquiteturas modernas
          </motion.p>

          <motion.p
            className="text-lg text-secondary mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Estudante de Análise e Desenvolvimento de Sistemas na Fatec Jales.
            Experiência com DDD, Clean Architecture e Microserviços.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-all hover:gap-3 shadow-lg hover:shadow-xl"
            >
              Ver Projetos
              <ArrowRight size={20} />
            </button>

            <div className="flex gap-2">
              <a
                href={siteConfig.cvPT}
                download
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-foreground rounded-lg font-medium hover:bg-primary hover:text-white transition-all border border-border"
              >
                <Download size={20} />
                CV (PT)
              </a>
              <a
                href={siteConfig.cvEN}
                download
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-foreground rounded-lg font-medium hover:bg-primary hover:text-white transition-all border border-border"
              >
                <Download size={20} />
                CV (EN)
              </a>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-all border-2 border-primary"
            >
              Contato
              <ArrowRight size={20} />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={scrollToProjects}
            className="inline-flex flex-col items-center gap-2 text-secondary hover:text-primary transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="text-sm font-medium">Scroll para ver mais</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown size={24} />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
