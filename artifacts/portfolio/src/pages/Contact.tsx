import React, { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import { motion, Variants } from 'framer-motion';
import { SiFiverr, SiUpwork } from 'react-icons/si';
import { FiArrowUpRight, FiX, FiMenu, FiSend, FiUser, FiMail, FiBriefcase, FiDollarSign, FiClock, FiMessageSquare, FiExternalLink } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa6';

import fiverrScreenshot from '@assets/0_po_1785025764641.webp';
import upworkScreenshot from '@assets/0_mn_1785025878984.webp';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
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
          <a href="/" className="absolute left-6 md:left-12 flex items-center select-none group" aria-label="Hallins Dev — Home">
            <span className="font-display font-bold text-2xl leading-none text-primary group-hover:opacity-80 transition-opacity">H</span>
            <span className="font-display font-bold text-2xl leading-none text-white group-hover:opacity-80 transition-opacity">D</span>
            <span className="ml-1.5 w-1.5 h-1.5 rounded-full bg-primary mb-0.5 self-end group-hover:scale-125 transition-transform" />
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors tracking-wide ${
                  link.href === '/contact' ? 'text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#intake-form"
            className="hidden md:flex items-center gap-2 bg-primary border border-primary text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-primary/80 group absolute right-6 md:right-12"
          >
            Let's Talk
            <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <div className="flex md:hidden items-center gap-3 ml-auto">
            <a href="#intake-form" className="flex items-center gap-1.5 bg-primary text-white text-xs font-medium px-4 py-2 rounded-full">
              Let's Talk
            </a>
            <button onClick={() => setMenuOpen((v) => !v)} className="text-white p-1" aria-label="Toggle menu">
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed top-[56px] left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-b border-white/10 flex flex-col items-center gap-0 py-4 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="w-full text-center py-3 text-white/80 hover:text-white text-sm font-medium transition-colors border-b border-white/5 last:border-0"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </motion.header>
    </>
  );
}

