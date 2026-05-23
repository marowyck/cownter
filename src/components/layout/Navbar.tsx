"use client";

import { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Cow } from "@phosphor-icons/react/dist/ssr";

const NAV_LINKS = [
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Planos", href: "#planos" },
    { label: "Integrações", href: "#integracoes" },
    { label: "Notícias", href: "#noticias" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-cream/95 backdrop-blur-md border-b border-brand-100 py-3 shadow-sm"
                    : "bg-transparent py-5"
            )}
        >
            <nav className="container mx-auto px-4 md:px-6 max-w-7xl flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center shadow-md shadow-brand-600/30 group-hover:bg-brand-700 transition-colors">
                        <span className="text-white font-display font-bold text-lg leading-none"><Cow size={24}/></span>
                    </div>
                    <span className="font-display font-bold text-xl text-dark tracking-tight">
                        COW<span className="text-brand-600">NTER</span>
                    </span>
                </a>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="font-body text-dark/60 hover:text-brand-700 text-sm font-medium transition-colors"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <Button variant="ghost" size="sm">
                        Entrar
                    </Button>
                    <Button variant="primary" size="sm">
                        Começar grátis
                    </Button>
                </div>

                {/* Mobile menu toggle */}
                <button
                    className="md:hidden p-2 rounded-xl text-dark/70 hover:text-brand-700 hover:bg-brand-50 transition-all"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
                </button>
            </nav>

            {/* Mobile menu */}
            <div
                className={cn(
                    "md:hidden overflow-hidden transition-all duration-300 bg-cream border-b border-brand-100",
                    menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <ul className="container mx-auto px-4 py-4 flex flex-col gap-1">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="block font-body text-dark/70 hover:text-brand-700 py-2.5 px-3 rounded-xl hover:bg-brand-50 transition-all font-medium"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li className="pt-3 flex flex-col gap-2">
                        <Button variant="secondary" size="md" className="w-full">
                            Entrar
                        </Button>
                        <Button variant="primary" size="md" className="w-full">
                            Começar grátis
                        </Button>
                    </li>
                </ul>
            </div>
        </header>
    );
}
