import { motion } from 'framer-motion';
import { FiArrowUp, FiHeart, FiDownload } from 'react-icons/fi';
import { navLinks, personalInfo, socialLinks } from '../utils/data';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer
      className="relative pt-16 pb-8 px-4 sm:px-6"
      style={{
        background: isDark
          ? 'linear-gradient(180deg, #030712 0%, #0a0f1e 100%)'
          : 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
      }}
    >
      <div className="container-max">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="text-2xl font-bold mb-4 inline-block" style={{ textDecoration: 'none', fontFamily: 'var(--font-display)' }}>
              <span className="gradient-text">&lt;SM</span>
              <span style={{ color: isDark ? '#fff' : '#111827' }}> /&gt;</span>
            </a>
            <p className="text-sm leading-relaxed mb-4" style={{ color: isDark ? '#9CA3AF' : '#6B7280' }}>
              Passionate full-stack developer building digital experiences that make a difference.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(link => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{
                      background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
                      color: link.color === '#FFFFFF' && !isDark ? '#111827' : link.color,
                    }}
                    whileHover={{ y: -2, scale: 1.1 }}
                    aria-label={link.name}
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: isDark ? '#E5E7EB' : '#374151' }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.slice(0, 5).map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-sm transition-colors"
                    style={{ color: isDark ? '#9CA3AF' : '#6B7280', textDecoration: 'none' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: isDark ? '#E5E7EB' : '#374151' }}>
              More
            </h4>
            <ul className="space-y-2.5">
              {navLinks.slice(5).map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-sm transition-colors"
                    style={{ color: isDark ? '#9CA3AF' : '#6B7280', textDecoration: 'none' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resume */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: isDark ? '#E5E7EB' : '#374151' }}>
              Resume
            </h4>
            <p className="text-sm mb-4" style={{ color: isDark ? '#9CA3AF' : '#6B7280' }}>
              Download my resume to learn more about my experience.
            </p>
            <a href={personalInfo.resumeUrl} download className="btn-primary text-xs">
              <FiDownload size={14} />
              Download CV
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-6"
          style={{ background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }}
        />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: isDark ? '#6B7280' : '#9CA3AF' }}>
            © {new Date().getFullYear()} {personalInfo.name}. Built with{' '}
            <FiHeart size={10} className="inline" style={{ color: '#EF4444' }} />{' '}
            using React & Tailwind CSS.
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer"
            style={{
              background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`,
              color: isDark ? '#9CA3AF' : '#6B7280',
            }}
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
          >
            <FiArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
