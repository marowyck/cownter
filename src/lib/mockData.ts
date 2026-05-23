import {
  Star,
  Users,
  Cow,
  MapPinLine,
  Package,
  Syringe,
  Heartbeat,
  ArrowsLeftRight,
  MapPin,
  Newspaper,
  Stethoscope,
  User,
  Buildings,
  Lock,
  Leaf,
  Phone,
  ChatCircle,
  Bell,
  ShieldCheck,
  GitBranch,
  Globe,
  Handshake,
  Factory,
} from "@phosphor-icons/react/dist/ssr";

// ========================
// HERO SECTION
// ========================
export const TRUST_STATS = [
  { value: "2.400+", label: "Fazendas ativas" },
  { value: "180k+", label: "Animais gerenciados" },
  { value: "99.9%", label: "Uptime garantido" },
];

export const HERO_CONTENT = {
  badge: "Novo: Integração com fazendas parceiras",
  mainTitle: "Sua fazenda,",
  mainTitleHighlight: "organizada",
  mainTitleEnd: "como nunca.",
  description:
    "COWNTER é a plataforma completa para gestão de propriedades rurais. Controle de animais, saúde, estoque, geocercas e muito mais — tudo em um só lugar.",
  cta1: "Começar gratuitamente",
  cta2: "Ver demonstração",
  floatingCard1: {
    title: "Rebanho saudável",
    subtitle: "98% dos animais vacinados",
  },
};

// ========================
// FEATURES SECTION
// ========================
export const FEATURES = [
  {
    icon: Cow,
    title: "Gestão de Animais",
    description:
      "Cadastro completo por brinco, espécie, raça e histórico. Acompanhe nascimentos, mortes com causa registrada, e movimentações do rebanho.",
    tags: ["Bovinos", "Equinos", "Suínos"],
    highlight: false,
  },
  {
    icon: Syringe,
    title: "Saúde & Vacinação",
    description:
      "Calendário automático de vacinações, alertas de doenças, controle de fertilidade e reprodução. Nunca mais perca uma dose.",
    tags: ["Alertas", "Calendário", "Histórico"],
    highlight: true,
  },
  {
    icon: Package,
    title: "Controle de Estoque",
    description:
      "Medicamentos, ração, insumos e equipamentos. Avisos de estoque baixo e integração com compras e vendas do rebanho.",
    tags: ["Insumos", "Medicamentos", "Relatórios"],
    highlight: false,
  },
  {
    icon: Heartbeat,
    title: "Controle de Natalidade & Morte",
    description:
      "Registre nascimentos, parições, causas de morte e descarte. Visualize métricas de mortalidade e saúde geral do rebanho.",
    tags: ["Mortalidade", "Nascimentos", "Análise"],
    highlight: false,
  },
  {
    icon: ArrowsLeftRight,
    title: "Compra & Venda",
    description:
      "Registre transações comerciais, valores por cabeça, notas de compra e venda. Relatórios financeiros do rebanho integrados.",
    tags: ["Financeiro", "NF-e", "Histórico"],
    highlight: false,
  },
  {
    icon: MapPin,
    title: "Geocercas",
    description:
      "Demarcação de pastagens, cochos, currais e áreas de risco. Receba notificações quando animais saírem das áreas definidas.",
    tags: ["GPS", "Alertas", "Mapa"],
    highlight: false,
  },
  {
    icon: ArrowsLeftRight,
    title: "Integração entre Fazendas",
    description:
      "Compartilhe dados com fazendas próximas, cooperativas e parceiros. Rastreabilidade completa da cadeia produtiva.",
    tags: ["Rede", "Cooperativas", "Rastreio"],
    highlight: false,
  },
  {
    icon: Newspaper,
    title: "Notícias do Agro",
    description:
      "Feed curado de notícias sobre mercado, preços, clima, legislação e inovações do agronegócio. Disponível para todos os planos.",
    tags: ["Mercado", "Clima", "Legislação"],
    highlight: false,
  },
  {
    icon: Stethoscope,
    title: "Veterinários Parceiros",
    description:
      "Acesso exclusivo para grandes produtores. Conecte-se com veterinários certificados para consultas remotas e visitas programadas.",
    tags: ["Premium", "Especialistas", "Teleconsulta"],
    highlight: false,
    premium: true,
  },
];

export const FEATURES_SECTION_CONTENT = {
  label: "Funcionalidades",
  title: "Tudo que sua fazenda precisa,",
  titleHighlight: "em um só app",
  description:
    "Todas as ferramentas necessárias para gerenciar sua propriedade com eficiência, controle e segurança.",
};

