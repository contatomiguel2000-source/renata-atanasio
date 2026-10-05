"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/data";

const types = ["Casa inteira", "Apartamento", "Um ambiente", "Quarto infantil", "Banheiro", "Corporativo", "Gerenciamento de obra"];

/** Sem backend: monta a mensagem e abre o WhatsApp da Renata. */
export function ContactForm() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [msg, setMsg] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `Olá, Renata! Meu nome é ${name}.`,
      city && `Cidade: ${city}.`,
      type && `Tipo de projeto: ${type}.`,
      msg,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  };

  const field =
    "w-full border-b border-paper/30 bg-transparent py-3 text-paper placeholder:text-paper/45 focus:border-paper focus:outline-none";

  return (
    <form onSubmit={submit} className="flex flex-col gap-5">
      <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" aria-label="Nome" className={field} />
      <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Cidade" aria-label="Cidade" className={field} />
      <select value={type} onChange={(e) => setType(e.target.value)} aria-label="Tipo de projeto" className={`${field} [&>option]:text-earth`}>
        <option value="">Tipo de projeto…</option>
        {types.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>
      <textarea
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Conte um pouco sobre o espaço"
        aria-label="Mensagem"
        rows={3}
        className={`${field} resize-none`}
      />
      <button
        type="submit"
        className="mt-3 rounded-md bg-paper px-6 py-4 text-sm font-semibold uppercase tracking-wide text-earth transition-colors hover:bg-clay"
      >
        Enviar pelo WhatsApp
      </button>
    </form>
  );
}