/* ─── INTAKE FORM ─── */
function IntakeForm() {
  const [form, setForm] = useState({
    name: '', email: '', projectType: '', budget: '', timeline: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = (name: string) =>
    `w-full bg-white/5 border rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 outline-none transition-all duration-200 ${
      focused === name ? 'border-primary shadow-[0_0_0_3px_rgba(255,50,120,0.12)]' : 'border-white/10 hover:border-white/20'
    }`;

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center h-full py-20 gap-6"
      >
        <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
          <FiSend className="text-primary text-3xl" />
        </div>
        <div>
          <h3 className="text-2xl font-display font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-white/50 text-sm max-w-xs mx-auto">Thanks for reaching out. I'll get back to you within 24 hours.</p>
        </div>
        <button
          onClick={() => { setSubmitted(false); setForm({ name:'', email:'', projectType:'', budget:'', timeline:'', message:'' }); }}
          className="text-primary text-sm font-medium hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form id="intake-form" onSubmit={submit} className="space-y-4">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative">
          <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-sm pointer-events-none" />
          <input
            name="name"
            value={form.name}
            onChange={handle}
            onFocus={() => setFocused('name')}
            onBlur={() => setFocused(null)}
            required
            placeholder="Full Name"
            className={`${inputClass('name')} pl-10`}
          />
        </div>
        <div className="relative">
          <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-sm pointer-events-none" />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handle}
            onFocus={() => setFocused('email')}
            onBlur={() => setFocused(null)}
            required
            placeholder="Email Address"
            className={`${inputClass('email')} pl-10`}
          />
        </div>
      </div>

      {/* Project Type */}
      <div className="relative">
        <FiBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-sm pointer-events-none z-10" />
        <select
          name="projectType"
          value={form.projectType}
          onChange={handle}
          onFocus={() => setFocused('projectType')}
          onBlur={() => setFocused(null)}
          required
          className={`${inputClass('projectType')} pl-10 appearance-none cursor-pointer`}
          style={{ background: 'rgba(255,255,255,0.05)' }}
        >
          <option value="" disabled className="bg-[#111] text-white/50">Project Type</option>
          <option value="web-design" className="bg-[#111] text-white">Web Design</option>
          <option value="fullstack" className="bg-[#111] text-white">Full Stack Development</option>
          <option value="uiux" className="bg-[#111] text-white">UI/UX Design</option>
          <option value="nocode" className="bg-[#111] text-white">No-Code / Webflow</option>
          <option value="landing" className="bg-[#111] text-white">Landing Page</option>
          <option value="ai" className="bg-[#111] text-white">AI Development</option>
          <option value="other" className="bg-[#111] text-white">Other</option>
        </select>
      </div>

      {/* Budget + Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative">
          <FiDollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-sm pointer-events-none z-10" />
          <select
            name="budget"
            value={form.budget}
            onChange={handle}
            onFocus={() => setFocused('budget')}
            onBlur={() => setFocused(null)}
            required
            className={`${inputClass('budget')} pl-10 appearance-none cursor-pointer`}
            style={{ background: 'rgba(255,255,255,0.05)' }}
          >
            <option value="" disabled className="bg-[#111] text-white/50">Budget Range</option>
            <option value="lt500" className="bg-[#111] text-white">Under $500</option>
            <option value="500-1k" className="bg-[#111] text-white">$500 – $1,000</option>
            <option value="1k-3k" className="bg-[#111] text-white">$1,000 – $3,000</option>
            <option value="3k-5k" className="bg-[#111] text-white">$3,000 – $5,000</option>
            <option value="5k+" className="bg-[#111] text-white">$5,000+</option>
          </select>
        </div>
        <div className="relative">
          <FiClock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-sm pointer-events-none z-10" />
          <select
            name="timeline"
            value={form.timeline}
            onChange={handle}
            onFocus={() => setFocused('timeline')}
            onBlur={() => setFocused(null)}
            required
            className={`${inputClass('timeline')} pl-10 appearance-none cursor-pointer`}
            style={{ background: 'rgba(255,255,255,0.05)' }}
          >
            <option value="" disabled className="bg-[#111] text-white/50">Timeline</option>
            <option value="asap" className="bg-[#111] text-white">ASAP</option>
            <option value="1-2w" className="bg-[#111] text-white">1 – 2 Weeks</option>
            <option value="1m" className="bg-[#111] text-white">About 1 Month</option>
            <option value="1-3m" className="bg-[#111] text-white">1 – 3 Months</option>
            <option value="flexible" className="bg-[#111] text-white">Flexible</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="relative">
        <FiMessageSquare className="absolute left-4 top-4 text-white/30 text-sm pointer-events-none" />
        <textarea
          name="message"
          value={form.message}
          onChange={handle}
          onFocus={() => setFocused('message')}
          onBlur={() => setFocused(null)}
          required
          rows={5}
          placeholder="Tell me about your project — goals, features, any reference sites you love..."
          className={`${inputClass('message')} pl-10 resize-none`}
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex items-center justify-center gap-3 bg-primary text-white font-medium py-4 rounded-xl text-sm shadow-[0_0_30px_rgba(255,50,120,0.35)] hover:bg-primary/90 transition-colors"
      >
        Send Message <FiSend />
      </motion.button>

      <p className="text-center text-white/30 text-xs">I typically respond within 24 hours.</p>
    </form>
  );
}

/* ─── FREELANCE CARD ─── */
function FreelanceCard({
  platform, icon, color, screenshot, rating, reviews, cta, href
}: {
  platform: string;
  icon: React.ReactNode;
  color: string;
  screenshot: string;
  rating: string;
  reviews: string;
  cta: string;
  href: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative rounded-2xl border border-white/10 overflow-hidden bg-white/[0.03] hover:border-white/20 transition-all duration-300"
    >
      {/* Screenshot */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <img
          src={screenshot}
          alt={`${platform} profile`}
          className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />

        {/* Platform badge top-left */}
        <div
          className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-white backdrop-blur-md border border-white/10"
          style={{ background: `${color}22`, borderColor: `${color}44` }}
        >
          <span style={{ color }}>{icon}</span>
          {platform}
        </div>
      </div>

      {/* Info bar */}
      <div className="px-4 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-xs" />
            ))}
          </div>
          <span className="text-white font-semibold text-sm">{rating}</span>
          <span className="text-white/40 text-xs">({reviews} reviews)</span>
        </div>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full border transition-all duration-200 whitespace-nowrap group/btn"
          style={{ borderColor: `${color}55`, color, background: `${color}11` }}
          onMouseEnter={e => (e.currentTarget.style.background = `${color}22`)}
          onMouseLeave={e => (e.currentTarget.style.background = `${color}11`)}
        >
          {cta} <FiExternalLink className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}

/* ─── CONTACT INFO STRIP ─── */
function ContactInfo() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={staggerContainer}
      className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16"
    >
      {[
        { label: 'Email', value: 'developerhallins@gmail.com', href: 'mailto:developerhallins@gmail.com' },
        { label: 'Response Time', value: 'Within 24 hours', href: null },
        { label: 'Availability', value: 'Open for projects', href: null },
      ].map(({ label, value, href }) => (
        <motion.div
          key={label}
          variants={fadeUp}
          className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-center hover:border-white/20 transition-colors"
        >
          <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{label}</p>
          {href ? (
            <a href={href} className="text-white text-sm font-medium hover:text-primary transition-colors">{value}</a>
          ) : (
            <p className="text-white text-sm font-medium">{value}</p>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ─── PAGE ─── */
export default function Contact() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white">
      <Navbar />

      {/* Ambient background blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <main className="relative z-10 pt-28 pb-0 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">

          {/* Page header */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} className="text-primary text-xs font-medium tracking-widest uppercase mb-3">
              — Let's Work Together
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-5 leading-tight">
              Start a <span className="text-primary">Project</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/50 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
              Tell me about your vision and I'll turn it into a high-converting digital product.
            </motion.p>
          </motion.div>

          {/* Main grid: Form + Freelance profiles */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

            {/* Intake form — wider column */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
            >
              <motion.div variants={fadeUp} className="mb-7">
                <h2 className="text-xl font-display font-bold text-white mb-1">Project Intake</h2>
                <p className="text-white/40 text-sm">Fill out the form and I'll be in touch shortly.</p>
              </motion.div>
              <motion.div variants={fadeUp}>
                <IntakeForm />
              </motion.div>
            </motion.div>

            {/* Freelance profiles — narrower column */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-2 flex flex-col gap-5"
            >
              <motion.div variants={fadeUp}>
                <p className="text-white/40 text-xs font-medium uppercase tracking-widest mb-4">Also find me on</p>
              </motion.div>

              <FreelanceCard
                platform="Fiverr"
                icon={<SiFiverr />}
                color="#1DBF73"
                screenshot={fiverrScreenshot}
                rating="5.0"
                reviews="40+"
                cta="View Fiverr Profile"
                href="https://www.fiverr.com"
              />

              <FreelanceCard
                platform="Upwork"
                icon={<SiUpwork />}
                color="#6FDA44"
                screenshot={upworkScreenshot}
                rating="5.0"
                reviews="20+"
                cta="View Upwork Profile"
                href="https://www.upwork.com"
              />
            </motion.div>
          </div>

          {/* Contact info strip */}
          <ContactInfo />

        </div>
      </main>

      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
}
