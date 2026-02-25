import { Link, useNavigate } from "react-router";
import { Container } from "./Container";
import { Button } from "./Button";

export function Navbar() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    // Only scroll if we're on the landing page
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to landing page first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-pp-white border-b border-pp-border shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link 
            to="/" 
            className="text-xl md:text-2xl text-pp-primary transition-colors hover:text-pp-accent"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
          >
            PrzyParafii
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("jak-to-dziala")}
              className="text-pp-text hover:text-pp-accent transition-colors font-medium"
            >
              Jak to działa
            </button>
            <button
              onClick={() => scrollToSection("potwierdzenie")}
              className="text-pp-text hover:text-pp-accent transition-colors font-medium"
            >
              Potwierdzenie
            </button>
            <button
              onClick={() => scrollToSection("kosciol")}
              className="text-pp-text hover:text-pp-accent transition-colors font-medium"
            >
              Kościół
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-pp-text hover:text-pp-accent transition-colors font-medium"
            >
              FAQ
            </button>
          </div>

          <Button onClick={() => navigate("/zamow")}>
            Zamów
          </Button>
        </div>
      </Container>
    </nav>
  );
}