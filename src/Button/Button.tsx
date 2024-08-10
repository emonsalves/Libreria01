import { ButtonHTMLAttributes, FC } from "react";
import { cn } from "../utils/utils";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-slate-500 text-white font-bold hover:bg-slate-500/90",
        primary: "bg-blue-500 text-white font-bold hover:bg-blue-500/90",
        success: "bg-green-500 text-white hover:bg-green-500/80",
        warning: "bg-orange-400 text-white hover:bg-orange-400/80",
        danger: "bg-red-600 text-white hover:bg-red-600/80",
        ghost: "hover:bg-slate-400 hover:text-white",
      },
      outline: {
        true: "border border-input bg-transparent text-slate-600 hover:bg-slate-400 hover:text-white",
      },
      rounded: {
        basic: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-2xl",
        full: "rounded-full",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-8 text-lg",
        lg: "h-14 px-12 text-lg",
        full: "h-16 px-14 w-full text-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "md",
    },
  },
);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {}

export const Button: FC<ButtonProps> = ({ children, className, variant, outline, rounded, size, ...props }) => {
  return (
    <button className={cn(button({ variant, outline, rounded, size, className }))} {...props}>
      {children}
    </button>
  );
};
