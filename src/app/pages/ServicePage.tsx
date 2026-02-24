import { useState } from "react";
import { useNavigate } from "react-router";
import { Check } from "lucide-react";
import { ProgressStepper } from "../components/ProgressStepper";

type ServiceType = "basic" | "annual" | null;
type AddonType = "candle" | "flowers";

export default function ServicePage() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<ServiceType>("basic");
  const [selectedAddons, setSelectedAddons] = useState<AddonType[]>(["candle"]);

  const toggleAddon = (addon: AddonType) => {
    setSelectedAddons(prev => 
      prev.includes(addon) 
        ? prev.filter(a => a !== addon)
        : [...prev, addon]
    );
  };

  const handleNext = () => {
    // Save service data
    const existingData = JSON.parse(sessionStorage.getItem("orderData") || "{}");
    sessionStorage.setItem("orderData", JSON.stringify({
      ...existingData,
      service: selectedService,
      addons: selectedAddons
    }));
    navigate("/summary");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F9F9F8" }}>
      <div className="pt-12">
        <ProgressStepper currentStep={2} />
      </div>

      {/* Centralny ekran */}
      <div className="max-w-3xl mx-auto px-6 pb-12">
        <div 
          className="bg-white rounded-xl p-10"
          style={{ boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.08)" }}
        >
          <h2 
            className="mb-8"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              fontSize: "2rem",
              fontWeight: "700",
              color: "#1A1F2B"
            }}
          >
            Wybierz zakres opieki
          </h2>

          {/* Główne usługi */}
          <div className="space-y-4 mb-8">
            {/* Karta aktywna - Basic */}
            <button
              onClick={() => setSelectedService("basic")}
              className="w-full p-6 rounded-lg relative text-left"
              style={{
                border: selectedService === "basic" ? "2px solid #C9A961" : "1px solid #E2DED5",
                backgroundColor: selectedService === "basic" ? "#FFFBF5" : "#FFFFFF",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
            >
              {selectedService === "basic" && (
                <div 
                  className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#C9A961" }}
                >
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
              )}
              <h3 
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "#1A1F2B",
                  marginBottom: "0.5rem"
                }}
              >
                Jednorazowe uporządkowanie
              </h3>
              <p 
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9375rem",
                  color: "#4A5568",
                  marginBottom: "1rem",
                  lineHeight: "1.5"
                }}
              >
                Umycie pomnika, usunięcie starych zniczy, uporządkowanie miejsca pochówku
              </p>
              <p 
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.75rem",
                  fontWeight: "700",
                  color: "#C9A961"
                }}
              >
                150 zł
              </p>
            </button>

            {/* Karta nieaktywna - Annual */}
            <button
              onClick={() => setSelectedService("annual")}
              className="w-full p-6 rounded-lg relative text-left"
              style={{
                border: selectedService === "annual" ? "2px solid #C9A961" : "1px solid #E2DED5",
                backgroundColor: selectedService === "annual" ? "#FFFBF5" : "#FFFFFF",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
            >
              {selectedService === "annual" && (
                <div 
                  className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#C9A961" }}
                >
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
              )}
              <h3 
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "#1A1F2B",
                  marginBottom: "0.5rem"
                }}
              >
                Pakiet Całoroczny
              </h3>
              <p 
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9375rem",
                  color: "#4A5568",
                  marginBottom: "1rem",
                  lineHeight: "1.5"
                }}
              >
                4 wizyty w roku - regularna opieka na każdą porę roku
              </p>
              <p 
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.75rem",
                  fontWeight: "700",
                  color: "#C9A961"
                }}
              >
                500 zł
              </p>
            </button>
          </div>

          {/* Dodatki */}
          <div className="mb-8">
            <h3 
              className="mb-4"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.125rem",
                fontWeight: "600",
                color: "#1A1F2B"
              }}
            >
              Dodatki
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {/* Candle */}
              <button
                onClick={() => toggleAddon("candle")}
                className="p-5 rounded-lg relative text-left"
                style={{
                  border: selectedAddons.includes("candle") ? "2px solid #C9A961" : "1px solid #E2DED5",
                  backgroundColor: selectedAddons.includes("candle") ? "#FFFBF5" : "#FFFFFF",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                {selectedAddons.includes("candle") && (
                  <div 
                    className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#C9A961" }}
                  >
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </div>
                )}
                <h4 
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "#1A1F2B",
                    marginBottom: "0.5rem"
                  }}
                >
                  Zapalenie znicza
                </h4>
                <p 
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1.125rem",
                    fontWeight: "600",
                    color: "#C9A961"
                  }}
                >
                  +25 zł
                </p>
              </button>

              {/* Flowers */}
              <button
                onClick={() => toggleAddon("flowers")}
                className="p-5 rounded-lg relative text-left"
                style={{
                  border: selectedAddons.includes("flowers") ? "2px solid #C9A961" : "1px solid #E2DED5",
                  backgroundColor: selectedAddons.includes("flowers") ? "#FFFBF5" : "#FFFFFF",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                {selectedAddons.includes("flowers") && (
                  <div 
                    className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#C9A961" }}
                  >
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </div>
                )}
                <h4 
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "#1A1F2B",
                    marginBottom: "0.5rem"
                  }}
                >
                  Złożenie wiązanki
                </h4>
                <p 
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1.125rem",
                    fontWeight: "600",
                    color: "#C9A961"
                  }}
                >
                  +80 zł
                </p>
              </button>
            </div>
          </div>

          {/* Przyciski */}
          <div className="flex gap-4">
            <button
              onClick={handleBack}
              className="flex-1 py-4 rounded-lg"
              style={{
                border: "2px solid #E2DED5",
                backgroundColor: "transparent",
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                fontWeight: "600",
                color: "#1A1F2B",
                cursor: "pointer",
                minHeight: "56px"
              }}
            >
              Wstecz
            </button>
            <button
              onClick={handleNext}
              className="flex-1 py-4 rounded-lg"
              style={{
                backgroundColor: "#C9A961",
                color: "#FFFFFF",
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                fontWeight: "600",
                border: "none",
                cursor: "pointer",
                minHeight: "56px"
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#B89851"}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#C9A961"}
            >
              Dalej: Podsumowanie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
