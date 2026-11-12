import React from 'react';
import { ArrowUp, ArrowRight, ExternalLink } from 'lucide-react';

export default function Footer({ onOpenContact, onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="contact-footer" 
      className="sf relative pt-24 pb-12 px-4 sm:px-8 md:px-14 border-t border-black/10 dark:border-white/10"
      style={{
        background: 'linear-gradient(180deg, var(--background) 0%, rgba(201, 169, 110, 0.08) 100%)'
      }}
    >
      <div className="max-w-[88rem] w-full mx-auto">
        
        {/* Availability Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-6 text-xs font-mono font-medium tracking-wide">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
          <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-3.5 inline-block" />
          <span className="text-foreground">Available for freelance work</span>
        </div>

        {/* Big Impact Call-to-Action */}
        <div className="max-w-4xl mb-14">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-foreground leading-[1.08] mb-6">
            Have an idea? <br />
            <span className="font-cursive font-normal italic text-5xl sm:text-7xl md:text-8xl text-accent">
              Let's build it.
            </span>
          </h2>
          <p className="max-w-xl text-base sm:text-lg text-foreground/75 leading-relaxed mb-8">
            I am always open to freelance opportunities, contract work, and exciting software collaborations. Tell me what you're working on and let's bring it to life.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenContact}
              className="flex items-center gap-3 px-7 py-4 rounded-full bg-[#111111] text-[#f8f6f2] dark:bg-[#f8f6f2] dark:text-[#111111] font-medium text-sm sm:text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-xl cursor-pointer"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('#works')}
              className="glass-pill px-6 py-4 rounded-full font-medium text-sm sm:text-base text-foreground transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              View Selected Work
            </button>
          </div>
        </div>

        {/* 3 Columns Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-b border-black/10 dark:border-white/10">
          
          {/* Col 1: Selected Work */}
          <div>
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-muted mb-4">
              Selected Work
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a 
                  href="/web-developer/" 
                  onClick={(e) => { e.preventDefault(); onNavigate('/web-developer/'); }} 
                  className="text-foreground/80 hover:text-accent transition-colors font-medium"
                >
                  Biodiversity Explorer
                </a>
              </li>
              <li>
                <a 
                  href="/web-developer/" 
                  onClick={(e) => { e.preventDefault(); onNavigate('/web-developer/'); }} 
                  className="text-foreground/80 hover:text-accent transition-colors font-medium"
                >
                  VANGUARD Store
                </a>
              </li>
              <li>
                <a 
                  href="/developer/" 
                  onClick={(e) => { e.preventDefault(); onNavigate('/developer/'); }} 
                  className="text-foreground/80 hover:text-accent transition-colors font-medium"
                >
                  CueCafe Pro
                </a>
              </li>
              <li>
                <a 
                  href="/developer/" 
                  onClick={(e) => { e.preventDefault(); onNavigate('/developer/'); }} 
                  className="text-foreground/80 hover:text-accent transition-colors font-medium"
                >
                  UAE Business Website
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Connect */}
          <div>
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-muted mb-4">
              Connect
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a 
                  href="https://github.com/bilal9897" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-1.5 text-foreground/80 hover:text-accent transition-colors font-medium"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/bilal-salmani-6190ab292/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-1.5 text-foreground/80 hover:text-accent transition-colors font-medium"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/bilalsalmani.in/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-1.5 text-foreground/80 hover:text-accent transition-colors font-medium"
                >
                  <span>Instagram</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a 
                  href="mailto:bilalsalmani9897@gmail.com" 
                  className="inline-flex items-center gap-1.5 text-foreground/80 hover:text-accent transition-colors font-medium"
                >
                  <span>Email</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Status */}
          <div>
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-muted mb-4">
              Status
            </h3>
            <ul className="space-y-2.5 text-sm text-foreground/80 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Available for work</span>
              </li>
              <li>BCA Graduate (2026) · 10+ Projects Built</li>
              <li>Karnataka, India · IST (UTC+5:30)</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-muted font-medium gap-4">
          <p>© 2026 Bilal · All rights reserved</p>
          <a 
            href="mailto:bilalsalmani9897@gmail.com" 
            className="hover:text-foreground transition-colors font-mono"
          >
            bilalsalmani9897@gmail.com
          </a>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-pill hover:text-foreground transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
