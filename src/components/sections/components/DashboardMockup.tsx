import { Users, Cow } from "@phosphor-icons/react/dist/ssr";

export function DashboardMockup() {
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
