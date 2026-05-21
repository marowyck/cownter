"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-body font-semibold rounded-xl transition-all duration-200 cursor-pointer select-none active:scale-95",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-600/20 hover:shadow-brand-700/30 hover:-translate-y-0.5",
        secondary:
          "border border-brand-600 text-brand-700 hover:bg-brand-50",
        outline:
          "border border-dark/20 text-dark/70 hover:border-brand-600 hover:text-brand-700",
        ghost:
          "text-brand-700 hover:bg-brand-50",
        earth:
          "bg-earth-500 hover:bg-earth-600 text-white shadow-lg shadow-earth-500/20 hover:-translate-y-0.5",
        dark:
          "bg-dark text-cream hover:bg-brand-950 shadow-lg shadow-dark/20 hover:-translate-y-0.5",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
        xl: "px-10 py-5 text-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
