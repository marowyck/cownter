import {
    MapPin,
    ArrowsLeftRight,
    Bell,
    ShieldCheck,
    GitBranch,
    Globe,
} from "@phosphor-icons/react/dist/ssr";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { GEO_FEATURES, INTEGRATION_FEATURES, INTEGRATIONS_SECTION_CONTENT } from "@/lib/mockData";
import { GeofenceMapMockup, FarmNetworkMockup } from "../../lib";

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
                    <SectionLabel>{INTEGRATIONS_SECTION_CONTENT.geoLabel}</SectionLabel>
                    <SectionTitle>
                        {INTEGRATIONS_SECTION_CONTENT.geoTitle}{" "}
                        <span className="text-gradient italic">{INTEGRATIONS_SECTION_CONTENT.geoTitleHighlight}</span> {INTEGRATIONS_SECTION_CONTENT.geoTitleEnd}
                    </SectionTitle>
                    <SectionDescription className="mb-8">
                        {INTEGRATIONS_SECTION_CONTENT.geoDescription}
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
                    <SectionLabel>{INTEGRATIONS_SECTION_CONTENT.integrationLabel}</SectionLabel>
                    <SectionTitle>
                        {INTEGRATIONS_SECTION_CONTENT.integrationTitle}{" "}
                        <span className="text-gradient italic">{INTEGRATIONS_SECTION_CONTENT.integrationTitleHighlight}</span>
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
