import { FileText, User, Settings, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function View4Dashboard() {
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden relative"
      style={{ 
        boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.1)",
        aspectRatio: "16/10"
      }}
    >
      {/* Label */}
      <div 
        className="absolute top-4 left-4 z-10 px-3 py-1 rounded"
        style={{ 
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.75rem",
          fontWeight: "700",
          color: "#1B4332"
        }}
      >
        VIEW 4: PANEL KLIENTA
      </div>

      <div className="flex h-full">
        {/* Sidebar */}
        <div 
          className="w-48 p-4 flex flex-col"
          style={{ backgroundColor: "#FFFFFF", borderRight: "1px solid #E2DED5" }}
        >
          {/* Logo */}
          <div className="mb-6">
            <h3 
              style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.125rem",
                fontWeight: "700",
                color: "#1B4332"
              }}
            >
              PrzyParafii
            </h3>
          </div>

          {/* Menu */}
          <nav className="space-y-1">
            <button 
              className="w-full flex items-center gap-2 px-3 py-2 rounded-lg"
              style={{ 
                backgroundColor: "#E8F5E9",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8125rem",
                fontWeight: "600",
                color: "#1B4332"
              }}
            >
              <FileText className="w-4 h-4" />
              Moje Zlecenia
            </button>
            <button 
              className="w-full flex items-center gap-2 px-3 py-2 rounded-lg"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8125rem",
                fontWeight: "500",
                color: "#4A5568"
              }}
            >
              <User className="w-4 h-4" />
              Profil
            </button>
            <button 
              className="w-full flex items-center gap-2 px-3 py-2 rounded-lg"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8125rem",
                fontWeight: "500",
                color: "#4A5568"
              }}
            >
              <Settings className="w-4 h-4" />
              Ustawienia
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div 
          className="flex-1 p-6 overflow-auto"
          style={{ backgroundColor: "#F9F9F8" }}
        >
          {/* Nagłówek zlecenia */}
          <div className="flex items-center justify-between mb-4">
            <h2 
              style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "#1A1F2B"
              }}
            >
              Zlecenie #1042
            </h2>
            <div 
              className="px-3 py-1 rounded-full flex items-center gap-1.5"
              style={{ 
                backgroundColor: "#E8F5E9",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.6875rem",
                fontWeight: "600",
                color: "#1B4332"
              }}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              Zrealizowane
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <div 
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#E8F5E9" }}
              >
                <div 
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: "#1B4332" }}
                />
              </div>
              <div 
                className="flex-1 h-1 rounded"
                style={{ backgroundColor: "#E8F5E9" }}
              />
              <div 
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#E8F5E9" }}
              >
                <div 
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: "#1B4332" }}
                />
              </div>
              <div 
                className="flex-1 h-1 rounded"
                style={{ backgroundColor: "#E8F5E9" }}
              />
              <div 
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#E8F5E9" }}
              >
                <CheckCircle2 className="w-4 h-4" style={{ color: "#1B4332" }} />
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <span 
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.625rem",
                  color: "#4A5568"
                }}
              >
                Zlecone
              </span>
              <span 
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.625rem",
                  color: "#4A5568"
                }}
              >
                W trakcie
              </span>
              <span 
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.625rem",
                  color: "#1B4332",
                  fontWeight: "600"
                }}
              >
                Zakończone
              </span>
            </div>
          </div>

          {/* Galeria Przed i Po */}
          <div>
            <h3 
              className="mb-3"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                fontWeight: "600",
                color: "#1A1F2B"
              }}
            >
              Dokumentacja fotograficzna
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p 
                  className="mb-1.5"
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.6875rem",
                    fontWeight: "600",
                    color: "#4A5568"
                  }}
                >
                  Przed
                </p>
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1758383965361-ee39f78b9d38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZW1ldGVyeSUyMGdyYXZlJTIwZmxvd2VycyUyMHBlYWNlZnVsfGVufDF8fHx8MTc3MTk1NzY5OHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Przed uporządkowaniem"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <div>
                <p 
                  className="mb-1.5"
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.6875rem",
                    fontWeight: "600",
                    color: "#4A5568"
                  }}
                >
                  Po
                </p>
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1630642096166-27ed5b8ea5b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1lbW9yaWFsJTIwc3RvbmUlMjBtb251bWVudHxlbnwxfHx8fDE3NzE5NTc2OTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Po uporządkowaniu"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
