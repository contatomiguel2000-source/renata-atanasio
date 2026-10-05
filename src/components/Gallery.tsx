"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { gallery, galleryTags } from "@/lib/data";
import { asset } from "@/lib/base-path";

export function Gallery() {
  const [tag, setTag] = useState<(typeof galleryTags)[number]>("Todos");
  const [zoom, setZoom] = useState<number | null>(null);
  const items = tag === "Todos" ? gallery : gallery.filter((g) => g.tag === tag);

  useEffect(() => {
    if (zoom === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoom(null);
      if (e.key === "ArrowRight") setZoom((z) => (z === null ? z : (z + 1) % items.length));
      if (e.key === "ArrowLeft") setZoom((z) => (z === null ? z : (z - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoom, items.length]);

  return (
    <div>
      <div className="no-scrollbar -mx-4 mb-8 flex gap-2 overflow-x-auto px-4 md:mx-0 md:px-0" role="tablist">
        {galleryTags.map((t) => (
          <button
            key={t}
            type="button"
            role="tab"
            aria-selected={tag === t}
            onClick={() => setTag(t)}
            className={`shrink-0 rounded-md border px-5 py-2 text-sm font-medium transition-colors ${
              tag === t ? "border-earth bg-earth text-paper" : "border-sand bg-white text-earth hover:border-clay"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="columns-2 gap-3 md:columns-3 md:gap-4 lg:columns-4">
        {items.map((g, i) => (
          <button
            key={g.src}
            type="button"
            onClick={() => setZoom(i)}
            className="group relative mb-3 block w-full overflow-hidden rounded-sm md:mb-4"
            aria-label={`Ampliar: ${g.alt}`}
          >
            <Image
              src={asset(g.src)}
              alt={g.alt}
              width={800}
              height={i % 3 === 0 ? 1066 : 800}
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"
              }`}
            />
            <span className="absolute bottom-2 left-2 rounded-sm bg-white/90 px-2 py-0.5 text-xs font-medium text-earth">
              {g.tag}
            </span>
          </button>
        ))}
      </div>

      {zoom !== null && items[zoom] && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4"
          onClick={() => setZoom(null)}
          role="dialog"
          aria-modal="true"
          aria-label={items[zoom].alt}
        >
          <div className="relative h-[85vh] w-full max-w-5xl">
            <Image src={asset(items[zoom].src)} alt={items[zoom].alt} fill sizes="100vw" className="object-contain" />
          </div>
          <button type="button" className="absolute right-5 top-5 text-3xl text-paper" aria-label="Fechar">
            ×
          </button>
        </div>
      )}
    </div>
  );
}
