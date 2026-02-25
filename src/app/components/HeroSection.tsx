export function HeroSection() {
  return (
    <div className="flex-1 bg-[#1B4332] flex flex-col items-start justify-center px-6 py-12 md:px-16 md:py-16 xl:px-20 xl:py-20">
      <div className="max-w-xl">
        <h1
          className="text-white mb-8 text-4xl md:text-5xl"
          style={{
            fontFamily: "'Playfair Display', serif",
            lineHeight: "1.2",
            fontWeight: "700",
          }}
        >
          Zadbaj o pamięć bliskich z drugiego krańca Polski.
        </h1>

        <p
          className="text-white/90 mb-12"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.125rem",
            lineHeight: "1.75",
            fontWeight: "400",
          }}
        >
          Zleć uporządkowanie grobu zaufanym osobom z lokalnej parafii. Proste
          zamówienie, realizacja na miejscu, jasne potwierdzenie z
          dokumentacją zdjęciową.
        </p>

        <button
          className="bg-[#C9A961] text-white px-10 py-4 rounded-lg hover:bg-[#B89851] transition-all duration-300 shadow-lg hover:shadow-xl"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.125rem",
            fontWeight: "600",
          }}
        >
          Jak to działa?
        </button>
      </div>
    </div>
  );
}
