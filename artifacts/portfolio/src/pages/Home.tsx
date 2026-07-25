import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { SiFiverr, SiUpwork, SiTiktok, SiFacebook } from 'react-icons/si';
import { FiArrowRight, FiArrowUpRight, FiChevronLeft, FiChevronRight, FiDownload } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa6';

import photo from '@assets/file_00000000a20471f4bb4d9534d7debaeb-removebg-preview_1785015317881.png';

// Import generated images
import project1 from '../../attached_assets/generated_images/project1.png';
import project2 from '../../attached_assets/generated_images/project2.png';
import project3 from '../../attached_assets/generated_images/project3.png';

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white">
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
    transition: {
      staggerChildren: 0.1
    }
  }
};

function HeroSection() {
  return (
    <section className="relative w-full min-h-[100dvh] flex items-center justify-center pt-20 pb-0 overflow-hidden px-6 md:px-12">
      {/* Top Left Badge */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute top-8 left-6 md:top-12 md:left-12 flex items-center gap-3 bg-secondary/50 border border-border backdrop-blur-sm px-4 py-2 rounded-full z-20"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <span className="text-sm font-medium tracking-wide">Available for New Project</span>
      </motion.div>

      {/* Main Name Background */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-display text-[15vw] md:text-[18vw] leading-none font-bold tracking-tighter flex whitespace-nowrap"
        >
          <span className="text-outline">HAL</span>
          <span className="text-white">LINS</span>
        </motion.h1>
      </div>

      {/* Dark gradient overlay at the bottom — hides HALLINS text behind the info block */}
      <div
        className="absolute bottom-0 left-0 w-full z-10 pointer-events-none"
        style={{ height: '55%', background: 'linear-gradient(to top, #000000 30%, rgba(0,0,0,0.85) 65%, transparent 100%)' }}
      />

      {/* Photo — tall, flush to bottom, sits above gradient */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 flex justify-center items-end"
        style={{ height: '92%', width: 'auto', maxWidth: '680px' }}
      >
        <img 
          src={photo} 
          alt="Hallins" 
          className="h-full w-auto object-contain transition-all duration-700 ease-in-out"
          style={{ filter: "drop-shadow(0 0 40px rgba(255, 50, 120, 0.25)) grayscale(100%)" }}
          onMouseEnter={(e) => e.currentTarget.style.filter = "drop-shadow(0 0 60px rgba(255, 50, 120, 0.5)) grayscale(0%)"}
          onMouseLeave={(e) => e.currentTarget.style.filter = "drop-shadow(0 0 40px rgba(255, 50, 120, 0.25)) grayscale(100%)"}
        />
      </motion.div>

      {/* Bottom Left Info — sits above the gradient overlay */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="absolute bottom-10 left-6 md:bottom-14 md:left-12 max-w-sm z-20"
      >
        <motion.h2 variants={fadeUp} className="text-xl md:text-2xl font-display font-bold mb-3 text-white">
          Web Design And Full Stack Developer
        </motion.h2>
        <motion.p variants={fadeUp} className="text-muted-foreground text-sm md:text-base mb-6 leading-relaxed">
          I build responsive, scalable and high converting websites with full stack web apps and applications
        </motion.p>
        <motion.button 
          variants={fadeUp}
          className="group flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
        >
          Let's collaborate 
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>

      {/* Right Socials */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20 hidden md:flex"
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

function TickerSection() {
  const techs = [
    "REACT", "NODE.JS", "TYPESCRIPT", "FIGMA", "TAILWIND CSS", 
    "NO-CODE TOOLS", "WEBFLOW", "WORDPRESS", "MONGODB", "EXPRESS", 
    "NEXT.JS", "FRAMER"
  ];
  const items = [...techs, ...techs]; // double for seamless loop

  return (
    <div className="w-full bg-[#0a0a0a] border-y border-border py-4 overflow-hidden flex whitespace-nowrap relative z-10">
      <div className="flex animate-ticker">
        {items.map((tech, i) => (
          <div key={i} className="flex items-center">
            <span className="text-lg md:text-xl font-display font-bold px-8 text-white">{tech}</span>
            <span className="text-primary text-2xl">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "Revesto Realtor",
      desc: "Commercial real estate website for booking property tours and contacting agents.",
      tags: ["Real Estate", "Web Design", "Responsive"],
      image: project1
    },
    {
      title: "GEDA",
      desc: "Eswatini's Discovery Platform, a web app built using no-code tools.",
      tags: ["No-Code", "Web App", "Discovery Platform"],
      image: project2
    },
    {
      title: "WordPilot AI",
      desc: "An AI-powered blog writing tool built with a modern web builder.",
      tags: ["AI", "SaaS", "Blog Tool"],
      image: project3
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10 bg-background">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
      >
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-16 text-center">Featured Projects</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((proj, i) => (
          <motion.div 
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className={`group flex flex-col bg-card border border-card-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,50,120,0.15)] ${i === 2 ? 'md:col-span-2 md:flex-row' : ''}`}
          >
            <div className={`overflow-hidden bg-[#1a1a1a] p-8 flex items-center justify-center ${i === 2 ? 'md:w-1/2' : 'h-[300px] md:h-[400px]'}`}>
              <img 
                src={proj.image} 
                alt={proj.title} 
                className="w-full h-full object-cover rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  e.currentTarget.src = `https://placehold.co/800x600/111/fff?text=${encodeURIComponent(proj.title)}`;
                }}
              />
            </div>
            <div className={`p-8 flex flex-col justify-center ${i === 2 ? 'md:w-1/2' : ''}`}>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">{proj.title}</h3>
              <p className="text-muted-foreground mb-8 line-clamp-3 leading-relaxed">{proj.desc}</p>
              <div className="mt-auto">
                <button className="flex items-center gap-2 border border-primary text-primary px-5 py-2.5 rounded-full font-medium hover:bg-primary hover:text-white transition-colors">
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

const testimonials = [
  {
    name: "Marcus Thompson",
    text: "Hallins delivered an exceptional Fiverr experience. The website was clean, fast, and exactly what I envisioned. Highly recommend!",
    platform: "Fiverr",
    rating: 5,
    color: "bg-[#00b22d]" // Fiverr green
  },
  {
    name: "Amara Okonkwo",
    text: "Working with Hallins on Upwork was seamless. He built our Eswatini platform with incredible attention to detail. Will hire again.",
    platform: "Upwork",
    rating: 5,
    color: "bg-[#14a800]" // Upwork green
  },
  {
    name: "Jake Moretti",
    text: "Found Hallins on Fiverr and couldn't be happier. The AI blog tool he built for us is generating content our readers love.",
    platform: "Fiverr",
    rating: 5,
    color: "bg-[#00b22d]"
  },
  {
    name: "Priya Nair",
    text: "Hired through Upwork — absolute professional. Delivered the real estate site ahead of schedule with great SEO performance.",
    platform: "Upwork",
    rating: 5,
    color: "bg-[#14a800]"
  },
  {
    name: "Sofia Mensah",
    text: "Hallins transformed our online presence. The design is stunning and the website converts visitors into leads like never before.",
    platform: "Fiverr",
    rating: 5,
    color: "bg-[#00b22d]"
  }
];

function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 2 >= testimonials.length ? 0 : prev + 2));
  const prev = () => setIndex((prev) => (prev - 2 < 0 ? (testimonials.length % 2 === 0 ? testimonials.length - 2 : testimonials.length - 1) : prev - 2));

  // Determine how many to show based on window width (just logic for mapping, actual responsiveness handled by css/layout)
  // For simplicity, we just slice 2. On mobile, they stack or we just show 1? 
  // Let's just slice 2 and rely on grid for layout.
  
  const visibleTestimonials = testimonials.slice(index, index + 2);
  if (visibleTestimonials.length === 1 && testimonials.length > 1) {
    visibleTestimonials.push(testimonials[0]); // wrap around if odd number
  }

  return (
    <section className="py-24 px-6 md:px-12 w-full mx-auto relative z-10 bg-background sticky top-0 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <motion.h2 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-4xl md:text-6xl font-display font-bold"
        >
          What Clients Say
        </motion.h2>
        <div className="flex gap-4">
          <button onClick={prev} className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors text-xl">
            <FiChevronLeft />
          </button>
          <button onClick={next} className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors text-xl">
            <FiChevronRight />
          </button>
        </div>
      </div>

      <div className="min-h-[300px] relative">
        <AnimatePresence mode="wait">
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {visibleTestimonials.map((t, i) => (
              <div key={i} className="bg-card border-l-4 border-l-primary border border-card-border p-8 md:p-10 rounded-r-2xl rounded-l-sm shadow-xl flex flex-col h-full">
                <div className="flex text-yellow-400 mb-6 gap-1 text-sm">
                  {[...Array(t.rating)].map((_, j) => <FaStar key={j} />)}
                </div>
                <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-8 italic flex-grow">
                  "{t.text}"
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <h4 className="font-display font-bold text-lg">{t.name}</h4>
                  <span className={`${t.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {t.platform}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const skills = [
    { name: "React", top: "10%", left: "10%", delay: 0.1 },
    { name: "Node.js", top: "20%", right: "10%", delay: 0.2 },
    { name: "UI/UX Design", top: "70%", left: "5%", delay: 0.3 },
    { name: "No-Code", bottom: "10%", right: "20%", delay: 0.4 },
    { name: "TypeScript", top: "50%", right: "-5%", delay: 0.5 },
    { name: "Web Design", bottom: "25%", left: "15%", delay: 0.6 },
  ];

  return (
    <section className="relative z-20 bg-[#050505] min-h-screen py-24 border-t border-white/5 rounded-t-[3rem] -mt-12 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="order-2 lg:order-1"
        >
          <motion.div variants={fadeUp} className="mb-4 text-primary font-medium tracking-widest uppercase text-sm">
            — About Me
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-display font-bold mb-8">
            Who is <span className="text-primary">Hallins?</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed mb-10">
            I'm a passionate Web Designer and Full Stack Developer who specializes in building responsive, high-converting websites and web applications. From crafting beautiful UI to architecting scalable backends, I deliver complete digital solutions that drive real results for businesses.
          </motion.p>
          
          <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6 mb-10 pb-10 border-b border-border">
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">50+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Projects<br/>Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">30+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Happy<br/>Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">3+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Years<br/>Experience</div>
            </div>
          </motion.div>

          <motion.button 
            variants={fadeUp}
            className="flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(255,50,120,0.4)]"
          >
            Download CV <FiDownload />
          </motion.button>
        </motion.div>

        {/* Right Photo */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="order-1 lg:order-2 relative flex justify-center items-center py-10"
        >
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-secondary/30 border border-border flex items-end justify-center overflow-hidden mask-radial">
            <img 
              src={photo} 
              alt="Hallins" 
              className="w-[90%] h-auto object-contain grayscale opacity-90 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
            />
          </div>

          {/* Floating Skills */}
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: skill.delay + 0.5, type: "spring" }}
              className="absolute bg-card border border-border px-4 py-2 rounded-full text-sm font-medium shadow-xl whitespace-nowrap z-10"
              style={{
                top: skill.top,
                bottom: skill.bottom,
                left: skill.left,
                right: skill.right
              }}
            >
              {skill.name}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black relative z-20 border-t-2 border-primary pt-24 pb-12 overflow-hidden flex flex-col items-center">
      <div className="w-full flex justify-center mb-16 select-none pointer-events-none">
        <h2 className="font-display text-[12vw] leading-none font-bold tracking-tighter text-outline opacity-20">
          HALLINS
        </h2>
      </div>
      
      <div className="text-center z-10 -mt-24 mb-12">
        <p className="text-2xl md:text-3xl font-display font-medium mb-8">Let's build something great together</p>
        <div className="flex justify-center gap-6">
          <a href="https://www.fiverr.com/hall_ket" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors text-lg">
            <SiFiverr />
          </a>
          <a href="https://www.upwork.com/freelancers/~0151b31429614d36ea?mp_source=share" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors text-lg">
            <SiUpwork />
          </a>
          <a href="https://www.tiktok.com/@hallinsdev" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors text-lg">
            <SiTiktok />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61569828302942" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors text-lg">
            <SiFacebook />
          </a>
        </div>
      </div>
      
      <div className="text-muted-foreground text-sm z-10">
        © 2025 Hallins. All rights reserved.
      </div>
    </footer>
  );
}
