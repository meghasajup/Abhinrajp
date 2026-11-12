import React from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';

const PROJECTS = [
  {
    id: 'biodiversity-hotspot-explorer',
    tag: 'Govt. Supported Platform',
    title: 'Biodiversity Hotspot Explorer',
    org: 'Innovation Hub, Pilikula Science Centre',
    description: 'An interactive digital touchscreen kiosk application developed during internship at Pilikula Science Centre. Helps visitors explore biodiversity hotspots through an intuitive touchscreen interface with images, species information, and location-based navigation.',
    caseStudyUrl: '/biodiversity-hotspot-explorer/',
    stack: ['React', 'Node.js', 'Socket.io', 'Touchscreen Kiosk', 'Offline DB'],
    hasCaseStudy: true
  },
  {
    id: 'vanguard-store',
    tag: 'E-Commerce & 3D Interactive',
    title: 'VANGUARD Store',
    org: 'Luxury Online Timepiece Store',
    description: 'High-end e-commerce platform featuring immersive 3D watch previews, smooth GSAP product transitions, real-time inventory management, and high-conversion checkout flows.',
    stack: ['Next.js 15', 'Three.js / React Three Fiber', 'Tailwind CSS', 'Stripe'],
    hasCaseStudy: false
  },
  {
    id: 'cuecafe-pro',
    tag: 'Custom Business Software',
    title: 'CueCafe Pro',
    org: 'Snooker Lounge & POS Management System',
    description: 'Offline-first hybrid desktop and web management platform for cue sports lounges. Features automated table lighting timers, real-time POS billing, food & beverage inventory, and analytics.',
    stack: ['Electron', 'SQLite', 'React', 'Node.js', 'Thermal Printing'],
    hasCaseStudy: false
  },
  {
    id: 'uae-business-website',
    tag: 'International Client Project',
    title: 'UAE Business Website',
    org: 'Corporate Web Presence · analystuae.com',
    description: 'Modern, high-performance corporate web platform engineered for a premier UAE-based business consultancy. Built with ultra-fast page speed, responsive multilingual layout, and custom lead generation.',
    stack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'SEO Architecture'],
    hasCaseStudy: false
  }
];

export default function WebDeveloperPage({ onNavigate, onOpenContact }) {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-8 md:px-14 max-w-[88rem] mx-auto animate-fadeIn">
      {/* Back to doors button */}
      <div className="mb-8">
        <button
          onClick={() => onNavigate('#works')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill text-xs font-mono font-medium hover:text-accent transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to the doors</span>
        </button>
      </div>

      {/* Page Header */}
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground mb-4">
          Web Development
        </h1>
        <p className="text-lg sm:text-xl text-foreground/75 leading-relaxed font-normal">
          Websites, landing pages and interactive tools, built end to end: from layout and interaction to responsive front-end, SEO and launch.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-12 mb-24">
        {PROJECTS.map((project, idx) => (
          <article
            key={project.id}
            className="glass-pill rounded-[32px] p-8 sm:p-12 border border-white/60 dark:border-white/10 shadow-xl transition-all duration-300 hover:border-accent/40"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-accent/15 text-accent border border-accent/25 uppercase tracking-wider">
                {project.tag}
              </span>
              <span className="text-xs font-mono text-muted">
                0{idx + 1} / 0{PROJECTS.length}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-1">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm font-mono text-accent font-medium mb-6">
              {project.org}
            </p>

            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed max-w-4xl mb-8">
              {project.description}
            </p>

            {/* Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.stack.map((item) => (
                <span 
                  key={item} 
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-black/5 dark:bg-white/5 text-foreground/70 border border-black/5 dark:border-white/5"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Case Study Link */}
            {project.hasCaseStudy ? (
              <button
                onClick={() => onNavigate(project.caseStudyUrl)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] text-[#f8f6f2] dark:bg-[#f8f6f2] dark:text-[#111111] text-xs sm:text-sm font-semibold tracking-wide hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer"
              >
                <span>Explore Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="inline-flex items-center gap-2 text-xs font-mono text-muted">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Production Project · Live Deployment</span>
              </div>
            )}
          </article>
        ))}
      </div>

      {/* Got a project banner */}
      <div className="glass-pill rounded-[32px] p-8 sm:p-14 text-center border border-accent/30 shadow-2xl flex flex-col items-center">
        <span className="text-xs font-mono tracking-widest text-accent font-bold uppercase mb-2">
          Available for new work
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-4 max-w-xl">
          Got a project? <span className="font-cursive italic font-normal">Let's build it together.</span>
        </h2>
        <p className="max-w-xl text-base text-foreground/75 leading-relaxed mb-8">
          I'm taking on new freelance work: websites, apps, interfaces and visual content. Tell me what you're building and I'll get back to you within a day.
        </p>
        <button
          onClick={onOpenContact}
          className="px-8 py-4 rounded-full bg-[#111111] text-[#f8f6f2] dark:bg-[#f8f6f2] dark:text-[#111111] text-sm sm:text-base font-semibold tracking-wide hover:scale-105 active:scale-95 transition-all shadow-xl cursor-pointer"
        >
          Start a project
        </button>
      </div>
    </div>
  );
}
