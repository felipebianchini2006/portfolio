'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/site.config';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export function HeroSection() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div
                className="px-6 py-3 bg-primary/10 backdrop-blur-sm rounded-full [box-shadow:var(--elevation-2)]"
              >
                <span className="text-primary font-semibold text-sm md:text-base">
                  👋 Bem-vindo ao meu Portfolio
                </span>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground mb-6 leading-tight">
              Olá, eu sou <br />
              <span className="bg-gradient-to-r from-primary via-primary-light to-purple-500 bg-clip-text text-transparent">
                Felipe Pacheco
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-3xl text-foreground font-semibold mb-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Full-Stack Developer
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-secondary mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Especializado em{' '}
            <span className="text-primary font-bold">.NET</span>,{' '}
            <span className="text-primary font-bold">Java</span>,{' '}
            <span className="text-primary font-bold">React</span> e arquiteturas modernas como{' '}
            <span className="text-primary font-bold">DDD</span>,{' '}
            <span className="text-primary font-bold">Clean Architecture</span> e{' '}
            <span className="text-primary font-bold">Microserviços</span>
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-secondary mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            📚 Estudante de Análise e Desenvolvimento de Sistemas na Fatec Jales
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-5 justify-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-semibold hover:scale-105 transition-all [box-shadow:var(--elevation-4)] hover:[box-shadow:var(--elevation-8)]"
            >
              <RocketLaunchIcon className="text-xl group-hover:rotate-12 transition-transform" />
              Ver Projetos
            </button>

            <div className="flex flex-wrap gap-4">
              <a
                href={siteConfig.cvPT}
                download
                className="group inline-flex items-center gap-2 px-6 py-4 bg-white dark:bg-accent text-foreground rounded-xl font-semibold hover:bg-primary hover:text-white transition-all [box-shadow:var(--elevation-2)] hover:[box-shadow:var(--elevation-4)]"
              >
                <DownloadIcon className="text-xl group-hover:animate-bounce" />
                CV (PT)
              </a>
              <a
                href={siteConfig.cvEN}
                download
                className="group inline-flex items-center gap-2 px-6 py-4 bg-white dark:bg-accent text-foreground rounded-xl font-semibold hover:bg-primary hover:text-white transition-all [box-shadow:var(--elevation-2)] hover:[box-shadow:var(--elevation-4)]"
              >
                <DownloadIcon className="text-xl group-hover:animate-bounce" />
                CV (EN)
              </a>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-transparent text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all [box-shadow:var(--elevation-2)] hover:[box-shadow:var(--elevation-4)]"
            >
              <EmailIcon className="text-xl group-hover:scale-110 transition-transform" />
              Contato
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={scrollToProjects}
            className="inline-flex flex-col items-center gap-2 text-secondary hover:text-primary transition-colors cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <span className="text-sm font-semibold uppercase tracking-wide">Descubra mais</span>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <KeyboardArrowDownIcon className="text-3xl" />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 to-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
