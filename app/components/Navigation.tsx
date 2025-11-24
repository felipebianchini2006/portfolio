'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';

export function Navigation() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#projects', label: 'Projetos' },
    { href: '/about', label: 'Sobre' },
    { href: '/#contact', label: 'Contato' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return pathname === '/';
    return pathname === href;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-background/90 backdrop-blur-xl shadow-xl border-b-2 border-primary/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 text-2xl font-extrabold"
          >
            <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white group-hover:scale-110 transition-transform shadow-lg">
              <CodeIcon className="text-2xl" />
            </div>
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Felipe
            </span>
            <span className="text-foreground">.dev</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2.5 font-semibold rounded-xl transition-all ${
                  isActive(link.href)
                    ? 'text-white bg-gradient-to-r from-primary to-primary-dark shadow-lg'
                    : 'text-foreground hover:bg-accent hover:text-primary'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-white rounded-t-full" />
                )}
              </Link>
            ))}

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="ml-4 p-3 rounded-xl bg-accent hover:bg-primary hover:text-white transition-all hover:scale-110 shadow-md border-2 border-border hover:border-primary"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2.5 rounded-xl bg-accent hover:bg-primary hover:text-white transition-all shadow-md"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
              </button>
            )}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-accent hover:bg-primary hover:text-white transition-all shadow-md"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <CloseIcon className="text-2xl" /> : <MenuIcon className="text-2xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t-2 border-border bg-white/95 dark:bg-background/95 backdrop-blur-xl shadow-xl">
            <div className="flex flex-col py-6 gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-semibold px-6 py-3 rounded-xl transition-all ${
                    isActive(link.href)
                      ? 'text-white bg-gradient-to-r from-primary to-primary-dark shadow-lg'
                      : 'text-foreground hover:bg-accent hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
