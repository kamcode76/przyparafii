import { OrderWizard } from "./components/OrderWizard";
import { HeroSection } from "./components/HeroSection";

export default function App() {
  return (
    <div className="flex min-h-screen">
      {/* Lewa strona - Hero */}
      <HeroSection />
      
      {/* Prawa strona - Wizard */}
      <div className="flex-1 flex items-center justify-center bg-white p-12">
        <OrderWizard />
      </div>
    </div>
  );
}
