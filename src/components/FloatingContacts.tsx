import { company, whatsappLink } from "@/lib/data";
import { IconInstagram, IconPhone, IconWhatsapp } from "./Icons";

export function FloatingContacts() {
  const items = [
    { href: company.phoneHref, label: "Ligar", icon: <IconPhone />, cls: "bg-white text-earth max-md:hidden" },
    { href: whatsappLink(), label: "WhatsApp", icon: <IconWhatsapp />, cls: "bg-[#25d366] text-white", external: true },
    { href: company.instagram, label: "Instagram", icon: <IconInstagram />, cls: "bg-white text-earth max-md:hidden", external: true },
  ];
  return (
    <div className="fixed bottom-5 right-4 z-30 flex flex-col gap-2.5">
      {items.map((it) => (
        <a
          key={it.label}
          href={it.href}
          aria-label={it.label}
          {...(it.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className={`flex h-11 w-11 items-center justify-center rounded-md shadow-[0_6px_20px_rgba(43,31,22,0.18)] transition-transform hover:-translate-y-0.5 ${it.cls}`}
        >
          {it.icon}
        </a>
      ))}
    </div>
  );
}
