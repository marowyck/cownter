import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 font-body font-semibold rounded-full text-xs tracking-wide uppercase",
  {
    variants: {
      variant: {
        brand: "bg-brand-100 text-brand-700 border border-brand-200",
        earth: "bg-earth-100 text-earth-700 border border-earth-200",
        dark: "bg-dark/10 text-dark border border-dark/20",
        white: "bg-white/20 text-white border border-white/30",
        outline: "border border-brand-600 text-brand-700",
      },
      size: {
        sm: "px-2.5 py-0.5 text-[10px]",
        md: "px-3 py-1 text-xs",
        lg: "px-4 py-1.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "brand",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size, className }))} {...props} />
  );
}
