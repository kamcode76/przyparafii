import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-pp-border rounded-[8px] mb-3 overflow-hidden bg-white transition-all hover:border-pp-accent/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 px-6 flex items-center justify-between text-left transition-colors min-h-[64px]"
      >
        <span className="font-medium text-pp-text pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-pp-accent transition-transform flex-shrink-0 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-pp-border/50 pt-4 animate-in fade-in slide-in-from-top-2 duration-200">
          {answer}
        </div>
      )}
    </div>
  );
}

interface FAQAccordionProps {
  items: Array<{ question: string; answer: string }>;
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="space-y-0">
      {items.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}