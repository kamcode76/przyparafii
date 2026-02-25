import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, Loader2 } from "lucide-react";
import { ProgressStepper } from "../components/ProgressStepper";
import { useOrderStore } from "../store/useOrderStore";

export default function SummaryPage() {
  const navigate = useNavigate();
  const { locationData, serviceData } = useOrderStore();
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const packageLabel = useMemo(() => {
    if (serviceData.selectedPackage === "basic") return "Pakiet Podstawowy";
    if (serviceData.selectedPackage === "annual") return "Pakiet Całoroczny";
    return "";
  }, [serviceData.selectedPackage]);

  const addonsLabel = useMemo(() => {
    const addons = serviceData.addons || [];
    const labels: string[] = [];
    if (addons.includes("candle")) labels.push("Znicz");
    if (addons.includes("flowers")) labels.push("Kwiaty");
    return labels;
  }, [serviceData.addons]);

  const serviceLabel = useMemo(() => {
    const base = packageLabel || "—";
    if (addonsLabel.length === 0) return base;
    return `${base} + ${addonsLabel.join(" + ")}`;
  }, [addonsLabel, packageLabel]);

  const cityLabel = useMemo(() => {
    if (locationData.unknownLocation) return "Nieznane — ustalimy lokalizację";
    return locationData.city || "—";
  }, [locationData.city, locationData.unknownLocation]);

  const totalPrice = useMemo(() => {
    if (serviceData.totalPrice > 0) return serviceData.totalPrice;

    let total = 0;
    if (serviceData.selectedPackage === "basic") total += 150;
    if (serviceData.selectedPackage === "annual") total += 500;
    if (serviceData.addons.includes("candle")) total += 25;
    if (serviceData.addons.includes("flowers")) total += 80;
    return total;
  }, [serviceData.addons, serviceData.selectedPackage, serviceData.totalPrice]);

  const handleBack = () => {
    navigate("/service");
  };

  const handleSubmit = () => {
    if (isProcessing) return;

    setIsProcessing(true);

    window.setTimeout(() => {
      setIsProcessing(false);
      setShowSuccessToast(true);

      window.setTimeout(() => {
        setShowSuccessToast(false);
      }, 2500);

      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F9F9F8" }}>
      {showSuccessToast && (
        <div className="fixed top-6 right-6 z-50">
          <div
            className="flex items-center gap-3 px-5 py-3 rounded-lg border shadow-lg"
            style={{
              backgroundColor: "#F0FDF4",
              borderColor: "#BBF7D0",
            }}
          >
            <CheckCircle2 className="w-5 h-5" style={{ color: "#16A34A" }} />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9375rem",
                fontWeight: "600",
                color: "#166534",
              }}
            >
              Płatność zakończona sukcesem. Przekierowujemy do panelu…
            </span>
          </div>
        </div>
      )}

      <div className="pt-8 sm:pt-12">
        <ProgressStepper currentStep={3} />
      </div>

      {/* Centralny ekran */}
      <div className="max-w-2xl mx-auto px-6 pb-12">
        <div 
          className="bg-white rounded-xl p-6 sm:p-8 lg:p-10"
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
                Miasto
              </p>
              <p 
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.125rem",
                  fontWeight: "500",
                  color: "#1A1F2B"
                }}
              >
                {cityLabel}
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
                Usługi
              </p>
              <p 
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.125rem",
                  fontWeight: "500",
                  color: "#1A1F2B"
                }}
              >
                {serviceLabel}
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
                Cena całkowita
              </p>
              <p 
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.125rem",
                  fontWeight: "500",
                  color: "#1A1F2B"
                }}
              >
                {totalPrice} zł
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
              {totalPrice} PLN
            </p>
          </div>

          {/* Przyciski */}
          <div className="space-y-4">
            <button
              onClick={handleSubmit}
              className="w-full py-4 rounded-lg"
              style={{
                backgroundColor: isProcessing ? "#B89851" : "#C9A961",
                color: "#FFFFFF",
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.125rem",
                fontWeight: "600",
                border: "none",
                cursor: isProcessing ? "not-allowed" : "pointer",
                minHeight: "56px"
              }}
              disabled={isProcessing}
              onMouseOver={(e) => {
                if (isProcessing) return;
                e.currentTarget.style.backgroundColor = "#B89851";
              }}
              onMouseOut={(e) => {
                if (isProcessing) return;
                e.currentTarget.style.backgroundColor = "#C9A961";
              }}
            >
              <span className="inline-flex items-center justify-center gap-3">
                {isProcessing && <Loader2 className="w-5 h-5 animate-spin" />}
                {isProcessing ? "Przetwarzanie płatności..." : "Opłać i Zleć Usługę"}
              </span>
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
