import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  selected?: boolean;
}

export function Card({ children, className = "", onClick, selected = false }: CardProps) {
  const baseStyles = "bg-white p-6 transition-all";
  const roundingStyles = "rounded-[8px]"; // Explicit 8px z guidelines
  const interactiveStyles = onClick ? "cursor-pointer hover:shadow-lg hover:border-pp-accent/50" : "";
  const selectedStyles = selected 
    ? "border-2 border-pp-accent shadow-md bg-gradient-to-br from-white to-pp-accent/5" 
    : "border border-pp-border";
  
  return (
    <div
      className={`${baseStyles} ${roundingStyles} ${interactiveStyles} ${selectedStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}