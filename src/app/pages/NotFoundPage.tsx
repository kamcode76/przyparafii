import { useNavigate } from "react-router";
import { Container } from "../components/pp/Container";
import { Button } from "../components/pp/Button";
import { Navbar } from "../components/pp/Navbar";
import { Footer } from "../components/pp/Footer";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-12">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl mb-4 text-pp-primary">404</h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-pp-text">
              Strona nie została znaleziona
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Przykro nam, ale strona której szukasz nie istnieje lub została przeniesiona.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate("/")}>
                Strona główna
              </Button>
              <Button size="lg" variant="secondary" onClick={() => navigate("/zamow")}>
                Zamów usługę
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
