import { useState } from "react";
import { Check } from "lucide-react";

interface ServiceOption {
  id: string;
  title: string;
  description: string;
  price: number;
}

interface AddonOption {
  id: string;
  title: string;
  price: number;
}

export function ServiceSelectionCard() {
  const [selectedService, setSelectedService] = useState<string>("basic");
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["candle"]);

  const services: ServiceOption[] = [
    {
      id: "basic",
      title: "Porządkowanie podstawowe",
      description: "Umycie pomnika, usunięcie starych zniczy",
      price: 150,
    },
    {
      id: "yearly",
      title: "Pakiet Całoroczny",
      description: "4 wizyty w roku - regularna opieka",
      price: 500,
    },
  ];

  const addons: AddonOption[] = [
    {
      id: "candle",
      title: "Zapalenie znicza",
      price: 25,
    },
    {
      id: "flowers",
      title: "Złożenie wiązanki",
      price: 80,
    },
  ];

  const toggleAddon = (addonId: string) => {
    setSelectedAddons(prev =>
      prev.includes(addonId)
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    );
  };

  return (
    <div 
      className="bg-white rounded-lg p-8"
      style={{ 
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.06)",
        borderRadius: "8px"
      }}
    >
      {/* Nagłówek */}
      <div className="mb-8">
        <div 
          className="inline-block text-white px-4 py-2 rounded-full mb-4" 
          style={{ 
            backgroundColor: "#1A362D",
            fontFamily: "'Inter', sans-serif", 
            fontSize: "0.875rem", 
            fontWeight: "600" 
          }}
        >
          KROK 2 Z 3
        </div>
        <h2 
          style={{ 
            fontFamily: "'Playfair Display', serif",
            fontSize: "2rem",
            lineHeight: "1.3",
            fontWeight: "700",
            color: "#1A1F2B",
            marginBottom: "0.5rem"
          }}
        >
          Wybierz zakres opieki
        </h2>
        <p 
          style={{ 
            fontFamily: "'Inter', sans-serif", 
            fontSize: "1rem",
            color: "#4A5568"
          }}
        >
          Dostosuj usługę do swoich potrzeb
        </p>
      </div>

      {/* Lista głównych usług */}
      <div className="space-y-4 mb-8">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => setSelectedService(service.id)}
            className="w-full text-left p-6 rounded-lg transition-all duration-200 relative"
            style={{
              border: selectedService === service.id 
                ? "2px solid #C5A059" 
                : "1.5px solid #E2DED5",
              backgroundColor: selectedService === service.id 
                ? "#FFFBF5" 
                : "#FFFFFF",
              borderRadius: "8px"
            }}
          >
            {selectedService === service.id && (
              <div 
                className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#C5A059" }}
              >
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
            )}
            <h3 
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.125rem",
                fontWeight: "600",
                color: "#1A1F2B",
                marginBottom: "0.25rem"
              }}
            >
              {service.title}
            </h3>
            <p 
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9375rem",
                color: "#4A5568",
                marginBottom: "0.75rem"
              }}
            >
              {service.description}
            </p>
            <p 
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.25rem",
                fontWeight: "600",
                color: "#C5A059"
              }}
            >
              {service.price} zł
            </p>
          </button>
        ))}
      </div>

      {/* Sekcja Dodatki */}
      <div className="mb-8">
        <h3 
          style={{ 
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.125rem",
            fontWeight: "600",
            color: "#1A1F2B",
            marginBottom: "1rem"
          }}
        >
          Dodatki
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {addons.map((addon) => (
            <button
              key={addon.id}
              onClick={() => toggleAddon(addon.id)}
              className="text-left p-5 rounded-lg transition-all duration-200 relative"
              style={{
                border: selectedAddons.includes(addon.id) 
                  ? "2px solid #C5A059" 
                  : "1.5px solid #E2DED5",
                backgroundColor: selectedAddons.includes(addon.id) 
                  ? "#FFFBF5" 
                  : "#FFFFFF",
                borderRadius: "8px"
              }}
            >
              {selectedAddons.includes(addon.id) && (
                <div 
                  className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#C5A059" }}
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
                  marginBottom: "0.25rem"
                }}
              >
                {addon.title}
              </h4>
              <p 
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "#C5A059"
                }}
              >
                +{addon.price} zł
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Przycisk */}
      <button
        className="w-full text-white py-4 rounded-lg transition-all duration-300 hover:shadow-lg"
        style={{
          backgroundColor: "#C5A059",
          borderRadius: "8px",
          fontFamily: "'Inter', sans-serif",
          fontSize: "1.125rem",
          fontWeight: "600"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#B89851";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#C5A059";
        }}
      >
        Przejdź do podsumowania
      </button>
    </div>
  );
}
