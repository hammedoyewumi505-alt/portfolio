import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'wouter';
import {
  FiArrowUpRight, FiArrowLeft, FiCheck, FiChevronDown,
  FiMonitor, FiCode, FiLayout, FiSmartphone,
} from 'react-icons/fi';
import { SiFiverr, SiUpwork } from 'react-icons/si';

/* ─── ANIMATION VARIANTS ─── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};
const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};
const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── DATA ─── */
const services = [
  {
    id: 'web-design',
    number: '01',
    icon: <FiMonitor size={28} />,
    title: 'Web Design',
    tagline: 'Designs that stop the scroll.',
    description:
      'I craft visually stunning, brand-aligned interfaces in Figma — from wireframes to pixel-perfect prototypes. Every design decision is rooted in user behaviour, conversion psychology, and your unique brand story.',
    deliverables: [
      'Custom UI design in Figma',
      'Mobile-first responsive layouts',
      'Interactive prototype & click-through demo',
      'Full brand colour, type & spacing system',
      'Component library & design tokens',
      'Handoff-ready assets for developers',
    ],
    tools: ['Figma', 'Adobe Illustrator', 'Framer', 'Coolors', 'Google Fonts'],
    color: '#ff3278',
    gradient: 'from-[#ff3278]/20 via-transparent to-transparent',
  },
  {
    id: 'web-development',
    number: '02',
    icon: <FiCode size={28} />,
    title: 'Web Development',
    tagline: 'Built for speed, scale & results.',
    description:
      'From a simple brochure site to a complex full-stack web application, I engineer solutions that are fast, secure, and maintainable. I bridge design and engineering so you get a product that looks good AND works flawlessly.',
    deliverables: [
      'Full-stack React + Node.js applications',
      'RESTful API design & integration',
      'Database architecture (MongoDB / PostgreSQL)',
      'Authentication & role-based access',
      'CI/CD pipeline setup & deployment',
      'Performance optimisation & Core Web Vitals',
    ],
    tools: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Vercel'],
    color: '#c026d3',
    gradient: 'from-[#c026d3]/20 via-transparent to-transparent',
  },
  {
    id: 'landing-page',
    number: '03',
    icon: <FiLayout size={28} />,
    title: 'Landing Page',
    tagline: 'One page. Infinite conversions.',
    description:
      'A well-crafted landing page is your best salesperson. I design and build high-converting landing pages with razor-sharp copy structure, trust signals, and CTAs that turn visitors into paying customers.',
    deliverables: [
      'Conversion-focused page architecture',
      'Hero, features, social proof & CTA sections',
      'SEO meta setup & Open Graph tags',
      'Form integration (Mailchimp, HubSpot, etc.)',
      'Analytics & conversion tracking setup',
      'A/B testing-ready component structure',
    ],
    tools: ['Next.js', 'Webflow', 'Tailwind CSS', 'Framer Motion', 'Google Analytics'],
    color: '#0ea5e9',
    gradient: 'from-[#0ea5e9]/20 via-transparent to-transparent',
  },
  {
    id: 'mobile-app',
    number: '04',
    icon: <FiSmartphone size={28} />,
    title: 'Mobile App',
    tagline: 'Native feel. Cross-platform reach.',
    description:
      'I build cross-platform mobile apps with React Native and Expo that feel truly native on both iOS and Android. From concept to App Store submission, I handle the full lifecycle with clean architecture and smooth UX.',
    deliverables: [
      'Cross-platform iOS & Android app (React Native)',
      'Custom navigation & screen flows',
      'Push notifications & background tasks',
      'Camera, location & device API integration',
      'App Store & Google Play submission',
      'Over-the-air update setup (Expo EAS)',
    ],
    tools: ['React Native', 'Expo', 'EAS Build', 'Zustand', 'React Navigation'],
    color: '#10b981',
    gradient: 'from-[#10b981]/20 via-transparent to-transparent',
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    desc: 'We start with a deep-dive into your goals, audience, and competitors. I ask the uncomfortable questions that reveal what you actually need versus what you think you need.',
  },
  {
    step: '02',
    title: 'Strategy & Design',
    desc: 'I map out the architecture, user flows, and visual direction. You get a clickable prototype before a single line of code is written — so you can see it, feel it, and refine it.',
  },
  {
    step: '03',
    title: 'Build',
    desc: 'Development happens in transparent sprints. You see real progress weekly. I use battle-tested patterns, write clean code, and keep you in the loop the entire way.',
  },
  {
    step: '04',
    title: 'Launch & Beyond',
    desc: "Deployment, performance checks, analytics wiring, and post-launch monitoring. I don't disappear after delivery — I'm available for iterations, support, and growth.",
  },
];

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: "It depends on scope. A landing page takes 3–7 days. A full web app typically runs 3–8 weeks. I'll give you a precise timeline during our discovery call before any commitment.",
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes — I work with clients worldwide via Fiverr and Upwork. Communication happens async over Slack or email, and I accommodate different time zones for live calls.',
  },
  {
    q: "What's your payment structure?",
    a: 'For direct projects: 50% upfront, 50% on delivery. For Fiverr/Upwork orders, platform escrow protects both parties. I also offer milestone-based payment for larger projects.',
  },
  {
    q: 'Do you offer maintenance after launch?',
    a: 'Yes. I offer ongoing retainer support — from bug fixes to new features. Monthly packages start from a few hours of work and can be scaled as needed.',
  },
  {
    q: 'Can I see your previous work?',
    a: 'Absolutely. The portfolio section on the homepage showcases selected projects. You can also view my Fiverr and Upwork profiles for verified client reviews.',
  },
  {
    q: 'What if I only have a rough idea?',
    a: "That's the best time to reach out. I help clients shape vague ideas into clear scopes during discovery — no fully-baked brief required to start a conversation.",
  },
];

