import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';

export default function SectionHeading({ title, subtitle, align = 'center' }) {
  return (
    <motion.div
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <motion.span
        className="inline-block text-sm font-semibold tracking-[0.2em] uppercase mb-3"
        style={{
          background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {subtitle}
      </motion.span>
      <h2
        className="text-display text-3xl sm:text-4xl md:text-5xl font-extrabold"
      >
        {title}
      </h2>
      <div className="mt-4 mx-auto" style={{ maxWidth: align === 'center' ? '80px' : 'none' }}>
        <motion.div
          className="h-1 rounded-full"
          style={{
            background: 'linear-gradient(90deg, #3B82F6, #8B5CF6, #06B6D4)',
            width: '80px',
            margin: align === 'center' ? '0 auto' : '0',
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}
