import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload, FiMail } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaPython } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';
import ParticleBackground from '../components/ParticleBackground';
import MagneticButton from '../components/MagneticButton';
import { useTypewriter } from '../hooks/useTypewriter';
import { personalInfo, heroRoles, summary } from '../utils/data';
import { useTheme } from '../context/ThemeContext';
import { fadeUp, staggerContainer, staggerItem } from '../animations/variants';

const floatingIcons = [
  { Icon: FaReact, color: '#61DAFB', size: 28, top: '15%', left: '8%', delay: 0 },
  { Icon: FaJsSquare, color: '#F7DF1E', size: 24, top: '25%', right: '10%', delay: 1 },
  { Icon: FaHtml5, color: '#E34F26', size: 26, bottom: '30%', left: '5%', delay: 2 },
  { Icon: FaCss3Alt, color: '#1572B6', size: 24, top: '60%', right: '6%', delay: 0.5 },
  { Icon: FaNodeJs, color: '#339933', size: 26, bottom: '20%', right: '15%', delay: 1.5 },
  { Icon: SiMongodb, color: '#47A248', size: 22, top: '40%', left: '12%', delay: 2.5 },
  { Icon: FaPython, color: '#3776AB', size: 24, bottom: '40%', right: '20%', delay: 3 },
  { Icon: SiTailwindcss, color: '#06B6D4', size: 22, top: '70%', left: '18%', delay: 1.8 },
];

export default function Hero() {
  const typedText = useTypewriter(heroRoles, 80, 50, 2000);
  const { isDark } = useTheme();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: isDark ? '#030712' : '#FFFFFF' }}
    >
      {/* Background Effects */}
      <ParticleBackground />

      {/* Gradient Orbs */}
      <div className="orb orb-blue" style={{ width: '500px', height: '500px', top: '-10%', right: '-10%' }} />
      <div className="orb orb-purple" style={{ width: '400px', height: '400px', bottom: '-5%', left: '-5%' }} />
      <div className="orb orb-cyan" style={{ width: '300px', height: '300px', top: '40%', left: '50%' }} />

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, color, size, delay, ...pos }, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:block"
          style={{ ...pos, opacity: 0.15 }}
          animate={{
            y: [-15, 15, -15],
            rotate: [-5, 5, -5],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay,
          }}
        >
          <Icon size={size} color={color} />
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting Badge */}
        <motion.div variants={staggerItem} className="mb-6">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
            style={{
              background: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.08)',
              border: `1px solid ${isDark ? 'rgba(59, 130, 246, 0.2)' : 'rgba(37, 99, 235, 0.15)'}`,
              color: isDark ? '#60A5FA' : '#2563EB',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={staggerItem}
          className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4"
          style={{ color: isDark ? '#fff' : '#111827' }}
        >
          Hi, I'm{' '}
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        {/* Typewriter Role */}
        <motion.div variants={staggerItem} className="mb-6">
          <h2
            className="text-xl sm:text-2xl md:text-3xl font-semibold"
            style={{
              color: isDark ? '#E5E7EB' : '#374151',
              fontFamily: 'var(--font-display)',
              minHeight: '2.5rem',
            }}
          >
            <span>{typedText}</span>
            <span className="typewriter-cursor" />
          </h2>
        </motion.div>

        {/* Summary */}
        <motion.p
          variants={staggerItem}
          className="text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: isDark ? '#9CA3AF' : '#6B7280' }}
        >
          {summary.substring(0, 180)}...
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={staggerItem}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton>
            <a href="#projects" className="btn-primary text-base"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              View Projects
              <FiArrowDown size={16} />
            </a>
          </MagneticButton>

          <MagneticButton>
            <a href={personalInfo.resumeUrl} download className="btn-outline text-base">
              <FiDownload size={16} />
              Download CV
            </a>
          </MagneticButton>

          <MagneticButton>
            <a href="#contact" className="btn-outline text-base"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              <FiMail size={16} />
              Contact Me
            </a>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div
          className="w-6 h-10 rounded-full flex justify-center pt-2"
          style={{
            border: `2px solid ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'}`,
          }}
        >
          <motion.div
            className="w-1.5 h-3 rounded-full"
            style={{ background: 'linear-gradient(180deg, #3B82F6, #8B5CF6)' }}
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
