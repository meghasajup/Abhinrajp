import React, { useState, useEffect } from 'react';
import { Calendar, Briefcase, Award, GraduationCap, ChevronRight } from 'lucide-react';

const TIMELINE_STEPS = [
  {
    id: 1,
    period: '2025 — Present',
    badge: 'CURRENT FOCUS',
    role: 'Freelance Software Developer',
    org: 'Freelancer · Custom Web, Business Software & AI',
    angle: 45,
    bullets: [
      'Develop custom web applications and business software for clients worldwide.',
      'Build AI-powered tools and automation solutions using modern LLM APIs.',
      'Create responsive, user-friendly interfaces and transform client ideas into real products.'
    ]
  },
  {
    id: 2,
    period: 'Internship',
    badge: 'GOVT. PROJECT',
    role: 'Software Development Intern',
    org: 'Innovation Hub, Pilikula Science Centre',
    angle: 135,
    bullets: [
      'Worked on the Biodiversity Explorer System, a government-supported project.',
      'Contributed to development and deployment; actively used at the science centre.',
      'Collaborated with the team to improve functionality, multi-touch listeners, and UX.'
    ]
  },
  {
    id: 3,
    period: 'Freelance',
    badge: 'INTERNATIONAL',
    role: 'Web Developer',
    org: 'International Client Projects (UAE)',
    angle: 225,
    bullets: [
      'Designed and developed a corporate web platform for a UAE-based company.',
      'Delivered modern and responsive solutions based on client requirements.',
      'Maintained professional communication and punctual project delivery standards.'
    ]
  },
  {
    id: 4,
    period: 'Education',
    badge: 'FOUNDATION',
    role: 'Bachelor of Computer Applications (BCA)',
    org: 'BCA Graduate (2026) · 10+ Projects Built',
    angle: 315,
    bullets: [
      'Rigorous computer science foundations: data structures, algorithms, system architecture.',
      'Built 10+ complete full-stack and software projects throughout academic journey.',
      'Continuous independent technical research, modern tooling, and practical software engineering.'
    ]
  }
];

export default function StorySection() {
  const [activeStep, setActiveStep] = useState(0);

  const currentStep = TIMELINE_STEPS[activeStep];

  return (
    <section 
      id="about" 
      className="relative min-h-screen py-24 px-4 sm:px-8 md:px-14 border-t border-black/5 dark:border-white/5"
      style={{
        background: 'radial-gradient(ellipse at 20% 70%, rgba(201, 169, 110, 0.05) 0%, transparent 60%)'
      }}
    >
      <div className="max-w-[88rem] w-full mx-auto">
        
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <span className="text-xs sm:text-sm font-mono tracking-widest text-accent font-semibold uppercase mb-2 block">
            · 01 · The story so far
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
            A curious mind, <span className="font-cursive font-normal italic text-4xl sm:text-6xl md:text-7xl">always building.</span>
          </h2>
        </div>

        {/* 2-Column Layout: Left Tachometer Dial, Right Timeline Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Circular Odometer / Tachometer Gauge (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col items-center justify-center p-6 glass-pill rounded-3xl shadow-xl border border-white/60 dark:border-white/10">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center select-none">
              
              {/* Outer Circular Dial with 360-degree radial tick marks */}
              <svg className="w-full h-full" viewBox="0 0 240 240">
                <circle 
                  cx="120" 
                  cy="120" 
                  r="106" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  className="text-black/10 dark:text-white/10"
                />
                <circle 
                  cx="120" 
                  cy="120" 
                  r="92" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="0.5" 
                  className="text-black/15 dark:text-white/15"
                  strokeDasharray="2 4"
                />

                {/* Dial Tick Marks */}
                {Array.from({ length: 48 }).map((_, i) => {
                  const angle = (i * 360) / 48;
                  const isMajor = i % 12 === 0;
                  const isMedium = i % 4 === 0;
                  const len = isMajor ? 12 : isMedium ? 8 : 4;
                  return (
                    <line
                      key={i}
                      x1="120"
                      y1={14}
                      x2="120"
                      y2={14 + len}
                      stroke={isMajor ? '#c9a96e' : 'currentColor'}
                      strokeWidth={isMajor ? 2.5 : isMedium ? 1.5 : 0.8}
                      className={isMajor ? '' : 'text-foreground/30'}
                      transform={`rotate(${angle} 120 120)`}
                    />
                  );
                })}

                {/* Rotating Needle */}
                <g 
                  className="transition-transform duration-700 ease-out origin-center"
                  style={{
                    transform: `rotate(${currentStep.angle}deg)`,
                    transformOrigin: '120px 120px'
                  }}
                >
                  {/* Needle pointer */}
                  <line 
                    x1="120" 
                    y1="120" 
                    x2="120" 
                    y2="28" 
                    stroke="#c9a96e" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                  />
                  <polygon points="120,20 116,32 124,32" fill="#c9a96e" />
                  {/* Center needle pivot */}
                  <circle cx="120" cy="120" r="8" fill="#111111" stroke="#c9a96e" strokeWidth="2" />
                  <circle cx="120" cy="120" r="3" fill="#c9a96e" />
                </g>
              </svg>

              {/* Digital Gauge Center Readout */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none pt-1">
                <span className="text-[10px] font-mono tracking-widest text-accent uppercase font-bold">
                  STEP 0{currentStep.id} / 04
                </span>
                <span className="text-xl sm:text-2xl font-black text-foreground tracking-tight my-0.5">
                  {currentStep.period.split(' ')[0]}
                </span>
                <span className="text-[10px] font-mono text-muted uppercase">
                  {currentStep.badge}
                </span>
              </div>
            </div>

            {/* Quick step buttons */}
            <div className="flex items-center gap-2 mt-4">
              {TIMELINE_STEPS.map((step, idx) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`w-8 h-8 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                    activeStep === idx 
                      ? 'bg-accent text-[#111111] shadow-md scale-110' 
                      : 'bg-black/5 dark:bg-white/5 text-muted hover:text-foreground'
                  }`}
                  aria-label={`View step ${step.id}`}
                >
                  0{step.id}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: 4 Timeline Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {TIMELINE_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`glass-pill rounded-3xl p-6 sm:p-8 cursor-pointer transition-all duration-300 border ${
                    isActive 
                      ? 'border-accent shadow-[0_12px_32px_rgba(201,169,110,0.18)] scale-[1.01]' 
                      : 'border-white/50 dark:border-white/10 opacity-75 hover:opacity-100 hover:border-black/20 dark:hover:border-white/20'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-accent/15 text-accent border border-accent/30">
                      <Calendar className="w-3 h-3" />
                      {step.period}
                    </span>
                    <span className="text-xs font-mono font-semibold text-muted uppercase tracking-wider">
                      {step.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                    {step.role}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-accent font-medium mb-4 mt-0.5">
                    {step.org}
                  </p>

                  <ul className="space-y-2 text-sm text-foreground/80">
                    {step.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
