import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hover?: boolean;
    glass?: boolean;
}

export function Card({ className, hover = false, glass = false, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-2xl border",
                glass
                    ? "bg-white/60 backdrop-blur-sm border-white/80"
                    : "bg-white border-brand-100",
                hover && "card-hover cursor-pointer",
                className
            )}
            {...props}
        />
    );
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn("p-6 pb-4", className)} {...props} />;
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn("px-6 pb-6", className)} {...props} />;
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("px-6 py-4 border-t border-brand-50 rounded-b-2xl", className)}
            {...props}
        />
    );
}
