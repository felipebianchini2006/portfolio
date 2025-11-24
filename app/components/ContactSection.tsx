'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { siteConfig } from '@/lib/site.config';
import { Box, Container, Card, CardContent, Typography } from '@mui/material';
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
      bgGradient: 'linear-gradient(135deg, #ef4444 0%, #ec4899 100%)',
      iconColor: '#ef4444',
    },
    {
      icon: WhatsAppIcon,
      label: 'WhatsApp',
      value: siteConfig.phone,
      href: `https://wa.me/${siteConfig.whatsapp}`,
      bgGradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      iconColor: '#10b981',
    },
    {
      icon: GitHubIcon,
      label: 'GitHub',
      value: '@felipebianchini2006',
      href: siteConfig.github,
      bgGradient: 'linear-gradient(135deg, #374151 0%, #111827 100%)',
      iconColor: '#374151',
    },
    {
      icon: LinkedInIcon,
      label: 'LinkedIn',
      value: 'Felipe Pacheco Bianchini',
      href: siteConfig.linkedin,
      bgGradient: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
      iconColor: '#2563eb',
    },
  ];

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: 12,
        background: 'linear-gradient(180deg, rgba(37, 99, 235, 0.02) 0%, rgba(37, 99, 235, 0.08) 100%)',
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          title="Vamos Conversar?"
          subtitle="Entre em contato comigo através de qualquer uma das plataformas abaixo"
        />

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
            gap: 4,
            maxWidth: '1400px',
            mx: 'auto',
          }}
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  component="a"
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  elevation={2}
                  sx={{
                    position: 'relative',
                    borderRadius: 4,
                    overflow: 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    textDecoration: 'none',
                    height: '100%',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: 16,
                      '& .hover-bg': {
                        opacity: 1,
                      },
                      '& .icon-box': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      },
                      '& .MuiSvgIcon-root': {
                        color: 'white',
                      },
                      '& .MuiTypography-root': {
                        color: 'white',
                      },
                      '& .value-text': {
                        color: 'rgba(255, 255, 255, 0.9)',
                      },
                    },
                  }}
                >
                  {/* Hover gradient background */}
                  <Box
                    className="hover-bg"
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: method.bgGradient,
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      zIndex: 0,
                    }}
                  />

                  {/* Content */}
                  <CardContent
                    sx={{
                      position: 'relative',
                      zIndex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      gap: 3,
                      p: 4,
                    }}
                  >
                    <Box
                      className="icon-box"
                      sx={{
                        p: 2.5,
                        borderRadius: 3,
                        backgroundColor: 'action.hover',
                        transition: 'all 0.3s ease',
                        boxShadow: 3,
                      }}
                    >
                      <Icon
                        sx={{
                          fontSize: '3rem',
                          color: method.iconColor,
                          transition: 'color 0.3s ease',
                        }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: 'text.primary',
                          mb: 1,
                          transition: 'color 0.3s ease',
                        }}
                      >
                        {method.label}
                      </Typography>
                      <Typography
                        className="value-text"
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          fontWeight: 500,
                          wordBreak: 'break-all',
                          transition: 'color 0.3s ease',
                        }}
                      >
                        {method.value}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Card
            elevation={2}
            sx={{
              maxWidth: '900px',
              mx: 'auto',
              mt: 8,
              borderRadius: 4,
              textAlign: 'center',
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Typography
                variant="h6"
                sx={{
                  color: 'text.primary',
                  lineHeight: 1.7,
                  mb: 2,
                }}
              >
                <Box
                  component="span"
                  sx={{ fontWeight: 700, color: 'primary.main' }}
                >
                  Estou sempre aberto
                </Box>{' '}
                a discutir novos projetos, ideias criativas ou oportunidades para fazer parte da
                sua visão.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                }}
              >
                Fique à vontade para entrar em contato através de qualquer uma das plataformas
                acima!
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
}
