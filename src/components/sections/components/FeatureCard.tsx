import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { FEATURES } from "@/lib/mockData";

export function FeatureCard({
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
