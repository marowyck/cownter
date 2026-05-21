import {
    MapPin,
    ArrowsLeftRight,
    Bell,
    ShieldCheck,
    GitBranch,
    Globe,
    Cow,
    Leaf,
    Handshake,
    Factory,
} from "@phosphor-icons/react/dist/ssr";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";

const GEO_FEATURES = [
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

const INTEGRATION_FEATURES = [
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

export function IntegrationsSection() {
    return (
        <Section id="integracoes" className="bg-cream">
            {/* Geofencing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                {/* Map visualization */}
                <div className="order-2 lg:order-1">
                    <GeofenceMapMockup />
                </div>

                <div className="order-1 lg:order-2">
                    <SectionLabel>Geocercas</SectionLabel>
                    <SectionTitle>
                        Monitore cada{" "}
                        <span className="text-gradient italic">palmo</span> da sua terra
                    </SectionTitle>
                    <SectionDescription className="mb-8">
                        Demarcação de áreas com precisão geográfica. Saiba exatamente onde
                        seus animais estão a qualquer momento.
                    </SectionDescription>

                    <ul className="flex flex-col gap-5">
                        {GEO_FEATURES.map(({ icon: Icon, title, desc }) => (
                            <li key={title} className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Icon size={18} weight="duotone" className="text-brand-600" />
                                </div>
                                <div>
                                    <p className="font-body font-semibold text-dark text-sm mb-1">{title}</p>
                                    <p className="font-body text-sm text-dark/55 leading-relaxed">{desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Divider */}
            <div className="section-divider mb-24" />

            {/* Farm network */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <SectionLabel>Integração</SectionLabel>
                    <SectionTitle>
                        Sua fazenda conectada com{" "}
                        <span className="text-gradient italic">o ecossistema</span>
                    </SectionTitle>
                    <SectionDescription className="mb-8">
                        Compartilhe dados com fazendas parceiras, cooperativas e toda a
                        cadeia produtiva. Rastreabilidade de ponta a ponta.
                    </SectionDescription>

                    <ul className="flex flex-col gap-5">
                        {INTEGRATION_FEATURES.map(({ icon: Icon, title, desc }) => (
                            <li key={title} className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-earth-50 border border-earth-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Icon size={18} weight="duotone" className="text-earth-600" />
                                </div>
                                <div>
                                    <p className="font-body font-semibold text-dark text-sm mb-1">{title}</p>
                                    <p className="font-body text-sm text-dark/55 leading-relaxed">{desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Network visualization */}
                <div>
                    <FarmNetworkMockup />
                </div>
            </div>
        </Section>
    );
}

function GeofenceMapMockup() {
    return (
        <div className="relative bg-white rounded-3xl border border-brand-100 shadow-xl shadow-brand-100/50 overflow-hidden aspect-[4/3]">
            {/* Map background */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-green-50 to-emerald-50">
                {/* Grid lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2da32d" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* Geocerca 1 - Main pasture */}
            <div className="absolute top-[20%] left-[15%] w-[45%] h-[50%] border-2 border-brand-500 bg-brand-400/15 rounded-lg">
                <div className="absolute -top-3 left-3 bg-brand-600 text-white text-[10px] font-body font-bold px-2 py-0.5 rounded-full">
                    Pasto Principal
                </div>
                {/* Cow markers */}
                <div className="absolute top-1/3 left-1/3 w-5 h-5 rounded-full bg-white border-2 border-brand-500 flex items-center justify-center"><Cow size={12} weight="fill" className="text-brand-600" /></div>
                <div className="absolute top-1/2 left-1/2 w-5 h-5 rounded-full bg-white border-2 border-brand-500 flex items-center justify-center"><Cow size={12} weight="fill" className="text-brand-600" /></div>
                <div className="absolute top-2/3 left-1/4 w-5 h-5 rounded-full bg-white border-2 border-brand-500 flex items-center justify-center"><Cow size={12} weight="fill" className="text-brand-600" /></div>
            </div>

            {/* Geocerca 2 - Curral */}
            <div className="absolute top-[25%] right-[10%] w-[20%] h-[25%] border-2 border-earth-500 bg-earth-400/15 rounded-lg">
                <div className="absolute -top-3 left-2 bg-earth-600 text-white text-[10px] font-body font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                    Curral
                </div>
            </div>

            {/* Alert indicator */}
            <div className="absolute bottom-4 right-4 bg-white border border-brand-200 rounded-xl px-3 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                    <span className="font-body text-xs font-semibold text-dark">342 animais monitorados</span>
                </div>
            </div>

            {/* Zoom controls */}
            <div className="absolute top-4 right-4 flex flex-col bg-white border border-brand-100 rounded-xl overflow-hidden shadow-sm">
                <button className="px-3 py-2 text-brand-700 font-bold text-sm hover:bg-brand-50 border-b border-brand-100">+</button>
                <button className="px-3 py-2 text-brand-700 font-bold text-sm hover:bg-brand-50">−</button>
            </div>
        </div>
    );
}

function FarmNetworkMockup() {
    const nodes = [
        { x: "50%", y: "50%", label: "Sua Fazenda", main: true, icon: Cow },
        { x: "20%", y: "20%", label: "Faz. Boa Vista", main: false, icon: Leaf },
        { x: "80%", y: "25%", label: "Faz. do Rio", main: false, icon: Leaf },
        { x: "15%", y: "70%", label: "Cooperativa", main: false, icon: Handshake },
        { x: "80%", y: "72%", label: "Frigorífico", main: false, icon: Factory },
    ];

    return (
        <div className="relative bg-white rounded-3xl border border-brand-100 shadow-xl overflow-hidden aspect-[4/3]">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-950 to-brand-900">
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full">
                    {nodes.slice(1).map((node, i) => (
                        <line
                            key={i}
                            x1="50%" y1="50%"
                            x2={node.x} y2={node.y}
                            stroke="#2da32d"
                            strokeWidth="1"
                            strokeDasharray="4 3"
                            opacity="0.4"
                        />
                    ))}
                </svg>

                {/* Nodes */}
                {nodes.map((node) => (
                    <div
                        key={node.label}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2"
                        style={{ left: node.x, top: node.y }}
                    >
                        <div className={`flex flex-col items-center gap-1`}>
                            <div className={`${node.main ? "w-14 h-14 bg-brand-600 shadow-lg shadow-brand-500/50" : "w-10 h-10 bg-brand-800 border border-brand-700"} rounded-2xl flex items-center justify-center`}>
                                <node.icon size={node.main ? 28 : 20} weight="bold" className="text-white" />
                            </div>
                            <span className="font-body text-[10px] text-cream/60 text-center whitespace-nowrap font-semibold">
                                {node.label}
                            </span>
                        </div>
                    </div>
                ))}

                {/* Live indicator */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 rounded-xl px-3 py-2">
                    <div className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
                    <span className="font-body text-xs text-brand-300 font-semibold">5 fazendas conectadas</span>
                </div>
            </div>
        </div>
    );
}
