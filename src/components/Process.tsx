"use client";

import { useState } from "react";
import { process } from "@/lib/data";

export function ProcessSteps() {
  const [active, setActive] = useState(0);
  return (
    <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4">
      {process.map((p, i) => {
        const on = active === i;
        return (
          <button
            key={p.title}
            type="button"
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            className={`flex min-h-[15rem] flex-col rounded-sm p-6 text-left transition-colors duration-500 ${
              on ? "bg-earth text-paper" : "text-earth"
            }`}
          >
            <span className={`text-[3.5rem] font-light leading-none tracking-[-0.04em] ${on ? "text-clay" : "text-clay/70"}`}>
              {`//${String(i + 1).padStart(2, "0")}`}
            </span>
            <span className="t-h3 mt-auto pt-10">{p.title}</span>
            <span className={`mt-2 text-[0.9rem] leading-relaxed ${on ? "text-paper/75" : "text-taupe"}`}>{p.text}</span>
          </button>
        );
      })}
    </div>
  );
}
