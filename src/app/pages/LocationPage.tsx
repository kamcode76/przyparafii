import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProgressStepper } from "../components/ProgressStepper";
import { useOrderStore } from "../store/useOrderStore";

export default function LocationPage() {
  const navigate = useNavigate();
  const { locationData, setLocationData } = useOrderStore();
  const { city, cemetery, deceasedName, unknownLocation } = locationData;

  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);

  const cityOptions = ["Kraków", "Rzeszów", "Warszawa", "Przemyśl"];
  const normalizedCity = city.trim().toLowerCase();
  const filteredCities =
    normalizedCity.length === 0
      ? []
      : cityOptions.filter((option) =>
          option.toLowerCase().includes(normalizedCity),
        );

  const isNextDisabled =
    !deceasedName.trim() ||
    (!unknownLocation && (!city.trim() || !cemetery.trim()));

  const handleNext = () => {
    if (isNextDisabled) return;

    // Save form data to session storage for use in other pages
    sessionStorage.setItem(
      "orderData",
      JSON.stringify({
        city,
        cemetery,
        deceasedName,
        unknownLocation,
      }),
    );
    navigate("/service");
  };

  return (
    <div className="w-full" style={{ backgroundColor: "#F9F9F8" }}>
      <div className="pt-12">
        <ProgressStepper currentStep={1} />
      </div>

      <div className="max-w-xl mx-auto px-6 pb-12">
        <div
          className="bg-white rounded-xl p-10"
          style={{
            boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.08)",
          }}
        >
          <h2
            className="mb-8"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2rem",
              fontWeight: "700",
              color: "#1B4332",
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
                  color: "#1B4332",
                }}
              >
                Miejscowość
              </label>
              <input
                type="text"
                placeholder="np. Kraków"
                value={city}
                onChange={(e) => {
                  setLocationData({ city: e.target.value });
                  setIsSuggestionsOpen(true);
                }}
                onFocus={() => setIsSuggestionsOpen(true)}
                className="w-full px-4 py-3 border rounded-lg relative"
                style={{
                  borderColor: "#E2DED5",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  color: "#1A1F2B",
                }}
              />
              {isSuggestionsOpen && filteredCities.length > 0 && (
                <div
                  className="mt-2 w-full rounded-lg border bg-white shadow-lg"
                  style={{
                    borderColor: "#E2DED5",
                  }}
                >
                  {filteredCities.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setLocationData({ city: option });
                        setIsSuggestionsOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-[#F9F9F8]"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.9375rem",
                        color: "#1A1F2B",
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label
                className="block mb-2"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  color: "#1B4332",
                }}
              >
                Nazwa cmentarza lub parafii
              </label>
              <input
                type="text"
                placeholder="np. Cmentarz Rakowicki"
                value={cemetery}
                onChange={(e) => setLocationData({ cemetery: e.target.value })}
                className="w-full px-4 py-3 border rounded-lg"
                style={{
                  borderColor: "#E2DED5",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  color: "#1A1F2B",
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
                  color: "#1B4332",
                }}
              >
                Imię i nazwisko zmarłego
              </label>
              <input
                type="text"
                placeholder="np. Jan Kowalski"
                value={deceasedName}
                onChange={(e) =>
                  setLocationData({ deceasedName: e.target.value })
                }
                className="w-full px-4 py-3 border rounded-lg"
                style={{
                  borderColor: "#E2DED5",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  color: "#1A1F2B",
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
              onChange={(e) =>
                setLocationData({ unknownLocation: e.target.checked })
              }
              className="mt-1"
              style={{
                width: "20px",
                height: "20px",
                accentColor: "#C9A961",
                cursor: "pointer",
              }}
            />
            <label
              htmlFor="unknown"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                lineHeight: "1.5",
                color: "#4A5568",
                cursor: "pointer",
              }}
            >
              Nie znam dokładnej lokalizacji grobu (pomożemy ustalić we
              współpracy z parafią)
            </label>
          </div>

          <button
            onClick={handleNext}
            className="w-full py-4 rounded-lg"
            style={{
              backgroundColor: isNextDisabled ? "#E2DED5" : "#C9A961",
              color: "#FFFFFF",
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.125rem",
              fontWeight: "600",
              border: "none",
              cursor: isNextDisabled ? "not-allowed" : "pointer",
              minHeight: "56px",
            }}
            disabled={isNextDisabled}
            onMouseOver={(e) => {
              if (isNextDisabled) return;
              e.currentTarget.style.backgroundColor = "#B89851";
            }}
            onMouseOut={(e) => {
              if (isNextDisabled) return;
              e.currentTarget.style.backgroundColor = "#C9A961";
            }}
          >
            Dalej - Wybierz usługę
          </button>
        </div>
      </div>
    </div>
  );
}
