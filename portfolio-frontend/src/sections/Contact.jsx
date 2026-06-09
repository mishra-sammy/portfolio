import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiPhone, FiMapPin, FiLoader } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import GlassCard from '../components/GlassCard';
import ScrollReveal from '../components/ScrollReveal';
import Toast from '../components/Toast';
import { personalInfo, socialLinks } from '../utils/data';
import { useTheme } from '../context/ThemeContext';
import { submitContactForm } from '../services/api';

export default function Contact() {
  const { isDark } = useTheme();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email address';
    if (!form.subject.trim()) errs.subject = 'Subject is required';
    if (!form.message.trim()) errs.message = 'Message is required';
    else if (form.message.trim().length < 10) errs.message = 'Message must be at least 10 characters';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setIsSubmitting(true);
    try {
      await submitContactForm(form);
      setToast({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setToast({ type: 'error', message: 'Failed to send message. Please try again or email me directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  return (
    <section id="contact" className="section-padding relative bg-grid">
      <div className="orb orb-blue" style={{ width: '400px', height: '400px', top: '10%', right: '-10%' }} />
      <div className="orb orb-purple" style={{ width: '300px', height: '300px', bottom: '10%', left: '-8%' }} />

      <div className="container-max relative z-10">
        <SectionHeading title="Get In Touch" subtitle="Contact" />

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <ScrollReveal variant="fadeLeft" className="lg:col-span-2">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4"
                  style={{ color: isDark ? '#fff' : '#111827', fontFamily: 'var(--font-display)' }}
                >
                  Let's work together
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: isDark ? '#9CA3AF' : '#6B7280' }}>
                  I'm currently open to new opportunities and interesting projects. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <a href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl transition-colors"
                  style={{
                    background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                    textDecoration: 'none',
                    color: isDark ? '#E5E7EB' : '#374151',
                  }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(59,130,246,0.12)' }}
                  >
                    <FiMail size={18} style={{ color: '#3B82F6' }} />
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: isDark ? '#6B7280' : '#9CA3AF' }}>Email</p>
                    <p className="text-sm font-medium">{personalInfo.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl"
                  style={{ background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)' }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(139,92,246,0.12)' }}
                  >
                    <FiPhone size={18} style={{ color: '#8B5CF6' }} />
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: isDark ? '#6B7280' : '#9CA3AF' }}>Phone</p>
                    <p className="text-sm font-medium" style={{ color: isDark ? '#E5E7EB' : '#374151' }}>
                      {personalInfo.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl"
                  style={{ background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)' }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(6,182,212,0.12)' }}
                  >
                    <FiMapPin size={18} style={{ color: '#06B6D4' }} />
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: isDark ? '#6B7280' : '#9CA3AF' }}>Location</p>
                    <p className="text-sm font-medium" style={{ color: isDark ? '#E5E7EB' : '#374151' }}>
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-3"
                  style={{ color: isDark ? '#6B7280' : '#9CA3AF' }}>
                  Find me on
                </p>
                <div className="flex gap-3">
                  {socialLinks.map(link => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                          background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
                          border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`,
                          color: link.color === '#FFFFFF' && !isDark ? '#111827' : link.color,
                        }}
                        whileHover={{ y: -3, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={link.name}
                      >
                        <Icon size={18} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal variant="fadeRight" className="lg:col-span-3">
            <GlassCard hover={false}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: isDark ? '#E5E7EB' : '#374151' }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={handleChange('name')}
                      placeholder="Your name"
                      className="form-input"
                      style={errors.name ? { borderColor: '#EF4444' } : {}}
                    />
                    {errors.name && <p className="text-xs mt-1" style={{ color: '#EF4444' }}>{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: isDark ? '#E5E7EB' : '#374151' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={handleChange('email')}
                      placeholder="your@email.com"
                      className="form-input"
                      style={errors.email ? { borderColor: '#EF4444' } : {}}
                    />
                    {errors.email && <p className="text-xs mt-1" style={{ color: '#EF4444' }}>{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: isDark ? '#E5E7EB' : '#374151' }}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={handleChange('subject')}
                    placeholder="What's this about?"
                    className="form-input"
                    style={errors.subject ? { borderColor: '#EF4444' } : {}}
                  />
                  {errors.subject && <p className="text-xs mt-1" style={{ color: '#EF4444' }}>{errors.subject}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: isDark ? '#E5E7EB' : '#374151' }}>
                    Message *
                  </label>
                  <textarea
                    value={form.message}
                    onChange={handleChange('message')}
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                    rows={5}
                    className="form-input resize-none"
                    style={errors.message ? { borderColor: '#EF4444' } : {}}
                  />
                  {errors.message && <p className="text-xs mt-1" style={{ color: '#EF4444' }}>{errors.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary w-full justify-center text-base"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                >
                  {isSubmitting ? (
                    <>
                      <FiLoader size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
}
