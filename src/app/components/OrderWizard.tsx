import { useState } from "react";

export function OrderWizard() {
  const [city, setCity] = useState("");
  const [cemetery, setCemetery] = useState("");
  const [deceasedName, setDeceasedName] = useState("");
  const [unknownLocation, setUnknownLocation] = useState(false);

  return (
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-12">
      <div className="mb-8">
        <div className="inline-block bg-[#1B4332] text-white px-4 py-2 rounded-full mb-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: "600" }}>
          KROK 1 Z 3
        </div>
        <h2 
          className="text-[#1B4332] mb-2"
          style={{ 
            fontFamily: "'Playfair Display', serif",
            fontSize: "2.25rem",
            lineHeight: "1.3",
            fontWeight: "700"
          }}
        >
          Podaj lokalizację grobu
        </h2>
        <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem" }}>
          Pomożemy Ci znaleźć odpowiedniego opiekuna w Twojej parafii
        </p>
      </div>

      <form className="space-y-6">
        {/* Miejscowość */}
        <div>
          <label 
            htmlFor="city" 
            className="block text-[#1B4332] mb-3"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", fontWeight: "600" }}
          >
            Miejscowość
          </label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:border-[#C9A961] focus:outline-none transition-colors duration-200"
            placeholder="np. Kraków"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.125rem" }}
          />
        </div>

        {/* Nazwa cmentarza lub parafii */}
        <div>
          <label 
            htmlFor="cemetery" 
            className="block text-[#1B4332] mb-3"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", fontWeight: "600" }}
          >
            Nazwa cmentarza lub parafii
          </label>
          <input
            type="text"
            id="cemetery"
            value={cemetery}
            onChange={(e) => setCemetery(e.target.value)}
            className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:border-[#C9A961] focus:outline-none transition-colors duration-200"
            placeholder="np. Cmentarz Rakowicki lub Parafia św. Floriana"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.125rem" }}
          />
        </div>

        {/* Imię i nazwisko zmarłego */}
        <div>
          <label 
            htmlFor="deceasedName" 
            className="block text-[#1B4332] mb-3"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", fontWeight: "600" }}
          >
            Imię i nazwisko zmarłego
          </label>
          <input
            type="text"
            id="deceasedName"
            value={deceasedName}
            onChange={(e) => setDeceasedName(e.target.value)}
            className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:border-[#C9A961] focus:outline-none transition-colors duration-200"
            placeholder="np. Jan Kowalski"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.125rem" }}
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
          <input
            type="checkbox"
            id="unknownLocation"
            checked={unknownLocation}
            onChange={(e) => setUnknownLocation(e.target.checked)}
            className="w-6 h-6 mt-1 accent-[#C9A961] cursor-pointer"
          />
          <label 
            htmlFor="unknownLocation" 
            className="text-gray-700 cursor-pointer"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", lineHeight: "1.6" }}
          >
            Nie znam dokładnej lokalizacji grobu (pomożemy Ci ją ustalić we współpracy z parafią)
          </label>
        </div>

        {/* Przycisk dalej */}
        <button
          type="submit"
          className="w-full bg-[#C9A961] text-white py-5 rounded-lg hover:bg-[#B89851] transition-all duration-300 shadow-lg hover:shadow-xl mt-8"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.25rem",
            fontWeight: "600"
          }}
        >
          Dalej - Wybierz usługę
        </button>
      </form>
    </div>
  );
}
