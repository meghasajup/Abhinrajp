import React, { useState, useEffect, useCallback } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import abhin from "/images/abhin.png";

const ROLES = [
  { title: "Mobile App Developer", num: "01 / 03" },
  { title: "UI/UX Developer", num: "02 / 03" },
  { title: "App Deployment", num: "03 / 03" },
];

export default function Hero({ onOpenContact, onNavigate }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const [mousePosition, setMousePosition] = useState({
    x: -200,
    y: -200,
  });

  const currentRole = ROLES[roleIndex];
  const nextRole = ROLES[(roleIndex + 1) % ROLES.length];

  const flipToNext = useCallback(() => {
    setIsFlipping((flipping) => {
      if (flipping) return flipping;
      return true;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      flipToNext();
    }, 3600);

    return () => clearInterval(timer);
  }, [flipToNext]);

  const handlePageTurnComplete = () => {
    setRoleIndex((prev) => (prev + 1) % ROLES.length);
    setIsFlipping(false);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePosition({
      x: -200,
      y: -200,
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-7 px-5 sm:px-8 overflow-hidden">

      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-10 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none">
          <path d="M-100,500 L1600,280" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
          <path d="M-100,550 L1600,330" stroke="currentColor" strokeWidth="1" />
          <path d="M-100,600 L1600,380" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 w-full max-w-[70rem] mx-auto flex-1 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-10">
        
        {/* Left column content */}
        <div className="w-full flex flex-col justify-center items-start order-1 py-8 lg:py-0">

          <div className="flex items-center gap-2 mb-6">
            <span className="w-[5px] h-[5px] rounded-full bg-[#77716e]" />
            <span className="text-xs font-medium text-muted">
              Flutter Developer
            </span>
          </div>

          <h1 className="w-full text-[clamp(38px,4vw,54px)] leading-[1.08] font-extrabold tracking-[-0.045em] text-foreground mb-1">
            Hi, I'm Abhinraj.
          </h1>

          <h2 className="text-[clamp(38px,4vw,54px)] leading-[1.08] font-bold tracking-[-0.045em] text-foreground/45 mb-6">
            I am a
          </h2>

          {/* NOTEBOOK WITH MATCHING FLOATING SHADOW */}
          <div className="calendar-container relative cursor-pointer select-none w-full max-w-[480px] my-6" onClick={flipToNext} title="Click to turn page">
            
            {/* SOFT MATCHING FLOATING BLACK SHADOW */}
            <div className="absolute inset-x-2 -bottom-3 h-12 bg-black/40 dark:bg-black/80 rounded-[24px] blur-md rotate-[-3.5deg] pointer-events-none" />
            
            {/* Subtle Paper Stack Underlayers */}
            <div className="absolute inset-x-2 bottom-[-8px] h-12 rounded-2xl bg-[#d5cfca] dark:bg-[#221f1f] rotate-[-2.5deg] pointer-events-none" />
            <div className="absolute inset-x-1 bottom-[-4px] h-10 rounded-2xl bg-[#e6e1dc] dark:bg-[#1a1717] rotate-[-1.5deg] pointer-events-none" />

            {/* Page Stage */}
            <div className="calendar-page-stage relative">
              
              {/* Next Page */}
              <div className="calendar-next-page absolute inset-0 rounded-2xl bg-[#fffdfb] dark:bg-[#1a1818] border border-[#e5dfdb] dark:border-white/10 px-6 sm:px-8 pt-7 pb-4 shadow-sm flex flex-col justify-between">
                <span className="text-[clamp(24px,3.2vw,40px)] font-black tracking-[-0.04em] text-[#151313] dark:text-white whitespace-nowrap overflow-hidden text-ellipsis">
                  {nextRole.title}
                </span>
                <span className="self-end text-[11px] font-mono font-semibold tracking-widest text-[#b7b0ab]">
                  {nextRole.num}
                </span>
              </div>

              {/* Current flipping page */}
              <div key={roleIndex} onAnimationEnd={(e) => {
                if (e.target === e.currentTarget && isFlipping) {
                  handlePageTurnComplete();
                }
              }}
                className={`calendar-current-page ${isFlipping ? "calendar-page-turning" : ""}`}
              >
                {/* Front Side */}
                <div className="calendar-paper-front rounded-2xl bg-[#fffdfb] dark:bg-[#1a1818] border border-[#e5dfdb] dark:border-white/10 px-6 sm:px-8 pt-7 pb-4 shadow-[0_10px_25px_rgba(0,0,0,0.15)] dark:shadow-[0_10px_25px_rgba(0,0,0,0.5)] flex flex-col justify-between">
                  <span className="text-[clamp(24px,3.2vw,40px)] font-black tracking-[-0.04em] text-[#151313] dark:text-white whitespace-nowrap overflow-hidden text-ellipsis">
                    {currentRole.title}
                  </span>
                  <span className="self-end text-[11px] font-mono font-semibold tracking-widest text-[#b7b0ab]">
                    {currentRole.num}
                  </span>
                </div>

                {/* Back Side */}
                <div className="calendar-paper-back rounded-2xl border border-[#e5dfdb] dark:border-white/10 bg-gradient-to-b from-[#f7f3ef] via-[#fffdfb] to-[#e9e3de] dark:from-[#222] dark:to-[#111]" />
              </div>

              {/* STATIONARY SPIRAL RINGS */}
              <div className="calendar-spiral absolute -top-3.5 left-5 right-5 flex justify-between items-center px-1 pointer-events-none z-30">
                {Array.from({ length: 13 }).map((_, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-1.5 sm:w-2 h-4.5 sm:h-5 rounded-full bg-gradient-to-b from-[#f0f0f0] via-[#888888] to-[#222222] shadow-[0_3px_5px_rgba(0,0,0,0.4)] border border-neutral-400/60" />
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-800 -mt-1" />
                  </div>
                ))}
              </div>

            </div>
          </div>

          <p className="max-w-[460px] text-[15px] sm:text-[16px] text-foreground/75 leading-[1.7] mt-5 mb-6 font-normal">
            Flutter Developer with 3+ years of experience building scalable, high-performance Android and iOS applications with a focus on clean architecture and seamless user experiences.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button onClick={onOpenContact} className="group flex items-center gap-3 px-6 py-3 rounded-full bg-[#111111] text-[#f8f6f2] dark:bg-[#f8f6f2] dark:text-[#111111] font-medium text-sm transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] shadow-lg cursor-pointer">
              <span>Hire me</span>
              <span className="w-6 h-6 rounded-full bg-white/20 dark:bg-black/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>

            <button onClick={() => onNavigate("#works")} className="glass-pill px-6 py-3 rounded-full font-medium text-sm text-foreground transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] cursor-pointer">
              See my work
            </button>
          </div>

        </div>

        {/* Right Column - Portrait */}
        <div className="w-full relative flex justify-center lg:justify-end items-end order-2 mt-3 lg:mt-0 h-full min-h-[350px] lg:min-h-[590px]">
          <div className="absolute w-[300px] sm:w-[440px] h-[300px] sm:h-[440px] rounded-full bg-gradient-to-tr from-[#c9a96e]/20 via-[#c9a96e]/10 to-transparent blur-3xl bottom-12 right-0 pointer-events-none" />

          <div className="relative w-full max-w-[320px] sm:max-w-[390px] lg:max-w-[430px] flex justify-center items-end overflow-visible" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            
            <img src={abhin} alt="Portrait of Abhinraj" className="relative block w-full h-auto object-contain grayscale select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.18)]" loading="eager" draggable="false" />

            <img src={abhin} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none" style={{ clipPath: `circle(65px at ${mousePosition.x}px ${mousePosition.y}px)`, WebkitClipPath: `circle(65px at ${mousePosition.x}px ${mousePosition.y}px)`, transition: "clip-path 0.04s linear" }} draggable="false" />

            <button onClick={() => onNavigate("#works")} className="absolute left-0 bottom-[18%] z-20 px-4 py-3 rounded-full bg-[#171515] text-white border border-white/20 text-xs font-medium shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              My ability card
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Ribbon */}
      <div className="relative z-10 w-full max-w-[70rem] mx-auto border-t border-black/10 dark:border-white/10 pt-5 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-[11px] font-mono font-medium tracking-wider text-muted uppercase gap-3">
        <span className="hidden md:inline">FLUTTER DEVELOPER</span>
        <button onClick={() => onNavigate("#works")} className="flex items-center gap-1.5 hover:text-foreground transition-colors cursor-pointer">
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>

    </section>
  );
}