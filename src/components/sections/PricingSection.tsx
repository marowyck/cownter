import { Check, X, Star } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import { PLANS, PRICING_SECTION_CONTENT } from "@/lib/mockData";
import { PricingCard } from "../../lib";

export function PricingSection() {
  return (
    <Section id="planos" className="bg-brand-950 text-cream">
      <div className="text-center mb-14">
        <SectionLabel className="text-brand-400">{PRICING_SECTION_CONTENT.label}</SectionLabel>
        <SectionTitle className="text-cream">
          {PRICING_SECTION_CONTENT.title}{" "}
          <span className="italic text-brand-400">{PRICING_SECTION_CONTENT.titleHighlight}</span>
        </SectionTitle>
        <SectionDescription className="text-cream/50 mx-auto text-center">
          {PRICING_SECTION_CONTENT.description}
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
