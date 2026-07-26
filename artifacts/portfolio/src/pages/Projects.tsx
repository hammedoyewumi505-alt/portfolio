import React, { useState, useEffect, useRef } from 'react';
import Footer from '@/components/Footer';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, Variants } from 'framer-motion';
import { FiArrowUpRight, FiX, FiMenu, FiArrowRight } from 'react-icons/fi';
import { SiFiverr, SiUpwork, SiTiktok, SiFacebook } from 'react-icons/si';

import project1 from '@assets/revesto_1785019235113.png';
import project2 from '@assets/geda_1785019235107.png';
import project3 from '@assets/wordpilot_1785019235115.png';
import project4 from '@assets/prioi2_1785023935721.png';
import project5 from '@assets/prto3_1785023935726.png';
import project6 from '@assets/ptouj1_1785023935727.png';

/* ─── DATA ─── */
const allProjects = [
  {
    number: '01',
    title: 'Revesto Realtor',
    category: 'Web Design',
    year: '2025',
    desc: 'A high-end commercial real estate platform designed to convert browsers into booked tours. Features a clean property catalogue, agent contact flows, live availability, and a fully responsive layout built to instil trust at first scroll — every element engineered around the buyer journey.',
    tags: ['Real Estate', 'Web Design', 'Responsive', 'UI/UX'],
    image: project1,
    accent: '#ff3278',
  },
  {
    number: '02',
    title: 'GEDA',
    category: 'Web App',
    year: '2025',
    desc: "Eswatini's first unified discovery platform — a no-code web app that surfaces local businesses, events, and experiences for both residents and tourists. Built to give an entire country a digital identity it never had before, with a clean, accessible interface designed for low-bandwidth environments.",
    tags: ['No-Code', 'Web App', 'Discovery', 'Platform'],
    image: project2,
    accent: '#a855f7',
  },
  {
    number: '03',
    title: 'WordPilot AI',
    category: 'SaaS',
    year: '2026',
    desc: 'An AI-powered SaaS blog tool that drafts, edits, and schedules long-form content in seconds. Built on a modern no-code stack with OpenAI under the hood — giving solo creators and marketing teams the output of an entire content department at a fraction of the cost.',
    tags: ['AI', 'SaaS', 'Blog Tool', 'Automation'],
    image: project3,
    accent: '#0ea5e9',
  },
  {
    number: '04',
    title: 'PPO Advisors',
    category: 'Landing Page',
    year: '2026',
    desc: 'A conversion-focused website for a U.S. dental PPO consulting firm. The bold hero, teal brand system, and dual CTA strategy were engineered to turn skeptical practice owners into booked discovery calls within seconds. Every section is built around one goal: reduce friction, drive action.',
    tags: ['Healthcare', 'Landing Page', 'Consulting', 'CRO'],
    image: project4,
    accent: '#14b8a6',
  },
  {
    number: '05',
    title: 'Nexus Advisory',
    category: 'Brand Design',
    year: '2026',
    desc: 'A sophisticated B2B strategy consulting brand built for mid-market credibility. Editorial typography, a restrained navy-and-gold palette, and a cinematic office hero communicate authority before a single word is read — because in consulting, the brand is the first pitch.',
    tags: ['B2B', 'Consulting', 'Brand', 'Editorial'],
    image: project5,
    accent: '#d4a017',
  },
  {
    number: '06',
    title: 'Blaze FC',
    category: 'Sports & Community',
    year: '2026',
    desc: "A high-energy sports club website for a football academy with 9,000+ active members. Aggressive full-bleed hero, neon green accents, and real-time coach availability widgets make every visitor feel the adrenaline before they sign up. Built to recruit, retain, and inspire.",
    tags: ['Sports', 'Community', 'Web Design', 'Animation'],
    image: project6,
    accent: '#84cc16',
  },

];

