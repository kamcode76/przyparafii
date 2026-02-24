import { useState } from "react";
import { useNavigate } from "react-router";
import { ProgressStepper } from "../components/ProgressStepper";

export default function LocationPage() {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [cemetery, setCemetery] = useState("");
  const [deceasedName, setDeceasedName] = useState("");
  const [unknownLocation, setUnknownLocation] = useState(false);

  const handleNext = () => {
    // Save form data to session storage for use in other pages
    sessionStorage.setItem("orderData", JSON.stringify({
      city,
      cemetery,
      deceasedName,
      unknownLocation
    }));
    navigate("/service");
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F9F9F8" }}>
      <div className="pt-12">
        <ProgressStepper currentStep={1} />
      </div>

      {/* Split Screen Layout */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Lewa strona - Hero */}
          <div 
            className="rounded-xl p-12 min-h-[600px] flex flex-col justify-center"
            style={{ backgroundColor: "#1B4332" }}
          >
            <h1 
              className="text-white mb-6"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: "3rem",
                lineHeight: "1.2",
                fontWeight: "700"
              }}
            >
              Zadbaj o pamięć bliskich z drugiego krańca Polski
            </h1>
            
            <p 
              className="text-white/90 mb-8"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.125rem",
                lineHeight: "1.6",
                fontWeight: "400"
              }}
            >
              PrzyParafii łączy rodziny z lokalnymi opiekunami grobów we współpracy z parafiami.
            </p>
            
            <button 
              className="px-8 py-4 rounded-lg self-start"
              style={{
                backgroundColor: "#C9A961",
                color: "#FFFFFF",
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                fontWeight: "600",
                border: "none",
                cursor: "pointer"
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#B89851"}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#C9A961"}
            >
              Jak to działa?
            </button>
          </div>

          {/* Prawa strona - Formularz */}
          <div 
            className="bg-white rounded-xl p-10"
            style={{ 
              boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.08)"
            }}
          >
            <h2 
              className="mb-8"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: "2rem",
                fontWeight: "700",
                color: "#1B4332"
              }}
            >
              Podaj lokalizację grobu
            </h2>

            <div className="space-y-6 mb-8">
              <div>
                <label 
                  className="block mb-2"
                  style={{ 
                    fontFamily: "'Inter', sans-serif", 
                    fontSize: "0.875rem", 
                    fontWeight: "600",
                    color: "#1B4332"
                  }}
                >
                  Miejscowość
                </label>
                <input
                  type="text"
                  placeholder="np. Kraków"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg"
                  style={{ 
                    borderColor: "#E2DED5",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1rem",
                    color: "#1A1F2B"
                  }}
                />
              </div>

              <div>
                <label 
                  className="block mb-2"
                  style={{ 
                    fontFamily: "'Inter', sans-serif", 
                    fontSize: "0.875rem", 
                    fontWeight: "600",
                    color: "#1B4332"
                  }}
                >
                  Nazwa cmentarza lub parafii
                </label>
                <input
                  type="text"
                  placeholder="np. Cmentarz Rakowicki"
                  value={cemetery}
                  onChange={(e) => setCemetery(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg"
                  style={{ 
                    borderColor: "#E2DED5",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1rem",
                    color: "#1A1F2B"
                  }}
                />
              </div>

              <div>
                <label 
                  className="block mb-2"
                  style={{ 
                    fontFamily: "'Inter', sans-serif", 
                    fontSize: "0.875rem", 
                    fontWeight: "600",
                    color: "#1B4332"
                  }}
                >
                  Imię i nazwisko zmarłego
                </label>
                <input
                  type="text"
                  placeholder="np. Jan Kowalski"
                  value={deceasedName}
                  onChange={(e) => setDeceasedName(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg"
                  style={{ 
                    borderColor: "#E2DED5",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1rem",
                    color: "#1A1F2B"
                  }}
                />
              </div>
            </div>

            <div 
              className="flex items-start gap-3 p-4 rounded-lg mb-8" 
              style={{ backgroundColor: "#F9F9F8" }}
            >
              <input
                type="checkbox"
                id="unknown"
                checked={unknownLocation}
                onChange={(e) => setUnknownLocation(e.target.checked)}
                className="mt-1"
                style={{ 
                  width: "20px", 
                  height: "20px",
                  accentColor: "#C9A961",
                  cursor: "pointer"
                }}
              />
              <label 
                htmlFor="unknown"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  lineHeight: "1.5",
                  color: "#4A5568",
                  cursor: "pointer"
                }}
              >
                Nie znam dokładnej lokalizacji grobu (pomożemy ustalić we współpracy z parafią)
              </label>
            </div>

            <button
              onClick={handleNext}
              className="w-full py-4 rounded-lg"
              style={{
                backgroundColor: "#C9A961",
                color: "#FFFFFF",
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.125rem",
                fontWeight: "600",
                border: "none",
                cursor: "pointer",
                minHeight: "56px"
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#B89851"}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#C9A961"}
            >
              Dalej - Wybierz usługę
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
