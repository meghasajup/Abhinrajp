import React, { useState } from 'react';
import { ArrowLeft, Send, MessageSquare, Mail, Github, Linkedin, Instagram } from 'lucide-react';

export default function ContactPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'details' && value.length > 1500) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Bilal, my name is ${formData.name || 'Client'}.%0A%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0AProject Scope:%0A${encodeURIComponent(formData.details || "I'd like to talk about a new project.")}`;
    window.open(`https://wa.me/919897000000?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-8 md:px-14 max-w-[88rem] mx-auto animate-fadeIn">
      {/* Back to Home Button */}
      <div className="mb-8">
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill text-xs font-mono font-medium hover:text-accent transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to home</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Heading & Contact Form */}
        <div className="lg:col-span-7">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-accent/15 text-accent border border-accent/25 uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>Direct Contact</span>
            </span>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground mb-4">
              Start a project.
            </h1>

            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed font-normal">
              Tell me what you're building. I reply within one business day with ideas, timeline estimates, and budget scopes.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass-pill rounded-[32px] p-8 sm:p-10 border border-white/60 dark:border-white/10 shadow-xl space-y-5">
            <div>
              <label className="block text-xs font-mono uppercase font-semibold text-muted mb-2 tracking-wider">
                YOUR NAME
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className="w-full px-4 py-3.5 rounded-2xl bg-white/80 dark:bg-white/5 border border-black/10 dark:border-white/10 text-foreground placeholder-muted/60 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all shadow-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase font-semibold text-muted mb-2 tracking-wider">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  className="w-full px-4 py-3.5 rounded-2xl bg-white/80 dark:bg-white/5 border border-black/10 dark:border-white/10 text-foreground placeholder-muted/60 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase font-semibold text-muted mb-2 tracking-wider">
                  PHONE / WHATSAPP
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3.5 rounded-2xl bg-white/80 dark:bg-white/5 border border-black/10 dark:border-white/10 text-foreground placeholder-muted/60 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all shadow-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-mono uppercase font-semibold text-muted tracking-wider">
                  PROJECT DETAILS
                </label>
                <span className="text-[10px] font-mono text-muted">
                  {formData.details.length}/1500
                </span>
              </div>
              <textarea
                name="details"
                rows={5}
                required
                value={formData.details}
                onChange={handleChange}
                placeholder="Describe your goals, desired features, timeline, and budget range."
                className="w-full px-4 py-3.5 rounded-2xl bg-white/80 dark:bg-white/5 border border-black/10 dark:border-white/10 text-foreground placeholder-muted/60 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all shadow-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#111111] text-[#f8f6f2] dark:bg-[#f8f6f2] dark:text-[#111111] font-semibold text-sm tracking-wide hover:scale-105 active:scale-95 transition-all shadow-xl cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-500" />
              <span>Continue on WhatsApp</span>
            </button>
          </form>
        </div>

        {/* Right Column: Direct Info & Social Channels */}
        <div className="lg:col-span-5 space-y-8">
          <div className="glass-pill rounded-[32px] p-8 border border-white/60 dark:border-white/10 shadow-lg">
            <h3 className="text-sm font-mono uppercase font-bold text-accent tracking-wider mb-4">
              DIRECT REACH
            </h3>
            <p className="text-sm text-foreground/80 leading-relaxed mb-6">
              Prefer writing an email directly? Reach out anytime with project specs, RFPs, or contract inquiries.
            </p>
            <a
              href="mailto:bilalsalmani9897@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/5 dark:bg-white/5 text-foreground hover:text-accent font-mono text-sm transition-colors border border-black/5 dark:border-white/5"
            >
              <Mail className="w-4 h-4 text-accent" />
              <span>bilalsalmani9897@gmail.com</span>
            </a>
          </div>

          <div className="glass-pill rounded-[32px] p-8 border border-white/60 dark:border-white/10 shadow-lg">
            <h3 className="text-sm font-mono uppercase font-bold text-accent tracking-wider mb-4">
              PROFILES & CHANNELS
            </h3>
            <div className="space-y-3">
              <a
                href="https://github.com/bilal9897"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-foreground font-medium text-sm"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-accent" />
                  <span>GitHub</span>
                </div>
                <span className="text-xs font-mono text-muted">@bilal9897</span>
              </a>

              <a
                href="https://www.linkedin.com/in/bilal-salmani-6190ab292/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-foreground font-medium text-sm"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-accent" />
                  <span>LinkedIn</span>
                </div>
                <span className="text-xs font-mono text-muted">in/bilal-salmani</span>
              </a>

              <a
                href="https://www.instagram.com/bilalsalmani.in/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-foreground font-medium text-sm"
              >
                <div className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-accent" />
                  <span>Instagram</span>
                </div>
                <span className="text-xs font-mono text-muted">@bilalsalmani.in</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
