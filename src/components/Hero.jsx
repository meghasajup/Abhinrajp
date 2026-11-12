import React, { useState, useEffect, useCallback } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import abhin from "/images/abhin.png";

const ROLES = [
  { title: "Mobile App Developer", num: "01 / 03" },
  { title: "UI/UX Developer", num: "02 / 03" },
  { title: "App Deployment", num: "03 / 03" },
];

export default function Hero({ onOpenContact, onNavigate }) {
  const [roleIndex, setRoleIndex] = useState(4);
  const [isFlipping, setIsFlipping] = useState(false);

  const [mousePosition, setMousePosition] = useState({
    x: -200,
    y: -200,
  });

  const currentRole = ROLES[roleIndex];
  const nextRole = ROLES[(roleIndex + 1) % ROLES.length];

  // Notebook page turn
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

  // Portrait Spotlight
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


      {/* Main Hero Container       */}
      <div
        className="relative z-10 w-full max-w-[70rem] mx-auto flex-1 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-10">
        {/* Left colum content */}
        <div
          className="w-full flex flex-col justify-center items-start order-1 py-8 lg:py-0">

          {/* Availability */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-[5px] h-[5px] rounded-full bg-[#77716e]" />
            <span className="text-xs font-medium text-muted">
              Flutter Developer
            </span>
          </div>


          {/* Main heading */}
          <h1
            className="w-full text-[clamp(38px,4vw,54px)] leading-[1.08] font-extrabold tracking-[-0.045em] text-foreground mb-1">
            Hi, I'm Abhinraj.
          </h1>


          {/* Sub heading */}
          <h2 className="text-[clamp(38px,4vw,54px)] leading-[1.08] font-bold tracking-[-0.045em] text-foreground/45 mb-6">
            I am a
          </h2>

          {/* SPIRAL NOTEBOOK CALENDAR */}
          <div className="calendar-container relative cursor-pointer select-none w-full max-w-[510px] my-3" onClick={flipToNext} title="Click to turn page">
            {/* Black shadow */}
            <div className="absolute -inset-x-2 -bottom-2 h-16 bg-neutral-300/60 dark:bg-neutral-800/60 rounded-xl -rotate-1 shadow-inner border border-black/5 dark:border-white/5 pointer-events-none" />
            {/* Black banking */}
            <div className="absolute inset-x-1 bottom-[-9px] h-[115px] rounded-[14px] bg-[#171515] rotate-[1deg] shadow-[0_17px_22px_rgba(0,0,0,0.23)] pointer-events-none" />
            {/* Paper Stack */}
            <div className="absolute inset-x-1 bottom-[-6px] h-[112px] rounded-[13px] bg-[#d8d2ce] pointer-events-none" />
            <div className="absolute inset-x-0 bottom-[-3px] h-[112px] rounded-[13px] bg-[#eee9e5] border border-[#d9d2cd] pointer-events-none" />

            {/* Page Stage */}
            <div className="calendar-page-stage relative">
              {/* Next Page */}
              <div className="calendar-next-page absolute inset-0 rounded-[13px] bg-[#fffdfb] border border-[#e5dfdb] px-5 sm:px-7 pt-7 pb-3 shadow-[0_5px_12px_rgba(0,0,0,0.08)] flex flex-col justify-center">
                <span
                  className="text-[clamp(22px,3vw,40px)] font-black tracking-[-0.04em] text-[#151313] whitespace-nowrap overflow-hidden text-ellipsis">
                  {nextRole.title}
                </span>

                <span className="self-end text-[10px] sm:text-xs font-mono font-medium tracking-widest text-[#b7b0ab]  mt-1">
                  {nextRole.num}
                </span>
              </div>


              {/* Current fliping page */}
              <div key={roleIndex} onAnimationEnd={(e) => {
                if (
                  e.target === e.currentTarget &&
                  isFlipping
                ) {
                  handlePageTurnComplete();
                }
              }}
                className={`calendar-current-page ${isFlipping ? "calendar-page-turning" : ""}`}
              >

                {/* Front Side */}
                <div className="calendar-paper-front rounded-[13px] bg-[#fffdfb] border border-[#e5dfdb] px-5 sm:px-7 pt-7 pb-3 shadow-[0_7px_15px_rgba(0,0,0,0.12)] flex flex-col justify-center">
                  <span
                    className="text-[clamp(22px,3vw,40px)] font-black tracking-[-0.04em] text-[#151313] whitespace-nowrap overflow-hidden text-ellipsis ">
                    {currentRole.title}
                  </span>
                  <span className="self-end text-[10px] sm:text-xs font-mono font-medium tracking-widest text-[#b7b0ab] mt-1">
                    {currentRole.num}
                  </span>
                </div>


                {/* Back Side */}
                <div
                  className="
                    calendar-paper-back
                    rounded-[13px]
                    border border-[#e5dfdb]
                    bg-gradient-to-b
                    from-[#f7f3ef]
                    via-[#fffdfb]
                    to-[#e9e3de]
                  "
                />

              </div>


              {/* STATIONARY SPIRAL RINGS */}

              <div
                className="
                  calendar-spiral
                  absolute
                  -top-3
                  left-4 right-4
                  flex justify-between
                  items-center
                  px-1
                  pointer-events-none
                "
              >

                {Array.from({ length: 11 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center"
                  >

                    <div
                      className="
                        w-1.5 sm:w-2
                        h-4 sm:h-5
                        rounded-full
                        bg-gradient-to-b
                        from-[#f0f0f0]
                        via-[#888888]
                        to-[#222222]
                        shadow-[0_1px_2px_rgba(0,0,0,0.4)]
                        border border-neutral-400/50
                      "
                    />

                    <div
                      className="
                        w-1.5 h-1.5
                        rounded-full
                        bg-neutral-300
                        dark:bg-neutral-900
                        -mt-1
                      "
                    />

                  </div>
                ))}

              </div>

            </div>

          </div>


          {/* =====================================
              DESCRIPTION
          ===================================== */}

          <p
            className="
              max-w-[460px]
              text-[15px] sm:text-[16px]
              text-foreground/75
              leading-[1.7]
              mt-5 mb-6
              font-normal
            "
          >
            Flutter Developer with 3+ years of experience building scalable, high-performance Android and iOS applications with a focus on clean architecture and seamless user experiences.          </p>


          {/* =====================================
              ACTION BUTTONS
          ===================================== */}

          <div className="
            flex flex-wrap
            items-center
            gap-3
          ">

            {/* HIRE ME */}

            <button
              onClick={onOpenContact}
              className="
                group
                flex items-center gap-3
                px-6 py-3
                rounded-full
                bg-[#111111]
                text-[#f8f6f2]
                dark:bg-[#f8f6f2]
                dark:text-[#111111]
                font-medium
                text-sm
                transition-all duration-300
                hover:scale-[1.04]
                active:scale-[0.97]
                shadow-lg
                hover:shadow-xl
                cursor-pointer
              "
            >

              <span>Hire me</span>

              <span
                className="
                  w-6 h-6
                  rounded-full
                  bg-white/20
                  dark:bg-black/20
                  flex items-center
                  justify-center
                  transition-transform
                  group-hover:translate-x-1
                "
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </span>

            </button>


            {/* SEE MY WORK */}

            <button
              onClick={() => onNavigate("#works")}
              className="
                glass-pill
                px-6 py-3
                rounded-full
                font-medium
                text-sm
                text-foreground
                transition-all duration-300
                hover:scale-[1.04]
                active:scale-[0.97]
                cursor-pointer
              "
            >
              See my work
            </button>

          </div>

        </div>


        {/* =====================================
            RIGHT COLUMN - PORTRAIT
        ===================================== */}

        <div
          className="
            w-full
            relative
            flex justify-center
            lg:justify-end
            items-end
            order-2
            mt-3 lg:mt-0
            h-full
            min-h-[350px]
            lg:min-h-[590px]
          "
        >

          {/* AMBIENT GLOW */}

          <div
            className="
              absolute
              w-[300px] sm:w-[440px]
              h-[300px] sm:h-[440px]
              rounded-full
              bg-gradient-to-tr
              from-[#c9a96e]/20
              via-[#c9a96e]/10
              to-transparent
              blur-3xl
              bottom-12
              right-0
              pointer-events-none
            "
          />


          {/* PORTRAIT CONTAINER */}

          <div
            className="
              relative
              w-full
              max-w-[320px]
              sm:max-w-[390px]
              lg:max-w-[430px]
              flex justify-center
              items-end
              overflow-visible
            "
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >

            {/* GRAYSCALE IMAGE */}

            <img
              src={abhin}
              alt="Portrait of Bilal"
              className="
                relative block
                w-full h-auto
                object-contain
                grayscale
                select-none
                pointer-events-none
                drop-shadow-[0_20px_40px_rgba(0,0,0,0.18)]
              "
              loading="eager"
              draggable="false"
            />


            {/* ORIGINAL COLOR SPOTLIGHT */}

            <img
              src={abhin}
              alt=""
              aria-hidden="true"
              className="
                absolute inset-0
                w-full h-full
                object-contain
                select-none
                pointer-events-none
              "
              style={{
                clipPath: `circle(65px at ${mousePosition.x}px ${mousePosition.y}px)`,
                WebkitClipPath: `circle(65px at ${mousePosition.x}px ${mousePosition.y}px)`,
                transition: "clip-path 0.04s linear",
              }}
              draggable="false"
            />


            {/* ABILITY CARD */}

            <button
              onClick={() => onNavigate("#works")}
              className="
                absolute
                left-0
                bottom-[18%]
                z-20
                px-4 py-3
                rounded-full
                bg-[#171515]
                text-white
                border border-white/20
                text-xs
                font-medium
                shadow-xl
                transition-all duration-300
                hover:-translate-y-1
                cursor-pointer
              "
            >
              My ability card
            </button>

          </div>

        </div>

      </div>


      {/* =====================================
          BOTTOM RIBBON
      ===================================== */}

      <div
        className="
          relative z-10
          w-full
          max-w-[70rem]
          mx-auto
          border-t border-black/10
          dark:border-white/10
          pt-5
          flex flex-col
          sm:flex-row
          items-center
          justify-between
          text-[10px] sm:text-[11px]
          font-mono
          font-medium
          tracking-wider
          text-muted
          uppercase
          gap-3
        "
      >

        

        <span className="hidden md:inline">
          FLUTTER DEVELOPER
        </span>

        <button
          onClick={() => onNavigate("#works")}
          className="
            flex items-center
            gap-1.5
            hover:text-foreground
            transition-colors
            cursor-pointer
          "
        >
          <span>SCROLL TO EXPLORE</span>

          <ChevronDown className="
            w-3.5 h-3.5
            animate-bounce
          " />
        </button>

      </div>

    </section>
  );
}
