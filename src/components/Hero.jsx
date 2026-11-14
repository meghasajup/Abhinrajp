import React, { useState, useEffect, useCallback } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import abhin from "/images/abhin.png";

const ROLES = [
  { title: "Mobile App Developer", num: "01 / 03" },
  { title: "UI/UX Developer", num: "02 / 03" },
  { title: "App Deployment", num: "03 / 03" },
];

export default function Hero({
  onOpenContact,
  onNavigate,
}) {

  const [roleIndex, setRoleIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: -200,
    y: -200,
  });

  const currentRole = ROLES[roleIndex];
  const nextRole = ROLES[
    (roleIndex + 1) % ROLES.length
  ];

  //  Page Flip control
  const flipToNext = useCallback(() => {
    setIsFlipping((flipping) => {
      if (flipping) {
        return flipping;
      }
      return true;
    });
  }, []);

  //  Automatic page flip
  useEffect(() => {
    const timer = setInterval(() => {
      flipToNext();
    }, 3600);
    return () => clearInterval(timer);
  }, [flipToNext]);

  //  Page flip completion
  const handlePageTurnComplete = () => {
    setRoleIndex((prev) => {
      return (prev + 1) % ROLES.length;
    });
    setIsFlipping(false);
  };

  // Mouse Interaction 
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

  // Render
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-7 px-5 sm:px-8 overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-10 overflow-hidden text-[var(--foreground)]">
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

      {/* Main hero container */}
      <div
        className="relative z-10 w-full max-w-[70rem] mx-auto flex-1 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-10">
        {/* Left content */}
        <div
          className="w-full flex flex-col justify-center items-start order-1 py-8 lg:py-0">
          {/* Developer Label */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-[5px] h-[5px] rounded-full bg-[var(--hero-dot)]" />
            <span className="text-xs font-medium text-[var(--muted)]">
              Flutter Developer
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="w-full text-[clamp(36px,3.8vw,50px)] leading-[1.08] font-extrabold tracking-[-0.045em] text-[var(--foreground)] mb-1">
            Hi, I'm Abhinraj.
          </h1>
          <h2 className="text-[clamp(36px,3.8vw,50px)] leading-[1.08] font-bold tracking-[-0.045em] text-[var(--hero-subtitle)] mb-4">
            I am a
          </h2>

          {/* Notebook calender */}
          <div className="calendar-container relative cursor-pointer select-none w-full max-w-[440px] my-3" onClick={flipToNext} title="Click to turn page">
            {/* Floating Shadow */}
            <div className="absolute inset-x-2 -bottom-2.5 h-10 bg-[var(--calendar-shadow)] rounded-[20px] blur-md rotate-[-3.5deg] pointer-events-none" />
            {/* Paper Stack */}
            <div className="absolute inset-x-2 bottom-[-6px] h-10 rounded-2xl bg-[var(--calendar-layer-2)] rotate-[-2.5deg] pointer-events-none" />
            <div className="absolute inset-x-1 bottom-[-3px] h-8 rounded-2xl bg-[var(--calendar-layer-1)] rotate-[-1.5deg] pointer-events-none" />
            {/* Page Stage */}
            <div className="calendar-page-stage relative">
              {/* Next page */}
              <div className="calendar-next-page absolute inset-0 rounded-2xl bg-[var(--calendar-bg)] border border-[var(--calendar-border)] px-5 sm:px-6 pt-4 pb-3 shadow-sm flex flex-col justify-between">
                <span className="text-[clamp(22px,2.8vw,34px)] font-black tracking-[-0.04em] text-[var(--calendar-text)] whitespace-nowrap overflow-hidden text-ellipsis">
                  {nextRole.title}
                </span>
                <span
                  className="self-end text-[10px] font-mono font-semibold tracking-widest text-[var(--calendar-num)]">
                  {nextRole.num}
                </span>
              </div>
              {/* Current flipping page */}
              <div key={roleIndex} onAnimationEnd={(e) => {
                if (
                  e.target === e.currentTarget &&
                  isFlipping
                ) {
                  handlePageTurnComplete();
                }
              }}
                className={`
                  calendar-current-page
                  ${isFlipping ? "calendar-page-turning" : ""}`}
              >
                {/* Front Side */}
                <div className="calendar-paper-front rounded-2xl bg-[var(--calendar-bg)] border border-[var(--calendar-border)] px-5 sm:px-6 pt-4 pb-3 shadow-[0_10px_25px_var(--calendar-front-shadow)] flex flex-col justify-between">
                  <span className="text-[clamp(22px,2.8vw,34px)] font-black tracking-[-0.04em] text-[var(--calendar-text)] whitespace-nowrap overflow-hidden text-ellipsis">
                    {currentRole.title}
                  </span>
                  <span className="self-end text-[10px] font-mono font-semibold tracking-widest text-[var(--calendar-num)]">
                    {currentRole.num}
                  </span>
                </div>
                {/* Back Side */}
                <div className="calendar-paper-back" />
              </div>

              {/* Spiral rings */}
              <div className="calendar-spiral absolute -top-3 left-4 right-4 flex justify-between items-center px-1 pointer-events-none z-30">
                {Array.from({ length: 13 }).map((_, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-1.5 sm:w-2 h-3.5 sm:h-4 rounded-full bg-[var(--spiral-ring)] shadow-[0_3px_5px_rgba(0,0,0,0.4)] border border-neutral-400/60" />
                    <div
                      className="w-1.5 h-1.5 rounded-full bg-[var(--spiral-dot)] -mt-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="max-w-[460px] text-[15px] sm:text-[16px] text-[var(--hero-desc)] leading-[1.7] mt-4 mb-6 font-normal">
            Flutter Developer with 3+ years of experience building scalable, high-performance Android and iOS applications with a focus on clean architecture and seamless user experiences.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Hire me */}
            <button onClick={onOpenContact} className="group flex items-center gap-3 px-6 py-3 rounded-full bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-medium text-sm transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] shadow-lg cursor-pointer">
              <span>Hire me</span>
              <span className="w-6 h-6 rounded-full bg-[var(--btn-icon-bg)] flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>

            {/* See My Work */}
            <button onClick={() => onNavigate("#works")} className="glass-pill px-6 py-3 rounded-full font-medium text-sm text-[var(--foreground)] transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] cursor-pointer">
              See my work
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full relative flex justify-center lg:justify-end items-end order-2 mt-3 lg:mt-0 h-full min-h-[350px] lg:min-h-[590px]">
          {/* Background Glow */}
          <div className="absolute w-[300px] sm:w-[440px] h-[300px] sm:h-[440px] rounded-full bg-[var(--hero-glow)] blur-3xl bottom-12 right-0 pointer-events-none" />
          {/* Portrait Container */}
          <div className="relative w-full max-w-[320px] sm:max-w-[390px] lg:max-w-[430px] flex justify-center items-end overflow-visible cursor-pointer" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            {/* Light Grey Tinted Base Image */}
            <img
              src={abhin}
              alt="Portrait of Abhinraj"
              className="relative block w-full h-auto object-contain grayscale-[100%] brightness-110 contrast-90 select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
              loading="eager"
              draggable="false"
            />
            {/* Color Reveal Image */}
            <img
              src={abhin}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none"
              style={{
                clipPath: `
                  circle(
                    90px at
                    ${mousePosition.x}px
                    ${mousePosition.y}px
                  )
                `,
                WebkitClipPath: `
                  circle(
                    90px at
                    ${mousePosition.x}px
                    ${mousePosition.y}px
                  )
                `,
                transition: "clip-path 0.03s ease-out",
              }}
              draggable="false"
            />
          </div>
        </div>
      </div>

      {/* Bottom ribbon */}
      <div className="relative z-10 w-full max-w-[70rem] mx-auto border-t border-[var(--line)] pt-5 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-[11px] font-mono font-medium tracking-wider text-[var(--muted)] uppercase gap-3">
        <span className="hidden md:inline">
          FLUTTER DEVELOPER
        </span>

        <button onClick={() => onNavigate("#works")} className="flex items-center gap-1.5 hover:text-[var(--foreground)] transition-colors cursor-pointer">
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown
            className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}