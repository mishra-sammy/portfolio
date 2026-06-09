import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import GlassCard from '../components/GlassCard';
import AnimatedCounter from '../components/AnimatedCounter';
import ScrollReveal from '../components/ScrollReveal';
import { summary, aboutStats } from '../utils/data';
import { useTheme } from '../context/ThemeContext';
import { staggerContainer, staggerItem } from '../animations/variants';

export default function About() {
  const { isDark } = useTheme();

  return (
    <section id="about" className="section-padding relative bg-grid">
      {/* Background Orb */}
      <div className="orb orb-purple" style={{ width: '400px', height: '400px', top: '10%', right: '-10%' }} />

      <div className="container-max relative z-10">
        <SectionHeading title="About Me" subtitle="Introduction" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <ScrollReveal variant="fadeLeft">
            <div>
              <h3
                className="text-2xl sm:text-3xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-display)', color: isDark ? '#fff' : '#111827' }}
              >
                Passionate Developer & <span className="gradient-text">Computer Science Student</span>
              </h3>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: isDark ? '#9CA3AF' : '#6B7280' }}
              >
                {summary}
              </p>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: isDark ? '#9CA3AF' : '#6B7280' }}
              >
                Beyond academics, I am deeply passionate about staying at the forefront of emerging technologies. 
                From building interactive front-end applications to exploring cloud platforms like Google Cloud Vertex AI, 
                I continuously expand my technical repertoire to solve real-world problems through code.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Web Development', 'Data Structures', 'Cloud Computing', 'Problem Solving'].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium"
                    style={{
                      background: isDark ? 'rgba(59,130,246,0.1)' : 'rgba(37,99,235,0.08)',
                      color: isDark ? '#60A5FA' : '#2563EB',
                      border: `1px solid ${isDark ? 'rgba(59,130,246,0.2)' : 'rgba(37,99,235,0.15)'}`,
                    }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Stats Grid */}
          <ScrollReveal variant="fadeRight">
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {aboutStats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div key={stat.label} variants={staggerItem}>
                    <GlassCard className="text-center py-8" glow>
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                        style={{
                          background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))',
                        }}
                      >
                        <Icon size={22} style={{ color: '#3B82F6' }} />
                      </div>
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      <p
                        className="text-sm mt-2 font-medium"
                        style={{ color: isDark ? '#9CA3AF' : '#6B7280' }}
                      >
                        {stat.label}
                      </p>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
