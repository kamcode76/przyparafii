export function View1Landing() {
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden relative"
      style={{ 
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
        VIEW 1: LANDING & KROK 1
      </div>

      {/* Split Screen Layout */}
      <div className="flex h-full">
        {/* Lewa strona - Hero */}
        <div className="flex-1 flex flex-col items-start justify-center p-8" style={{ backgroundColor: "#1B4332" }}>
          <h1 
            className="text-white mb-4"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.75rem",
              lineHeight: "1.2",
              fontWeight: "700"
            }}
          >
            Zadbaj o pamięć bliskich z drugiego krańca Polski
          </h1>
          
          <p 
            className="text-white/90 mb-6"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              lineHeight: "1.5",
              fontWeight: "400"
            }}
          >
            PrzyParafii łączy rodziny z lokalnymi opiekunami grobów we współpracy z parafiami.
          </p>
          
          <button 
            className="px-6 py-2.5 rounded-lg"
            style={{
              backgroundColor: "#C9A961",
              color: "#FFFFFF",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8125rem",
              fontWeight: "600"
            }}
          >
            Jak to działa?
          </button>
        </div>

        {/* Prawa strona - Formularz */}
        <div className="flex-1 bg-white p-8 flex items-center justify-center">
          <div className="w-full max-w-md">
            <div 
              className="inline-block text-white px-3 py-1 rounded-full mb-3" 
              style={{ 
                backgroundColor: "#1B4332",
                fontFamily: "'Inter', sans-serif", 
                fontSize: "0.625rem", 
                fontWeight: "600" 
              }}
            >
              KROK 1 Z 3
            </div>
            
            <h2 
              className="mb-4"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.25rem",
                fontWeight: "700",
                color: "#1B4332"
              }}
            >
              Podaj lokalizację grobu
            </h2>

            <div className="space-y-3 mb-4">
              <div>
                <label 
                  className="block mb-1.5"
                  style={{ 
                    fontFamily: "'Inter', sans-serif", 
                    fontSize: "0.75rem", 
                    fontWeight: "600",
                    color: "#1B4332"
                  }}
                >
                  Miejscowość
                </label>
                <input
                  type="text"
                  placeholder="np. Kraków"
                  className="w-full px-3 py-2 border rounded-lg"
                  style={{ 
                    borderColor: "#E2DED5",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8125rem"
                  }}
                />
              </div>

              <div>
                <label 
                  className="block mb-1.5"
                  style={{ 
                    fontFamily: "'Inter', sans-serif", 
                    fontSize: "0.75rem", 
                    fontWeight: "600",
                    color: "#1B4332"
                  }}
                >
                  Nazwa cmentarza lub parafii
                </label>
                <input
                  type="text"
                  placeholder="np. Cmentarz Rakowicki"
                  className="w-full px-3 py-2 border rounded-lg"
                  style={{ 
                    borderColor: "#E2DED5",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8125rem"
                  }}
                />
              </div>

              <div>
                <label 
                  className="block mb-1.5"
                  style={{ 
                    fontFamily: "'Inter', sans-serif", 
                    fontSize: "0.75rem", 
                    fontWeight: "600",
                    color: "#1B4332"
                  }}
                >
                  Imię i nazwisko zmarłego
                </label>
                <input
                  type="text"
                  placeholder="np. Jan Kowalski"
                  className="w-full px-3 py-2 border rounded-lg"
                  style={{ 
                    borderColor: "#E2DED5",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8125rem"
                  }}
                />
              </div>
            </div>

            <div className="flex items-start gap-2 p-3 rounded-lg mb-4" style={{ backgroundColor: "#F9F9F8" }}>
              <input
                type="checkbox"
                id="unknown"
                className="mt-0.5 accent-[#C9A961]"
                style={{ width: "16px", height: "16px" }}
              />
              <label 
                htmlFor="unknown"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.6875rem",
                  lineHeight: "1.4",
                  color: "#4A5568"
                }}
              >
                Nie znam dokładnej lokalizacji grobu (pomożemy ustalić we współpracy z parafią)
              </label>
            </div>

            <button
              className="w-full py-2.5 rounded-lg"
              style={{
                backgroundColor: "#C9A961",
                color: "#FFFFFF",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                fontWeight: "600"
              }}
            >
              Dalej - Wybierz usługę
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
