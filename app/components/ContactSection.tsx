'use client';

import { motion } from 'framer-motion';
import { Mail, MessageCircle, Github, Linkedin } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { siteConfig } from '@/lib/site.config';

export function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      color: 'hover:bg-red-500',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: siteConfig.phone,
      href: `https://wa.me/${siteConfig.whatsapp}`,
      color: 'hover:bg-green-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@felipebianchini2006',
      href: siteConfig.github,
      color: 'hover:bg-gray-700',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Felipe Pacheco Bianchini',
      href: siteConfig.linkedin,
      color: 'hover:bg-blue-600',
    },
  ];

  return (
    <section className="py-20 bg-accent/30" id="contact">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Vamos Conversar?"
          subtitle="Entre em contato comigo através de qualquer uma das plataformas abaixo"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`
                  group relative bg-background rounded-xl p-6 border border-border
                  hover:border-primary hover:shadow-xl transition-all duration-300
                  hover:-translate-y-2 cursor-pointer
                `}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div
                    className={`
                    p-4 rounded-full bg-accent group-hover:text-white transition-all duration-300
                    ${method.color}
                  `}
                  >
                    <Icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {method.label}
                    </h3>
                    <p className="text-sm text-secondary break-all">
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
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-secondary max-w-2xl mx-auto">
            Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades
            para fazer parte da sua visão. Fique à vontade para entrar em contato!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
