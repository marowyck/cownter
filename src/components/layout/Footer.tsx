import {
    InstagramLogo,
    LinkedinLogo,
    TwitterLogo,
    Envelope,
    MapPin,
    Phone,
    Cow
} from "@phosphor-icons/react/dist/ssr";

const FOOTER_LINKS = {
    Produto: [
        { label: "Funcionalidades", href: "#funcionalidades" },
        { label: "Planos", href: "#planos" },
        { label: "Integrações", href: "#integracoes" },
        { label: "Atualizações", href: "#" },
    ],
    Empresa: [
        { label: "Sobre nós", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Carreiras", href: "#" },
        { label: "Parceiros", href: "#" },
    ],
    Suporte: [
        { label: "Central de ajuda", href: "#" },
        { label: "Contato", href: "#" },
        { label: "Termos de uso", href: "#" },
        { label: "Privacidade", href: "#" },
    ],
};

const SOCIAL_LINKS = [
    { icon: InstagramLogo, href: "#", label: "Instagram" },
    { icon: LinkedinLogo, href: "#", label: "LinkedIn" },
    { icon: TwitterLogo, href: "#", label: "Twitter" },
];

export function Footer() {
    return (
        <footer className="bg-dark text-cream/70">
            {/* Main footer */}
            <div className="container mx-auto px-4 md:px-6 max-w-7xl py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand column */}
                    <div className="lg:col-span-2">
                        <a href="#" className="flex items-center gap-2 mb-5">
                            <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center shadow-md shadow-brand-600/30">
                                <span className="text-white font-display font-bold text-lg leading-none"><Cow size={24}/></span>
                            </div>
                            <span className="font-display font-bold text-xl text-cream tracking-tight">
                                COW<span className="text-brand-400">NTER</span>
                            </span>
                        </a>
                        <p className="font-body text-sm leading-relaxed text-cream/50 mb-6 max-w-xs">
                            O organizador inteligente para fazendas de todos os portes. Gestão completa
                            de animais, estoque, saúde e muito mais.
                        </p>

                        <div className="flex flex-col gap-2.5 mb-6">
                            <a
                                href="mailto:contato@cownter.com.br"
                                className="flex items-center gap-2 text-sm text-cream/50 hover:text-brand-400 transition-colors"
                            >
                                <Envelope size={15} />
                                contato@cownter.com.br
                            </a>
                            <a
                                href="tel:+5535999999999"
                                className="flex items-center gap-2 text-sm text-cream/50 hover:text-brand-400 transition-colors"
                            >
                                <Phone size={15} />
                                (35) 9 9999-9999
                            </a>
                            <span className="flex items-center gap-2 text-sm text-cream/50">
                                <MapPin size={15} />
                                Passos, MG
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-600 flex items-center justify-center text-cream/50 hover:text-white transition-all duration-200"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(FOOTER_LINKS).map(([category, links]) => (
                        <div key={category}>
                            <p className="font-body font-semibold text-cream text-sm mb-4 tracking-wide">
                                {category}
                            </p>
                            <ul className="flex flex-col gap-2.5">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="font-body text-sm text-cream/40 hover:text-brand-400 transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/5">
                <div className="container mx-auto px-4 md:px-6 max-w-7xl py-5 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="font-body text-xs text-cream/30">
                        © {new Date().getFullYear()} COWNTER. Todos os direitos reservados.
                    </p>
                    <p className="font-body text-xs text-cream/20">
                        Feito com 🌿 para o agronegócio brasileiro
                    </p>
                </div>
            </div>
        </footer>
    );
}
