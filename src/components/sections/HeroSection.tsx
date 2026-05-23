import {
    ArrowRight,
    Play,
    Star,
    Cow,
    MapPinLine,
} from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { TRUST_STATS, HERO_CONTENT } from "@/lib/mockData";
import { DashboardMockup, FloatingCard } from "../../lib";
import Link from "next/link";

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
                            {HERO_CONTENT.badge}
                        </Badge>

                        <h1
                            className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-dark leading-[1.05] mb-6 animate-fade-up"
                            style={{ animationDelay: "0.1s" }}
                        >
                            {HERO_CONTENT.mainTitle}{" "}
                            <span className="text-gradient italic">{HERO_CONTENT.mainTitleHighlight}</span>{" "}
                            {HERO_CONTENT.mainTitleEnd}
                        </h1>

                        <p
                            className="font-body text-dark/60 text-lg md:text-xl leading-relaxed mb-8 max-w-lg animate-fade-up"
                            style={{ animationDelay: "0.2s" }}
                        >
                            {HERO_CONTENT.description}
                        </p>

                        <div
                            className="flex flex-col sm:flex-row gap-3 mb-12 animate-fade-up"
                            style={{ animationDelay: "0.3s" }}
                        >
                            <Link href="/login">
                                <Button variant="primary" size="lg">
                                    {HERO_CONTENT.cta1}
                                    <ArrowRight size={18} weight="bold" />
                                </Button>
                            </Link>
                            <Button variant="outline" size="lg">
                                <Play size={16} weight="fill" className="text-brand-600" />
                                {HERO_CONTENT.cta2}
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
                                title={HERO_CONTENT.floatingCard1.title}
                                subtitle={HERO_CONTENT.floatingCard1.subtitle}
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

            </div>
        </section>
    );
}
