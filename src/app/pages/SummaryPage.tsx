import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ProgressStepper } from "../components/ProgressStepper";

type OrderData = {
  city: string;
  cemetery: string;
  deceasedName: string;
  unknownLocation: boolean;
  service: "basic" | "annual" | null;
  addons: Array<"candle" | "flowers">;
};

export default function SummaryPage() {
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  useEffect(() => {
    const data = sessionStorage.getItem("orderData");
    if (data) {
      setOrderData(JSON.parse(data));
    }
  }, []);

  const handleBack = () => {
    navigate("/service");
  };

  const handleSubmit = () => {
    // Simulate payment and order submission
    alert("Płatność przebiegła pomyślnie! Przekierowanie do panelu klienta...");
    navigate("/dashboard");
  };

  const calculateTotal = () => {
    let total = 0;
    if (orderData?.service === "basic") total += 150;
    if (orderData?.service === "annual") total += 500;
    if (orderData?.addons.includes("candle")) total += 25;
    if (orderData?.addons.includes("flowers")) total += 80;
    return total;
  };

  const getServiceName = () => {
    if (orderData?.service === "basic") return "Jednorazowe uporządkowanie";
    if (orderData?.service === "annual") return "Pakiet Całoroczny";
    return "";
  };

  const getAddonsText = () => {
    if (!orderData?.addons.length) return "";
    const addons = [];
    if (orderData.addons.includes("candle")) addons.push("Znicz");
    if (orderData.addons.includes("flowers")) addons.push("Wiązanka");
    return addons.length > 0 ? " + " + addons.join(" + ") : "";
  };

  if (!orderData) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#F9F9F8" }}>
        <p style={{ fontFamily: "'Inter', sans-serif", color: "#4A5568" }}>Ładowanie...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F9F9F8" }}>
      <div className="pt-12">
        <ProgressStepper currentStep={3} />
      </div>

      {/* Centralny ekran */}
      <div className="max-w-2xl mx-auto px-6 pb-12">
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
            Podsumowanie zlecenia
          </h2>

          {/* Szczegóły */}
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
                {orderData.cemetery}, {orderData.city}
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
                {orderData.deceasedName}
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
                {getServiceName()}{getAddonsText()}
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

          {/* Kwota */}
          <div className="flex items-baseline justify-between mb-10">
            <p 
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.125rem",
                fontWeight: "600",
                color: "#1A1F2B"
              }}
            >
              Do zapłaty
            </p>
            <p 
              style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "#1A1F2B"
              }}
            >
              {calculateTotal()} PLN
            </p>
          </div>

          {/* Przyciski */}
          <div className="space-y-4">
            <button
              onClick={handleSubmit}
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
              Opłać i Zleć Usługę
            </button>

            <button
              onClick={handleBack}
              className="w-full py-3 rounded-lg"
              style={{
                border: "2px solid #E2DED5",
                backgroundColor: "transparent",
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                fontWeight: "600",
                color: "#1A1F2B",
                cursor: "pointer"
              }}
            >
              Wstecz
            </button>
          </div>

          {/* Info */}
          <p 
            className="text-center mt-6"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.875rem",
              color: "#4A5568",
              lineHeight: "1.5"
            }}
          >
            Skontaktujemy się w ciągu 24h w celu potwierdzenia realizacji zlecenia
          </p>
        </div>
      </div>
    </div>
  );
}
