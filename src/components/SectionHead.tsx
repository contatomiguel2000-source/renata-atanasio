import { Reveal } from "./Reveal";

/** Cabeçalho de seção no estilo do layout de referência: título grande, linha, rótulo e texto à direita. */
export function SectionHead({
  title,
  label,
  text,
  dark = false,
  children,
}: {
  title: string;
  label: string;
  text?: string;
  dark?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <Reveal fade={false} threshold={0.3}>
      <h2 className={`t-display ${dark ? "ink-in-dark" : "ink-in"}`}>{title}</h2>
      <div className={`mt-6 flex flex-col gap-4 border-t pt-4 md:flex-row md:items-start md:justify-between ${dark ? "border-paper/20 text-paper" : "border-sand"}`}>
        <p className="t-label shrink-0">{label}</p>
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-10">
          {text && <p className={`max-w-[19rem] text-[0.95rem] leading-relaxed ${dark ? "text-paper/70" : "text-taupe"}`}>{text}</p>}
          {children}
        </div>
      </div>
    </Reveal>
  );
}
