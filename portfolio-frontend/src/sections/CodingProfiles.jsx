import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { TbBrandLeetcode } from 'react-icons/tb';
import SectionHeading from '../components/SectionHeading';
import GlassCard from '../components/GlassCard';
import ScrollReveal from '../components/ScrollReveal';
import { codingProfiles } from '../utils/data';
import { useTheme } from '../context/ThemeContext';

export default function CodingProfiles() {
  const { isDark } = useTheme();
  const { leetcode, github } = codingProfiles;

  return (
    <section id="coding-profiles" className="section-padding relative">
      <div className="orb orb-blue" style={{ width: '300px', height: '300px', top: '15%', left: '-5%' }} />

      <div className="container-max relative z-10">
        <SectionHeading title="Coding Profiles" subtitle="Problem Solving" />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* LeetCode Card */}
          <ScrollReveal variant="fadeLeft">
            <GlassCard className="h-full" glow>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(255, 161, 22, 0.12)', border: '1px solid rgba(255, 161, 22, 0.25)' }}
                >
                  <TbBrandLeetcode size={24} style={{ color: '#FFA116' }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold" style={{ color: isDark ? '#fff' : '#111827', fontFamily: 'var(--font-display)' }}>
                    LeetCode
                  </h3>
                  <p className="text-sm" style={{ color: '#FFA116' }}>@{leetcode.username}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="text-center p-3 rounded-xl" style={{ background: isDark ? 'rgba(16,185,129,0.08)' : 'rgba(16,185,129,0.06)' }}>
                  <p className="text-xl font-bold" style={{ color: '#10B981' }}>{leetcode.easySolved}</p>
                  <p className="text-xs" style={{ color: isDark ? '#6B7280' : '#9CA3AF' }}>Easy</p>
                </div>
                <div className="text-center p-3 rounded-xl" style={{ background: isDark ? 'rgba(245,158,11,0.08)' : 'rgba(245,158,11,0.06)' }}>
                  <p className="text-xl font-bold" style={{ color: '#F59E0B' }}>{leetcode.mediumSolved}</p>
                  <p className="text-xs" style={{ color: isDark ? '#6B7280' : '#9CA3AF' }}>Medium</p>
                </div>
                <div className="text-center p-3 rounded-xl" style={{ background: isDark ? 'rgba(239,68,68,0.08)' : 'rgba(239,68,68,0.06)' }}>
                  <p className="text-xl font-bold" style={{ color: '#EF4444' }}>{leetcode.hardSolved}</p>
                  <p className="text-xs" style={{ color: isDark ? '#6B7280' : '#9CA3AF' }}>Hard</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl mb-4"
                style={{ background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)' }}
              >
                <span className="text-sm" style={{ color: isDark ? '#9CA3AF' : '#6B7280' }}>Total Solved</span>
                <span className="text-xl font-bold gradient-text">{leetcode.totalSolved}</span>
              </div>

              {/* TODO Notice */}
              <div className="p-3 rounded-xl mb-4 text-center" style={{
                background: isDark ? 'rgba(245,158,11,0.08)' : 'rgba(245,158,11,0.06)',
                border: `1px solid ${isDark ? 'rgba(245,158,11,0.15)' : 'rgba(245,158,11,0.1)'}`,
              }}>
                <p className="text-xs" style={{ color: '#F59E0B' }}>
                  📊 Update stats in <code style={{ fontSize: '0.7rem' }}>src/utils/data.js</code>
                </p>
              </div>

              <a
                href={leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full justify-center text-sm"
              >
                View Profile <FiExternalLink size={14} />
              </a>
            </GlassCard>
          </ScrollReveal>

          {/* GitHub Card */}
          <ScrollReveal variant="fadeRight">
            <GlassCard className="h-full" glow>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)'}`,
                  }}
                >
                  <FaGithub size={24} style={{ color: isDark ? '#fff' : '#111827' }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold" style={{ color: isDark ? '#fff' : '#111827', fontFamily: 'var(--font-display)' }}>
                    GitHub
                  </h3>
                  <p className="text-sm" style={{ color: isDark ? '#9CA3AF' : '#6B7280' }}>
                    {github.username || '— Add your username —'}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="text-center p-3 rounded-xl" style={{ background: isDark ? 'rgba(59,130,246,0.08)' : 'rgba(37,99,235,0.06)' }}>
                  <p className="text-xl font-bold" style={{ color: '#3B82F6' }}>{github.totalRepos}</p>
                  <p className="text-xs" style={{ color: isDark ? '#6B7280' : '#9CA3AF' }}>Repos</p>
                </div>
                <div className="text-center p-3 rounded-xl" style={{ background: isDark ? 'rgba(245,158,11,0.08)' : 'rgba(245,158,11,0.06)' }}>
                  <p className="text-xl font-bold" style={{ color: '#F59E0B' }}>{github.totalStars}</p>
                  <p className="text-xs" style={{ color: isDark ? '#6B7280' : '#9CA3AF' }}>Stars</p>
                </div>
                <div className="text-center p-3 rounded-xl" style={{ background: isDark ? 'rgba(16,185,129,0.08)' : 'rgba(16,185,129,0.06)' }}>
                  <p className="text-xl font-bold" style={{ color: '#10B981' }}>{github.totalContributions}</p>
                  <p className="text-xs" style={{ color: isDark ? '#6B7280' : '#9CA3AF' }}>Contributions</p>
                </div>
              </div>

              {/* Top Languages */}
              <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: isDark ? '#6B7280' : '#9CA3AF' }}>
                  Top Languages
                </p>
                <div className="flex flex-wrap gap-2">
                  {github.topLanguages.map(lang => (
                    <span
                      key={lang}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium"
                      style={{
                        background: isDark ? 'rgba(59,130,246,0.1)' : 'rgba(37,99,235,0.08)',
                        color: isDark ? '#60A5FA' : '#2563EB',
                        border: `1px solid ${isDark ? 'rgba(59,130,246,0.2)' : 'rgba(37,99,235,0.15)'}`,
                      }}
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* TODO Notice */}
              <div className="p-3 rounded-xl mb-4 text-center" style={{
                background: isDark ? 'rgba(245,158,11,0.08)' : 'rgba(245,158,11,0.06)',
                border: `1px solid ${isDark ? 'rgba(245,158,11,0.15)' : 'rgba(245,158,11,0.1)'}`,
              }}>
                <p className="text-xs" style={{ color: '#F59E0B' }}>
                  📊 Update stats in <code style={{ fontSize: '0.7rem' }}>src/utils/data.js</code>
                </p>
              </div>

              <a
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full justify-center text-sm"
              >
                View Profile <FiExternalLink size={14} />
              </a>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
