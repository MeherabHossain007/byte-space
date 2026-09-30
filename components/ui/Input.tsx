import React, { InputHTMLAttributes, forwardRef, ReactNode } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  containerClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      containerClassName = "",
      icon,
      type = "text",
      ...props
    },
    ref
  ) => {
    return (
      <label
        className={`hero-search-field bg-white flex gap-2 h-13 items-center px-6 py-3 rounded-full w-full border border-white/20 focus-within:ring-4 focus-within:ring-secondary/40 transition-all cursor-text ${containerClassName}`}
      >
        {icon && (
          <span className="shrink-0 text-[#82868E] flex items-center">
            {icon}
          </span>
        )}
        <input
          ref={ref}
          type={type}
          className={`flex-1 min-w-0 bg-transparent border-0 outline-none font-satoshi font-normal text-footer-text text-base sm:text-lg leading-relaxed placeholder:text-zinc-500 ${className}`}
          {...props}
        />
      </label>
    );
  }
);

Input.displayName = "Input";

export default Input;
