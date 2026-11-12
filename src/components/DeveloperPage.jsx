import React from 'react';
import { ArrowLeft, ArrowRight, Terminal, Cpu, Database, Server, ShieldCheck } from 'lucide-react';

const SOFTWARE_PROJECTS = [
  {
    id: 'cuecafe-pro',
    tag: 'Custom Desktop & Web POS',
    title: 'CueCafe Pro — Lounge & Club Management System',
    org: 'Commercial Venue Management Software',
    description: 'An offline-first, high-reliability POS and slot management software for cue sports venues and gaming lounges. Engineered with automated hardware table timer relays, sub-second SQLite transactions, multi-tier user role permissions, and instant thermal receipt printing.',
    stack: ['Electron', 'SQLite', 'Node.js', 'React', 'Hardware Relays', 'Offline-First'],
    metrics: ['Sub-10ms query times', 'Zero internet dependency', 'Automated bill calculation']
  },
  {
    id: 'ai-rag-pipeline',
    tag: 'Enterprise AI & Automation',
    title: 'Autonomous Document Intelligence & RAG System',
    org: 'Custom Retrieval-Augmented Generation Pipeline',
    description: 'High-throughput document querying engine integrating LangChain, OpenAI embeddings, and Chroma vector database. Enables enterprise clients to securely chat with internal PDF documents, compliance manuals, and database tables with verifiable citations.',
    stack: ['Python', 'FastAPI', 'LangChain', 'OpenAI', 'ChromaDB', 'React UI'],
    metrics: ['99.4% factual citation rate', '<1.2s average latency', 'Secure on-prem embeddings']
  },
  {
    id: 'uae-business-website',
    tag: 'Corporate Enterprise Portal',
    title: 'UAE Corporate Business Platform',
    org: 'analystuae.com · International Client Delivery',
    description: 'Bilingual corporate portal with comprehensive SEO and analytics tracking for a premier UAE consultancy firm. Features lightning-fast static generation, dynamic contact lead pipelines, and responsive mobile architecture.',
    stack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Cloudflare CDN'],
    metrics: ['100 Lighthouse Performance', 'Sub-second initial load', 'Bilingual English/Arabic']
  },
  {
    id: 'biodiversity-hotspot-explorer',
    tag: 'Public Interactive Kiosk',
    title: 'Biodiversity Hotspot Explorer System',
    org: 'Innovation Hub, Pilikula Science Centre',
    description: 'Government-supported interactive touch kiosk system deployed for public visitors at Pilikula Science Centre. Features regional ecosystem maps, high-res wildlife photography, and low-latency touch interaction.',
    caseStudyUrl: '/biodiversity-hotspot-explorer/',
    stack: ['React', 'Node.js', 'Socket.io', 'Touchscreen Kiosk Display'],
    metrics: ['Deployed on live kiosk', 'Zero user friction', 'Multi-touch UI']
  }
];

export default function DeveloperPage({ onNavigate, onOpenContact }) {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-8 md:px-14 max-w-[88rem] mx-auto animate-fadeIn">
      {/* Back button */}
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
          Software Engineering & AI Solutions
        </h1>
        <p className="text-lg sm:text-xl text-foreground/75 leading-relaxed font-normal">
          Custom desktop applications, automated business backends, and AI integrations built for production reliability and high performance.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-12 mb-24">
        {SOFTWARE_PROJECTS.map((project, idx) => (
          <article
            key={project.id}
            className="glass-pill rounded-[32px] p-8 sm:p-12 border border-white/60 dark:border-white/10 shadow-xl transition-all duration-300 hover:border-accent/40"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-accent/15 text-accent border border-accent/25 uppercase tracking-wider">
                {project.tag}
              </span>
              <span className="text-xs font-mono text-muted">
                0{idx + 1} / 0{SOFTWARE_PROJECTS.length}
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

            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {project.metrics.map((m, mIdx) => (
                <div key={mIdx} className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <span className="text-xs font-mono font-semibold text-accent block">KEY HIGHLIGHT</span>
                  <span className="text-sm font-medium text-foreground">{m}</span>
                </div>
              ))}
            </div>

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

            {project.caseStudyUrl ? (
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
                <span>Production Architecture · Verified System</span>
              </div>
            )}
          </article>
        ))}
      </div>

      {/* Start Project Banner */}
      <div className="glass-pill rounded-[32px] p-8 sm:p-14 text-center border border-accent/30 shadow-2xl flex flex-col items-center">
        <span className="text-xs font-mono tracking-widest text-accent font-bold uppercase mb-2">
          Available for new software builds
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-4 max-w-xl">
          Need custom software <span className="font-cursive italic font-normal">or AI pipelines?</span>
        </h2>
        <p className="max-w-xl text-base text-foreground/75 leading-relaxed mb-8">
          From local desktop systems and billing POS to intelligent automated LLM agents, I build reliable software engineered for business needs.
        </p>
        <button
          onClick={onOpenContact}
          className="px-8 py-4 rounded-full bg-[#111111] text-[#f8f6f2] dark:bg-[#f8f6f2] dark:text-[#111111] text-sm sm:text-base font-semibold tracking-wide hover:scale-105 active:scale-95 transition-all shadow-xl cursor-pointer"
        >
          Discuss Your Project
        </button>
      </div>
    </div>
  );
}
