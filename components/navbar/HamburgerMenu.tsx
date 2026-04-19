"use client";

import { useEffect, useRef } from "react";
import { menuItems } from "@/data/menu";

interface HamburgerMenuProps {
  open: boolean;
  onClose: () => void;
  onSelect: (href: string) => void;
}

export default function HamburgerMenu({ open, onClose, onSelect }: HamburgerMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFocusRef = useRef<HTMLButtonElement>(null);

  // Focus trap + escape handling
  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    firstFocusRef.current?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'button, a, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-[60] ${open ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/50 transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Slide panel */}
      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
        className={`absolute right-0 top-0 h-full w-full sm:w-[60vw] md:w-[50vw] lg:w-[40vw] bg-cream border-l border-charcoal/10 shadow-2xl transform transition-transform duration-500 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end p-6 md:p-8">
          <button
            ref={firstFocusRef}
            onClick={onClose}
            aria-label="Close menu"
            className="text-charcoal hover:text-saffron-dark transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="px-10 md:px-16 pt-6 pb-16">
          <ul className="flex flex-col gap-6 md:gap-8">
            {menuItems.map((item, i) => (
              <li key={item.id}>
                <button
                  onClick={() => onSelect(item.href)}
                  className="group flex items-baseline gap-4 text-left"
                >
                  <span className="font-sans text-xs tracking-widest text-charcoal/40">
                    0{i + 1}
                  </span>
                  <span className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal group-hover:text-saffron-dark transition-colors duration-300">
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-16 pt-8 border-t border-charcoal/10 text-xs tracking-[0.3em] uppercase text-charcoal/50">
            Panchkhal · Kavrepalanchok
          </div>
        </nav>
      </aside>
    </div>
  );
}
