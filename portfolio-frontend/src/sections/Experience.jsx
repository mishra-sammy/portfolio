import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { experience } from '../utils/data';
import { useTheme } from '../context/ThemeContext';

export default function Experience() {
  const { isDark } = useTheme();

  return (
    <section id="experience" className="section-padding relative">
      <div className="orb orb-purple" style={{ width: '350px', height: '350px', top: '30%', left: '-8%' }} />

      <div className="container-max relative z-10">
        <SectionHeading title="Experience" subtitle="Professional Journey" />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div
            className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5"
            style={{
              background: 'linear-gradient(180deg, #3B82F6, #8B5CF6, #06B6D4)',
              transform: 'translateX(-50%)',
            }}
          />

          {experience.map((exp, i) => (
            <ScrollReveal
              key={exp.id}
              variant={i % 2 === 0 ? 'fadeLeft' : 'fadeRight'}
              delay={i * 0.15}
              className={`relative mb-12 ${
                i % 2 === 0
                  ? 'md:pr-[55%] md:text-right'
                  : 'md:pl-[55%] md:text-left'
              } pl-14 md:pl-0`}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-5 md:left-1/2 w-4 h-4 rounded-full"
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
              <div
                className="glass-card rounded-2xl p-6"
              >
                <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? 'md:justify-end' : ''} flex-wrap`}>
                  <span
                    className="px-2.5 py-1 rounded-md text-xs font-semibold"
                    style={{
                      background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))',
                      color: '#60A5FA',
                    }}
                  >
                    {exp.type}
                  </span>
                </div>

                <h3
                  className="text-lg font-bold mb-1"
                  style={{ color: isDark ? '#fff' : '#111827', fontFamily: 'var(--font-display)' }}
                >
                  {exp.role}
                </h3>

                <div
                  className={`flex items-center gap-4 mb-4 text-sm ${i % 2 === 0 ? 'md:justify-end' : ''} flex-wrap`}
                  style={{ color: isDark ? '#9CA3AF' : '#6B7280' }}
                >
                  <span className="flex items-center gap-1">
                    <FiBriefcase size={13} />
                    {exp.organization}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiCalendar size={13} />
                    {exp.duration}
                  </span>
                </div>

                <ul className={`space-y-2 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                  {exp.description.map((desc, j) => (
                    <li
                      key={j}
                      className="text-sm leading-relaxed flex items-start gap-2"
                      style={{
                        color: isDark ? '#9CA3AF' : '#6B7280',
                        flexDirection: i % 2 === 0 ? 'row-reverse' : 'row',
                      }}
                    >
                      <span className="text-blue-400 mt-1 shrink-0">▸</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className={`flex flex-wrap gap-2 mt-4 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                  {exp.tech.map(t => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-xs font-medium"
                      style={{
                        background: isDark ? 'rgba(59,130,246,0.1)' : 'rgba(37,99,235,0.08)',
                        color: isDark ? '#60A5FA' : '#2563EB',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
