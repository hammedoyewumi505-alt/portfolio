import React, { useState, useEffect, useRef } from 'react';
import Footer from '@/components/Footer';
import { motion, AnimatePresence, Variants, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { SiFiverr, SiUpwork, SiTiktok, SiFacebook } from 'react-icons/si';
import { FiArrowRight, FiArrowUpRight, FiChevronLeft, FiChevronRight, FiX, FiMenu } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa6';

import photo from '@assets/file_00000000a20471f4bb4d9534d7debaeb-removebg-preview_1785015317881.png';

// Import project screenshots
import project1 from '@assets/revesto_1785019235113.png';
import project2 from '@assets/geda_1785019235107.png';
import project3 from '@assets/wordpilot_1785019235115.png';

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      <HeroSection />
      <TickerSection />
      <ProjectsSection />
      <ServicesSection />
      <TestimonialsSection />
      <div>
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

/* ─── NAVBAR ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu when a link is clicked
  const handleLinkClick = () => setMenuOpen(false);

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
          {/* HD Logo — left, links to home */}
          <a
            href="/"
            className="absolute left-6 md:left-12 flex items-center select-none group"
            aria-label="Hallins Dev — Home"
          >
            <span className="font-display font-bold text-2xl leading-none text-primary group-hover:opacity-80 transition-opacity">H</span>
            <span className="font-display font-bold text-2xl leading-none text-white group-hover:opacity-80 transition-opacity">D</span>
            <span className="ml-1.5 w-1.5 h-1.5 rounded-full bg-primary mb-0.5 self-end group-hover:scale-125 transition-transform" />
          </a>

          {/* Desktop nav links — centered */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors tracking-wide"
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

          {/* Mobile: Let's Talk + Hamburger */}
          <div className="flex md:hidden items-center gap-3 ml-auto">
            <a
              href="/contact"
              className="flex items-center gap-1.5 bg-primary text-white text-xs font-medium px-4 py-2 rounded-full"
            >
              Let's Talk
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="text-white p-1"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[56px] left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-b border-white/10 flex flex-col items-center gap-0 py-4 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="w-full text-center py-4 text-base font-medium text-white/80 hover:text-white hover:bg-white/5 transition-colors tracking-wide"
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

/* ─── HERO ─── */
// Module-scope: tracks whether the splash has already played so that
// navigating back to "/" doesn't re-add the splash-length delay.
let heroHasAnimated = false;

function HeroSection() {
  // On first mount the splash is still covering the screen (~1.9 s until it's gone).
  // Subsequent visits: no extra delay.
  const d = heroHasAnimated ? 0 : 1.85;

  useEffect(() => {
    heroHasAnimated = true;
  }, []);

  // Shared spring config for the "drop and land" feel
  const spring = (delay: number, stiffness = 110, damping = 18) => ({
    type: 'spring' as const,
    stiffness,
    damping,
    delay: d + delay,
  });

  const socials = [
    { href: 'https://www.fiverr.com/hall_ket',                                        icon: <SiFiverr />,   label: 'Fiverr'   },
    { href: 'https://www.upwork.com/freelancers/~0151b31429614d36ea?mp_source=share', icon: <SiUpwork />,   label: 'Upwork'   },
    { href: 'https://www.tiktok.com/@hallinsdev',                                     icon: <SiTiktok />,   label: 'TikTok'   },
    { href: 'https://www.facebook.com/profile.php?id=61569828302942',                 icon: <SiFacebook />, label: 'Facebook' },
  ];

  return (
    <section className="relative w-full min-h-[100dvh] flex items-center justify-center pt-16 pb-0 overflow-hidden">

      {/* ── HALLINS background — HAL & LINS drop independently ── */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0 overflow-hidden">
        <h1 className="font-display text-[20vw] sm:text-[18vw] md:text-[18vw] leading-none font-bold tracking-tighter flex whitespace-nowrap">
          <motion.span
            className="text-outline inline-block"
            initial={{ opacity: 0, y: -180 }}
            animate={{ opacity: 1, y: 0 }}
            transition={spring(0, 100, 16)}
          >
            HAL
          </motion.span>
          <motion.span
            className="text-white inline-block"
            initial={{ opacity: 0, y: -180 }}
            animate={{ opacity: 1, y: 0 }}
            transition={spring(0.09, 100, 16)}
          >
            LINS
          </motion.span>
        </h1>
      </div>

      {/* Dark gradient overlay */}
      <div
        className="absolute bottom-0 left-0 w-full z-10 pointer-events-none"
        style={{ height: '60%', background: 'linear-gradient(to top, #000000 35%, rgba(0,0,0,0.85) 65%, transparent 100%)' }}
      />

      {/* ── Photo drops from above ── */}
      <motion.div
        initial={{ opacity: 0, y: -260 }}
        animate={{ opacity: 1, y: 0 }}
        transition={spring(0.05, 80, 20)}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 flex justify-center items-end"
        style={{ height: '88%', maxWidth: 'min(680px, 85vw)' }}
      >
        <img
          src={photo}
          alt="Hallins"
          className="h-full w-auto object-contain transition-all duration-700 ease-in-out"
          style={{ filter: 'drop-shadow(0 0 40px rgba(255, 50, 120, 0.25)) grayscale(100%)' }}
          onMouseEnter={(e) => (e.currentTarget.style.filter = 'drop-shadow(0 0 60px rgba(255, 50, 120, 0.5)) grayscale(0%)')}
          onMouseLeave={(e) => (e.currentTarget.style.filter = 'drop-shadow(0 0 40px rgba(255, 50, 120, 0.25)) grayscale(100%)')}
        />
      </motion.div>

      {/* ── Available badge drops ── */}
      <motion.div
        initial={{ opacity: 0, y: -70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={spring(0.28, 140, 20)}
        className="absolute top-20 md:top-24 left-4 md:left-12 flex items-center gap-2 bg-black/40 border border-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full z-20 whitespace-nowrap"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
        </span>
        <span className="text-xs font-medium tracking-wide text-white/80">Available for New Project</span>
      </motion.div>

      {/* ── Bottom-left info — each line drops in cascade ── */}
      <div className="absolute bottom-6 left-4 md:bottom-14 md:left-12 max-w-[280px] sm:max-w-xs md:max-w-sm z-20">
        <motion.h2
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={spring(0.32, 130, 20)}
          className="text-base sm:text-xl md:text-2xl font-display font-bold mb-2 md:mb-3 text-white"
        >
          Web Design And Full Stack Developer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={spring(0.42, 130, 20)}
          className="text-muted-foreground text-xs sm:text-sm md:text-base mb-4 md:mb-6 leading-relaxed hidden sm:block"
        >
          I build responsive, scalable and high converting websites with full stack web apps and applications
        </motion.p>
        <motion.a
          href="/contact"
          initial={{ opacity: 0, y: -45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={spring(0.52, 130, 20)}
          className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 md:px-6 md:py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Let's collaborate
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>

      {/* ── Right socials — each icon drops with stagger ── */}
      <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 flex-col gap-6 z-20 hidden md:flex">
        {socials.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={spring(0.45 + i * 0.08, 140, 22)}
          >
            <SocialLink href={s.href} icon={s.icon} label={s.label} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
    >
      <div className="w-10 h-10 rounded-full bg-secondary/50 border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
        {icon}
      </div>
      <span className="text-xs font-medium tracking-widest uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>
        {label}
      </span>
    </a>
  );
}

/* ─── TICKER ─── */
function TickerSection() {
  const techs = [
    'REACT', 'NODE.JS', 'TYPESCRIPT', 'FIGMA', 'TAILWIND CSS',
    'NO-CODE TOOLS', 'WEBFLOW', 'WORDPRESS', 'MONGODB', 'EXPRESS',
    'NEXT.JS', 'FRAMER',
  ];
  const items = [...techs, ...techs];

  return (
    <div className="w-full bg-[#0a0a0a] border-y border-border py-3 md:py-4 overflow-hidden flex whitespace-nowrap relative z-10">
      <div className="flex animate-ticker">
        {items.map((tech, i) => (
          <div key={i} className="flex items-center">
            <span className="text-sm sm:text-lg md:text-xl font-display font-bold px-4 md:px-8 text-white">{tech}</span>
            <span className="text-primary text-xl md:text-2xl">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── PROJECTS ─── */
const projectData = [
  {
    number: '01',
    title: 'Revesto Realtor',
    desc: 'A high-end commercial real estate platform designed to convert browsers into booked tours.',
    tags: ['Real Estate', 'Web Design', 'Responsive'],
    image: project1,
    accent: '#ff3278',
  },
  {
    number: '02',
    title: 'GEDA',
    desc: "Eswatini's first unified discovery platform — a no-code web app surfacing local businesses, events, and experiences.",
    tags: ['No-Code', 'Web App', 'Discovery Platform'],
    image: project2,
    accent: '#a855f7',
  },
  {
    number: '03',
    title: 'WordPilot AI',
    desc: 'An AI-powered SaaS blog tool that drafts, edits, and schedules long-form content in seconds.',
    tags: ['AI', 'SaaS', 'Blog Tool'],
    image: project3,
    accent: '#0ea5e9',
  },
];

function TiltCard({ proj, index }: { proj: typeof projectData[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });
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
  const entranceVariant: Variants = {
    hidden: { opacity: 0, x: isEven ? -80 : 80, y: 40 },
    visible: {
      opacity: 1, x: 0, y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={entranceVariant}
      style={{ perspective: 1200 }}
      className="w-full"
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
          className="absolute inset-0 rounded-3xl p-[1px] z-10 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${proj.accent}60, transparent 50%, ${proj.accent}30)`,
          }}
        />

        {/* Moving cursor glow */}
        <motion.div
          className="absolute w-64 h-64 rounded-full pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[60px]"
          style={{
            background: `radial-gradient(circle, ${proj.accent}50 0%, transparent 70%)`,
            left: glowX,
            top: glowY,
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Background project number */}
        <div
          className="absolute inset-0 flex items-center justify-end pr-6 select-none pointer-events-none z-0 overflow-hidden"
          style={{ transform: 'translateZ(-20px)' }}
        >
          <span
            className="font-display font-bold leading-none opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-500"
            style={{ fontSize: 'clamp(120px, 20vw, 240px)', color: proj.accent }}
          >
            {proj.number}
          </span>
        </div>

        {/* Card body */}
        <div className="relative z-20 bg-[#0c0c0c] rounded-3xl overflow-hidden">
          {/* Image */}
          <div className="overflow-hidden relative">
            <motion.img
              src={proj.image}
              alt={proj.title}
              className="w-full h-auto block"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* Image overlay shimmer */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `linear-gradient(135deg, ${proj.accent}15 0%, transparent 60%)`,
              }}
            />
          </div>

          {/* Info bar */}
          <div className="p-6 md:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full border"
                    style={{
                      color: proj.accent,
                      borderColor: `${proj.accent}40`,
                      background: `${proj.accent}10`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-display font-bold text-xl md:text-2xl text-white">{proj.title}</h3>
              <p className="text-muted-foreground text-sm mt-1 max-w-xs leading-relaxed">{proj.desc}</p>
            </div>

            {/* Arrow button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300"
              style={{ background: `${proj.accent}20`, border: `1px solid ${proj.accent}40`, color: proj.accent }}
            >
              <FiArrowUpRight size={18} />
            </motion.button>
          </div>

          {/* Bottom accent line */}
          <div
            className="h-[2px] w-0 group-hover:w-full transition-all duration-700 ease-out"
            style={{ background: `linear-gradient(to right, ${proj.accent}, transparent)` }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 bg-background overflow-hidden py-16 md:py-28">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative">
        {/* Header */}
        <div className="mb-14 md:mb-20">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-primary text-xs font-medium tracking-[0.3em] uppercase mb-4"
          >
            — Selected Work
          </motion.p>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-bold text-4xl sm:text-5xl md:text-7xl tracking-tight leading-none"
              >
                Featured
              </motion.h2>
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="font-mono text-xs text-muted-foreground hidden sm:block mb-2"
            >
              {String(projectData.length).padStart(2, '0')} Projects
            </motion.span>
          </div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl md:text-7xl tracking-tight leading-none text-outline"
            >
              Projects
            </motion.h2>
          </div>
        </div>

        {/* Project grid — 2 col top, 1 full-width bottom */}
        <div className="flex flex-col gap-6 md:gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {projectData.slice(0, 2).map((proj, i) => (
              <TiltCard key={proj.number} proj={proj} index={i} />
            ))}
          </div>
          <TiltCard proj={projectData[2]} index={2} />
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center mt-14 md:mt-20"
        >
          <a
            href="/projects"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 font-medium text-sm border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300"
          >
            <span className="relative z-10">View All Projects</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="relative z-10"
            >
              <FiArrowUpRight />
            </motion.span>
            <div className="absolute inset-0 bg-primary/10 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── SERVICES ─── */
const services = [
  {
    number: '01',
    title: 'Web Design',
    desc: 'Stunning, conversion-focused designs crafted in Figma — pixel-perfect layouts that reflect your brand and engage your audience.',
    tags: ['Figma', 'UI/UX', 'Branding', 'Prototyping'],
  },
  {
    number: '02',
    title: 'Web Development',
    desc: 'Scalable, performant web applications built with modern stacks — React, Node.js, TypeScript, and more, delivered on time.',
    tags: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
  },
  {
    number: '03',
    title: 'Landing Page',
    desc: 'High-converting landing pages engineered to turn visitors into leads — fast, SEO-optimised, and A/B test ready.',
    tags: ['Conversion', 'SEO', 'Responsive', 'Analytics'],
  },
  {
    number: '04',
    title: 'Mobile App',
    desc: 'Cross-platform mobile experiences built with React Native and Expo — smooth, native-feeling apps for iOS and Android.',
    tags: ['React Native', 'Expo', 'iOS', 'Android'],
  },
  {
    number: '05',
    title: 'AI Development',
    desc: 'Intelligent systems powered by GPT, Claude, and custom ML pipelines — chatbots, automation agents, and AI-native product features built to scale.',
    tags: ['OpenAI', 'LangChain', 'Python', 'Automation'],
  },
];

// Items converge from opposite sides — odd rows from left, even from right
const converge: Variants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -120 : 120,
    y: -30,
    scale: 0.92,
  }),
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function ServicesSection() {
  // Each card sticks at a slightly lower top so they fan out behind each other
  const CARD_PEEK = 14; // px each card peeks below the one on top
  const NAV_H = 72;     // navbar height offset

  return (
    <section id="services" className="relative z-10 bg-background">
      {/* Header — scrolls away normally */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-16 md:pt-24 pb-10 md:pb-14">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <p className="text-primary text-xs font-medium tracking-widest uppercase mb-3">— My Services</p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold leading-tight">
              How I Help<br className="hidden sm:block" /> You Grow
            </h2>
          </div>
          <p className="text-muted-foreground text-sm md:text-base max-w-xs leading-relaxed">
            Everything you need to establish a powerful digital presence — under one roof.
          </p>
        </motion.div>
      </div>

      {/* Stacking cards — each card is sticky and slides over the previous */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-32">
        {services.map((svc, i) => (
          <div
            key={svc.number}
            className="sticky"
            style={{ top: `${NAV_H + i * CARD_PEEK}px`, zIndex: 10 + i }}
          >
            <motion.div
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={converge}
              className="rounded-2xl border border-white/10 overflow-hidden mb-4"
              style={{
                background: `linear-gradient(135deg, #0f0f0f 0%, #141414 100%)`,
                boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
              }}
            >
              <div className="p-6 sm:p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-0">
                {/* Number + accent bar */}
                <div className="flex items-center gap-4 md:w-20 shrink-0">
                  <div className="w-1 h-10 bg-primary rounded-full" />
                  <span className="text-xs font-mono text-primary/70 font-bold">{svc.number}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight md:flex-1 leading-tight">
                  {svc.title}
                </h3>

                {/* Desc + tags */}
                <div className="md:w-[320px] lg:w-[380px] shrink-0 flex flex-col gap-3 md:pl-8 md:border-l md:border-white/10">
                  <p className="text-muted-foreground text-sm leading-relaxed">{svc.desc}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex md:w-14 shrink-0 justify-end">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30">
                    <FiArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              {/* Bottom pink line accent */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
const testimonials = [
  {
    name: 'Marcus Thompson',
    text: 'Hallins delivered an exceptional Fiverr experience. The website was clean, fast, and exactly what I envisioned. Highly recommend!',
    platform: 'Fiverr',
    rating: 5,
    color: 'bg-[#00b22d]',
  },
  {
    name: 'Amara Okonkwo',
    text: 'Working with Hallins on Upwork was seamless. He built our Eswatini platform with incredible attention to detail. Will hire again.',
    platform: 'Upwork',
    rating: 5,
    color: 'bg-[#14a800]',
  },
  {
    name: 'Jake Moretti',
    text: "Found Hallins on Fiverr and couldn't be happier. The AI blog tool he built for us is generating content our readers love.",
    platform: 'Fiverr',
    rating: 5,
    color: 'bg-[#00b22d]',
  },
  {
    name: 'Priya Nair',
    text: 'Hired through Upwork — absolute professional. Delivered the real estate site ahead of schedule with great SEO performance.',
    platform: 'Upwork',
    rating: 5,
    color: 'bg-[#14a800]',
  },
  {
    name: 'Sofia Mensah',
    text: 'Hallins transformed our online presence. The design is stunning and the website converts visitors into leads like never before.',
    platform: 'Fiverr',
    rating: 5,
    color: 'bg-[#00b22d]',
  },
];

function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const perPage = isMobile ? 1 : 2;

  const next = () => setIndex((prev) => (prev + perPage >= testimonials.length ? 0 : prev + perPage));
  const prev = () => setIndex((prev) => (prev - perPage < 0 ? testimonials.length - perPage : prev - perPage));

  const visible = testimonials.slice(index, index + perPage);
  // wrap-around fill (only needed for desktop 2-per-page)
  if (!isMobile && visible.length === 1) visible.push(testimonials[0]);

  return (
    <section className="relative z-10 bg-background min-h-screen flex flex-col justify-center overflow-hidden py-16 md:py-24">

      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] opacity-60" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] opacity-50" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-purple-600/10 blur-[80px] opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 md:mb-16 gap-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-primary text-xs font-medium tracking-widest uppercase mb-3">— Testimonials</p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold">
              What Clients Say
            </h2>
          </motion.div>

          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all text-lg"
            >
              <FiChevronLeft />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all text-lg"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="min-h-[300px] md:min-h-[340px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8"
            >
              {visible.map((t, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl p-[1px] overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,50,120,0.35) 0%, rgba(255,255,255,0.05) 50%, rgba(255,50,120,0.1) 100%)',
                  }}
                >
                  {/* Glass card body */}
                  <div className="relative rounded-2xl bg-white/5 backdrop-blur-xl p-6 md:p-9 flex flex-col h-full overflow-hidden">
                    {/* Inner shine */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

                    {/* Quote mark */}
                    <span className="absolute top-5 right-6 text-6xl md:text-8xl font-display font-bold text-primary/10 leading-none select-none">"</span>

                    {/* Stars */}
                    <div className="flex text-yellow-400 mb-5 gap-1 text-sm relative z-10">
                      {[...Array(t.rating)].map((_, j) => <FaStar key={j} />)}
                    </div>

                    {/* Quote text */}
                    <p className="text-sm md:text-base leading-relaxed text-white/75 mb-8 italic flex-grow relative z-10">
                      "{t.text}"
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-auto relative z-10 pt-5 border-t border-white/10">
                      <div className="flex items-center gap-3">
                        {/* Avatar initial */}
                        <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm">
                          {t.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-sm md:text-base text-white">{t.name}</h4>
                          <p className="text-xs text-white/40">Verified client</p>
                        </div>
                      </div>
                      <span className={`${t.color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                        {t.platform}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: Math.ceil(testimonials.length / perPage) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i * perPage)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                Math.floor(index / perPage) === i ? 'bg-primary w-8' : 'bg-white/20 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT ─── */
function AboutSection() {
  const skills = [
    { name: 'React', top: '8%', left: '4%' },
    { name: 'Node.js', top: '15%', right: '2%' },
    { name: 'UI/UX Design', bottom: '30%', left: '0%' },
    { name: 'No-Code', bottom: '8%', right: '6%' },
    { name: 'TypeScript', top: '48%', right: '-2%' },
    { name: 'Web Design', bottom: '18%', left: '8%' },
  ];

  return (
    <section className="sticky top-0 relative z-20 bg-[#050505] min-h-screen py-16 md:py-24 border-t border-white/5 rounded-t-[2rem] md:rounded-t-[3rem] -mt-8 md:-mt-12 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="order-2 lg:order-1"
        >
          <motion.div variants={fadeUp} className="mb-3 md:mb-4 text-primary font-medium tracking-widest uppercase text-xs md:text-sm">
            — About Me
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-5 md:mb-8">
            Who is <span className="text-primary">Hallins?</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm md:text-lg text-muted-foreground leading-relaxed mb-8 md:mb-10">
            I'm a passionate Web Designer and Full Stack Developer who specializes in building responsive, high-converting websites and web applications. From crafting beautiful UI to architecting scalable backends, I deliver complete digital solutions that drive real results for businesses.
          </motion.p>

          <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10 pb-8 md:pb-10 border-b border-border">
            {[['50+', 'Projects Completed'], ['30+', 'Happy Clients'], ['3+', 'Years Experience']].map(([num, label]) => (
              <div key={label}>
                <div className="text-2xl md:text-4xl font-display font-bold text-white mb-1 md:mb-2">{num}</div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider leading-snug">{label}</div>
              </div>
            ))}
          </motion.div>

          <motion.a
            variants={fadeUp}
            href="/contact"
            className="flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-medium hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(255,50,120,0.4)]"
          >
            Hire Me <FiArrowUpRight />
          </motion.a>
        </motion.div>

        {/* Right Photo */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="order-1 lg:order-2 relative flex justify-center items-center py-8 md:py-10"
        >
          <div className="relative w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] rounded-full bg-secondary/30 border border-border flex items-end justify-center overflow-hidden">
            <img
              src={photo}
              alt="Hallins"
              className="w-[90%] h-auto object-contain grayscale opacity-90 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
            />
          </div>

          {/* Floating Skills — hidden on small screens to prevent overflow */}
          <div className="hidden sm:block">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i + 0.5, type: 'spring' }}
                className="absolute bg-card border border-border px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium shadow-xl whitespace-nowrap z-10"
                style={{
                  top: skill.top,
                  bottom: (skill as { bottom?: string }).bottom,
                  left: skill.left,
                  right: (skill as { right?: string }).right,
                }}
              >
                {skill.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
