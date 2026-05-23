import { Card, CardContent } from "@/components/ui/Card";
import { Section, SectionLabel, SectionTitle } from "@/components/ui/Section";
import { TESTIMONIALS, TESTIMONIALS_SECTION_CONTENT } from "@/lib/mockData";
import { TestimonialCard } from "../../lib";

export function TestimonialsSection() {
    return (
        <Section className="bg-brand-50/60">
            <div className="text-center mb-12">
                <SectionLabel>{TESTIMONIALS_SECTION_CONTENT.label}</SectionLabel>
                <SectionTitle className="mx-auto">
                    {TESTIMONIALS_SECTION_CONTENT.title}{" "}
                    <span className="text-gradient italic">{TESTIMONIALS_SECTION_CONTENT.titleHighlight}</span>
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
