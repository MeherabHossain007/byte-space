import React, { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const variantStyles: Record<string, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark shadow-md",
  secondary: "bg-secondary hover:bg-secondary-hover text-black",
  outline: "border border-white/20 text-white hover:bg-white/10",
  ghost: "text-white hover:bg-white/10",
};

const sizeStyles: Record<string, string> = {
  sm: "px-4 py-2 text-sm h-10",
  md: "px-6 py-2.5 text-base h-11",
  lg: "px-7 py-3 text-base sm:text-lg h-13",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "secondary",
      size = "lg",
      type = "button",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={`font-satoshi font-medium flex items-center justify-center rounded-full cursor-pointer transition-all duration-150 active:scale-95 shrink-0 ${variantStyles[variant] || ""} ${sizeStyles[size] || ""} ${className}`}
        {...props}
      >
        <span className="whitespace-nowrap">{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
