import { Check } from "lucide-react";

interface StepperProps {
  currentStep: number;
  totalSteps: number;
  steps: string[];
}

export function Stepper({ currentStep, totalSteps, steps }: StepperProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;
          
          return (
            <div key={stepNumber} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                    isCompleted
                      ? "bg-pp-accent text-white scale-110"
                      : isActive
                      ? "bg-pp-primary text-white shadow-lg"
                      : "bg-pp-border text-gray-500"
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5 animate-in fade-in zoom-in duration-200" />
                  ) : (
                    <span className="font-medium">{stepNumber}</span>
                  )}
                </div>
                <span
                  className={`text-xs md:text-sm text-center transition-colors ${
                    isActive ? "font-medium text-pp-text" : "text-gray-500"
                  }`}
                >
                  {step}
                </span>
              </div>
              
              {stepNumber < totalSteps && (
                <div
                  className={`h-0.5 flex-1 mx-2 mb-6 transition-all duration-500 ${
                    isCompleted ? "bg-pp-accent" : "bg-pp-border"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}