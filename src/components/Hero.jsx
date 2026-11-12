
import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import abhin from "/images/abhin.png";

const ROLES = [
  { title: 'Full-Stack Developer', num: '01 / 05' },
  { title: 'Software Engineer', num: '02 / 05' },
  { title: 'UI/UX Developer', num: '03 / 05' },
  { title: 'AI Solutions Builder', num: '04 / 05' },
  { title: 'Freelance Developer', num: '05 / 05' },
];

export default function Hero({ onOpenContact, onNavigate }) {
  const [roleIndex, setRoleIndex] = useState(4);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      flipToNext();
    }, 3600);

    return () => clearInterval(timer);
  }, [roleIndex]);

  const flipToNext = () => {
    if (isFlipping) return;

    setIsFlipping(true);

    setTimeout(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
      setIsFlipping(false);
    }, 400);
  };

  const currentRole = ROLES[roleIndex];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-8 px-4 sm:px-8 md:px-14 overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 80% 40%, rgba(201, 169, 110, 0.08) 0%, transparent 60%)'
      }}
    >

      {/* Background Ambient Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-10 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-100,500 L1600,280"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="6 6"
          />

          <path
            d="M-100,550 L1600,330"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M-100,600 L1600,380"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
        </svg>
      </div>

      <div className="max-w-[88rem] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center flex-1 my-auto z-10">

        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col justify-center items-start pt-6 sm:pt-10">

          {/* Main Hero Typography */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.08] mb-6">

            <span className="block">
              Hi, I'm{' '}
              <span className="hero-cursive-name font-normal text-5xl sm:text-7xl md:text-8xl italic pr-1">
                Bilal
              </span>.
            </span>

            <span className="block hero-cursive-sub font-normal text-4xl sm:text-6xl md:text-7xl italic text-foreground/80 mt-1">
              I design and build
            </span>

          </h1>

          {/* Interactive 3D Spiral Desk Calendar */}
          <div
            onClick={flipToNext}
            className="cal-container relative my-2 sm:my-4 cursor-pointer select-none group"
            title="Click to flip role"
          >

            {/* Calendar Stand */}
            <div className="absolute -inset-x-3 -bottom-2.5 h-16 bg-neutral-200/70 dark:bg-neutral-800/60 rounded-xl -rotate-1 skew-x-2 shadow-inner border border-black/5 dark:border-white/5 pointer-events-none" />

            {/* Calendar Card */}
            <div
              className={`relative bg-white dark:bg-[#1a1818] border border-black/10 dark:border-white/10 rounded-2xl px-5 sm:px-8 py-5 sm:py-6 shadow-[0_16px_36px_rgba(0,0,0,0.12)] min-w-[280px] sm:min-w-[420px] md:min-w-[480px] transition-all duration-300 transform ${
                isFlipping
                  ? '-rotate-x-90 opacity-40 scale-95'
                  : 'rotate-x-0 opacity-100 scale-100'
              }`}
              style={{
                perspective: '1000px',
                transformOrigin: 'top center'
              }}
            >

              {/* Spiral Coil Rings */}
              <div className="absolute -top-3 left-4 right-4 flex justify-between items-center px-1">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-1.5 sm:w-2 h-4 sm:h-5 rounded-full bg-gradient-to-b from-[#e0e0e0] via-[#888888] to-[#222222] shadow-[0_1px_2px_rgba(0,0,0,0.4)] border border-neutral-400/50" />
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-900 -mt-1" />
                  </div>
                ))}
              </div>

              {/* Calendar Title */}
              <div className="pt-2 flex flex-col justify-center">
                <span className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground font-sans">
                  {currentRole.title}
                </span>

                <span className="self-end text-[10px] sm:text-xs font-mono font-medium tracking-widest text-muted/70 mt-2">
                  {currentRole.num}
                </span>
              </div>
            </div>
          </div>

          {/* Value Proposition */}
          <p className="max-w-xl text-base sm:text-lg text-foreground/75 leading-relaxed mt-4 mb-8 font-normal">
            I'm a Freelancer — building practical software and AI-powered solutions for real businesses. Turning ideas into digital products with simplicity, reliability, and great user experiences.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">

            <button
              onClick={onOpenContact}
              className="group flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#111111] text-[#f8f6f2] dark:bg-[#f8f6f2] dark:text-[#111111] font-medium text-sm sm:text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl cursor-pointer"
            >
              <span>Get In Touch</span>

              <span className="w-6 h-6 rounded-full bg-white/20 dark:bg-black/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>

            <button
              onClick={() => onNavigate('#works')}
              className="glass-pill px-6 py-3.5 rounded-full font-medium text-sm sm:text-base text-foreground transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              View My Work
            </button>

          </div>
        </div>

        {/* Right Column: Full Image Color Spotlight */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-end relative mt-8 lg:mt-0">

          {/* Ambient Glow */}
          <div className="absolute w-[320px] sm:w-[460px] h-[320px] sm:h-[460px] rounded-full bg-gradient-to-tr from-[#c9a96e]/20 via-[#c9a96e]/10 to-transparent blur-3xl -z-10 bottom-6" />

          {/* Portrait Container */}
          <div
            className="relative max-w-[340px] sm:max-w-[420px] md:max-w-[460px] w-full flex justify-center items-end overflow-visible"

            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();

              e.currentTarget.style.setProperty(
                '--mouse-x',
                `${e.clientX - rect.left}px`
              );

              e.currentTarget.style.setProperty(
                '--mouse-y',
                `${e.clientY - rect.top}px`
              );
            }}

            onMouseLeave={(e) => {
              e.currentTarget.style.setProperty('--mouse-x', '-200px');
              e.currentTarget.style.setProperty('--mouse-y', '-200px');
            }}
          >

            {/* Grayscale Base Image */}
            <img
              src={abhin}
              alt="Portrait of Bilal"
              className="
                relative
                block
                w-full
                h-auto
                object-contain
                grayscale
                select-none
                pointer-events-none
                drop-shadow-[0_20px_40px_rgba(0,0,0,0.18)]
              "
              loading="eager"
              draggable="false"
            />

            {/* Original Color Image - Circular Spotlight */}
            <img
              src={abhin}
              alt=""
              aria-hidden="true"
              className="
                absolute
                inset-0
                w-full
                h-full
                object-contain
                select-none
                pointer-events-none
              "
              style={{
                clipPath:
                  'circle(65px at var(--mouse-x, -200px) var(--mouse-y, -200px))',

                WebkitClipPath:
                  'circle(65px at var(--mouse-x, -200px) var(--mouse-y, -200px))',

                transition: 'clip-path 0.04s linear'
              }}
              draggable="false"
            />

          </div>
        </div>
      </div>

      {/* Hero Bottom Ribbon */}
      <div className="w-full max-w-[88rem] mx-auto border-t border-black/10 dark:border-white/10 pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs font-mono font-medium tracking-wider text-muted uppercase gap-2">

        <span>BCA GRADUATE (2026)</span>

        <span className="hidden md:inline">
          10+ PROJECTS BUILT · FREELANCE DEVELOPER
        </span>

        <button
          onClick={() => onNavigate('#works')}
          className="flex items-center gap-1.5 hover:text-foreground transition-colors cursor-pointer"
        >
          <span>SCROLL TO EXPLORE</span>

          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </button>

      </div>
    </section>
  );
}
