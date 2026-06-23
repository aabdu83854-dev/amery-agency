const base = import.meta.env.BASE_URL;

export default function Tourism() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg font-body text-text flex flex-col">
      <div className="pt-[6vh] px-[6vw] flex justify-between items-end">
        <div className="flex flex-col gap-[1.4vh]">
          <div className="flex items-center gap-[1.2vw] text-accent">
            <span className="text-[2.2vw] leading-none">★</span>
            <span className="text-[2.2vw] font-semibold tracking-[0.18em] uppercase">
              Al-Ameri Travel
            </span>
            <span className="w-[4vw] h-px bg-accent/50" />
          </div>
          <h2 className="font-display font-normal text-[5vw] leading-[1.05] tracking-[-0.01em] text-primary">
            Twenty Destinations
          </h2>
        </div>
        <p className="text-[2.4vw] leading-[1.4] text-muted max-w-[30vw] text-right font-light">
          Island beaches, highland tea country, and historic mosques.
        </p>
      </div>

      <div className="flex-1 min-h-0 px-[6vw] pt-[3.5vh] pb-[8vh] grid grid-cols-3 grid-rows-2 gap-[1.6vw]">
        <div className="relative rounded-[0.8vw] overflow-hidden border border-accent/15">
          <img src={`${base}photos/langkawi.png`} crossOrigin="anonymous" alt="Langkawi beach" className="w-full h-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-primary/85 to-transparent" />
          <span className="absolute bottom-[1.4vh] left-[1.4vw] text-[2.4vw] font-medium text-bg">Langkawi</span>
        </div>
        <div className="relative rounded-[0.8vw] overflow-hidden border border-accent/15">
          <img src={`${base}photos/perhentian.jpg`} crossOrigin="anonymous" alt="Perhentian Islands" className="w-full h-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-primary/85 to-transparent" />
          <span className="absolute bottom-[1.4vh] left-[1.4vw] text-[2.4vw] font-medium text-bg">Perhentian Islands</span>
        </div>
        <div className="relative rounded-[0.8vw] overflow-hidden border border-accent/15">
          <img src={`${base}photos/cameron.png`} crossOrigin="anonymous" alt="Cameron Highlands tea estate" className="w-full h-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-primary/85 to-transparent" />
          <span className="absolute bottom-[1.4vh] left-[1.4vw] text-[2.4vw] font-medium text-bg">Cameron Highlands</span>
        </div>
        <div className="relative rounded-[0.8vw] overflow-hidden border border-accent/15">
          <img src={`${base}photos/penang.jpg`} crossOrigin="anonymous" alt="Penang heritage street art" className="w-full h-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-primary/85 to-transparent" />
          <span className="absolute bottom-[1.4vh] left-[1.4vw] text-[2.4vw] font-medium text-bg">Penang</span>
        </div>
        <div className="relative rounded-[0.8vw] overflow-hidden border border-accent/15">
          <img src={`${base}photos/putra-mosque.jpg`} crossOrigin="anonymous" alt="Putra Mosque, Putrajaya" className="w-full h-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-primary/85 to-transparent" />
          <span className="absolute bottom-[1.4vh] left-[1.4vw] text-[2.4vw] font-medium text-bg">Putrajaya</span>
        </div>
        <div className="relative rounded-[0.8vw] overflow-hidden border border-accent/15">
          <img src={`${base}photos/malacca.jpg`} crossOrigin="anonymous" alt="Malacca Straits Mosque" className="w-full h-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-primary/85 to-transparent" />
          <span className="absolute bottom-[1.4vh] left-[1.4vw] text-[2.4vw] font-medium text-bg">Malacca</span>
        </div>
      </div>

      <div className="absolute bottom-[3vh] left-[6vw] right-[6vw] flex justify-between items-center">
        <span className="text-[2.2vw] font-medium tracking-[0.05em] text-text/80">al-ameri.travel</span>
        <span className="text-[2.2vw] font-medium text-accent">05</span>
      </div>
    </div>
  );
}
