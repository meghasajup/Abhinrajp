import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import ThemeCord from './components/ThemeCord.jsx';
import Hero from './components/Hero.jsx';
import DoorsSection from './components/DoorsSection.jsx';
import StorySection from './components/StorySection.jsx';
import Footer from './components/Footer.jsx';
import MenuDrawer from './components/MenuDrawer.jsx';
import HireModal from './components/HireModal.jsx';
import WebDeveloperPage from './components/WebDeveloperPage.jsx';
import DeveloperPage from './components/DeveloperPage.jsx';
import BiodiversityCaseStudy from './components/BiodiversityCaseStudy.jsx';
import ContactPage from './components/ContactPage.jsx';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname || '/');
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(1);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Initializing ticker
  useEffect(() => {
    let progress = 1;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 12) + 5;
      if (progress >= 100) {
        progress = 100;
        setLoadingProgress(100);
        clearInterval(interval);
        setTimeout(() => setIsLoaded(true), 300);
      } else {
        setLoadingProgress(progress);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // Sync route on popstate
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Scroll listener for active section and scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      if (currentRoute === '/') {
        const worksEl = document.getElementById('works');
        const aboutEl = document.getElementById('about');
        const scrollY = window.scrollY + 300;

        if (aboutEl && scrollY >= aboutEl.offsetTop) {
          setActiveSection('about');
        } else if (worksEl && scrollY >= worksEl.offsetTop) {
          setActiveSection('works');
        } else {
          setActiveSection('home');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentRoute]);

  // Dark mode toggle
  const toggleDarkMode = () => {
    const nextMode = !isDark;
    setIsDark(nextMode);
    if (nextMode) {
      document.documentElement.setAttribute('data-mode', 'dark');
    } else {
      document.documentElement.removeAttribute('data-mode');
    }
  };

  const navigateTo = (target) => {
    if (target.startsWith('#')) {
      if (currentRoute !== '/') {
        window.history.pushState({}, '', '/');
        setCurrentRoute('/');
        setTimeout(() => {
          const el = document.querySelector(target);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.history.pushState({}, '', target);
      setCurrentRoute(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case '/web-developer/':
      case '/web-developer':
        return (
          <WebDeveloperPage 
            onNavigate={navigateTo} 
            onOpenContact={() => setIsHireModalOpen(true)} 
          />
        );
      case '/developer/':
      case '/developer':
        return (
          <DeveloperPage 
            onNavigate={navigateTo} 
            onOpenContact={() => setIsHireModalOpen(true)} 
          />
        );
      case '/biodiversity-hotspot-explorer/':
      case '/biodiversity-hotspot-explorer':
        return (
          <BiodiversityCaseStudy 
            onNavigate={navigateTo} 
            onOpenContact={() => setIsHireModalOpen(true)} 
          />
        );
      case '/contact/':
      case '/contact':
        return (
          <ContactPage 
            onNavigate={navigateTo} 
          />
        );
      default:
        return (
          <main>
            <Hero 
              onOpenContact={() => setIsHireModalOpen(true)} 
              onNavigate={navigateTo} 
            />
            <DoorsSection 
              onNavigate={navigateTo} 
            />
            <StorySection />
            <Footer 
              onOpenContact={() => setIsHireModalOpen(true)} 
              onNavigate={navigateTo} 
            />
          </main>
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
      
      {/* Preloader / Initializing Ticker */}
      {!isLoaded && (
        <div 
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f8f6f2] dark:bg-[#111111] transition-opacity duration-500 text-foreground"
        >
          <div className="flex flex-col items-center gap-4">
            <span className="font-extrabold text-3xl tracking-tight">
              Bilal<span className="text-accent">.</span>
            </span>
            <div className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-muted">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span>INITIALIZING {String(loadingProgress).padStart(3, '0')}%</span>
            </div>
            <div className="w-48 h-1 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden mt-2">
              <div 
                className="h-full bg-accent transition-all duration-75 ease-out"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Floating Header */}
      <Header 
        activeSection={activeSection}
        onNavigate={navigateTo}
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenContact={() => setIsHireModalOpen(true)}
        currentRoute={currentRoute}
      />

      {/* Retro Pull-Cord Dark Mode Switch */}
      <ThemeCord 
        isDark={isDark} 
        onToggle={toggleDarkMode} 
      />

      {/* Active Page View */}
      {renderCurrentPage()}

      {/* Floating Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#111111] text-[#f8f6f2] dark:bg-[#f8f6f2] dark:text-[#111111] shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer"
          title="Scroll back to top"
          aria-label="Scroll back to top of page"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Fullscreen Mobile / Desktop Menu Drawer */}
      <MenuDrawer 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)}
        onNavigate={navigateTo}
        onOpenContact={() => setIsHireModalOpen(true)}
      />

      {/* Hire Me Contact Modal Dialog */}
      <HireModal 
        isOpen={isHireModalOpen} 
        onClose={() => setIsHireModalOpen(false)} 
      />

    </div>
  );
}
