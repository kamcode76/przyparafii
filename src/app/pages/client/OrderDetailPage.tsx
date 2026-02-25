import { useNavigate, useParams } from "react-router";
import { Container } from "../../components/pp/Container";
import { Button } from "../../components/pp/Button";
import { Card } from "../../components/pp/Card";
import { StatusChip } from "../../components/pp/StatusChip";
import { TimelineStep } from "../../components/pp/TimelineStep";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Star } from "lucide-react";
import { useState } from "react";
import { Navbar } from "../../components/pp/Navbar";
import { Footer } from "../../components/pp/Footer";

export default function OrderDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);

  const order = {
    id: id,
    cemetery: "Cmentarz Rakowicki, Kraków",
    deceased: "Jan Kowalski",
    service: "Porządkowanie",
    date: "2026-03-15",
    status: "zakonczone" as const,
    price: "150 zł",
    executor: "Anna Kowalska",
    beforePhoto: "https://images.unsplash.com/photo-1758383965361-ee39f78b9d38?w=600&q=80",
    afterPhoto: "https://images.unsplash.com/photo-1630642096166-27ed5b8ea5b7?w=600&q=80"
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
              onClick={() => navigate("/moje-zlecenia")}
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
                  <p className="text-sm text-gray-600 mb-1">Data realizacji</p>
                  <p className="font-medium">{order.date}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Wykonawca</p>
                  <p className="font-medium">{order.executor}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Cena</p>
                  <p className="font-medium text-pp-accent">{order.price}</p>
                </div>
              </div>
            </Card>

            {/* Timeline */}
            <Card className="mb-8">
              <h2 className="text-xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Status realizacji</h2>
              <div>
                <TimelineStep label="Zlecenie przyjęte" completed={true} />
                <TimelineStep label="W trakcie realizacji" completed={true} />
                <TimelineStep label="Zakończone" completed={true} isLast />
              </div>
            </Card>

            {/* Photos */}
            <Card className="mb-8">
              <h2 className="text-xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Dokumentacja fotograficzna
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-3">Przed</p>
                  <ImageWithFallback
                    src={order.beforePhoto}
                    alt="Przed"
                    className="rounded-[8px] w-full h-64 object-cover border border-pp-border"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-3">Po</p>
                  <ImageWithFallback
                    src={order.afterPhoto}
                    alt="Po"
                    className="rounded-[8px] w-full h-64 object-cover border border-pp-border"
                  />
                </div>
              </div>
            </Card>

            {/* Rating */}
            {order.status === "zakonczone" && (
              <Card>
                <h2 className="text-xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Oceń wykonawcę</h2>
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          star <= rating
                            ? "fill-pp-accent text-pp-accent"
                            : "text-gray-300 hover:text-pp-accent/50"
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <textarea
                  className="w-full px-4 py-3 min-h-[100px] bg-white border border-pp-border rounded-[8px] text-pp-text placeholder:text-gray-400 transition-all focus:outline-none focus:ring-2 focus:ring-pp-accent focus:border-transparent hover:border-pp-accent/50 mb-4"
                  rows={3}
                  placeholder="Opcjonalna opinia o wykonawcy..."
                />
                <Button>Wyślij ocenę</Button>
              </Card>
            )}
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}