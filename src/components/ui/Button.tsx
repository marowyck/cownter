import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "secondary";
    size?: "default" | "lg" | "sm";
}

export function Button({
    children,
    variant = "default",
    size = "default",
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

    const variants = {
        default: "bg-primary text-primary-foreground hover:bg-cownter-700",
        outline: "border border-primary text-primary hover:bg-cownter-50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-cownter-100",
    };

    const sizes = {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8 text-lg",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}