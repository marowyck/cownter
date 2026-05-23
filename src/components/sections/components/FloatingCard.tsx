export function FloatingCard({
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
