import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiMail, FiMapPin } from 'react-icons/fi';
import { SiFiverr, SiUpwork, SiTiktok, SiFacebook } from 'react-icons/si';

const socials = [
  { label: 'Fiverr',    href: 'https://www.fiverr.com/hall_ket',                                        icon: <SiFiverr size={16} /> },
  { label: 'Upwork',   href: 'https://www.upwork.com/freelancers/~0151b31429614d36ea?mp_source=share', icon: <SiUpwork size={16} /> },
  { label: 'TikTok',   href: 'https://www.tiktok.com/@hallinsdev',                                     icon: <SiTiktok size={16} /> },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61569828302942',                 icon: <SiFacebook size={16} /> },
];

const nav = [
  {
    heading: 'Pages',
    links: [
      { label: 'Home',     href: '/' },
      { label: 'Projects', href: '/projects' },
      { label: 'Services', href: '/services' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Web Design',       href: '/services' },
      { label: 'Web Development',  href: '/services' },
      { label: 'Landing Pages',    href: '/services' },
      { label: 'Mobile Apps',      href: '/services' },
    ],
  },
  {
    heading: 'Hire Me',
    links: [
      { label: 'Fiverr',   href: 'https://www.fiverr.com/hall_ket',                                        external: true },
      { label: 'Upwork',   href: 'https://www.upwork.com/freelancers/~0151b31429614d36ea?mp_source=share', external: true },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] border-t border-white/5 overflow-hidden">

      {/* Giant ghost HALLINS */}
      <div className="pointer-events-none select-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
        <span className="font-display font-bold text-[22vw] leading-none tracking-tighter text-white opacity-[0.025] translate-y-[12%]">
          HALLINS
        </span>
      </div>

      {/* Top ambient glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/8 blur-[120px] rounded-full" />

      {/* ─── CTA strip ─── */}
      <div className="relative z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase mb-3">— Open to Work</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight max-w-lg">
              Have a project in mind?<br />
              <span className="text-outline">Let's make it real.</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="flex flex-col sm:flex-row gap-4 shrink-0"
          >
            <a
              href="mailto:hallinsdev@gmail.com"
              className="group inline-flex items-center gap-2 bg-primary text-white font-medium text-sm px-6 py-3.5 rounded-full hover:bg-primary/80 transition-colors"
            >
              <FiMail size={15} />
              Send an Email
            </a>
            <a
              href="/services"
              className="group inline-flex items-center gap-2 border border-white/15 text-white/70 hover:text-white font-medium text-sm px-6 py-3.5 rounded-full hover:border-white/30 transition-colors"
            >
              View Services
              <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* ─── Main footer body ─── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8 mb-14">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              {/* HD Logo */}
              <a href="/" className="inline-flex items-center gap-0.5 mb-5 group" aria-label="Home">
                <span className="font-display font-bold text-3xl leading-none text-primary group-hover:opacity-80 transition-opacity">H</span>
                <span className="font-display font-bold text-3xl leading-none text-white group-hover:opacity-80 transition-opacity">D</span>
                <span className="ml-1.5 w-2 h-2 rounded-full bg-primary mb-0.5 self-end group-hover:scale-125 transition-transform" />
              </a>

              <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
                Web designer &amp; full-stack developer crafting responsive, high-converting digital products that look stunning and perform even better.
              </p>

              {/* Contact info */}
              <div className="flex flex-col gap-2.5 mb-7">
                <a
                  href="mailto:hallinsdev@gmail.com"
                  className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-primary transition-colors group"
                >
                  <FiMail size={14} className="text-primary" />
                  hallinsdev@gmail.com
                </a>
                <span className="inline-flex items-center gap-2 text-sm text-white/50">
                  <FiMapPin size={14} className="text-primary" />
                  Eswatini &amp; Remote Worldwide
                </span>
              </div>

              {/* Status pill */}
              <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-3.5 py-2 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-xs font-medium text-white/70">Available for new projects</span>
              </div>
            </motion.div>
          </div>

          {/* Nav columns */}
          {nav.map((col, ci) => (
            <motion.div
              key={col.heading}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={ci + 1}
            >
              <p className="text-xs font-semibold text-white/30 tracking-[0.2em] uppercase mb-5">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={(link as any).external ? '_blank' : undefined}
                      rel={(link as any).external ? 'noreferrer' : undefined}
                      className="group inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                      {(link as any).external && (
                        <FiArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* ─── Bottom bar ─── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-xs text-white/25 order-2 sm:order-1">
            © {year} Hallins. All rights reserved. Built with React &amp; Framer Motion.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3 order-1 sm:order-2">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                whileHover={{ y: -3, color: '#ff3278' }}
                className="text-white/30 hover:text-primary transition-colors"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
