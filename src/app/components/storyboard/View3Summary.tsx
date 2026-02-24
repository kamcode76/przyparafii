export function View3Summary() {
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
        VIEW 3: KROK 3 - PODSUMOWANIE
      </div>

      {/* Centralny ekran */}
      <div className="h-full flex items-center justify-center p-8">
        <div 
          className="bg-white rounded-lg p-6 w-full max-w-md"
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
            KROK 3 Z 3
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
            Podsumowanie zlecenia
          </h2>

          {/* Szczegóły */}
          <div className="space-y-3 mb-4">
            <div>
              <p 
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.6875rem",
                  fontWeight: "600",
                  color: "#4A5568",
                  marginBottom: "0.25rem"
                }}
              >
                Lokalizacja
              </p>
              <p 
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#1A1F2B"
                }}
              >
                Cmentarz Rakowicki, Kraków
              </p>
            </div>

            <div>
              <p 
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.6875rem",
                  fontWeight: "600",
                  color: "#4A5568",
                  marginBottom: "0.25rem"
                }}
              >
                Zmarły
              </p>
              <p 
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#1A1F2B"
                }}
              >
                Jan Kowalski
              </p>
            </div>

            <div>
              <p 
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.6875rem",
                  fontWeight: "600",
                  color: "#4A5568",
                  marginBottom: "0.25rem"
                }}
              >
                Usługa
              </p>
              <p 
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#1A1F2B"
                }}
              >
                Uporządkowanie podstawowe + Znicz
              </p>
            </div>
          </div>

          {/* Separator */}
          <div 
            className="my-4"
            style={{
              height: "1px",
              backgroundColor: "#E2DED5"
            }}
          />

          {/* Kwota */}
          <div className="flex items-baseline justify-between mb-5">
            <p 
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                fontWeight: "600",
                color: "#1A1F2B"
              }}
            >
              Do zapłaty
            </p>
            <p 
              style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.75rem",
                fontWeight: "700",
                color: "#1A1F2B"
              }}
            >
              175 PLN
            </p>
          </div>

          {/* Przycisk */}
          <button
            className="w-full py-3 rounded-lg"
            style={{
              backgroundColor: "#C9A961",
              color: "#FFFFFF",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9375rem",
              fontWeight: "600"
            }}
          >
            Opłać i Zleć Usługę
          </button>

          {/* Info */}
          <p 
            className="text-center mt-3"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.6875rem",
              color: "#4A5568",
              lineHeight: "1.4"
            }}
          >
            Skontaktujemy się w ciągu 24h w celu potwierdzenia
          </p>
        </div>
      </div>
    </div>
  );
}
