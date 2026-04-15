"use client";

import { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

interface NavbarProps {
  onOpenPhotos: () => void;
}

export default function Navbar({ onOpenPhotos }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "NP">("EN");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMenuSelect = (href: string) => {
    setMenuOpen(false);
    if (href === "#photos") {
      onOpenPhotos();
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-md bg-cream/70 border-b border-charcoal/5"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-5 md:px-10 py-5">
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="text-charcoal hover:text-saffron-dark transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="4" y1="16" x2="20" y2="16" />
            </svg>
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 font-serif text-charcoal text-sm md:text-base tracking-[0.3em] md:tracking-[0.45em] uppercase select-none">
            United&nbsp;Hope&nbsp;Nepal
          </div>

          <div className="flex items-center gap-3 md:gap-5">
            <div className="hidden sm:flex items-center gap-1 text-[11px] tracking-[0.25em] uppercase text-charcoal/70">
              <button
                onClick={() => setLang("EN")}
                className={`px-1 transition-colors ${lang === "EN" ? "text-charcoal" : "text-charcoal/40 hover:text-charcoal"}`}
              >
                EN
              </button>
              <span className="text-charcoal/30">/</span>
              <button
                onClick={() => setLang("NP")}
                className={`px-1 transition-colors ${lang === "NP" ? "text-charcoal" : "text-charcoal/40 hover:text-charcoal"}`}
              >
                NP
              </button>
            </div>
            <button className="border border-charcoal/60 text-charcoal hover:bg-charcoal hover:text-cream transition-colors px-3 md:px-5 py-2 text-[10px] md:text-[11px] tracking-[0.25em] uppercase">
              Donate
            </button>
          </div>
        </div>
      </header>

      <HamburgerMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onSelect={handleMenuSelect}
      />
    </>
  );
}
