import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import GlassCard from '../components/GlassCard';
import ScrollReveal from '../components/ScrollReveal';
import { achievements } from '../utils/data';
import { useTheme } from '../context/ThemeContext';
import { staggerContainer, staggerItem } from '../animations/variants';

export default function Achievements() {
  const { isDark } = useTheme();

  return (
    <section id="achievements" className="section-padding relative bg-grid">
      <div className="orb orb-purple" style={{ width: '300px', height: '300px', bottom: '10%', right: '-5%' }} />

      <div className="container-max relative z-10">
        <SectionHeading title="Achievements" subtitle="Milestones" />

        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={i} variants={staggerItem}>
                <GlassCard className="h-full" glow>
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: `${item.color}15`,
                        border: `1px solid ${item.color}25`,
                      }}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon size={26} style={{ color: item.color }} />
                    </motion.div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3
                          className="text-base font-bold"
                          style={{ color: isDark ? '#fff' : '#111827', fontFamily: 'var(--font-display)' }}
                        >
                          {item.title}
                        </h3>
                        <span
                          className="text-xs font-medium px-2 py-0.5 rounded"
                          style={{
                            background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                            color: isDark ? '#6B7280' : '#9CA3AF',
                          }}
                        >
                          {item.year}
                        </span>
                      </div>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: isDark ? '#9CA3AF' : '#6B7280' }}
                      >
                        {item.description}
                      </p>
                    </div>
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
