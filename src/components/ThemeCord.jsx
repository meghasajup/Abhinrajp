import React, { useState, useEffect, useRef } from 'react';

export default function ThemeCord({ isDark, onToggle }) {
  const [isPulling, setIsPulling] = useState(false);
  const [pullOffset, setPullOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const startYRef = useRef(0);

  const triggerToggle = () => {
    setIsAnimating(true);
    setPullOffset(48);
    setTimeout(() => {
      onToggle();
      setTimeout(() => {
        setPullOffset(0);
        setIsAnimating(false);
      }, 250);
    }, 180);
  };

  const handleMouseDown = (e) => {
    setIsPulling(true);
    startYRef.current = e.clientY;
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isPulling) return;
      const diff = Math.max(0, Math.min(70, e.clientY - startYRef.current));
      setPullOffset(diff);
      if (diff > 45) {
        setIsPulling(false);
        triggerToggle();
      }
    };

    const handleMouseUp = () => {
      if (!isPulling) return;
      setIsPulling(false);
      if (pullOffset > 25) {
        triggerToggle();
      } else {
        setPullOffset(0);
      }
    };

    if (isPulling) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isPulling, pullOffset]);

  return (
    <div 
      className="fixed top-0 right-8 sm:right-14 z-50 select-none cursor-pointer"
      onClick={triggerToggle}
      onMouseDown={handleMouseDown}
      title="Toggle dark mode (pull the cord)"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode (pull the cord)"
    >
      <div 
        className="flex flex-col items-center origin-top transition-transform duration-200 ease-out"
        style={{
          transform: `translateY(${pullOffset}px)`,
          transition: isPulling ? 'none' : 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
      >
        {/* Cord chain / beads */}
        <div className="flex flex-col items-center">
          {Array.from({ length: 18 }).map((_, i) => (
            <div 
              key={i} 
              className="w-1.5 h-2 my-0.5 rounded-full bg-gradient-to-r from-[#d8c292] via-[#ebd9aa] to-[#9e7d3b] shadow-sm border border-[#7a5a22]/30"
            />
          ))}
        </div>

        {/* Cord collar / connector */}
        <div className="w-2.5 h-3 bg-gradient-to-r from-[#b38f4d] via-[#d8c292] to-[#7a5a22] rounded-t-sm shadow-md" />

        {/* Vintage Teardrop Weight / Finial */}
        <div className="relative group -mt-0.5">
          <div 
            className="w-5 h-9 rounded-[50%_50%_45%_45%] shadow-xl transition-transform hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #44301d 0%, #2b1f13 45%, #66492c 70%, #1a1209 100%)',
              boxShadow: '0 8px 16px rgba(0,0,0,0.35), inset 0 1px 2px rgba(255,255,255,0.4), inset -1px -2px 4px rgba(0,0,0,0.6)'
            }}
          >
            {/* Brass accent ring */}
            <div className="absolute top-2 left-0 right-0 h-1 bg-gradient-to-r from-[#c9a96e] via-[#f0dfa8] to-[#8a6a2c] opacity-80" />
            <div className="absolute inset-0 rounded-[50%_50%_45%_45%] bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
          </div>
          {/* Subtle hanging shadow */}
          <div className="w-3 h-1 bg-black/20 rounded-full mx-auto mt-1 blur-[1px]" />
        </div>
      </div>
    </div>
  );
}
