import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block mb-2 text-sm font-medium text-pp-text">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full px-4 py-3 min-h-[48px] bg-white border border-pp-border rounded-[8px] text-pp-text placeholder:text-gray-400 transition-all focus:outline-none focus:ring-2 focus:ring-pp-accent focus:border-transparent hover:border-pp-accent/50 ${className}`}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";