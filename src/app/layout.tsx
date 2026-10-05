import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Renata Atanasio | Design de Interiores em São Caetano do Sul",
  description:
    "Estúdio de design de interiores com mais de 15 anos. Projetos residenciais únicos e gerenciamento de obra em São Caetano do Sul, ABC e São Paulo. Nota 5,0 no Google.",
  openGraph: {
    title: "Renata Atanasio | Design + Interiores",
    description: "Transformo ambientes para transformar vidas. Projetos únicos que refletem sua essência.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
