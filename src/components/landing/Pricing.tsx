import { Button } from "../ui/Button";

const plans = [
    {
        name: "Pequeno Porte",
        target: "Até 50 cabeças",
        price: "Grátis",
        features: ["Gestão básica de rebanho", "Controle de vacinas", "Notícias do setor"],
        highlight: false
    },
    {
        name: "Médio Porte",
        target: "51 a 500 cabeças",
        price: "R$ 89/mês",
        features: ["Tudo do plano Pequeno", "Demarcação de geocercas", "Relatórios de fertilidade e mortalidade"],
        highlight: true
    },
    {
        name: "Grande Porte",
        target: "Acima de 500 cabeças",
        price: "R$ 199/mês",
        features: ["Tudo do plano Médio", "Integração com fazendas próximas", "Rede de veterinários parceiros exclusiva"],
        highlight: false
    }
];

export function Pricing() {
    return (
        <section className="py-24 px-4 bg-cownter-900 text-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold">Planos sob medida para sua propriedade</h2>
                    <p className="text-cownter-100 mt-4">Pague apenas pelo tamanho do seu desafio.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-xl flex flex-col ${plan.highlight ? 'bg-white text-cownter-900 scale-105 shadow-xl' : 'bg-cownter-700/50 border border-cownter-600'}`}
                        >
                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <p className={`mb-6 text-sm ${plan.highlight ? 'text-muted-foreground' : 'text-cownter-100'}`}>
                                {plan.target}
                            </p>
                            <div className="text-4xl font-bold mb-8">{plan.price}</div>
                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-center gap-2 text-sm">
                                        <span className={plan.highlight ? "text-primary" : "text-cownter-100"}>✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Button
                                variant={plan.highlight ? "default" : "secondary"}
                                className="w-full"
                            >
                                Assinar {plan.name}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}