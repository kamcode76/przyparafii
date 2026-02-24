export function OrderSummaryCard() {
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
          KROK 3 Z 3
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
          Podsumowanie zlecenia
        </h2>
        <p 
          style={{ 
            fontFamily: "'Inter', sans-serif", 
            fontSize: "1rem",
            color: "#4A5568"
          }}
        >
          Sprawdź szczegóły przed finalizacją
        </p>
      </div>

      {/* Szczegóły zlecenia */}
      <div className="space-y-6 mb-8">
        <div>
          <p 
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.875rem",
              fontWeight: "600",
              color: "#4A5568",
              marginBottom: "0.5rem"
            }}
          >
            Lokalizacja
          </p>
          <p 
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.125rem",
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
              fontSize: "0.875rem",
              fontWeight: "600",
              color: "#4A5568",
              marginBottom: "0.5rem"
            }}
          >
            Zmarły
          </p>
          <p 
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.125rem",
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
              fontSize: "0.875rem",
              fontWeight: "600",
              color: "#4A5568",
              marginBottom: "0.5rem"
            }}
          >
            Usługa
          </p>
          <p 
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.125rem",
              fontWeight: "500",
              color: "#1A1F2B"
            }}
          >
            Porządkowanie podstawowe + Znicz
          </p>
        </div>
      </div>

      {/* Separator */}
      <div 
        className="my-8"
        style={{
          height: "1px",
          backgroundColor: "#E2DED5"
        }}
      />

      {/* Kwota do zapłaty */}
      <div className="mb-8">
        <div className="flex items-baseline justify-between">
          <p 
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.125rem",
              fontWeight: "600",
              color: "#1A1F2B"
            }}
          >
            Kwota do zapłaty
          </p>
          <p 
            style={{ 
              fontFamily: "'Playfair Display', serif",
              fontSize: "2.25rem",
              fontWeight: "700",
              color: "#1A1F2B"
            }}
          >
            175 PLN
          </p>
        </div>
      </div>

      {/* Przycisk */}
      <button
        className="w-full text-white py-5 rounded-lg transition-all duration-300 hover:shadow-lg"
        style={{
          backgroundColor: "#C5A059",
          borderRadius: "8px",
          fontFamily: "'Inter', sans-serif",
          fontSize: "1.25rem",
          fontWeight: "600"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#B89851";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#C5A059";
        }}
      >
        Opłać i Zleć Usługę
      </button>

      {/* Informacja dodatkowa */}
      <p 
        className="text-center mt-6"
        style={{ 
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.875rem",
          color: "#4A5568",
          lineHeight: "1.6"
        }}
      >
        Po opłaceniu skontaktujemy się z Tobą w ciągu 24h w celu potwierdzenia szczegółów
      </p>
    </div>
  );
}