/* ─── NAV ─── */
function ProjectsNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between md:justify-center relative">
          {/* HD Logo */}
          <a href="/" className="absolute left-6 md:left-12 flex items-center select-none group" aria-label="Home">
            <span className="font-display font-bold text-2xl leading-none text-primary group-hover:opacity-80 transition-opacity">H</span>
            <span className="font-display font-bold text-2xl leading-none text-white group-hover:opacity-80 transition-opacity">D</span>
            <span className="ml-1.5 w-1.5 h-1.5 rounded-full bg-primary mb-0.5 self-end group-hover:scale-125 transition-transform" />
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors tracking-wide ${
                  link.href === '/projects' ? 'text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="/contact"
            className="hidden md:flex items-center gap-2 bg-primary border border-primary text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-primary/80 group absolute right-6 md:right-12"
          >
            Let's Talk
            <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-3 ml-auto">
            <a href="/contact" className="flex items-center gap-1.5 bg-primary text-white text-xs font-medium px-4 py-2 rounded-full">
              Let's Talk
            </a>
            <button onClick={() => setMenuOpen(v => !v)} className="text-white p-1" aria-label="Toggle menu">
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[56px] left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-b border-white/10 flex flex-col items-center py-4 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="w-full text-center py-4 text-base font-medium text-white/80 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-5 mt-4 pb-2">
              <a href="https://www.fiverr.com/hall_ket" target="_blank" rel="noreferrer" className="text-white/60 hover:text-primary transition-colors"><SiFiverr size={20} /></a>
              <a href="https://www.upwork.com/freelancers/~0151b31429614d36ea?mp_source=share" target="_blank" rel="noreferrer" className="text-white/60 hover:text-primary transition-colors"><SiUpwork size={20} /></a>
              <a href="https://www.tiktok.com/@hallinsdev" target="_blank" rel="noreferrer" className="text-white/60 hover:text-primary transition-colors"><SiTiktok size={20} /></a>
              <a href="https://www.facebook.com/profile.php?id=61569828302942" target="_blank" rel="noreferrer" className="text-white/60 hover:text-primary transition-colors"><SiFacebook size={20} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── TILT CARD ─── */
function TiltCard({ proj, index }: { proj: typeof allProjects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 300, damping: 30 });
  const glowX = useTransform(x, [-0.5, 0.5], ['0%', '100%']);
  const glowY = useTransform(y, [-0.5, 0.5], ['0%', '100%']);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  const isEven = index % 2 === 0;
  const entrance: Variants = {
    hidden: { opacity: 0, x: isEven ? -60 : 60, y: 40 },
    visible: {
      opacity: 1, x: 0, y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: (index % 2) * 0.12 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={entrance}
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative rounded-3xl overflow-hidden cursor-pointer group"
      >
        {/* Gradient border */}
        <div
          className="absolute inset-0 rounded-3xl z-10 pointer-events-none"
          style={{ background: `linear-gradient(135deg, ${proj.accent}55, transparent 55%, ${proj.accent}25)`, padding: '1px' }}
        />

        {/* Cursor glow */}
        <motion.div
          className="absolute w-72 h-72 rounded-full pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-400 blur-[70px]"
          style={{
            background: `radial-gradient(circle, ${proj.accent}45 0%, transparent 70%)`,
            left: glowX, top: glowY,
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Ghost number */}
        <div className="absolute inset-0 flex items-center justify-end pr-8 select-none pointer-events-none z-0 overflow-hidden">
          <span
            className="font-display font-bold leading-none opacity-[0.045] group-hover:opacity-[0.08] transition-opacity duration-600"
            style={{ fontSize: 'clamp(100px, 18vw, 220px)', color: proj.accent }}
          >
            {proj.number}
          </span>
        </div>

        {/* Card body */}
        <div className="relative z-20 bg-[#0b0b0b] rounded-3xl overflow-hidden">
          {/* Image */}
          <div className="overflow-hidden relative">
            <motion.img
              src={proj.image}
              alt={proj.title}
              className="w-full h-auto block"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: `linear-gradient(135deg, ${proj.accent}18 0%, transparent 60%)` }}
            />
            {/* Year + category chip */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span
                className="text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm"
                style={{ background: `${proj.accent}25`, color: proj.accent, border: `1px solid ${proj.accent}40` }}
              >
                {proj.category}
              </span>
              <span className="text-xs font-mono text-white/50 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                {proj.year}
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 rounded-full border"
                  style={{ color: proj.accent, borderColor: `${proj.accent}35`, background: `${proj.accent}0d` }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-end justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-2">{proj.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-lg">{proj.desc}</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.92 }}
                className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: `${proj.accent}18`, border: `1px solid ${proj.accent}40`, color: proj.accent }}
              >
                <FiArrowUpRight size={18} />
              </motion.button>
            </div>
          </div>

          {/* Sweep line */}
          <div
            className="h-[2px] w-0 group-hover:w-full transition-all duration-700 ease-out"
            style={{ background: `linear-gradient(to right, ${proj.accent}, transparent)` }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── HERO ─── */
function ProjectsHero() {
  return (
    <section className="relative min-h-[50vh] flex flex-col justify-end pb-12 md:pb-16 pt-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/8 blur-[140px] rounded-full" />
      </div>

      <motion.p
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-primary text-xs font-medium tracking-[0.3em] uppercase mb-5"
      >
        — All Work
      </motion.p>

      <div className="overflow-hidden mb-2">
        <motion.h1
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="font-display font-bold text-4xl sm:text-6xl md:text-[9rem] leading-none tracking-tight"
        >
          Featured
        </motion.h1>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="font-display font-bold text-4xl sm:text-6xl md:text-[9rem] leading-none tracking-tight text-outline"
          >
            Projects
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="sm:mb-4 max-w-xs"
        >
          <p className="text-white/40 text-sm leading-relaxed">
            A curated selection of websites, platforms, and digital products built to perform and leave a lasting impression.
          </p>
          <div className="flex items-center gap-2 mt-3">
            <span className="font-mono text-xs text-primary">{String(allProjects.length).padStart(2, '0')}</span>
            <span className="text-xs text-white/30">projects</span>
            <span className="flex-1 h-px bg-white/10" />
            <span className="text-xs text-white/30">2025 – 2026</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── GRID ─── */
function ProjectsGrid() {
  return (
    <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto pb-24 md:pb-32">
      <div className="flex flex-col gap-6 md:gap-10">
        {/* Row 1: pair */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {allProjects.slice(0, 2).map((proj, i) => (
            <TiltCard key={proj.number} proj={proj} index={i} />
          ))}
        </div>

        {/* Row 2: full-width */}
        <TiltCard proj={allProjects[2]} index={2} />

        {/* Divider */}
        <div className="flex items-center gap-4 py-6">
          <div className="flex-1 h-px bg-white/5" />
          <span className="text-[10px] font-mono text-white/20 tracking-[0.25em] uppercase">More Work</span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        {/* Row 3: pair */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {allProjects.slice(3, 5).map((proj, i) => (
            <TiltCard key={proj.number} proj={proj} index={i + 3} />
          ))}
        </div>

        {/* Row 4: full-width */}
        <TiltCard proj={allProjects[5]} index={5} />
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function ProjectsCTA() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/6 blur-[140px] rounded-full" />
      </div>
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-primary text-xs font-medium tracking-[0.3em] uppercase mb-6"
        >
          — Start a Project
        </motion.p>
        <div className="overflow-hidden mb-6">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-tight"
          >
            Have a project in mind?
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/50 mb-10 max-w-md mx-auto"
        >
          Let's build something that converts visitors, commands attention, and grows your brand.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 bg-primary text-white font-medium px-8 py-4 rounded-full hover:bg-primary/80 transition-colors"
          >
            Let's Talk
            <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="/services"
            className="group inline-flex items-center justify-center gap-2 border border-white/15 text-white/70 hover:text-white font-medium px-8 py-4 rounded-full hover:border-white/30 transition-colors"
          >
            View Services
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── PAGE ─── */
export default function Projects() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white">
      <ProjectsNav />
      <ProjectsHero />
      <ProjectsGrid />
      <ProjectsCTA />
      <Footer />
    </div>
  );
}
