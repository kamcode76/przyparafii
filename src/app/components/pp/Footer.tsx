import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="bg-pp-primary text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#ffffff]" style={{ fontFamily: "'Playfair Display', serif" }}>
              PrzyParafii
            </h4>
            <p className="text-sm text-white/80 leading-relaxed">
              Zdalna opieka nad grobami we współpracy z lokalnymi parafiami.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#ffffff]">
              Kontakt
            </h4>
            <p className="text-sm text-white/80">
              Email: kontakt@przyparafii.pl
            </p>
            <p className="text-sm text-white/80">
              Tel: +48 123 456 789
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#ffffff]">
              Informacje
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="hover:text-pp-accent transition-colors cursor-pointer">Regulamin</li>
              <li className="hover:text-pp-accent transition-colors cursor-pointer">Polityka prywatności</li>
              <li className="hover:text-pp-accent transition-colors cursor-pointer">Jak to działa</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white/60">
          © 2026 PrzyParafii. Wszelkie prawa zastrzeżone.
        </div>
      </Container>
    </footer>
  );
}