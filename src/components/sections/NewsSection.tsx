import {
  Newspaper,
  ArrowRight,
  Clock,
  Tag,
  ArrowUpRight,
  Warning,
  CloudRain,
  FileText,
} from "@phosphor-icons/react/dist/ssr";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/ui/Section";

const NEWS = [
  {
    category: "Mercado",
    categoryColor: "bg-blue-50 text-blue-700 border-blue-200",
    title: "Arroba do boi gordo atinge maior valor do ano no mercado de Uberaba",
    summary:
      "Com demanda aquecida de frigoríficos e menor oferta de animais terminados, os preços subiram cerca de 4% na última semana.",
    time: "Há 2 horas",
    Icon: ArrowUpRight,
  },
  {
    category: "Saúde Animal",
    categoryColor: "bg-red-50 text-red-700 border-red-200",
    title: "Alerta: foco de febre aftosa registrado no Mato Grosso do Sul",
    summary:
      "MAPA emitiu alerta para produtores das regiões limítrofes reforçarem vacinação e monitoramento do rebanho imediatamente.",
    time: "Há 5 horas",
    Icon: Warning,
  },
  {
    category: "Clima",
    categoryColor: "bg-sky-50 text-sky-700 border-sky-200",
    title: "Previsão de chuvas acima da média para o Triângulo Mineiro em outubro",
    summary:
      "A Embrapa e o Inmet indicam condições favoráveis para pastagens e enchimento de reservatórios nas próximas semanas.",
    time: "Há 8 horas",
    Icon: CloudRain,
  },
  {
    category: "Legislação",
    categoryColor: "bg-purple-50 text-purple-700 border-purple-200",
    title: "Nova regulamentação do SISBOV entra em vigor em novembro",
    summary:
      "Produtores têm até 30 de outubro para adequar os cadastros dos animais ao novo sistema de rastreabilidade bovina.",
    time: "Há 1 dia",
    Icon: FileText,
  },
];

export function NewsSection() {
  return (
    <Section id="noticias" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: Description */}
        <div className="lg:sticky lg:top-28">
          <SectionLabel>Notícias</SectionLabel>
          <SectionTitle>
            Fique por dentro do{" "}
            <span className="text-gradient italic">agronegócio</span>
          </SectionTitle>
          <SectionDescription className="mb-8">
            Curadoria diária de notícias sobre mercado, saúde animal, clima,
            legislação e inovações do campo — disponível para todos os usuários
            do COWNTER.
          </SectionDescription>

          <div className="bg-brand-50 border border-brand-200 rounded-2xl p-5 mb-6">
            <p className="font-body font-semibold text-brand-800 text-sm mb-2 flex items-center gap-2">
              <Newspaper size={16} className="text-brand-600" />
              Filtros inteligentes
            </p>
            <p className="font-body text-sm text-brand-700/70 leading-relaxed">
              Receba apenas notícias relevantes para sua região, tipo de animal
              e perfil de produção. O COWNTER aprende com seu uso.
            </p>
          </div>

          <Button variant="primary" size="md">
            Ver todas as notícias
            <ArrowRight size={16} weight="bold" />
          </Button>
        </div>

        {/* Right: News cards */}
        <div className="flex flex-col gap-4">
          {NEWS.map((item) => (
            <NewsCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function NewsCard({
  category,
  categoryColor,
  title,
  summary,
  time,
  Icon,
}: (typeof NEWS)[number]) {
  return (
    <Card hover className="group">
      <CardContent className="pt-5">
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Icon size={16} weight="bold" className="text-brand-600" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`font-body text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${categoryColor}`}
              >
                {category}
              </span>
              <span className="flex items-center gap-1 font-body text-xs text-dark/35">
                <Clock size={11} />
                {time}
              </span>
            </div>

            <h4 className="font-display font-semibold text-base text-dark leading-snug mb-2 group-hover:text-brand-700 transition-colors">
              {title}
            </h4>
            <p className="font-body text-sm text-dark/55 leading-relaxed line-clamp-2">
              {summary}
            </p>
          </div>
          <ArrowRight
            size={16}
            className="text-dark/20 group-hover:text-brand-600 flex-shrink-0 mt-1 transition-all group-hover:translate-x-1"
          />
        </div>
      </CardContent>
    </Card>
  );
}
