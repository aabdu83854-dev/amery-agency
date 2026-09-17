const base = import.meta.env.BASE_URL;

export default function Title() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg font-body text-text">
      <img
        src={`${base}photos/malacca.jpg`}
        crossOrigin="anonymous"
        alt="Malacca Straits Mosque at sunset"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top right, rgba(245,238,228,0.94) 0%, rgba(245,238,228,0.62) 42%, rgba(245,238,228,0.05) 72%)",
        }}
      />

      <div className="absolute bottom-[8vh] left-[6vw] z-10 w-[58vw] flex flex-col gap-[2.5vh]">
        <div className="flex items-center gap-[1.2vw] text-accent">
          <span className="text-[2.4vw] leading-none">★</span>
          <span className="text-[2.2vw] font-semibold tracking-[0.18em] uppercase">
            Al-Ameri Travel
          </span>
          <span className="w-[4vw] h-px bg-accent/50" />
          <span className="text-[2.2vw] font-light text-text/70">Malaysia · 2026</span>
        </div>

        <h1 className="font-display font-normal text-[7.2vw] leading-[1.05] tracking-[-0.02em] text-primary text-balance">
          Al-Ameri Travel Agency
        </h1>

        <p className="text-[3vw] font-light leading-[1.45] text-text/85 max-w-[46vw] text-pretty">
          A bilingual gateway to Malaysia, crafted for Arab travelers seeking
          warm, Muslim-friendly journeys.
        </p>

        <div className="flex items-center gap-[1.5vw] mt-[1vh]">
          <span className="text-[2.4vw] font-medium tracking-[0.05em] text-text">
            al-ameri.travel
          </span>
          <span className="w-px h-[3vh] bg-accent/40" />
          <span className="font-display italic text-[2.4vw] text-accent">
            Curated Journeys to Malaysia
          </span>
        </div>
      </div>
    </div>
  );
}
