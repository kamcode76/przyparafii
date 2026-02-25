import { Check } from "lucide-react";

interface TimelineStepProps {
  label: string;
  completed: boolean;
  isLast?: boolean;
}

export function TimelineStep({ label, completed, isLast = false }: TimelineStepProps) {
  return (
    <div className="flex items-start">
      <div className="flex flex-col items-center">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            completed ? "bg-pp-accent" : "bg-pp-border"
          }`}
        >
          {completed && <Check className="w-4 h-4 text-white" />}
        </div>
        {!isLast && (
          <div
            className={`w-0.5 h-12 ${completed ? "bg-pp-accent" : "bg-pp-border"}`}
          />
        )}
      </div>
      <div className="ml-4 pb-8">
        <p className={`text-sm ${completed ? "font-medium text-pp-text" : "text-gray-500"}`}>
          {label}
        </p>
      </div>
    </div>
  );
}
