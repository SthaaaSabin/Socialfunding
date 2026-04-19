"use client";

export default function Footer() {
  return (
    <footer className="relative w-full pt-24 pb-10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Brand line */}
        <div className="text-center mb-20">
          <div className="font-serif text-2xl md:text-3xl tracking-[0.3em] uppercase text-charcoal">
            Grande&nbsp;Social&nbsp;Foundation
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <Column title="Location">
            <p>Grande Social Foundation</p>
            <p>Panchkhal Municipality</p>
            <p>Kavrepalanchok, Nepal</p>
          </Column>
          <Column title="Contact">
            <p>info@grandesocialfoundation.org</p>
            <p>+977-01-XXXXXXX</p>
            <p className="mt-3 text-charcoal/50 text-xs">Mon – Fri · 9:00 – 17:00</p>
          </Column>
          <Column title="Socials">
            <div className="flex gap-4">
              <SocialIcon label="Instagram"><circle cx="12" cy="12" r="4" /><rect x="3" y="3" width="18" height="18" rx="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" /></SocialIcon>
              <SocialIcon label="Facebook"><path d="M13 22V12h3l.5-4H13V5.5c0-1 .3-1.5 1.5-1.5H17V0h-3c-3 0-4 1.8-4 4v4H7v4h3v10Z" fill="currentColor" stroke="none" /></SocialIcon>
              <SocialIcon label="YouTube"><rect x="2" y="5" width="20" height="14" rx="3" /><path d="M10 9 L16 12 L10 15 Z" fill="currentColor" stroke="none" /></SocialIcon>
              <SocialIcon label="Twitter"><path d="M4 4 L10 12 L4 20 H7 L11.5 14 L16 20 H20 L13.5 11 L20 4 H17 L12.5 9 L9 4 Z" fill="currentColor" stroke="none" /></SocialIcon>
            </div>
          </Column>
        </div>

        {/* Copyright */}
        <div className="mt-20 pt-8 border-t border-charcoal/10 text-center text-xs text-charcoal/50">
          © {new Date().getFullYear()} Grande Social Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-xs tracking-[0.3em] uppercase font-semibold text-charcoal mb-5">
        {title}
      </h4>
      <div className="font-sans text-sm text-charcoal/60 leading-relaxed space-y-1">
        {children}
      </div>
    </div>
  );
}

function SocialIcon({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="w-9 h-9 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal/60 hover:text-saffron-dark hover:border-saffron transition-colors"
    >
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </a>
  );
}
