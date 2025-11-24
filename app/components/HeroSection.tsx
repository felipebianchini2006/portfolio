'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/site.config';
import { Typography, Button, Chip, Box, Container } from '@mui/material';
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
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        pt: 8,
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ maxWidth: '1200px', mx: 'auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{ display: 'inline-block', marginBottom: 32 }}
            >
              <Chip
                label="👋 Bem-vindo ao meu Portfolio"
                sx={{
                  px: 2,
                  py: 3,
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  fontWeight: 600,
                  backgroundColor: 'primary.main',
                  color: 'white',
                  backdropFilter: 'blur(10px)',
                  boxShadow: 2,
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                    transform: 'scale(1.05)',
                  },
                  transition: 'all 0.3s ease',
                }}
              />
            </motion.div>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '3rem', md: '4.5rem', lg: '6rem' },
                fontWeight: 800,
                color: 'text.primary',
                mb: 4,
                lineHeight: 1.1,
              }}
            >
              Olá, eu sou <br />
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #60a5fa 50%, #a855f7 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Felipe Pacheco
              </Box>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 600,
                color: 'text.primary',
                mb: 3,
              }}
            >
              Full-Stack Developer
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1.125rem', md: '1.25rem' },
                fontWeight: 400,
                color: 'text.secondary',
                mb: 4,
                maxWidth: '900px',
                mx: 'auto',
                lineHeight: 1.8,
              }}
            >
              Especializado em{' '}
              <Box component="span" sx={{ color: 'primary.main', fontWeight: 700 }}>
                .NET
              </Box>
              ,{' '}
              <Box component="span" sx={{ color: 'primary.main', fontWeight: 700 }}>
                Java
              </Box>
              ,{' '}
              <Box component="span" sx={{ color: 'primary.main', fontWeight: 700 }}>
                React
              </Box>{' '}
              e arquiteturas modernas como{' '}
              <Box component="span" sx={{ color: 'primary.main', fontWeight: 700 }}>
                DDD
              </Box>
              ,{' '}
              <Box component="span" sx={{ color: 'primary.main', fontWeight: 700 }}>
                Clean Architecture
              </Box>{' '}
              e{' '}
              <Box component="span" sx={{ color: 'primary.main', fontWeight: 700 }}>
                Microserviços
              </Box>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.125rem' },
                color: 'text.secondary',
                mb: 8,
                maxWidth: '700px',
                mx: 'auto',
              }}
            >
              📚 Estudante de Análise e Desenvolvimento de Sistemas na Fatec Jales
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                justifyContent: 'center',
                mb: 12,
              }}
            >
              <Button
                onClick={scrollToProjects}
                variant="contained"
                size="large"
                startIcon={<RocketLaunchIcon />}
                sx={{
                  px: 4,
                  py: 2,
                  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  '&:hover': {
                    background: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)',
                    transform: 'scale(1.05)',
                  },
                  '& .MuiSvgIcon-root': {
                    transition: 'transform 0.3s ease',
                  },
                  '&:hover .MuiSvgIcon-root': {
                    transform: 'rotate(12deg)',
                  },
                }}
              >
                Ver Projetos
              </Button>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Button
                  component="a"
                  href={siteConfig.cvPT}
                  download
                  variant="outlined"
                  size="large"
                  startIcon={<DownloadIcon />}
                  sx={{
                    px: 3,
                    py: 2,
                    fontSize: '1rem',
                    fontWeight: 600,
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                      backgroundColor: 'primary.main',
                      color: 'white',
                    },
                    '& .MuiSvgIcon-root': {
                      transition: 'transform 0.3s ease',
                    },
                    '&:hover .MuiSvgIcon-root': {
                      animation: 'bounce 1s infinite',
                    },
                  }}
                >
                  CV (PT)
                </Button>
                <Button
                  component="a"
                  href={siteConfig.cvEN}
                  download
                  variant="outlined"
                  size="large"
                  startIcon={<DownloadIcon />}
                  sx={{
                    px: 3,
                    py: 2,
                    fontSize: '1rem',
                    fontWeight: 600,
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                      backgroundColor: 'primary.main',
                      color: 'white',
                    },
                    '& .MuiSvgIcon-root': {
                      transition: 'transform 0.3s ease',
                    },
                    '&:hover .MuiSvgIcon-root': {
                      animation: 'bounce 1s infinite',
                    },
                  }}
                >
                  CV (EN)
                </Button>
              </Box>

              <Button
                component="a"
                href="#contact"
                variant="outlined"
                size="large"
                startIcon={<EmailIcon />}
                sx={{
                  px: 4,
                  py: 2,
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                    backgroundColor: 'primary.main',
                    color: 'white',
                  },
                  '& .MuiSvgIcon-root': {
                    transition: 'transform 0.3s ease',
                  },
                  '&:hover .MuiSvgIcon-root': {
                    transform: 'scale(1.1)',
                  },
                }}
              >
                Contato
              </Button>
            </Box>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Button
              onClick={scrollToProjects}
              sx={{
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                color: 'text.secondary',
                textTransform: 'uppercase',
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                '&:hover': {
                  color: 'primary.main',
                  backgroundColor: 'transparent',
                },
              }}
            >
              <Typography variant="caption" sx={{ fontWeight: 600, letterSpacing: '0.1em' }}>
                Descubra mais
              </Typography>
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <KeyboardArrowDownIcon sx={{ fontSize: '2rem' }} />
              </motion.div>
            </Button>
          </motion.div>
        </Box>
      </Container>

      {/* Enhanced Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: -1,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '25%',
            left: '25%',
            width: 500,
            height: 500,
            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            animation: 'pulse 3s ease-in-out infinite',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '25%',
            right: '25%',
            width: 600,
            height: 600,
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(37, 99, 235, 0.2) 100%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            animation: 'pulse 3s ease-in-out infinite 1s',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 800,
            height: 800,
            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
          }}
        />
      </Box>
    </Box>
  );
}
