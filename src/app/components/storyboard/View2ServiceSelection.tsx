import { Check } from "lucide-react";

export function View2ServiceSelection() {
  return (
    <div 
      className="rounded-xl overflow-hidden relative"
      style={{ 
        backgroundColor: "#F9F9F8",
        boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.1)",
        aspectRatio: "16/10"
      }}
    >
      {/* Label */}
      <div 
        className="absolute top-4 left-4 z-10 px-3 py-1 rounded"
        style={{ 
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.75rem",
          fontWeight: "700",
          color: "#1B4332"
        }}
      >
        VIEW 2: KROK 2 - WYBÓR USŁUGI
      </div>

      {/* Centralny ekran */}
      <div className="h-full flex items-center justify-center p-8">
        <div 
          className="bg-white rounded-lg p-6 w-full max-w-xl"
          style={{ boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.06)" }}
        >
          <div 
            className="inline-block text-white px-3 py-1 rounded-full mb-2" 
            style={{ 
              backgroundColor: "#1B4332",
              fontFamily: "'Inter', sans-serif", 
              fontSize: "0.625rem", 
              fontWeight: "600" 
            }}
          >
            KROK 2 Z 3
          </div>

          <h2 
            className="mb-4"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.375rem",
              fontWeight: "700",
              color: "#1A1F2B"
            }}
          >
            Wybierz zakres opieki
          </h2>

          {/* Główne usługi */}
          <div className="space-y-2.5 mb-4">
            {/* Karta aktywna */}
            <div 
              className="p-4 rounded-lg relative"
              style={{
                border: "2px solid #C9A961",
                backgroundColor: "#FFFBF5"
              }}
            >
              <div 
                className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#C9A961" }}
              >
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              </div>
              <h3 
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  color: "#1A1F2B",
                  marginBottom: "0.25rem"
                }}
              >
                Jednorazowe uporządkowanie
              </h3>
              <p 
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.6875rem",
                  color: "#4A5568",
                  marginBottom: "0.5rem"
                }}
              >
                Umycie pomnika, usunięcie starych zniczy
              </p>
              <p 
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "#C9A961"
                }}
              >
                150 zł
              </p>
            </div>

            {/* Karta nieaktywna */}
            <div 
              className="p-4 rounded-lg"
              style={{
                border: "1px solid #E2DED5",
                backgroundColor: "#FFFFFF"
              }}
            >
              <h3 
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  color: "#1A1F2B",
                  marginBottom: "0.25rem"
                }}
              >
                Pakiet Całoroczny
              </h3>
              <p 
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.6875rem",
                  color: "#4A5568",
                  marginBottom: "0.5rem"
                }}
              >
                4 wizyty w roku - regularna opieka
              </p>
              <p 
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "#C9A961"
                }}
              >
                500 zł
              </p>
            </div>
          </div>

          {/* Dodatki */}
          <div className="mb-4">
            <h3 
              className="mb-2"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8125rem",
                fontWeight: "600",
                color: "#1A1F2B"
              }}
            >
              Dodatki
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <div 
                className="p-3 rounded-lg relative"
                style={{
                  border: "2px solid #C9A961",
                  backgroundColor: "#FFFBF5"
                }}
              >
                <div 
                  className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#C9A961" }}
                >
                  <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                </div>
                <h4 
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    color: "#1A1F2B",
                    marginBottom: "0.25rem"
                  }}
                >
                  Zapalenie znicza
                </h4>
                <p 
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    color: "#C9A961"
                  }}
                >
                  +25 zł
                </p>
              </div>

              <div 
                className="p-3 rounded-lg"
                style={{
                  border: "1px solid #E2DED5",
                  backgroundColor: "#FFFFFF"
                }}
              >
                <h4 
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    color: "#1A1F2B",
                    marginBottom: "0.25rem"
                  }}
                >
                  Złożenie wiązanki
                </h4>
                <p 
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    color: "#C9A961"
                  }}
                >
                  +80 zł
                </p>
              </div>
            </div>
          </div>

          {/* Przyciski */}
          <div className="flex gap-3">
            <button
              className="flex-1 py-2 rounded-lg"
              style={{
                border: "2px solid #E2DED5",
                backgroundColor: "transparent",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8125rem",
                fontWeight: "600",
                color: "#1A1F2B"
              }}
            >
              Wstecz
            </button>
            <button
              className="flex-1 py-2 rounded-lg"
              style={{
                backgroundColor: "#C9A961",
                color: "#FFFFFF",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8125rem",
                fontWeight: "600"
              }}
            >
              Dalej: Podsumowanie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
