import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Container } from "../../components/pp/Container";
import { Button } from "../../components/pp/Button";
import { Card } from "../../components/pp/Card";
import { StatusChip } from "../../components/pp/StatusChip";
import { Check, Upload } from "lucide-react";
import { Navbar } from "../../components/pp/Navbar";
import { Footer } from "../../components/pp/Footer";

export default function ExecutorOrderDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [checklist, setChecklist] = useState({
    cleaned: false,
    oldCandlesRemoved: false,
    newCandlePlaced: false,
    photosTaken: false
  });
  const [beforePhoto, setBeforePhoto] = useState<string | null>(null);
  const [afterPhoto, setAfterPhoto] = useState<string | null>(null);

  const order = {
    id: id,
    cemetery: "Cmentarz Rakowicki, Kraków",
    deceased: "Jan Kowalski",
    service: "Porządkowanie",
    date: "2026-03-15",
    status: "w-trakcie" as const,
    price: "150 zł",
    client: "Anna Nowak",
    notes: "Proszę zapalić znicz przy okazji"
  };

  const handleChecklistChange = (key: keyof typeof checklist) => {
    setChecklist({ ...checklist, [key]: !checklist[key] });
  };

  const handlePhotoUpload = (type: "before" | "after", file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (type === "before") {
        setBeforePhoto(e.target?.result as string);
      } else {
        setAfterPhoto(e.target?.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleComplete = () => {
    if (beforePhoto && afterPhoto && Object.values(checklist).every(v => v)) {
      alert("Zlecenie zostało zakończone!");
      navigate("/panel-wykonawcy");
    } else {
      alert("Uzupełnij checklistę i dodaj zdjęcia przed/po");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 py-12">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Button 
              variant="secondary" 
              size="sm" 
              onClick={() => navigate("/panel-wykonawcy")}
              className="mb-6"
            >
              ← Powrót do listy
            </Button>

            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-3xl mb-2">
                  Zlecenie #{order.id}
                </h1>
                <p className="text-gray-600">{order.cemetery}</p>
              </div>
              <StatusChip status={order.status} />
            </div>

            {/* Order Details */}
            <Card className="mb-8">
              <h2 className="text-xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Szczegóły zlecenia</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Zmarły</p>
                  <p className="font-medium">{order.deceased}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Usługa</p>
                  <p className="font-medium">{order.service}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Termin realizacji</p>
                  <p className="font-medium">{order.date}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Klient</p>
                  <p className="font-medium">{order.client}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-600 mb-1">Uwagi klienta</p>
                  <p className="font-medium">{order.notes}</p>
                </div>
              </div>
            </Card>

            {/* Checklist */}
            <Card className="mb-8">
              <h2 className="text-xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Checklista</h2>
              <div className="space-y-3">
                {Object.entries({
                  cleaned: "Umyty pomnik",
                  oldCandlesRemoved: "Usunięte stare znicze",
                  newCandlePlaced: "Zapalony nowy znicz",
                  photosTaken: "Wykonane zdjęcia przed i po"
                }).map(([key, label]) => (
                  <label
                    key={key}
                    className="flex items-center gap-3 p-4 bg-pp-background rounded-[8px] cursor-pointer hover:bg-pp-primary/5 transition-colors min-h-[64px]"
                  >
                    <input
                      type="checkbox"
                      checked={checklist[key as keyof typeof checklist]}
                      onChange={() => handleChecklistChange(key as keyof typeof checklist)}
                      className="w-5 h-5 accent-pp-accent cursor-pointer"
                    />
                    <span className="font-medium text-pp-text flex-1">{label}</span>
                    {checklist[key as keyof typeof checklist] && (
                      <Check className="w-5 h-5 text-pp-accent" />
                    )}
                  </label>
                ))}
              </div>
            </Card>

            {/* Photo Upload */}
            <Card className="mb-8">
              <h2 className="text-xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Dokumentacja fotograficzna
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-3">Zdjęcie przed</p>
                  {beforePhoto ? (
                    <img
                      src={beforePhoto}
                      alt="Przed"
                      className="rounded-[8px] w-full h-64 object-cover mb-3 border border-pp-border"
                    />
                  ) : (
                    <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-pp-border rounded-[8px] cursor-pointer hover:bg-pp-primary/5 hover:border-pp-accent/50 transition-all">
                      <Upload className="w-12 h-12 text-gray-400 mb-2" />
                      <span className="text-sm text-gray-500">Dodaj zdjęcie</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handlePhotoUpload("before", file);
                        }}
                      />
                    </label>
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-3">Zdjęcie po</p>
                  {afterPhoto ? (
                    <img
                      src={afterPhoto}
                      alt="Po"
                      className="rounded-[8px] w-full h-64 object-cover mb-3 border border-pp-border"
                    />
                  ) : (
                    <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-pp-border rounded-[8px] cursor-pointer hover:bg-pp-primary/5 hover:border-pp-accent/50 transition-all">
                      <Upload className="w-12 h-12 text-gray-400 mb-2" />
                      <span className="text-sm text-gray-500">Dodaj zdjęcie</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handlePhotoUpload("after", file);
                        }}
                      />
                    </label>
                  )}
                </div>
              </div>
            </Card>

            {/* Complete Button */}
            <Button 
              size="lg" 
              onClick={handleComplete}
              className="w-full"
              disabled={!beforePhoto || !afterPhoto || !Object.values(checklist).every(v => v)}
            >
              Zakończ zlecenie
            </Button>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}