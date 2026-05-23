import { Cow } from "@phosphor-icons/react/dist/ssr";

export function GeofenceMapMockup() {
    return (
        <div className="relative bg-white rounded-3xl border border-brand-100 shadow-xl shadow-brand-100/50 overflow-hidden aspect-[4/3]">
            {/* Map background */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-green-50 to-emerald-50">
                {/* Grid lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2da32d" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* Geocerca 1 - Main pasture */}
            <div className="absolute top-[20%] left-[15%] w-[45%] h-[50%] border-2 border-brand-500 bg-brand-400/15 rounded-lg">
                <div className="absolute -top-3 left-3 bg-brand-600 text-white text-[10px] font-body font-bold px-2 py-0.5 rounded-full">
                    Pasto Principal
                </div>
                {/* Cow markers */}
                <div className="absolute top-1/3 left-1/3 w-5 h-5 rounded-full bg-white border-2 border-brand-500 flex items-center justify-center"><Cow size={12} weight="fill" className="text-brand-600" /></div>
                <div className="absolute top-1/2 left-1/2 w-5 h-5 rounded-full bg-white border-2 border-brand-500 flex items-center justify-center"><Cow size={12} weight="fill" className="text-brand-600" /></div>
                <div className="absolute top-2/3 left-1/4 w-5 h-5 rounded-full bg-white border-2 border-brand-500 flex items-center justify-center"><Cow size={12} weight="fill" className="text-brand-600" /></div>
            </div>

            {/* Geocerca 2 - Curral */}
            <div className="absolute top-[25%] right-[10%] w-[20%] h-[25%] border-2 border-earth-500 bg-earth-400/15 rounded-lg">
                <div className="absolute -top-3 left-2 bg-earth-600 text-white text-[10px] font-body font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                    Curral
                </div>
            </div>

            {/* Alert indicator */}
            <div className="absolute bottom-4 right-4 bg-white border border-brand-200 rounded-xl px-3 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                    <span className="font-body text-xs font-semibold text-dark">342 animais monitorados</span>
                </div>
            </div>

            {/* Zoom controls */}
            <div className="absolute top-4 right-4 flex flex-col bg-white border border-brand-100 rounded-xl overflow-hidden shadow-sm">
                <button className="px-3 py-2 text-brand-700 font-bold text-sm hover:bg-brand-50 border-b border-brand-100">+</button>
                <button className="px-3 py-2 text-brand-700 font-bold text-sm hover:bg-brand-50">−</button>
            </div>
        </div>
    );
}
