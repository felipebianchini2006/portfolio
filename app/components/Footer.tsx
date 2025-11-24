import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/site.config';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: siteConfig.github,
      icon: Github,
      label: 'GitHub Profile',
    },
    {
      name: 'LinkedIn',
      href: siteConfig.linkedin,
      icon: Linkedin,
      label: 'LinkedIn Profile',
    },
    {
      name: 'Email',
      href: `mailto:${siteConfig.email}`,
      icon: Mail,
      label: 'Send Email',
    },
    {
      name: 'WhatsApp',
      href: `https://wa.me/${siteConfig.whatsapp}`,
      icon: MessageCircle,
      label: 'WhatsApp Contact',
    },
  ];

  return (
    <footer className="bg-accent border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-background hover:bg-primary hover:text-white transition-all hover:scale-110"
                  aria-label={link.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-secondary text-sm">
            <p>
              © {currentYear} {siteConfig.author}. Todos os direitos reservados.
            </p>
            <p className="mt-1">
              Desenvolvido com Next.js, TypeScript e Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
