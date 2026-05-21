import { Check, X, Star, Leaf } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Broto",
    Icon: Leaf,
    description: "Para pequenos produtores que estão começando a organizar sua propriedade.",
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
    description: "Para médios produtores que buscam controle total e relatórios avançados.",
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
    description: "Para grandes propriedades com necessidade de gestão completa e suporte especializado.",
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

export function PricingSection() {
  return (
    <Section id="planos" className="bg-brand-950 text-cream">
      <div className="text-center mb-14">
        <SectionLabel className="text-brand-400">Planos</SectionLabel>
        <SectionTitle className="text-cream">
          Escolha o plano{" "}
          <span className="italic text-brand-400">certo para você</span>
        </SectionTitle>
        <SectionDescription className="text-cream/50 mx-auto text-center">
          Planos pensados para o tamanho da sua propriedade. Comece pequeno e
          cresça com o COWNTER.
        </SectionDescription>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {PLANS.map((plan) => (
          <PricingCard key={plan.name} {...plan} />
        ))}
      </div>

      <p className="text-center font-body text-sm text-cream/30 mt-8">
        Todos os planos incluem 14 dias gratuitos. Sem cartão de crédito.
      </p>
    </Section>
  );
}

function PricingCard({
  name,
  Icon,
  description,
  price,
  period,
  animals,
  animalTypes,
  popular,
  features,
  cta,
  ctaVariant,
}: (typeof PLANS)[number]) {
  return (
    <div
      className={cn(
        "rounded-2xl border overflow-hidden transition-transform duration-300 hover:-translate-y-1",
        popular
          ? "border-brand-500 bg-brand-600 shadow-2xl shadow-brand-500/30 scale-[1.02]"
          : "border-white/10 bg-white/5"
      )}
    >
      {popular && (
        <div className="bg-brand-500 text-center py-2">
          <span className="font-body font-semibold text-sm text-white flex items-center justify-center gap-1.5">
            <Star size={13} weight="fill" />
            Mais escolhido
          </span>
        </div>
      )}

      <div className="p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", popular ? "bg-white/20" : "bg-brand-500/20")}>
            {Icon && <Icon size={20} weight="bold" className={popular ? "text-white" : "text-brand-400"} />}
          </div>
          <div>
            <h3 className={cn("font-display font-bold text-xl", popular ? "text-white" : "text-cream")}>
              {name}
            </h3>
            <p className={cn("font-body text-xs", popular ? "text-white/70" : "text-cream/40")}>
              {animals}
            </p>
          </div>
        </div>

        <p className={cn("font-body text-sm leading-relaxed mb-5", popular ? "text-white/80" : "text-cream/50")}>
          {description}
        </p>

        {/* Animal type badge */}
        <Badge variant={popular ? "white" : "dark"} className={popular ? "bg-white/20 text-white border-white/30 mb-5" : "mb-5 bg-white/5 text-cream/60 border-white/10"}>
          {animalTypes}
        </Badge>

        {/* Price */}
        <div className="flex items-end gap-1 mb-6">
          <span className={cn("font-display font-bold text-4xl", popular ? "text-white" : "text-cream")}>
            {price}
          </span>
          <span className={cn("font-body text-sm mb-1.5", popular ? "text-white/60" : "text-cream/40")}>
            {period}
          </span>
        </div>

        {/* CTA */}
        <Button variant={ctaVariant} size="md" className="w-full mb-6">
          {cta}
        </Button>

        {/* Features */}
        <ul className="flex flex-col gap-2.5">
          {features.map((feature) => (
            <li key={feature.label} className="flex items-center gap-2.5">
              {feature.included ? (
                <div className={cn("w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0", popular ? "bg-white/20" : "bg-brand-700")}>
                  <Check size={9} weight="bold" className={popular ? "text-white" : "text-brand-300"} />
                </div>
              ) : (
                <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 bg-white/5">
                  <X size={9} weight="bold" className="text-cream/20" />
                </div>
              )}
              <span
                className={cn(
                  "font-body text-sm",
                  feature.included
                    ? popular ? "text-white/80" : "text-cream/60"
                    : "text-cream/25 line-through"
                )}
              >
                {feature.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
