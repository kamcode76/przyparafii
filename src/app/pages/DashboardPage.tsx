import { FileText, User, Settings, CheckCircle2, Home } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useNavigate } from "react-router";

export default function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#F9F9F8" }}>
      {/* Sidebar */}
      <div 
        className="w-64 p-6 flex flex-col"
        style={{ backgroundColor: "#FFFFFF", borderRight: "1px solid #E2DED5" }}
      >
        {/* Logo */}
        <div className="mb-12">
          <h3 
            style={{ 
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.75rem",
              fontWeight: "700",
              color: "#1B4332"
            }}
          >
            PrzyParafii
          </h3>
        </div>

        {/* Menu */}
        <nav className="space-y-2">
          <button 
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg"
            style={{ 
              backgroundColor: "#E8F5E9",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9375rem",
              fontWeight: "600",
              color: "#1B4332",
              border: "none",
              cursor: "pointer",
              textAlign: "left"
            }}
          >
            <FileText className="w-5 h-5" />
            Moje Zlecenia
          </button>
          <button 
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9375rem",
              fontWeight: "500",
              color: "#4A5568",
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
              textAlign: "left"
            }}
          >
            <User className="w-5 h-5" />
            Profil
          </button>
          <button 
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9375rem",
              fontWeight: "500",
              color: "#4A5568",
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
              textAlign: "left"
            }}
          >
            <Settings className="w-5 h-5" />
            Ustawienia
          </button>
        </nav>

        {/* Back to home link */}
        <div className="mt-auto pt-6 border-t" style={{ borderColor: "#E2DED5" }}>
          <button 
            onClick={() => navigate("/")}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.875rem",
              fontWeight: "500",
              color: "#4A5568",
              border: "1px solid #E2DED5",
              backgroundColor: "transparent",
              cursor: "pointer",
              textAlign: "left"
            }}
          >
            <Home className="w-4 h-4" />
            Powrót na stronę główną
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        <div className="max-w-5xl mx-auto">
          {/* Nagłówek zlecenia */}
          <div className="flex items-center justify-between mb-8">
            <h2 
              style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "#1A1F2B"
              }}
            >
              Zlecenie #1042
            </h2>
            <div 
              className="px-5 py-2 rounded-full flex items-center gap-2"
              style={{ 
                backgroundColor: "#E8F5E9",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                fontWeight: "600",
                color: "#1B4332"
              }}
            >
              <CheckCircle2 className="w-5 h-5" />
              Zrealizowane
            </div>
          </div>

          {/* Order details card */}
          <div 
            className="bg-white rounded-xl p-8 mb-8"
            style={{ boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.06)" }}
          >
            <div className="grid md:grid-cols-3 gap-6 mb-8">
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
                    fontSize: "1rem",
                    fontWeight: "500",
                    color: "#1A1F2B"
                  }}
                >
                  Cmentarz Rakowicki, Kraków
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
                    fontSize: "1rem",
                    fontWeight: "500",
                    color: "#1A1F2B"
                  }}
                >
                  Jan Kowalski
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
                  Data realizacji
                </p>
                <p 
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1rem",
                    fontWeight: "500",
                    color: "#1A1F2B"
                  }}
                >
                  18 lutego 2026
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-8">
              <h3 
                className="mb-4"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "#1A1F2B"
                }}
              >
                Status realizacji
              </h3>
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#E8F5E9" }}
                >
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: "#1B4332" }}
                  />
                </div>
                <div 
                  className="flex-1 h-2 rounded"
                  style={{ backgroundColor: "#E8F5E9" }}
                />
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#E8F5E9" }}
                >
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: "#1B4332" }}
                  />
                </div>
                <div 
                  className="flex-1 h-2 rounded"
                  style={{ backgroundColor: "#E8F5E9" }}
                />
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#E8F5E9" }}
                >
                  <CheckCircle2 className="w-6 h-6" style={{ color: "#1B4332" }} />
                </div>
              </div>
              <div className="flex justify-between mt-3">
                <span 
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8125rem",
                    color: "#4A5568"
                  }}
                >
                  Zlecone
                </span>
                <span 
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8125rem",
                    color: "#4A5568"
                  }}
                >
                  W trakcie
                </span>
                <span 
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8125rem",
                    color: "#1B4332",
                    fontWeight: "600"
                  }}
                >
                  Zakończone
                </span>
              </div>
            </div>
          </div>

          {/* Galeria Przed i Po */}
          <div>
            <h3 
              className="mb-6"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.75rem",
                fontWeight: "700",
                color: "#1A1F2B"
              }}
            >
              Dokumentacja fotograficzna
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p 
                  className="mb-3"
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9375rem",
                    fontWeight: "600",
                    color: "#4A5568"
                  }}
                >
                  Przed
                </p>
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1758383965361-ee39f78b9d38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZW1ldGVyeSUyMGdyYXZlJTIwZmxvd2VycyUyMHBlYWNlZnVsfGVufDF8fHx8MTc3MTk1NzY5OHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Przed uporządkowaniem"
                  className="w-full h-80 object-cover rounded-lg"
                  style={{ boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
                />
              </div>
              <div>
                <p 
                  className="mb-3"
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9375rem",
                    fontWeight: "600",
                    color: "#4A5568"
                  }}
                >
                  Po
                </p>
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1630642096166-27ed5b8ea5b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1lbW9yaWFsJTIwc3RvbmUlMjBtb251bWVudHxlbnwxfHx8fDE3NzE5NTc2OTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Po uporządkowaniu"
                  className="w-full h-80 object-cover rounded-lg"
                  style={{ boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
