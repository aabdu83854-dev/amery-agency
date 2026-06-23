export default function Audience() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg font-body text-text flex flex-col">
      <div className="pt-[7vh] px-[6vw] flex justify-between items-end">
        <div className="flex flex-col gap-[1.6vh]">
          <div className="flex items-center gap-[1.2vw] text-accent">
            <span className="text-[2.2vw] leading-none">★</span>
            <span className="text-[2.2vw] font-semibold tracking-[0.18em] uppercase">
              Al-Ameri Travel
            </span>
            <span className="w-[4vw] h-px bg-accent/50" />
          </div>
          <h2 className="font-display font-normal text-[5vw] leading-[1.05] tracking-[-0.01em] text-primary">
            Who It Serves
          </h2>
        </div>
        <p className="text-[2.4vw] leading-[1.45] text-muted max-w-[32vw] text-right font-light">
          Built for Arabic-speaking visitors discovering Malaysia.
        </p>
      </div>

      <div className="flex-1 px-[6vw] pt-[5vh] pb-[9vh] grid grid-cols-3 gap-[3vw]">
        <div className="flex flex-col gap-[2vh] pt-[3vh] border-t-2 border-accent/40">
          <span className="font-display italic text-[3.4vw] text-accent">01</span>
          <h3 className="font-display text-[3.4vw] leading-[1.1] text-primary">Arab Families</h3>
          <p className="text-[2.4vw] leading-[1.45] text-muted">
            Planning a relaxed, Muslim-friendly holiday with halal dining and family comforts.
          </p>
        </div>
        <div className="flex flex-col gap-[2vh] pt-[3vh] border-t-2 border-accent/40">
          <span className="font-display italic text-[3.4vw] text-accent">02</span>
          <h3 className="font-display text-[3.4vw] leading-[1.1] text-primary">Independent Travelers</h3>
          <p className="text-[2.4vw] leading-[1.45] text-muted">
            Researching destinations and itineraries in Arabic before they commit to a trip.
          </p>
        </div>
        <div className="flex flex-col gap-[2vh] pt-[3vh] border-t-2 border-accent/40">
          <span className="font-display italic text-[3.4vw] text-accent">03</span>
          <h3 className="font-display text-[3.4vw] leading-[1.1] text-primary">First-Time Visitors</h3>
          <p className="text-[2.4vw] leading-[1.45] text-muted">
            Needing clear guidance on visas, embassies, and local culture before arrival.
          </p>
        </div>
      </div>

      <div className="absolute bottom-[3.5vh] left-[6vw] right-[6vw] flex justify-between items-center">
        <span className="text-[2.2vw] font-medium tracking-[0.05em] text-text/80">al-ameri.travel</span>
        <span className="text-[2.2vw] font-medium text-accent">03</span>
      </div>
    </div>
  );
}
