"use client";

import Image from "next/image";
import { useRef } from "react";
import { services } from "@/lib/data";
import { asset } from "@/lib/base-path";
import { Reveal } from "./Reveal";

export function ServicesSlider() {
  const track = useRef<HTMLDivElement>(null);
  const move = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 320) + 1), behavior: "smooth" });
  };

  return (
    <div>
      <div ref={track} className="no-scrollbar -mx-4 flex snap-x snap-mandatory overflow-x-auto px-4 md:mx-0 md:px-0">
        {services.map((s, i) => (
          <Reveal
            key={s.title}
            delay={i * 90}
            className="w-[82%] shrink-0 snap-start border-l border-paper/20 px-5 pb-2 sm:w-[46%] lg:w-1/3"
          >
            <div data-card style={{ paddingTop: `${(i % 3) * 1.5}rem` }}>
              <p className="text-sm text-paper/60">{`//${String(i + 1).padStart(2, "0")}`}</p>
              <h3 className="t-h3 mt-1 text-paper">{s.title}</h3>
              <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src={asset(s.image)}
                  alt={s.title}
                  fill
                  sizes="(min-width: 1024px) 30vw, 80vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <p className="mt-5 max-w-[19rem] text-[0.95rem] leading-relaxed text-paper/75">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 flex justify-end gap-3">
        {([-1, 1] as const).map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => move(d)}
            aria-label={d === -1 ? "Serviço anterior" : "Próximo serviço"}
            className="flex h-14 w-20 items-center justify-center rounded-full border border-clay/50 text-3xl font-light text-clay transition-colors hover:bg-clay hover:text-earth"
          >
            {d === -1 ? "←" : "→"}
          </button>
        ))}
      </div>
    </div>
  );
}
