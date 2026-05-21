import { Star, Quotes, User, Buildings } from "@phosphor-icons/react/dist/ssr";
import { Card, CardContent } from "@/components/ui/Card";
import { Section, SectionLabel, SectionTitle } from "@/components/ui/Section";

const TESTIMONIALS = [
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

export function TestimonialsSection() {
    return (
        <Section className="bg-brand-50/60">
            <div className="text-center mb-12">
                <SectionLabel>Depoimentos</SectionLabel>
                <SectionTitle className="mx-auto">
                    Quem usa,{" "}
                    <span className="text-gradient italic">aprova</span>
                </SectionTitle>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {TESTIMONIALS.map((item) => (
                    <TestimonialCard key={item.name} {...item} />
                ))}
            </div>
        </Section>
    );
}

function TestimonialCard({
    name,
    role,
    animals,
    icon: IconComponent,
    text,
    stars,
}: (typeof TESTIMONIALS)[number]) {
    return (
        <Card hover className="relative overflow-hidden">
            <CardContent className="pt-6">
                {/* Quote icon */}
                <Quotes
                    size={32}
                    weight="fill"
                    className="text-brand-200 mb-4"
                />

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: stars }).map((_, i) => (
                        <Star key={i} size={14} weight="fill" className="text-yellow-500" />
                    ))}
                </div>

                {/* Text */}
                <p className="font-body text-sm text-dark/65 leading-relaxed mb-5 italic">
                    &ldquo;{text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-brand-50">
                    <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                        <IconComponent size={20} weight="bold" className="text-brand-600" />
                    </div>
                    <div>
                        <p className="font-body font-semibold text-sm text-dark">{name}</p>
                        <p className="font-body text-xs text-dark/45">{role}</p>
                        <p className="font-body text-[11px] text-brand-600 font-semibold mt-0.5">{animals}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
