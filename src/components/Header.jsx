import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Menu } from 'lucide-react';

export default function Header({ 
  activeSection = 'home', 
  onNavigate, 
  onOpenMenu, 
  onOpenContact,
  currentRoute = '/'
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [timeInfo, setTimeInfo] = useState({ time: '2:37pm', date: '12 November, 2026' });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      try {
        const timeFormatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        });
        const dateFormatter = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Kolkata',
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        });
        
        const timeString = timeFormatter.format(now).toLowerCase().replace(' ', '');
        const dateString = dateFormatter.format(now);
        setTimeInfo({ time: timeString, date: dateString });
      } catch (e) {
        // Fallback
        setTimeInfo({ time: '2:37pm', date: '12 November, 2026' });
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: 'Home', target: '#home', route: '/' },
    { label: 'Web Development', target: '/web-developer/', route: '/web-developer/' },
    { label: 'App Development', target: '/developer/', route: '/developer/' },
    { label: 'UI/UX Design', target: '#works', route: '/web-developer/' },
    { label: 'My story', target: '#about', route: '/' },
    { label: 'Contact', target: '#contact-footer', isContact: true },
  ];

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    if (link.isContact) {
      if (onOpenContact) {
        onOpenContact();
      } else {
        onNavigate('#contact-footer');
      }
      return;
    }
    if (link.route && link.route !== currentRoute) {
      onNavigate(link.route);
    } else if (link.target.startsWith('#')) {
      onNavigate(link.target);
    } else {
      onNavigate(link.route);
    }
  };

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-40 flex items-center justify-center px-4 pointer-events-none transition-all duration-300">
      <div className="flex items-center gap-2 sm:gap-3 pointer-events-auto">
        {/* Navigation pill or Menu pill */}
        {isScrolled || currentRoute !== '/' ? (
          <button
            onClick={onOpenMenu}
            className="glass-pill flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-foreground hover:bg-white/80 dark:hover:bg-neutral-800/80 cursor-pointer"
            aria-label="Open menu"
          >
            <div className="flex flex-col gap-1 w-4">
              <span className="w-full h-0.5 bg-foreground rounded-full"></span>
              <span className="w-full h-0.5 bg-foreground rounded-full"></span>
              <span className="w-full h-0.5 bg-foreground rounded-full"></span>
            </div>
            <span>MENU</span>
          </button>
        ) : (
          <nav className="glass-pill hidden md:flex items-center gap-1 p-1.5 rounded-full" aria-label="Primary">
            {navLinks.map((link) => {
              const isActive = (currentRoute === '/' && link.label === 'Home' && activeSection === 'home') ||
                               (currentRoute === '/' && link.label === 'My story' && activeSection === 'about');
              return (
                <a
                  key={link.label}
                  href={link.target}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-[#111111] text-[#f8f6f2] shadow-sm dark:bg-[#f8f6f2] dark:text-[#111111]' 
                      : 'text-foreground/75 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        )}

        {/* Mobile Menu Button when not scrolled */}
        {!isScrolled && currentRoute === '/' && (
          <button
            onClick={onOpenMenu}
            className="md:hidden glass-pill flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-foreground cursor-pointer"
            aria-label="Open menu"
          >
            <Menu className="w-4 h-4" />
            <span>Menu</span>
          </button>
        )}

        {/* Live IST Time Pill */}
        <div 
          className="glass-pill flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm text-foreground/80 font-medium"
          title="Indian Standard Time (IST UTC+5:30)"
        >
          <Clock className="w-3.5 h-3.5 text-accent opacity-90" />
          <span>Local time <strong className="font-semibold text-foreground">{timeInfo.time}</strong></span>
          <span className="opacity-40">·</span>
          <Calendar className="w-3.5 h-3.5 text-accent opacity-90 hidden sm:inline" />
          <span className="hidden sm:inline">{timeInfo.date}</span>
        </div>
      </div>
    </header>
  );
}
