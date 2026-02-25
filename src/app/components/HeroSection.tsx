export function HeroSection() {
  return (
    <div className="flex-1 bg-[#1B4332] flex flex-col items-start justify-center p-16 xl:p-20">
      <div className="max-w-xl">
        <h1 
          className="text-white mb-8"
          style={{ 
            fontFamily: "'Playfair Display', serif",
            fontSize: "3.5rem",
            lineHeight: "1.2",
            fontWeight: "700"
          }}
        >
          Zadbaj o pamięć bliskich z drugiego krańca Polski
        </h1>
        
        <p 
          className="text-white/90 mb-12"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.125rem",
            lineHeight: "1.75",
            fontWeight: "400"
          }}
        >
          PrzyParafii to nowoczesna platforma, która łączy rodziny z lokalnymi opiekunami grobów. Dzięki współpracy z parafiami i lokalnymi wolontariuszami, możesz zadbać o miejsce spoczynku bliskich, niezależnie od tego, gdzie się znajdujesz.
        </p>
        
        <button 
          className="bg-[#C9A961] text-white px-10 py-4 rounded-lg hover:bg-[#B89851] transition-all duration-300 shadow-lg hover:shadow-xl"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.125rem",
            fontWeight: "600"
          }}
        >
          Jak to działa?
        </button>
      </div>
    </div>
  );
}
