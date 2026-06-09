import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiDownload } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import { navLinks, personalInfo } from '../utils/data';
import { useTheme } from '../context/ThemeContext';
import { navbarVariants, mobileMenuVariants } from '../animations/variants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section
      const sections = navLinks.map(link => link.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? isDark
              ? 'rgba(3, 7, 18, 0.85)'
              : 'rgba(255, 255, 255, 0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`
            : '1px solid transparent',
        }}
      >
        <div className="container-max flex items-center justify-between h-16 sm:h-18 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="text-xl font-bold relative z-10"
            style={{ fontFamily: 'var(--font-display)', textDecoration: 'none' }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="gradient-text">&lt;SM</span>
            <span style={{ color: isDark ? '#fff' : '#111827' }}> /&gt;</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="relative px-3 py-2 text-sm font-medium transition-colors duration-200"
                style={{
                  color: activeSection === link.href.substring(1)
                    ? '#3B82F6'
                    : isDark ? '#9CA3AF' : '#6B7280',
                  textDecoration: 'none',
                }}
              >
                {link.label}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                    style={{ background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <a
              href={personalInfo.resumeUrl}
              download
              className="btn-primary text-xs"
              style={{ padding: '0.5rem 1rem' }}
            >
              <FiDownload size={14} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-xl cursor-pointer"
              style={{
                background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
                border: 'none',
                color: isDark ? '#fff' : '#111827',
              }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="mobile-menu-overlay lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 w-72 z-50 lg:hidden flex flex-col"
              style={{
                background: isDark ? '#0a0f1e' : '#FFFFFF',
                borderLeft: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
              }}
            >
              <div className="flex items-center justify-between p-4 border-b"
                style={{ borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }}
              >
                <span className="text-lg font-bold gradient-text" style={{ fontFamily: 'var(--font-display)' }}>
                  Menu
                </span>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg cursor-pointer"
                  style={{
                    background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
                    border: 'none',
                    color: isDark ? '#fff' : '#111827',
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close menu"
                >
                  <HiX size={16} />
                </motion.button>
              </div>

              <div className="flex-1 overflow-y-auto py-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="block px-6 py-3 text-sm font-medium transition-colors"
                    style={{
                      color: activeSection === link.href.substring(1)
                        ? '#3B82F6'
                        : isDark ? '#9CA3AF' : '#6B7280',
                      background: activeSection === link.href.substring(1)
                        ? isDark ? 'rgba(59,130,246,0.08)' : 'rgba(37,99,235,0.08)'
                        : 'transparent',
                      textDecoration: 'none',
                      borderLeft: activeSection === link.href.substring(1) ? '3px solid #3B82F6' : '3px solid transparent',
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="p-4 border-t" style={{ borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }}>
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="btn-primary w-full justify-center text-sm"
                >
                  <FiDownload size={14} />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
