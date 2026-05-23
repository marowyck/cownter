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
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FEATURES, FEATURES_SECTION_CONTENT } from "@/lib/mockData";
import { FeatureCard } from "../../lib";

export function FeaturesSection() {
    return (
        <Section id="funcionalidades" className="bg-white">
            <div className="text-center mb-14">
                <SectionLabel>{FEATURES_SECTION_CONTENT.label}</SectionLabel>
                <SectionTitle className="mx-auto">
                    {FEATURES_SECTION_CONTENT.title}{" "}
                    <span className="text-gradient italic">{FEATURES_SECTION_CONTENT.titleHighlight}</span>
                </SectionTitle>
                <SectionDescription className="mx-auto text-center">
                    {FEATURES_SECTION_CONTENT.description}
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
