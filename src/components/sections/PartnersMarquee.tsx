const PARTNERS = [
  "Embrapa",
  "CNA — Confederação da Agricultura",
  "MAPA",
  "Senar",
  "Faemg",
  "Abiec",
  "CFV — Conselho Federal de Medicina Veterinária",
  "AgroBrasília",
];

export function PartnersMarquee() {
  const doubled = [...PARTNERS, ...PARTNERS];

  return (
    <div className="py-10 border-y border-brand-100 bg-brand-50/40 overflow-hidden">
      <p className="text-center font-body text-xs font-semibold uppercase tracking-widest text-dark/30 mb-6">
        Confiado por fazendeiros e reconhecido por entidades do agronegócio
      </p>
      <div className="relative">
        <div className="flex gap-14 animate-marquee whitespace-nowrap">
          {doubled.map((partner, i) => (
            <div key={i} className="flex items-center gap-3 flex-shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-400" />
              <span className="font-body font-semibold text-sm text-dark/40">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
