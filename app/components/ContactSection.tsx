'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { siteConfig } from '@/lib/site.config';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export function ContactSection() {
  const contactMethods = [
    {
      icon: EmailIcon,
      label: 'Email',
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      bgColor: 'from-red-500 to-pink-500',
      iconColor: 'text-red-500',
    },
    {
      icon: WhatsAppIcon,
      label: 'WhatsApp',
      value: siteConfig.phone,
      href: `https://wa.me/${siteConfig.whatsapp}`,
      bgColor: 'from-green-500 to-emerald-500',
      iconColor: 'text-green-500',
    },
    {
      icon: GitHubIcon,
      label: 'GitHub',
      value: '@felipebianchini2006',
      href: siteConfig.github,
      bgColor: 'from-gray-700 to-gray-900',
      iconColor: 'text-gray-700 dark:text-gray-400',
    },
    {
      icon: LinkedInIcon,
      label: 'LinkedIn',
      value: 'Felipe Pacheco Bianchini',
      href: siteConfig.linkedin,
      bgColor: 'from-blue-600 to-blue-700',
      iconColor: 'text-blue-600',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/30" id="contact">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Vamos Conversar?"
          subtitle="Entre em contato comigo através de qualquer uma das plataformas abaixo"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white dark:bg-accent rounded-2xl p-8 border-2 border-border hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3"
              >
                {/* Hover gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.bgColor} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`} />

                {/* Content */}
                <div className="relative flex flex-col items-center text-center gap-5">
                  <div className="p-5 rounded-2xl bg-accent group-hover:bg-white/20 transition-all duration-300 shadow-md">
                    <Icon className={`text-5xl ${method.iconColor} group-hover:text-white transition-colors`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-white mb-2 transition-colors">
                      {method.label}
                    </h3>
                    <p className="text-sm text-secondary group-hover:text-white/90 break-all transition-colors font-medium">
                      {method.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-3xl mx-auto bg-white dark:bg-accent rounded-2xl p-8 border-2 border-border shadow-lg">
            <p className="text-lg text-foreground leading-relaxed mb-4">
              <span className="font-bold text-primary">Estou sempre aberto</span> a discutir novos projetos,
              ideias criativas ou oportunidades para fazer parte da sua visão.
            </p>
            <p className="text-base text-secondary">
              Fique à vontade para entrar em contato através de qualquer uma das plataformas acima!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
