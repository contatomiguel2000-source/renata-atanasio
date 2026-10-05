"use client";

import { useRef } from "react";
import { company, testimonials } from "@/lib/data";
import { IconStar } from "./Icons";

export function Testimonials() {
  const track = useRef<HTMLDivElement>(null);
  const move = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 360) + 16), behavior: "smooth" });
  };

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <a
          href={company.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-md bg-white px-4 py-3 shadow-[0_6px_24px_rgba(43,31,22,0.06)]"
        >
          <span className="text-2xl font-semibold">{company.rating}</span>
          <span className="flex text-[#e3a72f]">
            {Array.from({ length: 5 }).map((_, i) => (
              <IconStar key={i} />
            ))}
          </span>
          <span className="text-sm text-taupe">{company.reviewCount} avaliações no Google</span>
        </a>
        <div className="flex gap-2">
          {([-1, 1] as const).map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => move(d)}
              aria-label={d === -1 ? "Depoimento anterior" : "Próximo depoimento"}
              className="flex h-12 w-16 items-center justify-center rounded-full border border-clay text-2xl font-light text-taupe transition-colors hover:bg-earth hover:text-paper"
            >
              {d === -1 ? "←" : "→"}
            </button>
          ))}
        </div>
      </div>

      <div ref={track} className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 md:mx-0 md:px-0">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            data-card
            className="flex w-[86%] shrink-0 snap-start flex-col rounded-sm bg-white p-7 sm:w-[46%] lg:w-[calc((100%-2rem)/3)]"
          >
            <span className="flex text-[#e3a72f]">
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} />
              ))}
            </span>
            <blockquote className="mt-5 flex-1 text-[1.15rem] leading-relaxed tracking-[-0.01em]">
              &ldquo;{t.text}&rdquo;
            </blockquote>
            <figcaption className="mt-8 border-t border-sand pt-4">
              <span className="block font-semibold">{t.name}</span>
              <span className="text-sm text-taupe">Cliente · Google Maps</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
