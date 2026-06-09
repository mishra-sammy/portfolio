import { motion } from 'framer-motion';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { education } from '../utils/data';
import { useTheme } from '../context/ThemeContext';

export default function Education() {
  const { isDark } = useTheme();

  return (
    <section id="education" className="section-padding relative bg-grid">
      <div className="orb orb-blue" style={{ width: '350px', height: '350px', bottom: '10%', right: '-8%' }} />

      <div className="container-max relative z-10">
        <SectionHeading title="Education" subtitle="Academic Journey" />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div
            className="absolute left-5 md:left-8 top-0 bottom-0 w-0.5"
            style={{
              background: 'linear-gradient(180deg, #3B82F6, #8B5CF6, #06B6D4)',
            }}
          />

          {education.map((edu, i) => (
            <ScrollReveal key={edu.id} delay={i * 0.15} className="relative mb-10 pl-14 md:pl-20">
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-5 md:left-8 w-4 h-4 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                  border: `3px solid ${isDark ? '#030712' : '#fff'}`,
                  transform: 'translate(-50%, 6px)',
                  zIndex: 2,
                }}
                whileInView={{ scale: [0, 1.2, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />

              {/* Card */}
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <HiOutlineAcademicCap size={18} style={{ color: '#3B82F6' }} />
                      <h3
                        className="text-lg font-bold"
                        style={{ color: isDark ? '#fff' : '#111827', fontFamily: 'var(--font-display)' }}
                      >
                        {edu.degree}
                      </h3>
                    </div>
                    <p className="text-sm flex items-center gap-1" style={{ color: isDark ? '#9CA3AF' : '#6B7280' }}>
                      <FiMapPin size={12} />
                      {edu.institution}
                    </p>
                  </div>
                  <div className="text-right">
                    <span
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold"
                      style={{
                        background: edu.status === 'Currently Pursuing'
                          ? 'rgba(16, 185, 129, 0.15)'
                          : 'rgba(59, 130, 246, 0.15)',
                        color: edu.status === 'Currently Pursuing' ? '#10B981' : '#60A5FA',
                      }}
                    >
                      {edu.status}
                    </span>
                    <p className="text-xs flex items-center gap-1 mt-1 justify-end" style={{ color: isDark ? '#6B7280' : '#9CA3AF' }}>
                      <FiCalendar size={11} />
                      {edu.duration}
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed" style={{ color: isDark ? '#9CA3AF' : '#6B7280' }}>
                  {edu.description}
                </p>

                {edu.cgpa && (
                  <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg"
                    style={{
                      background: isDark ? 'rgba(59,130,246,0.08)' : 'rgba(37,99,235,0.06)',
                    }}
                  >
                    <span className="text-xs font-semibold" style={{ color: '#60A5FA' }}>
                      CGPA: {edu.cgpa}
                    </span>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
