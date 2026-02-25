import { useNavigate } from "react-router";
import { Container } from "../../components/pp/Container";
import { Card } from "../../components/pp/Card";
import { StatusChip } from "../../components/pp/StatusChip";
import { Button } from "../../components/pp/Button";
import { Navbar } from "../../components/pp/Navbar";
import { Footer } from "../../components/pp/Footer";

export default function ExecutorDashboardPage() {
  const navigate = useNavigate();

  const orders = [
    {
      id: 101,
      cemetery: "Cmentarz Rakowicki, Kraków",
      deceased: "Jan Kowalski",
      service: "Porządkowanie",
      date: "2026-03-15",
      status: "w-trakcie" as const
    },
    {
      id: 102,
      cemetery: "Cmentarz Rakowicki, Kraków",
      deceased: "Maria Nowak",
      service: "Znicz",
      date: "2026-03-18",
      status: "nowe" as const
    },
    {
      id: 103,
      cemetery: "Cmentarz Salwatorski, Kraków",
      deceased: "Piotr Wiśniewski",
      service: "Kwiaty",
      date: "2026-03-10",
      status: "zakonczone" as const
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 py-12">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl mb-2">Panel wykonawcy</h1>
            <p className="text-gray-600 mb-8">Zarządzaj swoimi zleceniami</p>

            <div className="grid gap-4">
              {orders.map((order) => (
                <Card
                  key={order.id}
                  onClick={() => navigate(`/panel-wykonawcy/zlecenie/${order.id}`)}
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
                      {order.status === "nowe" ? "Przyjmij" : "Zobacz szczegóły"}
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