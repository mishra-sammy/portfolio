import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function GlassCard({ children, className = '', hover = true, glow = false, ...props }) {
  const { isDark } = useTheme();

  return (
    <motion.div
      className={`glass-card rounded-2xl p-6 gradient-border ${className}`}
      whileHover={hover ? { y: -6, scale: 1.01 } : {}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      style={{
        ...(glow && {
          boxShadow: isDark
            ? '0 0 20px rgba(59, 130, 246, 0.08)'
            : '0 0 20px rgba(37, 99, 235, 0.05)',
        }),
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
