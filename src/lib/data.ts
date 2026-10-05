// Conteúdo real: Instagram @re_atanasio e Google Maps (coletado em out/2026).

export const company = {
  name: "Renata Atanasio",
  tagline: "Design + Interiores",
  instagram: "https://www.instagram.com/re_atanasio/",
  instagramHandle: "@re_atanasio",
  phone: "(11) 99400-3941",
  phoneHref: "tel:+5511994003941",
  whatsapp: "5511994003941",
  address: "Alameda Caulim, 115 - Cerâmica",
  city: "São Caetano do Sul - SP, 09531-195",
  mapsUrl:
    "https://www.google.com/maps/place/Renata+Atanasio+%7C+Design+de+Interiores/@-23.6247782,-46.5816591,17z/data=!4m6!3m5!1s0xe136450cc319e5d:0x6fef447011d2b11c!8m2!3d-23.6247782!4d-46.5816591!16s%2Fg%2F11m6h46t08",
  rating: "5,0",
  reviewCount: 19,
};

export function whatsappLink(msg = "Olá, Renata! Vim pelo site e gostaria de conversar sobre um projeto.") {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(msg)}`;
}

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export const stats = [
  { value: "15+", label: "Anos de estúdio", text: "Mais de quinze anos criando mudanças em casas e empresas." },
  { value: "5,0", label: "Nota no Google", text: "Avaliação máxima em todas as 19 avaliações do Google Maps." },
  { value: "6 mil", label: "Seguidores", text: "Projetos, obras e bastidores acompanhados no Instagram." },
  { value: "ABC", label: "E além", text: "Estúdio em São Caetano do Sul, com projetos em São Paulo e no interior." },
];

export const services = [
  {
    title: "Projeto de Interiores",
    text: "Do conceito à ambientação: layout, marcenaria, iluminação e materiais, em um ambiente ou na casa inteira.",
    image: "/img/manacas-07.webp",
  },
  {
    title: "Gerenciamento de Obra",
    text: "Orçamentos comparativos, controle de prazos e acompanhamento de fornecedores para o projeto acontecer fiel ao que foi aprovado.",
    image: "/img/obra-02.webp",
  },
  {
    title: "Quartos Infantis",
    text: "Ambientes que acompanham o crescimento da criança, com cor, afeto e funcionalidade.",
    image: "/img/quartoamarelo-01.webp",
  },
  {
    title: "Banheiros e Lofts",
    text: "Espaços compactos resolvidos com decisões inteligentes, sem abrir mão do conforto.",
    image: "/img/loft-05.webp",
  },
];

export const process = [
  { title: "Escuta", text: "Uma primeira conversa, sem pressa, sobre o espaço, a rotina e o jeito de viver de quem mora ali." },
  { title: "Conceito", text: "Layout, materiais, cores e iluminação reunidos em um projeto que reflete a sua essência." },
  { title: "Obra", text: "Gerenciamento com método: documentação, orçamentos, prazos, fornecedores e supervisão técnica." },
  { title: "Entrega", text: "Montagem, ambientação e os últimos detalhes, até a casa estar pronta para ser vivida." },
];

export type Project = {
  name: string;
  place: string;
  type: string;
  text: string;
  cover: string;
};

export const projects: Project[] = [
  {
    name: "Projeto Manacás",
    place: "Casa",
    type: "Residencial",
    text: "Uma sala para receber e para contemplar, e uma cozinha que vira lugar de encontro.",
    cover: "/img/manacas-09.webp",
  },
  {
    name: "CasaMT",
    place: "Casa",
    type: "Residencial",
    text: "Uma nova identidade para a família, com texturas naturais e tons suaves, respeitando a arquitetura existente.",
    cover: "/img/casamt-03.webp",
  },
  {
    name: "Loft",
    place: "Apartamento",
    type: "Residencial",
    text: "A cama no centro organiza o espaço e permite ver a TV do estar e do descanso.",
    cover: "/img/loft-02.webp",
  },
  {
    name: "Casa com cara de casa",
    place: "Casa",
    type: "Residencial",
    text: "Sala e cozinha se aproximam para receber os amigos e abrir um vinho sem cerimônia.",
    cover: "/img/fabi-02.webp",
  },
];

export const galleryTags = ["Todos", "Cozinha", "Sala", "Quarto", "Detalhes"] as const;

export const gallery: { src: string; tag: (typeof galleryTags)[number]; alt: string }[] = [
  { src: "/img/manacas-01.webp", tag: "Cozinha", alt: "Cozinha com marcenaria em madeira e ilha, Projeto Manacás" },
  { src: "/img/manacas-15.webp", tag: "Detalhes", alt: "Poltrona de couro e mesa de centro, Projeto Manacás" },
  { src: "/img/casamt-05.webp", tag: "Sala", alt: "Sala integrada com pé-direito duplo, CasaMT" },
  { src: "/img/manacas-04.webp", tag: "Cozinha", alt: "Mesa posta junto à ilha da cozinha, Projeto Manacás" },
  { src: "/img/loft-03.webp", tag: "Quarto", alt: "Loft com cama central e cozinha ao fundo" },
  { src: "/img/manacas-10.webp", tag: "Sala", alt: "Sala com mesas de centro em pedra, Projeto Manacás" },
  { src: "/img/fabi-04.webp", tag: "Cozinha", alt: "Cozinha integrada com bancada e banquetas" },
  { src: "/img/quartoamarelo-02.webp", tag: "Quarto", alt: "Quarto infantil em tons de amarelo com nicho iluminado" },
  { src: "/img/manacas-03.webp", tag: "Cozinha", alt: "Bancada em pedra voltada para o jardim, Projeto Manacás" },
  { src: "/img/casamt-09.webp", tag: "Cozinha", alt: "Cozinha com ilha e banquetas de madeira, CasaMT" },
  { src: "/img/manacas-14.webp", tag: "Detalhes", alt: "Objetos e livros sobre a mesa de centro, Projeto Manacás" },
  { src: "/img/manacas-17.webp", tag: "Sala", alt: "Sala clara com lareira, Projeto Manacás" },
  { src: "/img/loft-04.webp", tag: "Quarto", alt: "Cama do loft com vista para a cozinha" },
  { src: "/img/manacas-13.webp", tag: "Detalhes", alt: "Poltrona de madeira e sofá claro, Projeto Manacás" },
  { src: "/img/casamt-07.webp", tag: "Sala", alt: "Estar com poltronas orgânicas, CasaMT" },
  { src: "/img/manacas-08.webp", tag: "Sala", alt: "Sala de TV com marcenaria e forro de madeira, Projeto Manacás" },
];

// Avaliações reais do Google Maps (todas 5 estrelas). Onde o Google corta o texto, encerramos na última frase completa.
export const testimonials = [
  {
    name: "Fran Trama",
    text: "A Renata tem projetos únicos, com estilo, personalidade e com muito bom gosto! Contratamos a Re 2x, uma em São Paulo e uma no interior e foi maravilhoso contar com ela.",
  },
  {
    name: "Priscilla Calbo",
    text: "A Renata é sensacional, ela me ajudou muito, no meu novo apto, tudo certinho e dentro dos prazos, o trabalho foi impecável, super indico, ela é referência aqui em São Caetano e ABC.",
  },
  {
    name: "Jose Roberto Bossolani",
    text: "Contratei a Renata, por indicação de um amigo, para decorar minha casa recém construída no Condomínio Fazenda da Grama. O resultado foi surpreendente. Toda a família e amigos adoraram o resultado final.",
  },
  {
    name: "Joao Roberto Perin",
    text: "Havíamos comprado um apartamento e queríamos que ele tivesse a nossa identidade. A Renata captou o nosso gosto e fez um projeto que amamos.",
  },
  {
    name: "Debora Saboya",
    text: "Estou imensamente satisfeita com o trabalho dela. Pessoa totalmente focada, dedicada, detalhista! Sabe identificar o gosto do cliente com facilidade.",
  },
  {
    name: "Anderson Cicotoste",
    text: "A Renata é simplesmente fenomenal. Moro fora do Brasil, ela recebeu as chaves do meu apto e o escritório dela cuidou de tudo.",
  },
  {
    name: "Marjorie Robles",
    text: "Ela foi incrível desde o primeiro contato! Muito atenciosa, simpática e com um bom gosto impecável, conseguiu transformar as minhas ideias e as do meu esposo no projeto da nossa casa.",
  },
  {
    name: "Glayce Feltran",
    text: "Uma das designers mais maravilhosas da vida! Todos os meus projetos foram criados com a Re.",
  },
];

export const faqs = [
  {
    q: "Preciso ter tudo definido antes de entrar em contato?",
    a: "Não. A primeira conversa serve justamente para entender o espaço, a rotina e o que você imagina. O projeto nasce dessa escuta.",
  },
  {
    q: "Vocês atendem fora de São Caetano do Sul?",
    a: "Sim. O estúdio fica em São Caetano do Sul e atende o ABC, São Paulo e projetos no interior.",
  },
  {
    q: "Moro longe ou fora do país. É possível fazer o projeto?",
    a: "Sim. O escritório pode receber as chaves, cuidar da obra e acompanhar os fornecedores, e você recebe atualizações em cada etapa.",
  },
  {
    q: "Posso contratar só um ambiente?",
    a: "Pode. Atendemos desde um único ambiente, como cozinha, banheiro ou quarto infantil, até a casa inteira.",
  },
  {
    q: "O que está incluído no gerenciamento de obra?",
    a: "Documentação, orçamentos comparativos, controle de prazos, compatibilização de projetos, acompanhamento de fornecedores e cuidado nas etapas finais, da montagem à ambientação.",
  },
];
