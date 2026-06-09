/*
 * ============================================
 * PORTFOLIO DATA — Samiksha Mishra
 * ============================================
 * All profile data extracted from resume.
 * Items marked with TODO need your input.
 * ============================================
 */

import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaLinkedin, FaGoogle, FaAward, FaTrophy, FaCertificate,
} from 'react-icons/fa';
import {
  SiC, SiMongodb, SiTailwindcss, SiExpress, SiVite,
} from 'react-icons/si';
import { HiOutlineCode, HiOutlineAcademicCap, HiOutlineBriefcase } from 'react-icons/hi';
import { TbBrandLeetcode } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';

// ─── PERSONAL INFO ──────────────────────────────────────────────
export const personalInfo = {
  name: 'Samiksha Mishra',
  firstName: 'Samiksha',
  lastName: 'Mishra',
  email: 'samiksham525@gmail.com',
  phone: '+91 8887734614',
  location: 'India',
  linkedin: 'https://www.linkedin.com/in/samiksha-mishra-27568b245/',
  leetcode: 'https://leetcode.com/u/Samikshamish_24/',
  github: '#', /* TODO: Add your GitHub profile URL */
  resumeUrl: '/resume.pdf', /* TODO: Add your resume PDF to public/ folder */
  avatarUrl: null, /* TODO: Add your profile photo path */
};

// ─── HERO ROLES (Typewriter) ────────────────────────────────────
export const heroRoles = [
  'Full Stack Developer',
  'Web Developer',
  'Software Engineer',
  'Problem Solver',
  'Cloud Enthusiast',
  'Tech Explorer',
];

// ─── PROFESSIONAL SUMMARY ───────────────────────────────────────
export const summary = `Dedicated and passionate Computer Science student with a strong focus on full-stack web development, C programming, and data structures. With hands-on experience building interactive front-end applications and working as a Web Development Intern, I bring a unique blend of academic knowledge and practical skills. Knowledgeable in database architecture and security, I consistently apply diligence and dedication to deliver high-quality solutions. Currently pursuing B.Tech in CSE at Lloyd Institute of Engineering and Technology, I'm driven to create impactful digital experiences.`;

// ─── ABOUT STATS ────────────────────────────────────────────────
export const aboutStats = [
  { label: 'Projects', value: 1, suffix: '+', icon: HiOutlineCode },
  { label: 'Certifications', value: 6, suffix: '', icon: FaCertificate },
  { label: 'Technologies', value: 10, suffix: '+', icon: HiOutlineBriefcase },
  { label: 'Experience', value: 1, suffix: '+yr', icon: HiOutlineAcademicCap },
];

// ─── SKILLS ─────────────────────────────────────────────────────
export const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C', icon: SiC, color: '#A8B9CC' },
      { name: 'JavaScript', icon: FaJsSquare, color: '#F7DF1E' },
      { name: 'Python', icon: FaPython, color: '#3776AB' },
    ],
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'JavaScript', icon: FaJsSquare, color: '#F7DF1E' },
      { name: 'React.js', icon: FaReact, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'GitHub', icon: FaGithub, color: '#FFFFFF' },
      { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
      { name: 'Vite', icon: SiVite, color: '#646CFF' },
    ],
  },
  {
    title: 'Concepts',
    skills: [
      { name: 'Data Structures', icon: HiOutlineCode, color: '#3B82F6' },
      { name: 'Data Analytics', icon: HiOutlineCode, color: '#8B5CF6' },
      { name: 'REST APIs', icon: HiOutlineCode, color: '#06B6D4' },
    ],
  },
];

// ─── PROJECTS ───────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: 'Tiffin Management System',
    description: 'A comprehensive full-stack platform designed to revolutionize local food delivery by connecting customers with home-cooked, hygienic meals at affordable prices. The system empowers local food entrepreneurs to expand their reach through a digital marketplace.',
    features: [
      'Real-time order tracking and management dashboard',
      'Seamless customer ordering experience with live status updates',
      'Local food entrepreneur onboarding and menu management',
      'Efficient delivery routing and order fulfillment',
      'Responsive design optimized for mobile and desktop',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Full Stack',
    role: 'Front-end Developer',
    duration: 'Dec 2024 – Feb 2025',
    github: '#', /* TODO: Add GitHub repo link */
    live: '#', /* TODO: Add live demo link if available */
    image: null,
  },
  /* TODO: Add more projects from your GitHub repositories */
  /*
  {
    id: 2,
    title: 'Project Name',
    description: 'Project description',
    features: ['Feature 1', 'Feature 2'],
    tech: ['Tech1', 'Tech2'],
    category: 'Category',
    role: 'Your role',
    duration: 'Timeline',
    github: 'https://github.com/...',
    live: '#',
    image: null,
  },
  */
];

