import React from 'react';
import { X, ArrowRight } from 'lucide-react';

export default function MenuDrawer({ isOpen, onClose, onNavigate, onOpenContact }) {
  if (!isOpen) return null;

  const menuItems = [
    { num: '01', title: 'Home', target: '#home', route: '/' },
    { num: '02', title: 'Web Development', target: '/web-developer/', route: '/web-developer/' },
    { num: '03', title: 'App Development', target: '/developer/', route: '/developer/' },
    { num: '04', title: 'UI/UX Design', target: '/web-developer/', route: '/web-developer/' },
    { num: '05', title: 'My story', target: '#about', route: '/' },
    { num: '06', title: 'Contact', target: '/contact/', isContact: true },
  ];

  const handleItemClick = (item) => {
    onClose();
    if (item.isContact) {
      if (onOpenContact) {
        onOpenContact();
      } else {
        onNavigate('/contact/');
      }
      return;
    }
    if (item.route && item.route !== '/') {
      onNavigate(item.route);
    } else {
      onNavigate(item.target);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col justify-between p-6 sm:p-12 bg-[#0d0d0d]/95 backdrop-blur-2xl text-[#f8f6f2] transition-opacity duration-300 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Site Navigation Menu"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between max-w-[88rem] w-full mx-auto">
        <span className="font-extrabold text-2xl tracking-tight">
          Abhinraj<span className="text-accent">.</span>
        </span>

        <button
          onClick={onClose}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-white/40 text-xs font-mono uppercase tracking-wider transition-all hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Close menu"
        >
          <X className="w-4 h-4" />
          <span>Close</span>
        </button>
      </div>

      {/* Center Links */}
      <nav className="max-w-[88rem] w-full mx-auto my-auto py-8">
        <ul className="flex flex-col gap-2 sm:gap-4">
          {menuItems.map((item) => (
            <li key={item.num}>
              <button
                onClick={() => handleItemClick(item)}
                className="group flex items-baseline gap-4 sm:gap-8 text-left transition-transform hover:translate-x-3 cursor-pointer py-1"
              >
                <span className="font-mono text-sm sm:text-lg text-accent font-semibold tracking-wider opacity-80 group-hover:opacity-100">
                  {item.num}
                </span>
                <span className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#f8f6f2]/85 group-hover:text-white transition-colors">
                  {item.title}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Footer Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between max-w-[88rem] w-full mx-auto pt-6 border-t border-white/10 text-xs text-neutral-400 gap-4">
        <span>Available for worldwide remote freelance projects</span>
        
        <button
          onClick={() => {
            onClose();
            if (onOpenContact) onOpenContact();
          }}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-[#111111] font-semibold text-xs tracking-wider uppercase hover:scale-105 active:scale-95 transition-all shadow-lg cursor-pointer"
        >
          <span>Start a project</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
