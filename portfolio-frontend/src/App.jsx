import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Hero from './sections/Hero';

// Lazy load sections below the fold for performance
const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Experience = lazy(() => import('./sections/Experience'));
const Education = lazy(() => import('./sections/Education'));
const Certifications = lazy(() => import('./sections/Certifications'));
const Achievements = lazy(() => import('./sections/Achievements'));
const CodingProfiles = lazy(() => import('./sections/CodingProfiles'));
const Contact = lazy(() => import('./sections/Contact'));
const Footer = lazy(() => import('./sections/Footer'));

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-20">
      <div
        className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
        style={{ borderColor: 'rgba(59,130,246,0.3)', borderTopColor: '#3B82F6' }}
      />
    </div>
  );
}

export default function App() {
  return (
    <div className="relative">
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <Achievements />
          <CodingProfiles />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
