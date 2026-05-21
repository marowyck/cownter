import {
    Cow,
    Package,
    Syringe,
    Heartbeat,
    ArrowsLeftRight,
    MapPin,
    Newspaper,
    Stethoscope,
    ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

const FEATURES = [
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

export function FeaturesSection() {
    return (
        <Section id="funcionalidades" className="bg-white">
            <div className="text-center mb-14">
                <SectionLabel>Funcionalidades</SectionLabel>
                <SectionTitle className="mx-auto">
                    Tudo que sua fazenda precisa,{" "}
                    <span className="text-gradient italic">em um só app</span>
                </SectionTitle>
                <SectionDescription className="mx-auto text-center">
                    Do controle de animais ao monitoramento por GPS — o COWNTER centraliza
                    a gestão da sua propriedade com precisão e simplicidade.
                </SectionDescription>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {FEATURES.map((feature) => (
                    <FeatureCard key={feature.title} {...feature} />
                ))}
            </div>

            <div className="flex justify-center mt-10">
                <Button variant="secondary" size="lg">
                    Ver todas as funcionalidades
                    <ArrowRight size={18} weight="bold" />
                </Button>
            </div>
        </Section>
    );
}

function FeatureCard({
    icon: Icon,
    title,
    description,
    tags,
    highlight,
    premium,
}: (typeof FEATURES)[number]) {
    return (
        <Card
            hover
            className={
                highlight
                    ? "border-brand-300 bg-gradient-to-br from-brand-50 to-white col-span-1 md:col-span-2 lg:col-span-1"
                    : ""
            }
        >
            <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                    <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${highlight
                                ? "bg-brand-600 shadow-lg shadow-brand-600/30"
                                : "bg-brand-50 border border-brand-100"
                            }`}
                    >
                        <Icon
                            size={22}
                            weight="duotone"
                            className={highlight ? "text-white" : "text-brand-600"}
                        />
                    </div>
                    {premium && (
                        <Badge variant="earth" size="sm">
                            Grande Porte
                        </Badge>
                    )}
                </div>

                <h3 className="font-display font-bold text-lg text-dark mb-2">{title}</h3>
                <p className="font-body text-sm text-dark/55 leading-relaxed mb-4">{description}</p>

                <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="font-body text-[11px] font-semibold px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-100"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
