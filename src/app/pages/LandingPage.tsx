import { useNavigate } from "react-router";
import { Navbar } from "../components/pp/Navbar";
import { Footer } from "../components/pp/Footer";
import { Container } from "../components/pp/Container";
import { Button } from "../components/pp/Button";
import { FAQAccordion } from "../components/pp/FAQAccordion";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function LandingPage() {
  const navigate = useNavigate();

  const faqItems = [
    {
      question: "Jak mogę być pewny, że usługa zostanie wykonana?",
      answer: "Współpracujemy wyłącznie z zaufanymi lokalnymi opiekunami rekomendowanymi przez parafie. Po realizacji otrzymasz zdjęcia przed i po wykonaniu usługi."
    },
    {
      question: "Jak długo trwa realizacja zlecenia?",
      answer: "Standardowo zlecenie realizowane jest w ciągu 7-14 dni od potwierdzenia. W przypadku pilnych zleceń możliwa jest szybsza realizacja."
    },
    {
      question: "Co jeśli nie znam dokładnej lokalizacji grobu?",
      answer: "Nie ma problemu. Parafia pomoże nam zlokalizować grób na podstawie danych zmarłego i orientacyjnej lokalizacji."
    },
    {
      question: "Czy mogę zamówić opiekę cykliczną?",
      answer: "Tak, oferujemy pakiety cyklicznej opieki - możesz wybrać częstotliwość wizyt dostosowaną do Twoich potrzeb."
    },
    {
      question: "Jak wygląda proces płatności?",
      answer: "Płatność następuje po potwierdzeniu możliwości realizacji zlecenia. Akceptujemy przelewy bankowe oraz płatności online."
    },
    {
      question: "Co się dzieje, jeśli pogoda uniemożliwi realizację?",
      answer: "W przypadku niekorzystnych warunków atmosferycznych skontaktujemy się z Tobą, aby ustalić nowy termin realizacji."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section - Zieleń jako hero background */}
      <section className="py-16 md:py-24 bg-pp-primary text-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl mb-6 leading-tight text-[#ffffff]">
                Zadbaj o pamięć bliskich z drugiego krańca Polski
              </h1>
              <p className="text-lg mb-8 leading-relaxed text-white/90">
                Nie możesz odwiedzić grobu bliskiej osoby? PrzyParafii łączy rodziny
                z lokalnymi opiekunami we współpracy z parafiami.
              </p>
              <Button size="lg" onClick={() => navigate("/zamow")}>
                Zamów opiekę nad grobem
              </Button>
            </div>
            <div className="flex justify-center">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1508090919348-87d0042a814b?w=600&q=80"
                alt="Zadbany grób z kwiatami"
                className="rounded-[8px] w-full max-w-md shadow-2xl"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Why People Need This */}
      <section className="py-16 bg-white">
        <Container>
          <h2 className="text-3xl text-center mb-12">Dlaczego ludzie tego potrzebują</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              
              <h3 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                Emigracja
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Mieszkasz za granicą i nie możesz regularnie odwiedzać grobu bliskiej osoby
              </p>
            </div>
            <div className="text-center p-6">
              
              <h3 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                Odległość
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Grób znajduje się setki kilometrów od Twojego miejsca zamieszkania
              </p>
            </div>
            <div className="text-center p-6">
              
              <h3 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                Zdrowie i czas
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Stan zdrowia lub obowiązki zawodowe uniemożliwiają częste wyjazdy
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-pp-primary/5">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-semibold text-pp-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>250+</p>
              <p className="text-sm text-gray-600">Zrealizowanych<br/>zleceń</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-pp-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>98%</p>
              <p className="text-sm text-gray-600">Zadowolonych<br/>klientów</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-pp-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>45</p>
              <p className="text-sm text-gray-600">Współpracujących<br/>parafii</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-pp-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>3-7 dni</p>
              <p className="text-sm text-gray-600">Średni czas<br/>realizacji</p>
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section id="jak-to-dziala" className="py-16 md:py-24">
        <Container>
          <h2 className="text-3xl text-center mb-12">
            Jak to działa
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-[8px] p-8 border border-pp-border hover:border-pp-accent/50 transition-all hover:shadow-lg">
              <div className="w-12 h-12 rounded-full bg-pp-accent text-white flex items-center justify-center text-xl font-semibold mb-4">
                1
              </div>
              <h3 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                Zamawiasz
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Wypełniasz formularz z danymi lokalizacji grobu i wybierasz zakres usługi
              </p>
            </div>
            <div className="bg-white rounded-[8px] p-8 border border-pp-border hover:border-pp-accent/50 transition-all hover:shadow-lg">
              <div className="w-12 h-12 rounded-full bg-pp-accent text-white flex items-center justify-center text-xl font-semibold mb-4">
                2
              </div>
              <h3 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                Realizacja lokalnie
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Zaufany opiekun z parafii wykonuje usługę w umówionym terminie
              </p>
            </div>
            <div className="bg-white rounded-[8px] p-8 border border-pp-border hover:border-pp-accent/50 transition-all hover:shadow-lg">
              <div className="w-12 h-12 rounded-full bg-pp-accent text-white flex items-center justify-center text-xl font-semibold mb-4">
                3
              </div>
              <h3 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                Zdjęcia przed/po
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Otrzymujesz dokumentację fotograficzną potwierdzającą wykonanie zlecenia
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Confirmation */}
      <section id="potwierdzenie" className="py-16 bg-white">
        <Container>
          <h2 className="text-3xl text-center mb-12">
            Dokumentacja fotograficzna
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-3">Przed</p>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758383965361-ee39f78b9d38?w=600&q=80"
                  alt="Przed uporządkowaniem"
                  className="rounded-[8px] w-full h-64 object-cover border border-pp-border"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-3">Po</p>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1630642096166-27ed5b8ea5b7?w=600&q=80"
                  alt="Po uporządkowaniu"
                  className="rounded-[8px] w-full h-64 object-cover border border-pp-border"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Church Role */}
      <section id="kosciol" className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl mb-6">
              Rola parafii
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Współpracujemy z lokalnymi parafiami, które wspierają nas w budowaniu zaufania
              i rekomendują sprawdzonych opiekunów.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Parafia pomaga także w lokalizacji grobu, gdy rodzina nie zna dokładnego
              położenia miejsca pochówku.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-white">
        <Container>
          <h2 className="text-3xl text-center mb-12">
            Najczęściej zadawane pytania
          </h2>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}