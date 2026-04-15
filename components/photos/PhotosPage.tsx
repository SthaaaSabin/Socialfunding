"use client";

import { useEffect } from "react";
import { photos } from "@/data/photos";
import { usePhotoFilter } from "@/hooks/usePhotoFilter";
import SearchBar from "./SearchBar";
import ScatteredPhotos from "./ScatteredPhotos";
import PhotoGrid from "./PhotoGrid";

interface PhotosPageProps {
  open: boolean;
  onClose: () => void;
}

export default function PhotosPage({ open, onClose }: PhotosPageProps) {
  const { query, setQuery, filtered, hasQuery } = usePhotoFilter(photos);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo gallery"
      className="fixed inset-0 z-[70] bg-cream overflow-y-auto"
    >
      <div className="sticky top-0 z-10 bg-cream/85 backdrop-blur-md border-b border-charcoal/5">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <div className="font-serif text-sm md:text-base tracking-[0.35em] uppercase text-charcoal">
            Photos
          </div>
          <button
            onClick={onClose}
            aria-label="Close photos"
            className="text-charcoal hover:text-saffron-dark transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 md:py-20">
        <div className="text-center mb-12">
          <div className="text-[10px] tracking-[0.4em] uppercase text-charcoal/50 mb-4">
            Archive · 2015 – Today
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-charcoal mb-8">
            Moments from the road.
          </h1>
          <SearchBar value={query} onChange={setQuery} />
          {hasQuery && (
            <div className="mt-4 text-xs text-charcoal/50">
              Showing {filtered.length} {filtered.length === 1 ? "photo" : "photos"}
              {query ? ` for “${query}”` : ""}
            </div>
          )}
        </div>

        {hasQuery ? (
          <PhotoGrid photos={filtered} />
        ) : (
          <ScatteredPhotos photos={filtered} />
        )}
      </div>
    </div>
  );
}
