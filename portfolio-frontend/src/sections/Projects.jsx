import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import GlassCard from '../components/GlassCard';
import ScrollReveal from '../components/ScrollReveal';
import { projects } from '../utils/data';
import { useTheme } from '../context/ThemeContext';
import { staggerContainer, staggerItem } from '../animations/variants';

const categories = ['All', ...new Set(projects.map(p => p.category))];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');
  const { isDark } = useTheme();

  const filtered = projects.filter(p => {
    const matchCategory = activeFilter === 'All' || p.category === activeFilter;
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.tech.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchCategory && matchSearch;
  });

  return (
    <section id="projects" className="section-padding relative bg-grid">
      <div className="orb orb-cyan" style={{ width: '400px', height: '400px', top: '20%', right: '-10%' }} />

      <div className="container-max relative z-10">
        <SectionHeading title="Featured Projects" subtitle="My Work" />

        {/* Filters */}
        <ScrollReveal className="mb-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map(cat => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className="px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-colors"
                  style={{
                    background: activeFilter === cat
                      ? 'linear-gradient(135deg, #3B82F6, #8B5CF6)'
                      : isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                    color: activeFilter === cat ? '#fff' : isDark ? '#9CA3AF' : '#6B7280',
                    border: activeFilter === cat
                      ? 'none'
                      : `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Search projects or tech..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-input"
              style={{ maxWidth: '280px' }}
            />
          </div>
        </ScrollReveal>

        {/* Project Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className="h-full flex flex-col overflow-hidden" hover>
                  {/* Project Header / Image Placeholder */}
                  <div
                    className="h-44 rounded-xl mb-5 flex items-center justify-center relative overflow-hidden"
                    style={{
                      background: isDark
                        ? 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(139,92,246,0.08))'
                        : 'linear-gradient(135deg, rgba(37,99,235,0.06), rgba(124,58,237,0.06))',
                    }}
                  >
                    <div className="text-center p-4">
                      <h4 className="text-xl font-bold gradient-text">{project.title}</h4>
                      <p className="text-xs mt-1" style={{ color: isDark ? '#6B7280' : '#9CA3AF' }}>
                        {project.duration}
                      </p>
                    </div>
                    {/* Corner Badge */}
                    <span
                      className="absolute top-3 right-3 px-2 py-1 rounded-md text-xs font-medium"
                      style={{
                        background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                        color: '#fff',
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed mb-4 flex-1"
                    style={{ color: isDark ? '#9CA3AF' : '#6B7280' }}
                  >
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: isDark ? '#6B7280' : '#9CA3AF' }}>
                      Key Features
                    </p>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs" style={{ color: isDark ? '#9CA3AF' : '#6B7280' }}>
                          <span className="text-blue-400 mt-1">▸</span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map(tech => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-medium"
                        style={{
                          background: isDark ? 'rgba(59,130,246,0.1)' : 'rgba(37,99,235,0.08)',
                          color: isDark ? '#60A5FA' : '#2563EB',
                          border: `1px solid ${isDark ? 'rgba(59,130,246,0.2)' : 'rgba(37,99,235,0.15)'}`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Role */}
                  <p className="text-xs mb-4" style={{ color: isDark ? '#6B7280' : '#9CA3AF' }}>
                    <span className="font-semibold">Role:</span> {project.role}
                  </p>

                  {/* Links */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-xs flex-1 justify-center"
                      style={{ padding: '0.5rem' }}
                    >
                      <FiGithub size={14} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs flex-1 justify-center"
                      style={{ padding: '0.5rem' }}
                    >
                      <FiExternalLink size={14} />
                      Live Demo
                    </a>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p style={{ color: isDark ? '#6B7280' : '#9CA3AF' }}>
              No projects found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