// ─── EXPERIENCE ─────────────────────────────────────────────────
export const experience = [
  {
    id: 1,
    role: 'Web Development Intern',
    organization: 'OctaNet SW. Services',
    duration: 'July 2023',
    type: 'Internship',
    description: [
      'Gained hands-on experience implementing modern web development practices using HTML, CSS, JavaScript, and React.js in a professional environment.',
      'Designed, developed, and deployed an interactive front-end web application, demonstrating proficiency in responsive design and user interface engineering.',
      'Collaborated with the development team to follow industry-standard coding practices, version control workflows, and agile methodologies.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'React.js'],
  },
  /* TODO: Add any additional experiences, freelance work, or open source contributions */
];

// ─── EDUCATION ──────────────────────────────────────────────────
export const education = [
  {
    id: 1,
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Lloyd Institute of Engineering and Technology',
    duration: 'Sep 2023 – 2027',
    status: 'Currently Pursuing',
    description: 'Focused on software engineering, data structures, algorithms, and full-stack web development. Actively participating in coding competitions and technical workshops.',
    cgpa: null, /* TODO: Add your current CGPA */
  },
  {
    id: 2,
    degree: 'Diploma in Computer Science & Engineering',
    institution: 'Shri Ramswaroop Memorial University, Lucknow',
    duration: 'Aug 2021 – Jun 2024',
    status: 'Completed',
    description: 'Built a strong foundation in computer science fundamentals, programming, and web technologies. Developed practical skills through hands-on projects and lab work.',
    cgpa: null, /* TODO: Add your Diploma percentage/CGPA */
  },
  {
    id: 3,
    degree: 'Class X (Secondary Education)',
    institution: 'Kunwar Convent Sr Sec School',
    duration: 'Apr 2017 – May 2018',
    status: 'Completed',
    description: 'Completed secondary education with a strong academic record.',
    cgpa: null, /* TODO: Add your Class X percentage */
  },
];

// ─── CERTIFICATIONS ─────────────────────────────────────────────
export const certifications = [
  {
    id: 1,
    name: 'Prompt Design in Vertex AI',
    issuer: 'Google Cloud',
    date: 'June 2025',
    icon: FaGoogle,
    color: '#4285F4',
    link: '#', /* TODO: Add verification link */
    description: 'Advanced prompt engineering techniques for Google Cloud Vertex AI platform.',
  },
  {
    id: 2,
    name: 'TCS Ion Career Edge — Young Professional',
    issuer: 'Tata Consultancy Services',
    date: 'September 2025',
    icon: FaAward,
    color: '#1A73E8',
    link: '#', /* TODO: Add verification link */
    description: 'Professional development program covering industry readiness, communication, and career skills.',
  },
  {
    id: 3,
    name: 'Code Blaze 2.O',
    issuer: 'GeeksforGeeks',
    date: 'April 2025',
    icon: FaTrophy,
    color: '#2F8D46',
    link: '#', /* TODO: Add verification link */
    description: 'Competitive coding event demonstrating problem-solving and algorithmic skills.',
  },
  {
    id: 4,
    name: 'Practical Oriented Workshop on Python with IoT',
    issuer: 'Softpro India Computer Technology (P) Ltd.',
    date: 'January 2025',
    icon: FaPython,
    color: '#3776AB',
    link: '#', /* TODO: Add verification link */
    description: 'Hands-on workshop integrating Python programming with Internet of Things applications.',
  },
  {
    id: 5,
    name: 'Web Development Certification',
    issuer: 'Internshala',
    date: 'September 2023',
    icon: FaCertificate,
    color: '#00AEEF',
    link: '#', /* TODO: Add verification link */
    description: 'Comprehensive web development course covering front-end and back-end technologies.',
  },
  {
    id: 6,
    name: 'STP Computer Education',
    issuer: 'Ministry of MSME, Government of India',
    date: 'July 2023',
    icon: FaAward,
    color: '#FF6B00',
    link: '#', /* TODO: Add verification link */
    description: 'Government-certified computer education program under the Skill Training Provider initiative.',
  },
];

// ─── ACHIEVEMENTS ───────────────────────────────────────────────
export const achievements = [
  {
    title: 'Code Blaze 2.O — GeeksforGeeks',
    description: 'Participated in the prestigious Code Blaze 2.O coding competition by GeeksforGeeks, demonstrating strong algorithmic thinking and competitive programming skills.',
    icon: FaTrophy,
    color: '#2F8D46',
    year: '2025',
  },
  {
    title: 'Google Cloud — Vertex AI Certification',
    description: 'Earned Google Cloud certification in Prompt Design for Vertex AI, showcasing expertise in cutting-edge AI and cloud technologies.',
    icon: FaGoogle,
    color: '#4285F4',
    year: '2025',
  },
  {
    title: 'TCS Career Edge Program',
    description: 'Selected for the TCS Ion Career Edge — Young Professional program, a competitive career development initiative by India\'s largest IT company.',
    icon: FaAward,
    color: '#1A73E8',
    year: '2025',
  },
  {
    title: 'Government Certified IT Professional',
    description: 'Completed the STP Computer Education program certified by the Ministry of MSME, Government of India.',
    icon: FaCertificate,
    color: '#FF6B00',
    year: '2023',
  },
  /* TODO: Add hackathon wins, competition results, or other achievements */
];

// ─── CODING PROFILES ────────────────────────────────────────────
export const codingProfiles = {
  leetcode: {
    username: 'Samikshamish_24',
    url: 'https://leetcode.com/u/Samikshamish_24/',
    /* TODO: Update these stats from your LeetCode profile */
    totalSolved: 0,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
    contestRating: null,
    badges: [],
  },
  github: {
    username: '', /* TODO: Add your GitHub username */
    url: '#', /* TODO: Add your GitHub URL */
    /* TODO: Update these stats from your GitHub profile */
    totalRepos: 0,
    totalStars: 0,
    totalContributions: 0,
    topLanguages: ['JavaScript', 'HTML', 'CSS', 'C'],
  },
};

// ─── NAVIGATION LINKS ──────────────────────────────────────────
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Coding Profiles', href: '#coding-profiles' },
  { label: 'Contact', href: '#contact' },
];

// ─── SOCIAL LINKS ───────────────────────────────────────────────
export const socialLinks = [
  { name: 'LinkedIn', url: personalInfo.linkedin, icon: FaLinkedin, color: '#0A66C2' },
  { name: 'GitHub', url: personalInfo.github, icon: FaGithub, color: '#FFFFFF' },
  { name: 'LeetCode', url: personalInfo.leetcode, icon: TbBrandLeetcode, color: '#FFA116' },
];
