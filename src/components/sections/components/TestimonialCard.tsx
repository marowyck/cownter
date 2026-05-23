import { Star, Quotes } from "@phosphor-icons/react/dist/ssr";
import { Card, CardContent } from "@/components/ui/Card";
import { TESTIMONIALS } from "@/lib/mockData";

export function TestimonialCard({
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
