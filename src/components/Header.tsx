"use client";

import { useEffect, useState } from "react";
import { company, nav, whatsappLink } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <div className="flex w-full max-w-[16rem] items-center justify-between rounded-md bg-white py-3.5 pl-5 pr-4 shadow-[0_8px_30px_rgba(43,31,22,0.08)]">
          <a href="#inicio" className="text-[0.95rem] font-semibold uppercase tracking-[0.02em] text-earth">
            {company.name}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="relative -mr-1 h-8 w-8"
          >
            <span
              className={`absolute left-1.5 right-1.5 h-[2px] bg-earth transition-transform duration-300 ${
                open ? "top-1/2 rotate-45" : "top-[calc(50%-4px)]"
              }`}
            />
            <span
              className={`absolute left-1.5 right-1.5 h-[2px] bg-earth transition-transform duration-300 ${
                open ? "top-1/2 -rotate-45" : "top-[calc(50%+3px)]"
              }`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-earth/95 backdrop-blur-sm transition-opacity duration-500 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-2 px-4" aria-label="Menu principal">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
              className={`t-h1 text-paper transition-all duration-500 hover:text-clay ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 rounded-md bg-paper px-6 py-3 text-sm font-semibold uppercase tracking-wide text-earth"
          >
            Agendar uma conversa
          </a>
        </nav>
      </div>
    </>
  );
}