// ========================
// PRICING SECTION
// ========================
export const PLANS = [
  {
    name: "Broto",
    Icon: Leaf,
    description:
      "Para pequenos produtores que estão começando a organizar sua propriedade.",
    price: "R$ 79",
    period: "/mês",
    animals: "Até 50 cabeças",
    animalTypes: "Bovinos e Equinos",
    popular: false,
    features: [
      { label: "Cadastro de animais", included: true },
      { label: "Controle de vacinação", included: true },
      { label: "Estoque básico", included: true },
      { label: "Notícias do agro", included: true },
      { label: "Geocercas (até 2 áreas)", included: true },
      { label: "Compra e venda", included: true },
      { label: "Integração com fazendas", included: false },
      { label: "Veterinários parceiros", included: false },
      { label: "Múltiplos usuários", included: false },
      { label: "API e integrações", included: false },
    ],
    cta: "Começar com Broto",
    ctaVariant: "secondary" as const,
  },
  {
    name: "Pastagem",
    Icon: Leaf,
    description:
      "Para médios produtores que buscam controle total e relatórios avançados.",
    price: "R$ 199",
    period: "/mês",
    animals: "Até 300 cabeças",
    animalTypes: "Bovinos, Equinos e Suínos",
    popular: true,
    features: [
      { label: "Cadastro de animais", included: true },
      { label: "Controle de vacinação", included: true },
      { label: "Estoque avançado", included: true },
      { label: "Notícias do agro", included: true },
      { label: "Geocercas (até 10 áreas)", included: true },
      { label: "Compra e venda + NF-e", included: true },
      { label: "Integração com fazendas", included: true },
      { label: "Veterinários parceiros", included: false },
      { label: "Múltiplos usuários (3)", included: true },
      { label: "API e integrações", included: false },
    ],
    cta: "Começar com Pastagem",
    ctaVariant: "primary" as const,
  },
  {
    name: "Latifúndio",
    emoji: "🏞️",
    description:
      "Para grandes propriedades com necessidade de gestão completa e suporte especializado.",
    price: "R$ 499",
    period: "/mês",
    animals: "Animais ilimitados",
    animalTypes: "Todos os tipos de animais",
    popular: false,
    features: [
      { label: "Cadastro de animais", included: true },
      { label: "Controle de vacinação", included: true },
      { label: "Estoque completo + BI", included: true },
      { label: "Notícias do agro", included: true },
      { label: "Geocercas ilimitadas", included: true },
      { label: "Compra e venda + NF-e", included: true },
      { label: "Integração com fazendas", included: true },
      { label: "Veterinários parceiros", included: true },
      { label: "Múltiplos usuários (ilimitado)", included: true },
      { label: "API e integrações", included: true },
    ],
    cta: "Falar com consultor",
    ctaVariant: "earth" as const,
  },
];

export const PRICING_SECTION_CONTENT = {
  label: "Planos",
  title: "Escolha o plano",
  titleHighlight: "certo para você",
  description:
    "Planos pensados para o tamanho da sua propriedade. Comece pequeno e cresça com o COWNTER.",
};

// ========================
// TESTIMONIALS SECTION
// ========================
export const TESTIMONIALS = [
  {
    name: "Seu Geraldo Mendes",
    role: "Produtor de corte · Uberaba, MG",
    animals: "280 cabeças · Plano Pastagem",
    icon: User,
    text: "Antes eu controlava tudo no caderno. Com o COWNTER, em dois dias já tinha o histórico completo do meu rebanho. As notificações de vacinação me economizaram muito prejuízo.",
    stars: 5,
  },
  {
    name: "Ana Paula Rodrigues",
    role: "Pecuarista · Patos de Minas, MG",
    animals: "42 cabeças · Plano Broto",
    icon: User,
    text: "Como pequena produtora, o plano Broto é perfeito. Não pago o que não uso, e tenho tudo que preciso. A geocerca me avisou quando uma vaca fugiu — sem isso teria perdido o animal.",
    stars: 5,
  },
  {
    name: "Grupo Agropecuário Silveira",
    role: "Gestor de fazendas · Triângulo Mineiro",
    animals: "1.200+ cabeças · Plano Latifúndio",
    icon: Buildings,
    text: "Gerenciamos 4 fazendas pelo COWNTER. A integração entre propriedades e os veterinários parceiros fizeram uma diferença enorme no controle sanitário. Recomendo para qualquer grande produtor.",
    stars: 5,
  },
];

export const TESTIMONIALS_SECTION_CONTENT = {
  label: "Depoimentos",
  title: "Quem usa,",
  titleHighlight: "aprova",
};

