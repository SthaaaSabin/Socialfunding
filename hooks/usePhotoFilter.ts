"use client";

import { useMemo, useState } from "react";
import type { Photo, PhotoCategory } from "@/data/photos";

const CATEGORY_KEYWORDS: Record<PhotoCategory, string[]> = {
  education: ["education", "school", "learn", "class", "student", "book"],
  healthcare: ["healthcare", "health", "clinic", "doctor", "medical", "hospital", "care"],
  community: ["community", "village", "women", "water", "harvest", "family"],
  events: ["event", "fundraiser", "festival", "volunteer", "relief", "summit"],
};

function queryToCategories(query: string): PhotoCategory[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const hits: PhotoCategory[] = [];
  (Object.keys(CATEGORY_KEYWORDS) as PhotoCategory[]).forEach((cat) => {
    if (CATEGORY_KEYWORDS[cat].some((kw) => q.includes(kw))) hits.push(cat);
  });
  return hits;
}

export function usePhotoFilter(photos: Photo[]) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return photos;
    const cats = queryToCategories(q);
    const byCategory = cats.length
      ? photos.filter((p) => cats.includes(p.category))
      : [];
    const byTitle = photos.filter((p) => p.title.toLowerCase().includes(q));
    const merged = [...new Map([...byCategory, ...byTitle].map((p) => [p.id, p])).values()];
    return merged.slice(0, 10);
  }, [query, photos]);

  const hasQuery = query.trim().length > 0;

  return { query, setQuery, filtered, hasQuery };
}
