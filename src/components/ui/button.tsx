import React, { type ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "mint" | "gradient" | "outline" | "ghost" | "dark" | "link-mint" | "secondary";
  size?: "sm" | "default" | "lg" | "icon";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "gradient",
      size = "default",
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 cursor-pointer disabled:pointer-events-none disabled:opacity-50 select-none focus-ring rounded-md";

    const variantStyles: Record<string, string> = {
      // Blue-to-cyan gradient for primary CTAs
      gradient:
        "bg-gradient-to-r from-[#0878F9] to-[#11C5E8] hover:from-[#0668dc] hover:to-[#0eb1d0] text-white font-semibold shadow-sm shadow-[#0878F9]/20 active:scale-[0.99]",
      mint:
        "bg-gradient-to-r from-[#0878F9] to-[#11C5E8] hover:from-[#0668dc] hover:to-[#0eb1d0] text-white font-semibold shadow-sm shadow-[#0878F9]/20 active:scale-[0.99]",
      outline:
        "border border-[#DCE7F5] bg-white text-[#0B132B] hover:border-[#0878F9] hover:text-[#0878F9] hover:bg-[#F5F9FF] shadow-xs active:scale-[0.99]",
      ghost:
        "text-[#0B132B] hover:bg-[#F5F9FF] hover:text-[#0878F9]",
      dark:
        "bg-[#0B132B] text-white hover:bg-[#16254a] shadow-sm",
      "link-mint":
        "p-0 h-auto bg-transparent text-[#0878F9] hover:text-[#0B132B] hover:underline underline-offset-4 font-semibold",
      secondary:
        "bg-[#F5F9FF] text-[#0B132B] border border-[#DCE7F5] hover:bg-white hover:border-[#0878F9]/50",
    };

    const sizeStyles: Record<string, string> = {
      sm: "h-9 px-4 text-xs tracking-wide",
      default: "h-10 px-5 text-sm",
      lg: "h-12 px-6 text-sm md:text-base font-semibold",
      icon: "h-10 w-10 p-0",
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant] || variantStyles.gradient} ${
      variant === "link-mint" ? "" : sizeStyles[size] || sizeStyles.default
    } ${className}`.trim();

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{
        className?: string;
        children?: React.ReactNode;
      }>;
      return React.cloneElement(child, {
        className: `${combinedClassName} ${child.props.className || ""}`.trim(),
      });
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
