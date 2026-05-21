import { ArrowRight, WhatsappLogo, Leaf, Lock, Phone, ChatCircle } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function CTASection() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-brand-950">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-brand-700/20 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-brand-600/15 blur-3xl" />

                {/* Subtle grid */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
                    <defs>
                        <pattern id="ctaGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#ffffff" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#ctaGrid)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-6 max-w-5xl relative text-center">
                <Badge variant="white" className="mb-6 inline-flex">
                    <Leaf size={16} weight="bold" className="text-brand-600" />
                    14 dias grátis, sem cartão
                </Badge>

                <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.05] mb-6">
                    Sua fazenda merece{" "}
                    <span className="italic text-brand-400">tecnologia</span> de verdade.
                </h2>

                <p className="font-body text-cream/50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                    Junte-se a mais de 2.400 fazendas que já usam o COWNTER para organizar,
                    controlar e crescer com segurança.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <Button variant="primary" size="xl">
                        Criar conta gratuita
                        <ArrowRight size={20} weight="bold" />
                    </Button>
                    <Button
                        variant="outline"
                        size="xl"
                        className="border-white/20 text-cream/70 hover:border-white/40 hover:text-cream"
                    >
                        <WhatsappLogo size={20} className="text-green-400" />
                        Falar no WhatsApp
                    </Button>
                </div>

                {/* Trust indicators */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                    {[
                        { Icon: Lock, label: "Dados criptografados" },
                        { Icon: Leaf, label: "Servidores no Brasil" },
                        { Icon: Phone, label: "App iOS e Android" },
                        { Icon: ChatCircle, label: "Suporte em português" },
                    ].map(({ Icon, label }) => (
                        <div key={label} className="flex items-center gap-2 text-cream/40">
                            <Icon size={18} weight="bold" className="text-cream/60" />
                            <span className="font-body text-sm">{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
