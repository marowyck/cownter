"use client";

import { useState } from "react";
import { Plus, Minus } from "@phosphor-icons/react";
import { Section, SectionLabel, SectionTitle } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "Quais tipos de animais o COWNTER suporta?",
    a: "O COWNTER suporta bovinos, equinos, suínos, ovinos, caprinos e outros tipos de animais. O suporte varia conforme o plano: o Broto cobre bovinos e equinos, enquanto o Pastagem e Latifúndio incluem todos os tipos.",
  },
  {
    q: "Posso usar o COWNTER no celular?",
    a: "Sim! O COWNTER tem aplicativo nativo para iOS e Android, com modo offline para uso em áreas sem sinal — muito comum no interior. Quando a conexão voltar, os dados sincronizam automaticamente.",
  },
  {
    q: "Como funciona a integração com fazendas próximas?",
    a: "A integração permite que fazendas parceiras compartilhem dados de rastreabilidade de animais. Para conectar, ambas as fazendas precisam estar no plano Pastagem ou superior e aceitar mutuamente a conexão.",
  },
  {
    q: "Os veterinários parceiros são exclusivos de qual plano?",
    a: "O acesso aos veterinários parceiros é exclusivo do plano Latifúndio. Você pode agendar consultas remotas por vídeo ou visitas presenciais com veterinários certificados credenciados à plataforma.",
  },
  {
    q: "O que acontece se eu ultrapassar o limite de cabeças do meu plano?",
    a: "Você receberá um alerta quando estiver próximo do limite. Ultrapassar o limite bloqueia o cadastro de novos animais, mas seus dados ficam intactos. Você pode fazer upgrade para o próximo plano a qualquer momento.",
  },
  {
    q: "Meus dados estão seguros?",
    a: "Sim. Todos os dados são criptografados com AES-256 em trânsito e em repouso. Os servidores ficam no Brasil (em conformidade com a LGPD) e fazemos backups automáticos diários. Você pode exportar seus dados a qualquer momento.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <SectionLabel>FAQ</SectionLabel>
          <SectionTitle>
            Dúvidas{" "}
            <span className="text-gradient italic">frequentes</span>
          </SectionTitle>
          <p className="font-body text-dark/55 text-base leading-relaxed">
            Não encontrou sua resposta? Entre em contato com nosso suporte via
            WhatsApp ou e-mail.
          </p>
        </div>

        <div className="lg:col-span-2">
          <ul className="flex flex-col divide-y divide-brand-50">
            {FAQS.map((faq, i) => (
              <li key={i}>
                <button
                  className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-body font-semibold text-dark group-hover:text-brand-700 transition-colors">
                    {faq.q}
                  </span>
                  <div
                    className={cn(
                      "w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all",
                      open === i
                        ? "bg-brand-600 text-white"
                        : "bg-brand-50 text-brand-600 group-hover:bg-brand-100"
                    )}
                  >
                    {open === i ? (
                      <Minus size={14} weight="bold" />
                    ) : (
                      <Plus size={14} weight="bold" />
                    )}
                  </div>
                </button>

                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    open === i ? "max-h-48 pb-5" : "max-h-0"
                  )}
                >
                  <p className="font-body text-sm text-dark/60 leading-relaxed">{faq.a}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
