import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Monitor, Layers, Zap, CheckCircle2, MapPin, Search, Database, Shield } from 'lucide-react';

export default function BiodiversityCaseStudy({ onNavigate, onOpenContact }) {
  const [selectedHotspot, setSelectedHotspot] = useState('western-ghats');

  const hotspots = [
    { id: 'western-ghats', name: 'Western Ghats', species: 'Lion-tailed Macaque, Malabar Gliding Frog', status: 'Endangered' },
    { id: 'rainforest', name: 'Agumbe Rainforest', species: 'King Cobra, Lion-tailed Macaque', status: 'Protected' },
    { id: 'coastal', name: 'Coastal Mangroves', species: 'Smooth-coated Otter, Fiddler Crab', status: 'Vulnerable' },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-8 md:px-14 max-w-[88rem] mx-auto animate-fadeIn">
      {/* Breadcrumb Navigation */}
      <div className="mb-8">
        <button
          onClick={() => onNavigate('/web-developer/')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill text-xs font-mono font-medium hover:text-accent transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Projects</span>
        </button>
      </div>

      {/* Hero Banner */}
      <div className="max-w-4xl mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>Govt. Supported Platform · Pilikula Science Centre</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-foreground mb-6">
          Biodiversity Hotspot Explorer
        </h1>

        <p className="text-lg sm:text-2xl text-foreground/80 leading-relaxed font-normal">
          An interactive digital kiosk application developed for visitors at Pilikula Science Centre to navigate regional biodiversity hotspots through a tactile, multi-touch interface.
        </p>
      </div>

      {/* Meta Specifications Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <div className="glass-pill p-5 rounded-2xl border border-white/60 dark:border-white/10">
          <span className="text-[10px] font-mono uppercase tracking-wider text-muted block mb-1">ROLE</span>
          <span className="text-sm font-bold text-foreground">Full Stack & UI/UX</span>
          <span className="text-xs text-muted block mt-0.5">End-to-End System Build</span>
        </div>
        <div className="glass-pill p-5 rounded-2xl border border-white/60 dark:border-white/10">
          <span className="text-[10px] font-mono uppercase tracking-wider text-muted block mb-1">ORGANIZATION</span>
          <span className="text-sm font-bold text-foreground">Pilikula Science Centre</span>
          <span className="text-xs text-muted block mt-0.5">Innovation Hub Internship</span>
        </div>
        <div className="glass-pill p-5 rounded-2xl border border-white/60 dark:border-white/10">
          <span className="text-[10px] font-mono uppercase tracking-wider text-muted block mb-1">PLATFORM</span>
          <span className="text-sm font-bold text-foreground">Touchscreen Kiosk</span>
          <span className="text-xs text-muted block mt-0.5">Physical Hardware Display</span>
        </div>
        <div className="glass-pill p-5 rounded-2xl border border-white/60 dark:border-white/10">
          <span className="text-[10px] font-mono uppercase tracking-wider text-muted block mb-1">CORE STACK</span>
          <span className="text-sm font-bold text-foreground">React · Node · Socket.io</span>
          <span className="text-xs text-muted block mt-0.5">Local Offline Database</span>
        </div>
      </div>

      {/* Interactive Kiosk Simulator Panel */}
      <div className="glass-pill rounded-[32px] p-6 sm:p-10 border border-accent/30 shadow-2xl mb-16 overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-black/10 dark:border-white/10">
          <div>
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">
              INTERACTIVE DEMO SIMULATION
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
              Physical Kiosk Touchscreen Interface
            </h2>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/25">
            Offline Mode: ACTIVE
          </span>
        </div>

        {/* Mock Kiosk UI */}
        <div className="bg-neutral-900 text-white rounded-2xl p-6 sm:p-8 shadow-inner border border-neutral-700">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-sm font-mono uppercase tracking-wider text-neutral-300">
                Pilikula Science Centre · Western Ghats Flora & Fauna Explorer
              </span>
            </div>
            <span className="text-xs font-mono text-neutral-400">Touch to select a region:</span>
          </div>

          {/* Interactive Regions Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {hotspots.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedHotspot(item.id)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                  selectedHotspot === item.id
                    ? 'bg-accent/20 border-accent text-white shadow-lg'
                    : 'bg-neutral-800/80 border-neutral-700 text-neutral-300 hover:bg-neutral-800'
                }`}
              >
                <span className="text-xs font-mono uppercase text-accent block mb-1">{item.status}</span>
                <span className="text-base font-bold block">{item.name}</span>
                <span className="text-xs text-neutral-400 block mt-1">{item.species}</span>
              </button>
            ))}
          </div>

          <div className="bg-neutral-950/80 rounded-xl p-5 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-neutral-400 font-mono">
              Displaying high-resolution regional map data with cached local imagery and audio narration for science centre attendees.
            </div>
            <span className="px-3 py-1 rounded-lg bg-white/10 text-xs font-mono text-neutral-300 whitespace-nowrap">
              Latency: &lt; 8ms
            </span>
          </div>
        </div>
      </div>

      {/* Case Study Written Narrative */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-20">
        
        {/* Left column: Problem & Solution */}
        <div className="md:col-span-7 space-y-10">
          <div>
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider block mb-2">
              CHALLENGE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-4">
              The Problem
            </h2>
            <p className="text-foreground/80 leading-relaxed text-base sm:text-lg">
              Visitors often struggle to find detailed information about biodiversity zones and species inside the science centre. Traditional information boards provide limited interaction and are difficult to update. Public exhibits require a zero-friction interface that children, students, and seniors can operate effortlessly without instructions.
            </p>
          </div>

          <div>
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider block mb-2">
              ENGINEERING RESPONSE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-4">
              The Solution
            </h2>
            <p className="text-foreground/80 leading-relaxed text-base sm:text-lg">
              Developed an interactive application that allows visitors to browse biodiversity hotspots, explore wildlife information, and navigate through multimedia content using a modern touchscreen interface. The system was engineered from the ground up for resilience against hardware restarts and intermittent network dropouts.
            </p>
          </div>

          <div>
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider block mb-2">
              CORE CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-4">
              Key Features
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-foreground/85">
              {[
                'Interactive Hotspot Navigation',
                'Dynamic Species Profiles',
                'Touch-Optimized Photo Gallery',
                'Ecological Category Filtering',
                'Instant Predictive Search',
                'Offline Database Support',
                'Zero-Lag Touchscreen Engine',
                'Kiosk Auto-Reset Guard'
              ].map((feat, i) => (
                <li key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span className="font-medium">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right column: Technical Architecture & Learnings */}
        <div className="md:col-span-5 space-y-6">
          <div className="glass-pill rounded-3xl p-6 sm:p-8 border border-white/60 dark:border-white/10 shadow-lg">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-accent" />
              <span>System Architecture</span>
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-foreground/80">
              <li className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                <strong className="block text-foreground font-semibold">Touch Interaction Layer</strong>
                Multi-touch gesture smoothing and debounced event listeners optimized for industrial touchscreen displays.
              </li>
              <li className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                <strong className="block text-foreground font-semibold">Offline Database Sync</strong>
                Local SQLite cache ensuring 100% exhibit uptime even during facility network outages.
              </li>
              <li className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                <strong className="block text-foreground font-semibold">Socket.io Event Pipeline</strong>
                Bi-directional state coordination enabling remote curator updates without interrupting kiosk users.
              </li>
            </ul>
          </div>

          <div className="glass-pill rounded-3xl p-6 sm:p-8 border border-white/60 dark:border-white/10 shadow-lg">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              <span>Project Impact</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-foreground/80 list-disc list-inside">
              <li>Replaced static placards with engaging interactive discovery.</li>
              <li>Cataloged regional Western Ghats wildlife on-demand.</li>
              <li>Dramatically increased educational retention among school cohorts.</li>
              <li>Proven deployment stability in continuous public operation.</li>
            </ul>
          </div>
        </div>

      </div>

      {/* Case Study Footer Navigation */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 border-t border-black/10 dark:border-white/10">
        <button
          onClick={() => onNavigate('/web-developer/')}
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-foreground transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </button>

        <button
          onClick={onOpenContact}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] text-[#f8f6f2] dark:bg-[#f8f6f2] dark:text-[#111111] text-xs sm:text-sm font-semibold tracking-wide hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer"
        >
          <span>Discuss a Project with Abhinraj</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
