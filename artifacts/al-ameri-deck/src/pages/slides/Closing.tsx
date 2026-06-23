const base = import.meta.env.BASE_URL;

export default function Closing() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg font-body text-text">
      <img
        src={`${base}photos/malacca.jpg`}
        crossOrigin="anonymous"
        alt="Malacca Straits Mosque at sunset"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/75" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-[10vw]">
        <div className="flex items-center gap-[1.4vw] text-bg/80 mb-[3vh]">
          <span className="w-[5vw] h-px bg-bg/50" />
          <span className="text-[2.6vw] leading-none">★</span>
          <span className="w-[5vw] h-px bg-bg/50" />
        </div>

        <h2 className="font-display font-normal text-[6.4vw] leading-[1.05] tracking-[-0.01em] text-bg mb-[3vh]">
          Plan Your Journey
        </h2>

        <p className="text-[3vw] font-light leading-[1.5] text-bg/85 max-w-[52vw] text-pretty">
          Discover Malaysia with Al-Ameri — in Arabic, in English, and with care
          for every traveler.
        </p>
      </div>

      <div className="absolute bottom-[4vh] left-[6vw] right-[6vw] z-10 flex justify-between items-center">
        <div className="flex items-center gap-[1.5vw]">
          <span className="text-[2.4vw] font-medium tracking-[0.05em] text-bg">al-ameri.travel</span>
          <span className="w-px h-[3vh] bg-bg/40" />
          <span className="font-display italic text-[2.4vw] text-bg/75">Curated Journeys to Malaysia</span>
        </div>
        <span className="text-[2.2vw] font-medium text-bg/80">10</span>
      </div>
    </div>
  );
}
