import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    contained?: boolean;
}

export function Section({ className, contained = true, children, ...props }: SectionProps) {
    return (
        <section className={cn("py-20 md:py-28", className)} {...props}>
            {contained ? (
                <div className="container mx-auto px-4 md:px-6 max-w-7xl">{children}</div>
            ) : (
                children
            )}
        </section>
    );
}

export function SectionLabel({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={cn(
                "font-body font-semibold text-sm tracking-widest uppercase text-brand-600 mb-3",
                className
            )}
            {...props}
        />
    );
}

export function SectionTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h2
            className={cn(
                "font-display font-bold text-3xl md:text-5xl text-dark leading-tight mb-5",
                className
            )}
            {...props}
        />
    );
}

export function SectionDescription({
    className,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={cn(
                "font-body text-dark/60 text-lg leading-relaxed max-w-2xl",
                className
            )}
            {...props}
        />
    );
}
