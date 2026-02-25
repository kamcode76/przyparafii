import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({ 
  variant = "primary", 
  size = "md", 
  children, 
  className = "",
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
  const roundingStyles = "rounded-[8px]"; // Explicit 8px z guidelines
  
  const variants = {
    primary: "bg-pp-accent text-white hover:bg-[#B89851] active:scale-[0.98] shadow-sm hover:shadow-md",
    secondary: "bg-transparent border-2 border-pp-border text-pp-text hover:border-pp-accent hover:text-pp-accent active:scale-[0.98]"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm min-h-[40px]",
    md: "px-6 py-3 text-base min-h-[48px]", // min 48px dla dostępności
    lg: "px-8 py-4 text-lg min-h-[56px]"
  };
  
  return (
    <button
      className={`${baseStyles} ${roundingStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}