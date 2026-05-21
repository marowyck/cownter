import { Button } from "../ui/Button";

export function Hero() {
    return (
        <section className="flex flex-col items-center justify-center text-center px-4 py-24 bg-cownter-50">
            <div className="max-w-3xl space-y-6">
                <h1 className="text-5xl font-bold tracking-tight text-cownter-900">
                    O controle total da sua fazenda em um só lugar.
                </h1>
                <p className="text-xl text-muted-foreground">
                    Conheça o <strong className="text-primary">COWNTER</strong>.
                    Gerencie seu rebanho, monitore a saúde animal e integre-se com fazendas parceiras de forma inteligente e geolocalizada.
                </p>
                <div className="flex gap-4 justify-center pt-4">
                    <Button size="lg">Começar Agora</Button>
                    <Button size="lg" variant="outline">Ver Demonstração</Button>
                </div>
            </div>
        </section>
    );
}