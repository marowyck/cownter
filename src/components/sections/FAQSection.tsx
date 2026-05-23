"use client";

import { useState } from "react";
import { Plus, Minus } from "@phosphor-icons/react";
import { Section, SectionLabel, SectionTitle } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import { FAQS, FAQ_SECTION_CONTENT } from "@/lib/mockData";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <SectionLabel>{FAQ_SECTION_CONTENT.label}</SectionLabel>
          <SectionTitle>
            {FAQ_SECTION_CONTENT.title}{" "}
            <span className="text-gradient italic">{FAQ_SECTION_CONTENT.titleHighlight}</span>
          </SectionTitle>
          <p className="font-body text-dark/55 text-base leading-relaxed">
            {FAQ_SECTION_CONTENT.description}
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
