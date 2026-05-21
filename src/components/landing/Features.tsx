"use client";
import { Cow, Syringe, MapTrifold, NewspaperClipping, Farm } from "@phosphor-icons/react";

const features = [
    {
        icon: <Cow size={32} weight="duotone" className="text-primary" />,
        title: "Gestão de Rebanho",
        description: "Controle detalhado de animais, estoque, fertilidade, compras, vendas e mortalidade com motivos catalogados."
    },
    {
        icon: <Syringe size={32} weight="duotone" className="text-primary" />,
        title: "Saúde e Vacinação",
        description: "Calendário de vacinas e registro de doenças para garantir o bem-estar e conformidade sanitária do seu gado."
    },
    {
        icon: <MapTrifold size={32} weight="duotone" className="text-primary" />,
        title: "Geocercas e Integração",
        description: "Demarcação de áreas via geocercas e conexão em tempo real com fazendas próximas."
    },
    {
        icon: <NewspaperClipping size={32} weight="duotone" className="text-primary" />,
        title: "Mural Agro",
        description: "Notícias do setor em tempo real e acesso direto a uma rede de veterinários parceiros."
    }
];

export function Features() {
    return (
        <section className="py-24 px-4 max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-cownter-900">Tudo que você precisa para crescer</h2>
                <p className="text-muted-foreground mt-4">Tecnologia pensada para o dia a dia no campo.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-border hover:border-primary transition-colors">
                        <div className="flex-shrink-0 bg-cownter-50 p-3 rounded-lg h-fit">
                            {feature.icon}
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-cownter-900 mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}