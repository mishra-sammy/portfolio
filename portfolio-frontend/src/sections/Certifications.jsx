import { motion } from 'framer-motion';
import { FiExternalLink, FiCalendar } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import GlassCard from '../components/GlassCard';
import ScrollReveal from '../components/ScrollReveal';
import { certifications } from '../utils/data';
import { useTheme } from '../context/ThemeContext';
import { staggerContainer, staggerItem } from '../animations/variants';

export default function Certifications() {
  const { isDark } = useTheme();

  return (
    <section id="certifications" className="section-padding relative">
      <div className="orb orb-cyan" style={{ width: '300px', height: '300px', top: '20%', left: '-5%' }} />

      <div className="container-max relative z-10">
        <SectionHeading title="Certifications" subtitle="Credentials" />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {certifications.map((cert) => {
            const Icon = cert.icon;
            return (
              <motion.div key={cert.id} variants={staggerItem}>
                <GlassCard className="h-full flex flex-col" glow>
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: `${cert.color}15`,
                        border: `1px solid ${cert.color}25`,
                      }}
                    >
                      <Icon size={22} style={{ color: cert.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-base font-bold leading-tight mb-1"
                        style={{ color: isDark ? '#fff' : '#111827', fontFamily: 'var(--font-display)' }}
                      >
                        {cert.name}
                      </h3>
                      <p className="text-sm" style={{ color: isDark ? '#60A5FA' : '#2563EB' }}>
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <p
                    className="text-sm leading-relaxed flex-1 mb-4"
                    style={{ color: isDark ? '#9CA3AF' : '#6B7280' }}
                  >
                    {cert.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4"
                    style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}` }}
                  >
                    <span className="flex items-center gap-1.5 text-xs" style={{ color: isDark ? '#6B7280' : '#9CA3AF' }}>
                      <FiCalendar size={12} />
                      {cert.date}
                    </span>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-medium transition-colors"
                      style={{ color: '#3B82F6', textDecoration: 'none' }}
                    >
                      Verify
                      <FiExternalLink size={12} />
                    </a>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
