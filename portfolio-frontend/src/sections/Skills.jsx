import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { skillCategories } from '../utils/data';
import { useTheme } from '../context/ThemeContext';
import { staggerContainer, staggerItem } from '../animations/variants';

export default function Skills() {
  const { isDark } = useTheme();

  return (
    <section id="skills" className="section-padding relative">
      <div className="orb orb-blue" style={{ width: '350px', height: '350px', bottom: '5%', left: '-8%' }} />

      <div className="container-max relative z-10">
        <SectionHeading title="Skills & Technologies" subtitle="What I Work With" />

        <motion.div
          className="grid gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {skillCategories.map((category, catIndex) => (
            <ScrollReveal key={category.title} delay={catIndex * 0.1}>
              <div className="mb-2">
                <h3
                  className="text-lg font-semibold mb-5 flex items-center gap-3"
                  style={{ color: isDark ? '#E5E7EB' : '#374151', fontFamily: 'var(--font-display)' }}
                >
                  <span
                    className="w-8 h-0.5 rounded-full"
                    style={{ background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)' }}
                  />
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {category.skills.map((skill, i) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        variants={staggerItem}
                        whileHover={{ y: -4, scale: 1.03 }}
                        className="glass-card rounded-xl p-4 flex flex-col items-center gap-3 cursor-default"
                      >
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center skill-icon-glow"
                          style={{
                            background: `${skill.color}15`,
                            border: `1px solid ${skill.color}25`,
                          }}
                        >
                          <Icon size={24} style={{ color: skill.color }} />
                        </div>
                        <span
                          className="text-sm font-medium text-center"
                          style={{ color: isDark ? '#E5E7EB' : '#374151' }}
                        >
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
