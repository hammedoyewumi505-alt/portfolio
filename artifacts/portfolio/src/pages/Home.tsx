import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { SiFiverr, SiUpwork, SiTiktok, SiFacebook } from 'react-icons/si';
import { FiArrowRight, FiArrowUpRight, FiChevronLeft, FiChevronRight, FiDownload, FiX, FiMenu } from 'react-icons/fi';
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
      <TestimonialsSection />
      <AboutSection />
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
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
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
            href="#contact"
            className="hidden md:flex items-center gap-2 bg-primary border border-primary text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-primary/80 group absolute right-6 md:right-12"
          >
            Let's Talk
            <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Mobile: Let's Talk + Hamburger */}
          <div className="flex md:hidden items-center gap-3 ml-auto">
            <a
              href="#contact"
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
function HeroSection() {
  return (
    <section className="relative w-full min-h-[100dvh] flex items-center justify-center pt-16 pb-0 overflow-hidden">
      {/* Top Left Badge */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute top-20 left-4 md:top-24 md:left-12 flex items-center gap-2 bg-secondary/50 border border-border backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full z-20"
      >
        <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-green-500"></span>
        </span>
        <span className="text-xs md:text-sm font-medium tracking-wide">Available for New Project</span>
      </motion.div>

      {/* Main Name Background */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-display text-[20vw] sm:text-[18vw] md:text-[18vw] leading-none font-bold tracking-tighter flex whitespace-nowrap"
        >
          <span className="text-outline">HAL</span>
          <span className="text-white">LINS</span>
        </motion.h1>
      </div>

      {/* Dark gradient overlay — hides HALLINS behind info block */}
      <div
        className="absolute bottom-0 left-0 w-full z-10 pointer-events-none"
        style={{ height: '60%', background: 'linear-gradient(to top, #000000 35%, rgba(0,0,0,0.85) 65%, transparent 100%)' }}
      />

      {/* Photo */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
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

      {/* Bottom Left Info */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="absolute bottom-6 left-4 md:bottom-14 md:left-12 max-w-[280px] sm:max-w-xs md:max-w-sm z-20"
      >
        <motion.h2 variants={fadeUp} className="text-base sm:text-xl md:text-2xl font-display font-bold mb-2 md:mb-3 text-white">
          Web Design And Full Stack Developer
        </motion.h2>
        <motion.p variants={fadeUp} className="text-muted-foreground text-xs sm:text-sm md:text-base mb-4 md:mb-6 leading-relaxed hidden sm:block">
          I build responsive, scalable and high converting websites with full stack web apps and applications
        </motion.p>
        <motion.button
          variants={fadeUp}
          className="group flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 md:px-6 md:py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Let's collaborate
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>

      {/* Right Socials — desktop only */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 flex-col gap-6 z-20 hidden md:flex"
      >
        <SocialLink href="https://www.fiverr.com/hall_ket" icon={<SiFiverr />} label="Fiverr" />
        <SocialLink href="https://www.upwork.com/freelancers/~0151b31429614d36ea?mp_source=share" icon={<SiUpwork />} label="Upwork" />
        <SocialLink href="https://www.tiktok.com/@hallinsdev" icon={<SiTiktok />} label="TikTok" />
        <SocialLink href="https://www.facebook.com/profile.php?id=61569828302942" icon={<SiFacebook />} label="Facebook" />
      </motion.div>
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
function ProjectsSection() {
  const projects = [
    {
      title: 'Revesto Realtor',
      desc: 'Commercial real estate website for booking property tours and contacting agents.',
      tags: ['Real Estate', 'Web Design', 'Responsive'],
      image: project1,
    },
    {
      title: 'GEDA',
      desc: "Eswatini's Discovery Platform, a web app built using no-code tools.",
      tags: ['No-Code', 'Web App', 'Discovery Platform'],
      image: project2,
    },
    {
      title: 'WordPilot AI',
      desc: 'An AI-powered blog writing tool built with a modern web builder.',
      tags: ['AI', 'SaaS', 'Blog Tool'],
      image: project3,
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10 bg-background">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeUp}
      >
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-10 md:mb-16 text-center">
          Featured Projects
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            className={`group flex flex-col bg-card border border-card-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,50,120,0.15)] ${
              i === 2 ? 'md:col-span-2 md:flex-row' : ''
            }`}
          >
            <div className={`overflow-hidden bg-[#1a1a1a] ${i === 2 ? 'md:w-1/2' : 'w-full'}`}>
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-auto block group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className={`p-5 sm:p-8 flex flex-col justify-center ${i === 2 ? 'md:w-1/2' : ''}`}>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold mb-2 md:mb-3">{proj.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base mb-6 md:mb-8 line-clamp-3 leading-relaxed">{proj.desc}</p>
              <div className="mt-auto">
                <button className="flex items-center gap-2 border border-primary text-primary px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                  View Project <FiArrowUpRight />
                </button>
              </div>
            </div>
          </motion.div>
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
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 w-full relative z-10 bg-background sticky top-0 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 md:mb-16 gap-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-6xl font-display font-bold"
          >
            What Clients Say
          </motion.h2>
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors text-lg"
            >
              <FiChevronLeft />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors text-lg"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>

        <div className="min-h-[280px] md:min-h-[300px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8"
            >
              {visible.map((t, i) => (
                <div
                  key={i}
                  className="bg-card border-l-4 border-l-primary border border-card-border p-6 md:p-10 rounded-r-2xl rounded-l-sm shadow-xl flex flex-col"
                >
                  <div className="flex text-yellow-400 mb-4 md:mb-6 gap-1 text-sm">
                    {[...Array(t.rating)].map((_, j) => <FaStar key={j} />)}
                  </div>
                  <p className="text-base md:text-xl leading-relaxed text-muted-foreground mb-6 md:mb-8 italic flex-grow">
                    "{t.text}"
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <h4 className="font-display font-bold text-base md:text-lg">{t.name}</h4>
                    <span className={`${t.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                      {t.platform}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(testimonials.length / perPage) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i * perPage)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                Math.floor(index / perPage) === i ? 'bg-primary w-6' : 'bg-white/20 w-2'
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
    <section className="relative z-20 bg-[#050505] min-h-screen py-16 md:py-24 border-t border-white/5 rounded-t-[2rem] md:rounded-t-[3rem] -mt-8 md:-mt-12 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] flex items-center">
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

          <motion.button
            variants={fadeUp}
            className="flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-medium hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(255,50,120,0.4)]"
          >
            Download CV <FiDownload />
          </motion.button>
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
function Footer() {
  return (
    <footer className="bg-black relative z-20 border-t-2 border-primary pt-16 md:pt-24 pb-10 md:pb-12 overflow-hidden flex flex-col items-center">
      <div className="w-full flex justify-center mb-10 md:mb-16 select-none pointer-events-none">
        <h2 className="font-display text-[14vw] md:text-[12vw] leading-none font-bold tracking-tighter text-outline opacity-20">
          HALLINS
        </h2>
      </div>

      <div className="text-center z-10 -mt-16 md:-mt-24 mb-8 md:mb-12 px-4">
        <p className="text-xl sm:text-2xl md:text-3xl font-display font-medium mb-6 md:mb-8">
          Let's build something great together
        </p>
        <div className="flex justify-center gap-4 md:gap-6">
          {[
            { href: 'https://www.fiverr.com/hall_ket', icon: <SiFiverr /> },
            { href: 'https://www.upwork.com/freelancers/~0151b31429614d36ea?mp_source=share', icon: <SiUpwork /> },
            { href: 'https://www.tiktok.com/@hallinsdev', icon: <SiTiktok /> },
            { href: 'https://www.facebook.com/profile.php?id=61569828302942', icon: <SiFacebook /> },
          ].map(({ href, icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors text-base md:text-lg"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      <div className="text-muted-foreground text-xs md:text-sm z-10">
        © 2025 Hallins. All rights reserved.
      </div>
    </footer>
  );
}