/* ─── PAGE ─── */
export default function Services() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white">
      <ServicesNav />
      <HeroSection />
      <ServicesListSection />
      <ProcessSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}

/* ─── NAV ─── */
function ServicesNav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 py-4"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium group"
        >
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <span className="font-display font-bold tracking-widest text-white text-lg">HALLINS</span>

        <a
          href="#contact-cta"
          className="flex items-center gap-2 bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-primary/80 transition-colors"
        >
          Let's Talk <FiArrowUpRight />
        </a>
      </div>
    </motion.header>
  );
}

/* ─── HERO ─── */
function HeroSection() {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full bg-primary/15 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[100px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary text-xs font-medium tracking-[0.3em] uppercase mb-6"
        >
          — What I Offer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-none tracking-tighter mb-8"
        >
          <span className="text-outline">My</span>{' '}
          <span className="text-white">Services</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          From a pixel-perfect design to a fully deployed web or mobile product — I cover the full stack of what it takes to win online.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-xs font-medium px-4 py-2 rounded-full border border-white/10 text-white/60 hover:border-primary/50 hover:text-primary transition-all"
            >
              {s.title}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/30 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}

/* ─── SERVICE DEEP-DIVES ─── */
function ServicesListSection() {
  return (
    <section className="py-10 md:py-16">
      {services.map((svc, i) => (
        <ServiceBlock key={svc.id} svc={svc} index={i} />
      ))}
    </section>
  );
}

function ServiceBlock({ svc, index }: { svc: typeof services[0]; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div
      id={svc.id}
      className="relative py-20 md:py-28 border-t border-white/5 overflow-hidden"
    >
      {/* Section ambient glow */}
      <div
        className={`pointer-events-none absolute ${isEven ? '-left-40' : '-right-40'} top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[130px] opacity-20`}
        style={{ background: svc.color }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>

          {/* Text side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={isEven ? fadeLeft : fadeRight}
            className={!isEven ? 'lg:col-start-2' : ''}
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: `${svc.color}20`, color: svc.color, border: `1px solid ${svc.color}30` }}
              >
                {svc.icon}
              </div>
              <span className="font-mono text-xs font-bold" style={{ color: svc.color }}>{svc.number}</span>
            </div>

            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight mb-4 leading-none">
              {svc.title}
            </h2>
            <p className="text-lg font-medium mb-6" style={{ color: svc.color }}>{svc.tagline}</p>
            <p className="text-muted-foreground text-base leading-relaxed mb-10">{svc.description}</p>

            {/* Tools */}
            <div className="flex flex-wrap gap-2 mb-10">
              {svc.tools.map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href="#contact-cta"
              className="inline-flex items-center gap-2 text-white text-sm font-medium px-6 py-3 rounded-full transition-all duration-300 hover:opacity-90"
              style={{ background: svc.color }}
            >
              Start This Project <FiArrowUpRight />
            </a>
          </motion.div>

          {/* Deliverables card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={isEven ? fadeRight : fadeLeft}
            className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}
          >
            <div
              className="relative rounded-2xl p-[1px] overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${svc.color}50 0%, rgba(255,255,255,0.05) 60%, ${svc.color}20 100%)`,
              }}
            >
              <div className="rounded-2xl bg-[#0a0a0a] p-8 md:p-10 relative overflow-hidden">
                {/* Inner glow */}
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[60px] opacity-20 pointer-events-none"
                  style={{ background: svc.color }}
                />

                <p className="text-xs font-medium tracking-widest uppercase mb-6" style={{ color: svc.color }}>
                  What's Included
                </p>

                <ul className="space-y-4">
                  {svc.deliverables.map((d, i) => (
                    <motion.li
                      key={d}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="flex items-start gap-3"
                    >
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: `${svc.color}20`, border: `1px solid ${svc.color}40` }}
                      >
                        <FiCheck size={11} style={{ color: svc.color }} />
                      </div>
                      <span className="text-sm text-white/80 leading-snug">{d}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

/* ─── PROCESS ─── */
function ProcessSection() {
  return (
    <section className="py-20 md:py-32 bg-[#050505] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase mb-4">— How It Works</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl tracking-tight">
            My Process
          </h2>
        </motion.div>

        {/* Steps — connected vertical line on desktop */}
        <div className="relative">
          {/* Vertical connector */}
          <div className="hidden lg:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          <div className="flex flex-col gap-0">
            {process.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.step}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={isLeft ? fadeLeft : fadeRight}
                  className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 md:py-14 ${
                    !isLeft ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`flex gap-6 items-start ${!isLeft ? 'lg:col-start-2 lg:pl-16' : 'lg:pr-16 lg:text-right lg:flex-row-reverse'}`}>
                    <div className="shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <span className="font-display font-bold text-primary text-lg">{step.step}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-2xl md:text-3xl mb-3">{step.title}</h3>
                      <p className="text-muted-foreground text-base leading-relaxed max-w-md">{step.desc}</p>
                    </div>
                  </div>

                  {/* Center dot — desktop only */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-primary border-4 border-black z-10" />

                  {/* Empty spacer column */}
                  <div className={!isLeft ? 'lg:col-start-1 lg:row-start-1' : ''} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase mb-4">— Common Questions</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight">
            FAQ
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                open === i ? 'border-primary/40 bg-primary/5' : 'border-white/8 bg-white/3 hover:border-white/15'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-medium text-sm md:text-base text-white pr-4">{faq.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 text-primary"
                >
                  <FiChevronDown />
                </motion.span>
              </button>

              <motion.div
                initial={false}
                animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-5 text-sm md:text-base text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTASection() {
  return (
    <section id="contact-cta" className="py-24 md:py-36 relative overflow-hidden">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[700px] h-[700px] rounded-full bg-primary/15 blur-[150px]" />
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase mb-6">— Ready to Start?</p>

          <h2 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-tight mb-8">
            Let's build something<br />
            <span className="text-primary">remarkable.</span>
          </h2>

          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Have a project in mind? Reach out directly or find me on one of the platforms below. I reply within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hallins@example.com"
              className="inline-flex items-center gap-2 bg-primary text-white font-medium px-8 py-4 rounded-full hover:bg-primary/85 transition-colors shadow-[0_0_30px_rgba(255,50,120,0.4)]"
            >
              Send Me a Message <FiArrowUpRight />
            </a>

            <div className="flex items-center gap-3">
              <a
                href="https://www.fiverr.com/hall_ket"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-4 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-sm font-medium hover:border-[#00b22d]/50 hover:text-[#00b22d] transition-all"
              >
                <SiFiverr /> Fiverr
              </a>
              <a
                href="https://www.upwork.com/freelancers/~0151b31429614d36ea?mp_source=share"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-4 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-sm font-medium hover:border-[#14a800]/50 hover:text-[#14a800] transition-all"
              >
                <SiUpwork /> Upwork
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
