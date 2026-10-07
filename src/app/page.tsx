import Image from "next/image";
import { Header } from "@/components/Header";
import { FloatingContacts } from "@/components/FloatingContacts";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { ServicesSlider } from "@/components/Services";
import { ProcessSteps } from "@/components/Process";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { IconArrow, IconInstagram } from "@/components/Icons";
import { company, faqs, nav, projects, stats, whatsappLink } from "@/lib/data";
import { asset } from "@/lib/base-path";

// Conteúdo limitado a 1160px (o padding fica fora dessa largura)
const wrap = "mx-auto w-full max-w-[calc(1160px+2rem)] px-4 md:max-w-[calc(1160px+4rem)] md:px-8";

export default function Home() {
  return (
    <>
      <Header />
      <FloatingContacts />

      <main>
        {/* Hero */}
        <section id="inicio" className="relative h-[100svh] min-h-[36rem] overflow-hidden bg-earth">
          <Image
            src={asset("/img/manacas-07.webp")}
            alt=""
            fill
            priority
            sizes="100vw"
            className="hidden object-cover md:block"
          />
          {/* Vídeo vertical (reel): só no celular, onde o formato encaixa */}
          <video
            className="absolute inset-0 h-full w-full object-cover md:hidden"
            src={asset("/video/manacas-sala-tv.mp4")}
            poster={asset("/img/video-manacas-sala-tv-poster.webp")}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-ink/10" />
          <div className={`${wrap} relative flex h-full flex-col justify-end pb-14 md:pb-20`}>
            <Reveal>
              <p className="t-label text-paper/80">Design + Interiores · São Caetano do Sul</p>
              <h1 className="t-display mt-5 max-w-[14ch] text-paper">Transformo ambientes para transformar vidas</h1>
            </Reveal>
            <Reveal delay={150} className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <p className="max-w-[26rem] text-[1.05rem] leading-relaxed text-paper/85">
                Projetos únicos que refletem a sua essência, do primeiro rascunho ao último detalhe.
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-3 rounded-md bg-paper px-6 py-4 text-sm font-semibold uppercase tracking-wide text-earth transition-colors hover:bg-clay"
              >
                Agendar uma conversa <IconArrow className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="py-24 md:py-36">
          <div className={wrap}>
            <Reveal>
              <p className="t-label">Sobre</p>
              <h2 className="t-h1 mt-6 max-w-[18ch]">
                Mais de 15 anos criando espaços que acolhem com verdade.
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-10 md:grid-cols-12 md:gap-8">
              <Reveal className="relative aspect-[4/5] overflow-hidden rounded-sm md:col-span-5 md:col-start-2">
                <Image
                  src={asset("/img/renata-milao.webp")}
                  alt="Renata Atanasio na Milan Design Week 2026"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </Reveal>
              <Reveal delay={120} className="flex flex-col justify-end gap-6 md:col-span-5 md:col-start-8">
                <div className="relative aspect-[9/11] w-2/3 overflow-hidden rounded-sm md:w-3/4">
                  <Image
                    src={asset("/img/renata-escada.webp")}
                    alt="Renata Atanasio, designer de interiores"
                    fill
                    sizes="(min-width: 768px) 30vw, 66vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-[1.05rem] leading-relaxed text-taupe">
                  Sou a Renata, mãe do Dudu e movida por tudo que convida ao movimento: no corpo, nos espaços, na vida.
                  Meu olhar se apoia no essencial, no que tem presença sem exagero.
                </p>
                <p className="text-[1.05rem] leading-relaxed text-taupe">
                  O design me ensinou técnica, mas projetar não se resume a linhas e medidas. Um espaço pode gerar
                  bem-estar e criar pertencimento. É isso que me move.
                </p>
              </Reveal>
            </div>

            <div className="mt-20 grid grid-cols-1 border-t border-sand sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal
                  key={s.label}
                  delay={i * 90}
                  className="border-b border-sand py-8 sm:px-6 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:first:pl-0"
                >
                  <p className="text-sm text-taupe">{s.label}</p>
                  <p className="mt-3 text-[3.5rem] font-medium leading-none tracking-[-0.04em]">{s.value}</p>
                  <p className="mt-4 max-w-[16rem] text-[0.9rem] leading-relaxed text-taupe">{s.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="bg-earth py-24 md:py-32">
          <div className={wrap}>
            <SectionHead
              dark
              title="O que fazemos"
              label="Serviços"
              text="Uma lista curta, sem pacotes prontos. Cada trabalho é desenhado para o que o espaço realmente precisa."
            />
            <div className="mt-16">
              <ServicesSlider />
            </div>
          </div>
        </section>

        {/* Processo */}
        <section id="processo" className="py-24 md:py-32">
          <div className={wrap}>
            <SectionHead
              title="Do início ao fim"
              label="Processo"
              text="Os mesmos quatro passos, sempre: da primeira conversa ao ambiente pronto para ser vivido."
            />
            <div className="mt-14">
              <ProcessSteps />
            </div>
          </div>
        </section>

        {/* Projetos: cartões empilhados */}
        <section id="projetos" className="pt-8">
          <div className={wrap}>
            <SectionHead
              title="Projetos entregues"
              label="Portfólio"
              text="Um registro dos ambientes: o que eles precisavam ser e o que se tornaram."
            />
          </div>
          <div className="mt-14">
            {projects.map((p, i) => (
              <article key={p.name} className="sticky top-0 h-[100svh] overflow-hidden" style={{ zIndex: i + 1 }}>
                <Image src={asset(p.cover)} alt="" fill sizes="100vw" className="scale-110 object-cover blur-md" aria-hidden />
                <div className="absolute inset-0 bg-ink/25" />
                <div className="relative flex h-full items-center justify-center px-4">
                  <div className="w-full max-w-[40rem] rounded-sm bg-white p-3 shadow-2xl md:p-4">
                    <div className="flex justify-between px-1 pb-3 pt-1">
                      <div>
                        <p className="text-xs text-clay">Local</p>
                        <p className="text-[0.95rem]">{p.place}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-clay">Tipo</p>
                        <p className="text-[0.95rem]">{p.type}</p>
                      </div>
                    </div>
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src={asset(p.cover)} alt={p.name} fill sizes="(min-width: 768px) 40rem, 100vw" className="object-cover" />
                    </div>
                    <div className="flex flex-col gap-2 px-1 pb-1 pt-4 md:flex-row md:items-end md:justify-between md:gap-6">
                      <h3 className="t-h3">{p.name}</h3>
                      <p className="max-w-[20rem] text-sm leading-relaxed text-taupe md:text-right">{p.text}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Galeria */}
        <section className="relative z-10 bg-paper py-24 md:py-32">
          <div className={wrap}>
            <SectionHead
              title="Explore os ambientes"
              label="Galeria"
              text="Cozinhas, salas, quartos e os detalhes que não cabem em uma foto só."
            >
              <a
                href={company.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit shrink-0 items-center gap-2 rounded-md bg-earth px-5 py-3 text-sm font-semibold uppercase tracking-wide text-paper"
              >
                Ver no Instagram <IconArrow className="h-4 w-4" />
              </a>
            </SectionHead>
            <div className="mt-12">
              <Gallery />
            </div>
          </div>
        </section>

        {/* Obra / vídeos */}
        <section className="bg-sand/60 py-24 md:py-32">
          <div className={`${wrap} grid items-center gap-12 md:grid-cols-2 md:gap-16`}>
            <Reveal>
              <p className="t-label">Gerenciamento de obra</p>
              <h2 className="t-h1 mt-6">Por trás de um projeto entregue existe um processo silencioso.</h2>
              <p className="mt-6 max-w-[32rem] text-[1.05rem] leading-relaxed text-taupe">
                Não se trata de visitas eventuais. É método, organização e supervisão técnica para que o que foi
                planejado aconteça de forma fiel: documentação, orçamentos comparativos, controle de prazos e
                acompanhamento de fornecedores, da montagem à ambientação.
              </p>
              <div className="mt-8 grid max-w-[32rem] grid-cols-2 gap-3">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <Image src={asset("/img/obra-02.webp")} alt="Renata acompanhando a obra" fill sizes="16rem" className="object-cover" />
                </div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <Image src={asset("/img/obra-07.webp")} alt="Renata na etapa de ambientação" fill sizes="16rem" className="object-cover" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={150} className="grid grid-cols-2 gap-3 md:gap-4">
              <video
                className="aspect-[9/16] w-full rounded-sm object-cover"
                src={asset("/video/integracao.mp4")}
                poster={asset("/img/video-integracao-poster.webp")}
                autoPlay
                muted
                loop
                playsInline
                aria-label="Vídeo: integração de estar, jantar e cozinha"
              />
              <video
                className="mt-12 aspect-[9/16] w-full rounded-sm object-cover"
                src={asset("/video/manacas-lareira.mp4")}
                poster={asset("/img/manacas-12.webp")}
                autoPlay
                muted
                loop
                playsInline
                aria-label="Vídeo: sala com lareira do Projeto Manacás"
              />
            </Reveal>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="py-24 md:py-32">
          <div className={wrap}>
            <SectionHead title="Quem viveu, conta" label="Depoimentos" text="Avaliações reais de clientes no Google Maps." />
            <div className="mt-12">
              <Testimonials />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="pb-24 md:pb-32">
          <div className={`${wrap} grid gap-10 md:grid-cols-12`}>
            <Reveal className="md:col-span-4">
              <p className="t-label">Dúvidas frequentes</p>
              <h2 className="t-h1 mt-6">Ficou alguma pergunta?</h2>
              <a
                href={whatsappLink("Olá, Renata! Tenho uma dúvida sobre os projetos.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-earth px-5 py-3 text-sm font-semibold uppercase tracking-wide text-paper"
              >
                Falar com a Renata <IconArrow className="h-4 w-4" />
              </a>
            </Reveal>
            <div className="md:col-span-7 md:col-start-6">
              {faqs.map((f) => (
                <details key={f.q} className="group border-b border-sand py-6 first:border-t">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[1.15rem] font-medium">
                    {f.q}
                    <span className="text-2xl font-light text-clay transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 max-w-[36rem] leading-relaxed text-taupe">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="relative overflow-hidden bg-earth py-24 md:py-32">
          <div className={`${wrap} grid gap-14 md:grid-cols-2`}>
            <Reveal>
              <p className="t-label text-paper/80">Contato</p>
              <h2 className="t-h1 mt-6 text-paper">Vamos dar vida ao seu projeto</h2>
              <div className="mt-10 space-y-6 text-paper/80">
                <div>
                  <p className="text-xs uppercase tracking-wider text-clay">Estúdio</p>
                  <a href={company.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-1 block hover:text-paper">
                    {company.address}
                    <br />
                    {company.city}
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-clay">Telefone e WhatsApp</p>
                  <a href={company.phoneHref} className="mt-1 block hover:text-paper">
                    {company.phone}
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-clay">Instagram</p>
                  <a href={company.instagram} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-2 hover:text-paper">
                    <IconInstagram className="h-4 w-4" /> {company.instagramHandle}
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-ink pb-10 pt-16 text-paper">
        <div className={wrap}>
          <p className="text-[clamp(2.5rem,9.5vw,8.5rem)] font-semibold uppercase leading-none tracking-[-0.05em] text-paper/90">
            Renata Atanasio
          </p>
          <div className="mt-10 flex flex-col gap-8 border-t border-paper/15 pt-8 md:flex-row md:items-start md:justify-between">
            <p className="max-w-[20rem] text-sm leading-relaxed text-paper/60">
              Design de interiores e gerenciamento de obra. Um olhar só, do início ao fim.
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-paper/80 hover:text-paper">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 flex flex-col gap-2 text-xs text-paper/45 md:flex-row md:justify-between">
            <p>© {new Date().getFullYear()} Renata Atanasio | Design de Interiores</p>
            <p>Fotos do Projeto Manacás: @vilhora</p>
          </div>
        </div>
      </footer>
    </>
  );
}
