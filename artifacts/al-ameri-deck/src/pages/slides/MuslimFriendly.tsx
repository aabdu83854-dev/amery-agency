const base = import.meta.env.BASE_URL;

export default function MuslimFriendly() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg font-body text-text flex">
      <div className="w-[44vw] h-full relative">
        <img
          src={`${base}photos/putrajaya-lake.jpg`}
          crossOrigin="anonymous"
          alt="Putra Mosque reflected on Putrajaya lake at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-bg/30" />
      </div>

      <div className="flex-1 flex flex-col justify-center px-[5vw] py-[8vh]">
        <div className="flex items-center gap-[1.2vw] text-accent mb-[2vh]">
          <span className="text-[2.2vw] leading-none">★</span>
          <span className="text-[2.2vw] font-semibold tracking-[0.18em] uppercase">
            Al-Ameri Travel
          </span>
          <span className="w-[4vw] h-px bg-accent/50" />
        </div>
        <h2 className="font-display font-normal text-[4.8vw] leading-[1.05] tracking-[-0.01em] text-primary mb-[2.6vh]">
          Muslim-Friendly Focus
        </h2>

        <div className="flex flex-col gap-[1.4vh]">
          <div className="flex gap-[1.4vw] pt-[1.4vh] border-t border-accent/25">
            <span className="font-display italic text-[2.4vw] text-accent">—</span>
            <p className="text-[2.4vw] leading-[1.3] text-text/90">
              <span className="font-medium text-primary">Halal dining</span> highlighted across every destination.
            </p>
          </div>
          <div className="flex gap-[1.4vw] pt-[1.4vh] border-t border-accent/25">
            <span className="font-display italic text-[2.4vw] text-accent">—</span>
            <p className="text-[2.4vw] leading-[1.3] text-text/90">
              <span className="font-medium text-primary">Prayer-aware</span> itineraries and nearby mosques.
            </p>
          </div>
          <div className="flex gap-[1.4vw] pt-[1.4vh] border-t border-accent/25">
            <span className="font-display italic text-[2.4vw] text-accent">—</span>
            <p className="text-[2.4vw] leading-[1.3] text-text/90">
              <span className="font-medium text-primary">Islamic heritage</span> of Malacca placed at the center.
            </p>
          </div>
          <div className="flex gap-[1.4vw] pt-[1.4vh] border-t border-accent/25">
            <span className="font-display italic text-[2.4vw] text-accent">—</span>
            <p className="text-[2.4vw] leading-[1.3] text-text/90">
              <span className="font-medium text-primary">Modest, family</span> experiences throughout.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[3.5vh] left-[49vw] right-[6vw] flex justify-between items-center">
        <span className="text-[2.2vw] font-medium tracking-[0.05em] text-text/80">al-ameri.travel</span>
        <span className="text-[2.2vw] font-medium text-accent">06</span>
      </div>
    </div>
  );
}
