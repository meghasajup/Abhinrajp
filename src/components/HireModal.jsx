import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function HireModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > 1500) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Bilal, my name is ${formData.name || 'Client'}.%0A%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0AProject Details:%0A${encodeURIComponent(formData.message || "I'd like to discuss a new project.")}`;
    window.open(`https://wa.me/919897000000?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Hire me contact dialog"
      onClick={onClose}
    >
      <div 
        className="relative max-w-[540px] w-full bg-[#f4f0ea] dark:bg-[#1a1818] rounded-[32px] p-8 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.35)] border border-black/5 dark:border-white/10 text-neutral-900 dark:text-neutral-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Circular Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:bg-black/10 dark:hover:bg-white/20 transition-all cursor-pointer"
          aria-label="Close contact dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-mono font-medium tracking-wide text-neutral-500 dark:text-neutral-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 dark:bg-neutral-400" />
            <span>Hire me</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100">
            Tell me what you need built.
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5">
              NAME
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-white/10 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all shadow-sm"
            />
          </div>

          <div>
            <label className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5">
              EMAIL
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className="w-full px-4 py-3 rounded-2xl bg-[#e8e4de] dark:bg-white/5 border border-transparent dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 text-sm focus:outline-none focus:bg-white focus:border-neutral-300 dark:focus:bg-white/10 transition-all"
            />
          </div>

          <div>
            <label className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5">
              PHONE / WHATSAPP
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 rounded-2xl bg-[#e8e4de] dark:bg-white/5 border border-transparent dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 text-sm focus:outline-none focus:bg-white focus:border-neutral-300 dark:focus:bg-white/10 transition-all"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                WHAT DO YOU NEED?
              </label>
              <span className="text-[10px] font-mono text-neutral-400">
                {formData.message.length}/1500
              </span>
            </div>
            <textarea
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe the work you'd like done — scope, timeline and budget."
              className="w-full px-4 py-3 rounded-2xl bg-[#e8e4de] dark:bg-white/5 border border-transparent dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 text-sm focus:outline-none focus:bg-white focus:border-neutral-300 dark:focus:bg-white/10 transition-all resize-none"
            />
          </div>

          <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
              <span>I reply within one business day.</span>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 pl-6 pr-2.5 py-2.5 rounded-full bg-[#111111] text-white font-semibold text-xs tracking-wide hover:scale-105 active:scale-95 transition-all shadow-lg cursor-pointer"
            >
              <span>Continue on WhatsApp</span>
              <span className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-sm">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.584 1.761.884 2.796.885 3.182 0 5.768-2.587 5.768-5.766.001-3.182-2.585-5.772-5.768-5.772zm3.387 8.248c-.144.405-.837.774-1.17.824-.312.045-.694.06-2.007-.484-1.579-.655-2.613-2.253-2.69-2.358-.077-.104-.645-.856-.645-1.633 0-.777.408-1.16.552-1.317.144-.157.312-.196.417-.196.104 0 .208.001.3.006.096.005.226-.037.353.27.13.313.447 1.09.486 1.17.039.079.065.171.013.274-.052.105-.078.17-.156.262-.078.092-.163.205-.233.276-.078.078-.16.163-.069.319.091.156.404.667.868 1.079.596.53 1.099.694 1.255.772.156.079.247.069.338-.035.091-.104.39-.455.494-.611.104-.156.208-.13.348-.078.14.052.885.417 1.038.494.152.078.254.117.291.182.037.065.037.378-.107.783z"/>
                </svg>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
