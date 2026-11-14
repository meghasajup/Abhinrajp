import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const DOORS_DATA = [
  {
    id: 'full-stack-web',
    title: 'Full-Stack Web',
    plate: 'FULL-STACK WEB',
    subtitle: 'Biodiversity Explorer & Vanguard Store',
    color: '#22304a',
    colorDark: '#1c2840',
    route: '/web-developer/',
    bullets: [
      'Biodiversity Explorer System (Govt-supported)',
      'VANGUARD Store (Luxury online timepiece store)',
      'React, Next.js 19, TypeScript & GSAP',
      'High-performance UI/UX & Tailwind CSS',
      'Performance optimization & SEO',
    ]
  },
  {
    id: 'software-engineering',
    title: 'Software Engineering',
    plate: 'SOFTWARE ENG.',
    subtitle: 'CueCafe Pro & Custom Business Apps',
    color: '#4a3540',
    colorDark: '#3f2d37',
    route: '/developer/',
    bullets: [
      'CueCafe Pro (Snooker lounge & POS management)',
      'High-performance offline-first architecture',
      'Electron, SQLite, React & Node.js',
      'Real-time billing, table timers & inventory',
      'Analytics reporting & receipt thermal printing',
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    plate: 'AI & AUTOMATION',
    subtitle: 'Intelligent Systems & Workflows',
    color: '#7a8670',
    colorDark: '#66705d',
    route: '/developer/',
    bullets: [
      'LLM Integration & Autonomous AI Agents',
      'Custom Retrieval-Augmented Generation (RAG)',
      'Python, LangChain, OpenAI & Vector Databases',
      'Automated Business Workflow Pipelines',
      'Real-time intelligent assistants & bots',
    ]
  },
  {
    id: 'client-solutions',
    title: 'Client Solutions',
    plate: 'CLIENT SOLUTIONS',
    subtitle: 'International Business Platforms',
    color: '#a4552c',
    colorDark: '#8c4826',
    route: '/developer/',
    bullets: [
      'UAE Business Website (analystuae.com)',
      'Modern multilingual corporate portals',
      'End-to-end client consultation & delivery',
      'Cloud hosting, CDN & enterprise security',
      'Ongoing SLA maintenance & continuous support',
    ]
  }
];

export default function DoorsSection({ onNavigate }) {
  const [activeDoorIndex, setActiveDoorIndex] = useState(0);
  const [openedDoorIndex, setOpenedDoorIndex] = useState(null);
  const [isPressing, setIsPressing] = useState(false);

  const activeDoor = DOORS_DATA[activeDoorIndex];

  const handleDoorClick = (index) => {
    setActiveDoorIndex(index);
  };

  const handleOpenDoor = (index, e) => {
    e.stopPropagation();
    setActiveDoorIndex(index);
    setIsPressing(true);
    setOpenedDoorIndex(index);

    setTimeout(() => {
      if (onNavigate) {
        onNavigate(DOORS_DATA[index].route);
      }
      setTimeout(() => {
        setOpenedDoorIndex(null);
        setIsPressing(false);
      }, 500);
    }, 700);
  };

  return (
    <section 
      id="works" 
      className="relative min-h-screen py-24 px-4 sm:px-8 md:px-14 flex flex-col justify-center items-center overflow-hidden border-t border-black/5 dark:border-white/5"
      style={{
        background: 'linear-gradient(180deg, var(--background) 0%, rgba(201, 169, 110, 0.04) 50%, var(--background) 100%)'
      }}
    >      

      <div className="max-w-[88rem] w-full mx-auto flex flex-col items-center z-10">
        
        {/* Section Heading & Subheading */}
        <div className="text-center mb-8 max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
            Magic happens behind the doors
          </h2>
        </div>

        {/* 4 Arched 3D Doors Gallery */}
        <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-end justify-center perspective-[1200px]">
          {DOORS_DATA.map((door, idx) => {
            const isActive = activeDoorIndex === idx;
            const isOpened = openedDoorIndex === idx;

            return (
              <div 
                key={door.id}
                onClick={() => handleDoorClick(idx)}
                className={`relative group flex flex-col items-center cursor-pointer transition-all duration-300 ${
                  isActive ? 'scale-105 z-20' : 'opacity-70 hover:opacity-95 scale-95 z-10'
                }`}
              >
                {/* Door Frame / Outer Arched Casing */}
                <div 
                  className="relative w-full aspect-[1/2.3] max-w-[210px] rounded-t-[100px] p-2 sm:p-2.5 bg-neutral-200 dark:bg-neutral-800 shadow-[0_20px_40px_rgba(0,0,0,0.15)] border-2 border-white dark:border-neutral-700 transition-all duration-300"
                >
                  {/* Inside Room Background (visible when door opens) */}
                  <div 
                    className="absolute inset-2 sm:inset-2.5 rounded-t-[90px] bg-neutral-950 flex flex-col items-center justify-center p-3 text-center overflow-hidden"
                  >
                    <span className="text-[11px] font-mono text-accent font-semibold tracking-widest uppercase animate-pulse">
                      ENTER ROOM →
                    </span>
                    <div className="w-12 h-12 rounded-full bg-accent/20 blur-md mt-2" />
                  </div>

                  {/* Arched Swing Door Leaf */}
                  <div 
                    className="relative w-full h-full rounded-t-[90px] shadow-2xl flex flex-col items-center justify-between py-6 px-3 border border-white/20 overflow-hidden transition-all duration-500 origin-left"
                    style={{
                      backgroundColor: door.color,
                      transform: isOpened 
                        ? 'perspective(1000px) rotateY(-80deg)' 
                        : 'perspective(1000px) rotateY(0deg)',
                      boxShadow: isActive ? '0 10px 30px rgba(0,0,0,0.35)' : 'none'
                    }}
                  >
                    {/* Vertical Fluting / Grooves Texture */}
                    <div className="absolute inset-0 flex justify-evenly pointer-events-none opacity-20">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="w-[1px] h-full bg-black/40 shadow-sm" />
                      ))}
                    </div>

                    {/* Inset Engraved Brass Nameplate */}
                    <div 
                      className="brass-plate relative z-10 px-2 sm:px-3 py-1.5 rounded-[4px] text-[10px] sm:text-xs font-bold tracking-widest uppercase text-center mt-6 shadow-md border border-[#c9a96e]"
                    >
                      {door.plate}
                    </div>

                    {/* Brass Lever Handle & Escutcheon */}
                    <div 
                      onClick={(e) => handleOpenDoor(idx, e)}
                      className="relative z-10 self-end mr-2 sm:mr-3 flex flex-col items-center my-auto group/handle cursor-pointer"
                      title={`Open the ${door.title} door`}
                    >
                      {/* Lever handle */}
                      <div 
                        className={`brass-handle w-7 sm:w-9 h-2.5 rounded-full transition-transform duration-200 ${
                          isPressing && isActive ? 'rotate-12 translate-y-1' : 'group-hover/handle:-rotate-6'
                        }`}
                      />
                      {/* Keyhole plate */}
                      <div className="w-3 h-4 bg-gradient-to-b from-[#dfcda4] to-[#8a6a2c] rounded-b-sm -mt-0.5 flex items-center justify-center shadow-inner">
                        <div className="w-1 h-1.5 bg-black/70 rounded-full" />
                      </div>
                    </div>

                    {/* Bottom Sill / Base Molding */}
                    <div className="w-full h-3 bg-black/30 rounded-sm mt-auto" />
                  </div>
                </div>

                {/* Door Label Underneath */}
                <span className={`text-xs sm:text-sm font-semibold tracking-wide mt-3 text-center transition-colors ${
                  isActive ? 'text-foreground font-bold' : 'text-muted'
                }`}>
                  {door.title}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