// ========================
// FAQ SECTION
// ========================
export const FAQS = [
  {
    q: "Quais tipos de animais o COWNTER suporta?",
    a: "O COWNTER suporta bovinos, equinos, suínos, ovinos, caprinos e outros tipos de animais. O suporte varia conforme o plano: o Broto cobre bovinos e equinos, enquanto o Pastagem e Latifúndio incluem todos os tipos.",
  },
  {
    q: "Posso usar o COWNTER no celular?",
    a: "Sim! O COWNTER tem aplicativo nativo para iOS e Android, com modo offline para uso em áreas sem sinal — muito comum no interior. Quando a conexão voltar, os dados sincronizam automaticamente.",
  },
  {
    q: "Como funciona a integração com fazendas próximas?",
    a: "A integração permite que fazendas parceiras compartilhem dados de rastreabilidade de animais. Para conectar, ambas as fazendas precisam estar no plano Pastagem ou superior e aceitar mutuamente a conexão.",
  },
  {
    q: "Os veterinários parceiros são exclusivos de qual plano?",
    a: "O acesso aos veterinários parceiros é exclusivo do plano Latifúndio. Você pode agendar consultas remotas por vídeo ou visitas presenciais com veterinários certificados credenciados à plataforma.",
  },
  {
    q: "O que acontece se eu ultrapassar o limite de cabeças do meu plano?",
    a: "Você receberá um alerta quando estiver próximo do limite. Ultrapassar o limite bloqueia o cadastro de novos animais, mas seus dados ficam intactos. Você pode fazer upgrade para o próximo plano a qualquer momento.",
  },
  {
    q: "Meus dados estão seguros?",
    a: "Sim. Todos os dados são criptografados com AES-256 em trânsito e em repouso. Os servidores ficam no Brasil (em conformidade com a LGPD) e fazemos backups automáticos diários. Você pode exportar seus dados a qualquer momento.",
  },
];

export const FAQ_SECTION_CONTENT = {
  label: "FAQ",
  title: "Dúvidas",
  titleHighlight: "frequentes",
  description:
    "Não encontrou sua resposta? Entre em contato com nosso suporte via WhatsApp ou e-mail.",
};

// ========================
// CTA SECTION
// ========================
export const CTA_CONTENT = {
  badge: "14 dias grátis, sem cartão",
  title: "Sua fazenda merece",
  titleHighlight: "tecnologia",
  titleEnd: "de verdade.",
  description:
    "Junte-se a mais de 2.400 fazendas que já usam o COWNTER para organizar, controlar e crescer com segurança.",
  cta1: "Criar conta gratuita",
  cta2: "Falar no WhatsApp",
};

export const TRUST_INDICATORS = [
  { Icon: Lock, label: "Dados criptografados" },
  { Icon: Leaf, label: "Servidores no Brasil" },
  { Icon: Phone, label: "App iOS e Android" },
  { Icon: ChatCircle, label: "Suporte em português" },
];

// ========================
// INTEGRATIONS SECTION
// ========================
export const GEO_FEATURES = [
  {
    icon: MapPin,
    title: "Demarcação precisa",
    desc: "Defina pastagens, currais, áreas de risco e bebedouros no mapa com precisão de GPS.",
  },
  {
    icon: Bell,
    title: "Alertas em tempo real",
    desc: "Receba notificações imediatas quando animais saírem das áreas demarcadas.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança do rebanho",
    desc: "Reduza perdas e furtos com monitoramento contínuo das geocercas.",
  },
];

export const INTEGRATION_FEATURES = [
  {
    icon: ArrowsLeftRight,
    title: "Rede de fazendas",
    desc: "Conecte-se com fazendas vizinhas e parceiros para compartilhar dados de rastreabilidade.",
  },
  {
    icon: GitBranch,
    title: "Rastreabilidade completa",
    desc: "Acompanhe o histórico de cada animal desde o nascimento até a venda, mesmo entre fazendas.",
  },
  {
    icon: Globe,
    title: "Cooperativas e frigoríficos",
    desc: "Integre com cooperativas e parceiros da cadeia produtiva para relatórios certificados.",
  },
];

export const INTEGRATIONS_SECTION_CONTENT = {
  geoLabel: "Geocercas",
  geoTitle: "Monitore cada",
  geoTitleHighlight: "palmo",
  geoTitleEnd: "da sua terra",
  geoDescription:
    "Demarcação de áreas com precisão geográfica. Saiba exatamente onde seus animais estão a qualquer momento.",

  integrationLabel: "Integração",
  integrationTitle: "Sua fazenda conectada com",
  integrationTitleHighlight: "o ecossistema",
};

// ========================
// PARTNERS SECTION
// ========================
export const PARTNERS = [
  {
    name: "AgroBrasília",
    logo: "/AgroBrasilia.png",
  },
  {
    name: "CNA SENAR",
    logo: "/CNASENAR.png",
  },
  {
    name: "CFMV",
    logo: "/Logo-CFMV-Horizontal-1024x350-600x204.png",
  },
  {
    name: "ABIEC",
    logo: "/logo_abiec.png",
  },
  {
    name: "Embrapa",
    logo: "/embrapa-logo.png",
  },
];
