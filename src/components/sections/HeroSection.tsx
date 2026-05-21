import {
    ArrowRight,
    Play,
    Star,
    Users,
    Cow,
    MapPinLine,
} from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const TRUST_STATS = [
    { value: "2.400+", label: "Fazendas ativas" },
    { value: "180k+", label: "Animais gerenciados" },
    { value: "99.9%", label: "Uptime garantido" },
];

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 hero-glow pointer-events-none" />

            {/* Decorative circles */}
            <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-brand-200/30 blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 -left-32 w-72 h-72 rounded-full bg-brand-300/20 blur-3xl pointer-events-none" />

            {/* Floating dots */}
            <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-brand-400 animate-float opacity-60" />
            <div className="absolute top-2/3 left-1/3 w-3 h-3 rounded-full bg-earth-400 animate-float-slow opacity-40" />
            <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 rounded-full bg-brand-500 animate-float opacity-50" style={{ animationDelay: "2s" }} />

            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left column */}
                    <div>
                        <Badge variant="brand" className="mb-6 animate-fade-up">
                            <Star size={12} weight="fill" />
                            Novo: Integração com fazendas parceiras
                        </Badge>

                        <h1
                            className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-dark leading-[1.05] mb-6 animate-fade-up"
                            style={{ animationDelay: "0.1s" }}
                        >
                            Sua fazenda,{" "}
                            <span className="text-gradient italic">organizada</span>{" "}
                            como nunca.
                        </h1>

                        <p
                            className="font-body text-dark/60 text-lg md:text-xl leading-relaxed mb-8 max-w-lg animate-fade-up"
                            style={{ animationDelay: "0.2s" }}
                        >
                            COWNTER é a plataforma completa para gestão de propriedades rurais.
                            Controle de animais, saúde, estoque, geocercas e muito mais — tudo
                            em um só lugar.
                        </p>

                        <div
                            className="flex flex-col sm:flex-row gap-3 mb-12 animate-fade-up"
                            style={{ animationDelay: "0.3s" }}
                        >
                            <Button variant="primary" size="lg">
                                Começar gratuitamente
                                <ArrowRight size={18} weight="bold" />
                            </Button>
                            <Button variant="outline" size="lg">
                                <Play size={16} weight="fill" className="text-brand-600" />
                                Ver demonstração
                            </Button>
                        </div>

                        {/* Trust stats */}
                        <div
                            className="flex flex-col sm:flex-row gap-6 sm:gap-10 animate-fade-up"
                            style={{ animationDelay: "0.4s" }}
                        >
                            {TRUST_STATS.map((stat) => (
                                <div key={stat.label}>
                                    <p className="font-display font-bold text-2xl text-dark">{stat.value}</p>
                                    <p className="font-body text-sm text-dark/50">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right column — Dashboard mockup */}
                    <div className="relative lg:block animate-fade-up" style={{ animationDelay: "0.2s" }}>
                        <div className="relative animate-float">
                            <DashboardMockup />
                        </div>

                        {/* Floating cards */}
                        <div className="absolute -left-4 md:-left-10 top-1/4 animate-float-slow" style={{ animationDelay: "1s" }}>
                            <FloatingCard
                                Icon={Cow}
                                title="Rebanho saudável"
                                subtitle="98% dos animais vacinados"
                                accent="green"
                            />
                        </div>
                        <div className="absolute -right-2 md:-right-6 bottom-1/4 animate-float" style={{ animationDelay: "3s" }}>
                            <FloatingCard
                                Icon={MapPinLine}
                                title="Geocerca ativa"
                                subtitle="3 áreas demarcadas"
                                accent="earth"
                            />
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="flex justify-center mt-16">
                    <div className="flex flex-col items-center gap-2 text-dark/30 animate-bounce">
                        <p className="font-body text-xs tracking-widest uppercase">Role para baixo</p>
                        <div className="w-px h-8 bg-gradient-to-b from-dark/30 to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function DashboardMockup() {
    return (
        <div className="bg-white rounded-3xl shadow-2xl shadow-brand-900/10 border border-brand-100 overflow-hidden w-full max-w-xl ml-auto">
            {/* Window bar */}
            <div className="bg-brand-950 px-5 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="font-mono text-xs text-cream/40 ml-3">cownter.app/dashboard</span>
            </div>

            {/* Dashboard content */}
            <div className="p-5">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                    <div>
                        <p className="font-body text-xs text-dark/40 mb-0.5">Bom dia, João 👋</p>
                        <p className="font-display font-semibold text-dark text-lg">Fazenda São Bento</p>
                    </div>
                    <div className="flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-xl px-3 py-2">
                        <Cow size={16} className="text-brand-600" weight="fill" />
                        <span className="font-body font-semibold text-sm text-brand-700">342 cabeças</span>
                    </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                    {[
                        { label: "Vacinações", value: "12", status: "hoje", color: "bg-brand-50 border-brand-200 text-brand-700" },
                        { label: "Alertas", value: "3", status: "pendentes", color: "bg-earth-50 border-earth-200 text-earth-700" },
                        { label: "Nascimentos", value: "5", status: "este mês", color: "bg-blue-50 border-blue-200 text-blue-700" },
                    ].map((item) => (
                        <div key={item.label} className={`${item.color} border rounded-xl p-3`}>
                            <p className="font-display font-bold text-xl">{item.value}</p>
                            <p className="font-body text-[10px] font-medium">{item.label}</p>
                            <p className="font-body text-[9px] opacity-60">{item.status}</p>
                        </div>
                    ))}
                </div>

                {/* Animal list */}
                <div className="bg-brand-50/50 rounded-xl p-3 mb-3">
                    <p className="font-body text-xs font-semibold text-dark/50 mb-2 uppercase tracking-wide">Últimos registros</p>
                    <div className="flex flex-col gap-2">
                        {[
                            { tag: "#BR-0042", name: "Nelore Fêmea", status: "Vacinada", statusColor: "text-brand-600" },
                            { tag: "#BR-0187", name: "Gir Macho", status: "Em observação", statusColor: "text-earth-600" },
                            { tag: "#BR-0093", name: "Angus Fêmea", status: "Prenha", statusColor: "text-blue-600" },
                        ].map((animal) => (
                            <div key={animal.tag} className="flex items-center justify-between bg-white rounded-lg px-3 py-2">
                                <div className="flex items-center gap-2">
                                    <span className="font-mono text-xs text-dark/40">{animal.tag}</span>
                                    <span className="font-body text-xs font-medium text-dark">{animal.name}</span>
                                </div>
                                <span className={`font-body text-xs font-semibold ${animal.statusColor}`}>
                                    {animal.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                        <Users size={13} className="text-brand-600" />
                        <span className="font-body text-xs text-dark/50">2 veterinários parceiros ativos</span>
                    </div>
                    <span className="font-mono text-[10px] text-dark/30">sync: agora</span>
                </div>
            </div>
        </div>
    );
}

function FloatingCard({
    Icon,
    title,
    subtitle,
    accent,
}: {
    Icon: any;
    title: string;
    subtitle: string;
    accent: "green" | "earth";
}) {
    const colors = {
        green: "bg-white border-brand-200 shadow-brand-100",
        earth: "bg-white border-earth-200 shadow-earth-100",
    };

    const iconColors = {
        green: "text-brand-600",
        earth: "text-earth-600",
    };

    return (
        <div
            className={`flex items-center gap-3 px-4 py-3 rounded-2xl border shadow-xl ${colors[accent]}`}
        >
            <Icon size={24} weight="bold" className={iconColors[accent]} />
            <div>
                <p className="font-body font-semibold text-sm text-dark">{title}</p>
                <p className="font-body text-xs text-dark/50">{subtitle}</p>
            </div>
        </div>
    );
}
