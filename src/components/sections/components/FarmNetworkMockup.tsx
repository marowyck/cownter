import { Cow, Leaf, Handshake, Factory } from "@phosphor-icons/react/dist/ssr";

export function FarmNetworkMockup() {
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
