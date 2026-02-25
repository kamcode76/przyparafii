import { useState } from "react";
import { useNavigate } from "react-router";
import { Container } from "../../components/pp/Container";
import { Button } from "../../components/pp/Button";
import { Input } from "../../components/pp/Input";
import { Stepper } from "../../components/pp/Stepper";
import { Card } from "../../components/pp/Card";
import { Check } from "lucide-react";
import { Navbar } from "../../components/pp/Navbar";
import { Footer } from "../../components/pp/Footer";

type OrderData = {
  city: string;
  cemetery: string;
  deceasedName: string;
  unknownLocation: boolean;
  service: "cleaning" | "candle" | "flowers" | null;
  date: string;
  notes: string;
};

export default function OrderPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [orderData, setOrderData] = useState<OrderData>({
    city: "",
    cemetery: "",
    deceasedName: "",
    unknownLocation: false,
    service: null,
    date: "",
    notes: ""
  });

  const steps = ["Dane grobu", "Wybór usługi", "Termin i uwagi", "Podsumowanie"];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    sessionStorage.setItem("lastOrder", JSON.stringify(orderData));
    navigate("/moje-zlecenia");
  };

  const services = [
    { id: "cleaning", name: "Porządkowanie", desc: "Umycie pomnika, usunięcie starych zniczy", price: "150 zł" },
    { id: "candle", name: "Znicz", desc: "Zapalenie znicza na grobie", price: "50 zł" },
    { id: "flowers", name: "Kwiaty", desc: "Złożenie świeżego bukietu", price: "120 zł" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-pp-background">
      <Navbar />
      <div className="flex-1 py-12">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Zamów usługę</h1>
            <p className="text-gray-600 mb-8">Wypełnij formularz, aby zamówić opiekę nad grobem</p>

            <div className="mb-8">
              <Stepper currentStep={currentStep} totalSteps={4} steps={steps} />
            </div>

            <Card className="mb-6">
              {/* Step 1: Grave Data */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Dane grobu</h2>
                  <div className="space-y-6">
                    <Input
                      label="Miejscowość"
                      placeholder="np. Kraków"
                      value={orderData.city}
                      onChange={(e) => setOrderData({ ...orderData, city: e.target.value })}
                    />
                    <Input
                      label="Nazwa cmentarza"
                      placeholder="np. Cmentarz Rakowicki"
                      value={orderData.cemetery}
                      onChange={(e) => setOrderData({ ...orderData, cemetery: e.target.value })}
                    />
                    <Input
                      label="Imię i nazwisko zmarłego"
                      placeholder="np. Jan Kowalski"
                      value={orderData.deceasedName}
                      onChange={(e) => setOrderData({ ...orderData, deceasedName: e.target.value })}
                    />
                    <div className="flex items-start gap-3 p-4 bg-pp-background rounded-[8px]">
                      <input
                        type="checkbox"
                        id="unknown"
                        checked={orderData.unknownLocation}
                        onChange={(e) => setOrderData({ ...orderData, unknownLocation: e.target.checked })}
                        className="mt-1 w-5 h-5 accent-pp-accent cursor-pointer flex-shrink-0"
                      />
                      <label htmlFor="unknown" className="text-sm text-gray-600 cursor-pointer">
                        Nie znam dokładnej lokalizacji grobu (parafia pomoże w zlokalizowaniu)
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Service Selection */}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Wybór usługi</h2>
                  <div className="space-y-4">
                    {services.map((service) => (
                      <Card
                        key={service.id}
                        selected={orderData.service === service.id}
                        onClick={() => setOrderData({ ...orderData, service: service.id as any })}
                        className="relative"
                      >
                        {orderData.service === service.id && (
                          <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-pp-accent flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                        )}
                        <h3 className="text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{service.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{service.desc}</p>
                        <p className="text-lg font-semibold text-pp-accent">{service.price}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Date and Notes */}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Termin i uwagi</h2>
                  <div className="space-y-6">
                    <Input
                      label="Preferowany termin realizacji"
                      type="date"
                      value={orderData.date}
                      onChange={(e) => setOrderData({ ...orderData, date: e.target.value })}
                    />
                    <div>
                      <label className="block mb-2 text-sm font-medium text-pp-text">
                        Dodatkowe uwagi
                      </label>
                      <textarea
                        className="w-full px-4 py-3 min-h-[120px] bg-white border border-pp-border rounded-[8px] text-pp-text placeholder:text-gray-400 transition-all focus:outline-none focus:ring-2 focus:ring-pp-accent focus:border-transparent hover:border-pp-accent/50"
                        rows={4}
                        placeholder="Opcjonalne uwagi dla wykonawcy..."
                        value={orderData.notes}
                        onChange={(e) => setOrderData({ ...orderData, notes: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Summary */}
              {currentStep === 4 && (
                <div>
                  <h2 className="text-xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Podsumowanie</h2>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Lokalizacja</p>
                      <p className="font-medium">{orderData.cemetery}, {orderData.city}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Zmarły</p>
                      <p className="font-medium">{orderData.deceasedName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Usługa</p>
                      <p className="font-medium">
                        {services.find(s => s.id === orderData.service)?.name || "-"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Termin</p>
                      <p className="font-medium">{orderData.date || "Do ustalenia"}</p>
                    </div>
                    {orderData.notes && (
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Uwagi</p>
                        <p className="font-medium">{orderData.notes}</p>
                      </div>
                    )}
                  </div>
                  <div className="border-t border-pp-border pt-6 mt-6">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium">Do zapłaty</span>
                      <span className="text-2xl font-semibold text-pp-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {services.find(s => s.id === orderData.service)?.price || "0 zł"}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </Card>

            {/* Navigation */}
            <div className="flex gap-4 justify-end">
              {currentStep > 1 && (
                <Button variant="secondary" onClick={handleBack} className="min-w-[140px]">
                  Wstecz
                </Button>
              )}
              {currentStep < 4 ? (
                <Button onClick={handleNext} className="min-w-[140px]">
                  Dalej
                </Button>
              ) : (
                <Button onClick={handleSubmit} className="min-w-[180px]">
                  Zamów i zapłać
                </Button>
              )}
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}