"use client";

import { useEffect, useRef, useState } from "react";
import { initLenis, destroyLenis } from "@/lib/lenis";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import RoadSection from "@/components/road/RoadSection";
import JourneyRoad from "@/components/road/JourneyRoad";
import CallToAction from "@/components/cta/CallToAction";
import Footer from "@/components/footer/Footer";
import PhotosPage from "@/components/photos/PhotosPage";

export default function Home() {
  const [photosOpen, setPhotosOpen] = useState(false);
  const journeyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initLenis();
    return () => destroyLenis();
  }, []);

  return (
    <>
      <Navbar onOpenPhotos={() => setPhotosOpen(true)} />
      <main className="relative">
        <Hero />
        {/* Journey wrapper: the winding road overlays this whole block, so
            it spans stories + CTA + footer and draws in as the user scrolls. */}
        <div ref={journeyRef} className="relative z-10 bg-cream">
          <JourneyRoad wrapperRef={journeyRef} />
          <RoadSection />
          <CallToAction />
          <Footer />
        </div>
      </main>
      <PhotosPage open={photosOpen} onClose={() => setPhotosOpen(false)} />
    </>
  );
}
