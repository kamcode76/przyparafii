import { useNavigate } from "react-router";
import { Container } from "../../components/pp/Container";
import { Button } from "../../components/pp/Button";
import { Card } from "../../components/pp/Card";
import { StatusChip } from "../../components/pp/StatusChip";
import { Navbar } from "../../components/pp/Navbar";
import { Footer } from "../../components/pp/Footer";

export default function MyOrdersPage() {
  const navigate = useNavigate();

  const orders = [
    {
      id: 1,
      cemetery: "Cmentarz Rakowicki, Kraków",
      deceased: "Jan Kowalski",
      service: "Porządkowanie",
      date: "2026-03-15",
      status: "zakonczone" as const
    },
    {
      id: 2,
      cemetery: "Cmentarz Centralny, Szczecin",
      deceased: "Maria Nowak",
      service: "Znicz",
      date: "2026-03-10",
      status: "w-trakcie" as const
    },
    {
      id: 3,
      cemetery: "Cmentarz Powązkowski, Warszawa",
      deceased: "Piotr Wiśniewski",
      service: "Kwiaty",
      date: "2026-03-05",
      status: "nowe" as const
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 py-12">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
              <div>
                <h1 className="text-3xl mb-2">Moje zlecenia</h1>
                <p className="text-gray-600">Historia i status Twoich zamówień</p>
              </div>
              <Button onClick={() => navigate("/zamow")}>
                Nowe zlecenie
              </Button>
            </div>

            <div className="space-y-4">
              {orders.map((order) => (
                <Card
                  key={order.id}
                  onClick={() => navigate(`/zlecenie/${order.id}`)}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-medium text-pp-text" style={{ fontFamily: "'Playfair Display', serif" }}>
                          Zlecenie #{order.id}
                        </h3>
                        <StatusChip status={order.status} />
                      </div>
                      <p className="text-sm text-gray-600 mb-1">
                        {order.cemetery}
                      </p>
                      <p className="text-sm text-gray-600 mb-1">
                        Zmarły: {order.deceased}
                      </p>
                      <p className="text-sm text-gray-600">
                        Usługa: {order.service} • Termin: {order.date}
                      </p>
                    </div>
                    <Button variant="secondary" size="sm">
                      Zobacz szczegóły
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}