'use client';

import Image from 'next/image';
import { PARTNERS } from '@/lib/mockData';

export function PartnersMarquee() {
  const duplicatedPartners = Array(6).fill(null).flatMap(() => PARTNERS);

  return (
    <div className="w-full border-y border-brand-100 bg-brand-50/40 overflow-hidden">
      <p className="text-center font-body text-xs font-semibold uppercase tracking-widest text-dark/30 py-6">
        Confiado por fazendeiros e reconhecido por entidades do agronegócio
      </p>

      <div className="relative w-full overflow-hidden">
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-50% - 1rem));
            }
          }
          .marquee-content {
            display: flex;
            gap: 2rem;
            animation: scroll 20s linear infinite;
            will-change: transform;
          }
        `}</style>
        
        <div className="marquee-content py-6">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center flex-shrink-0 w-48 h-20 bg-white rounded-lg border border-brand-100/50 hover:border-brand-200 transition-all duration-300 p-4"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={180}
                  height={80}
                  className="max-w-full max-h-full object-contain"
                  priority={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

