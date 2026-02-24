interface ProgressStepperProps {
  currentStep: 1 | 2 | 3;
}

export function ProgressStepper({ currentStep }: ProgressStepperProps) {
  const steps = [
    { number: 1, label: "Lokalizacja" },
    { number: 2, label: "Wybór usługi" },
    { number: 3, label: "Podsumowanie" }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      {/* Step indicator label */}
      

      {/* Progress bar */}
      
    </div>
  );
}
