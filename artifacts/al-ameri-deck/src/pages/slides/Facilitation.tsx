export default function Facilitation() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg font-body text-text flex flex-col">
      <div className="pt-[7vh] px-[6vw] flex flex-col gap-[1.6vh]">
        <div className="flex items-center gap-[1.2vw] text-accent">
          <span className="text-[2.2vw] leading-none">★</span>
          <span className="text-[2.2vw] font-semibold tracking-[0.18em] uppercase">
            Al-Ameri Travel
          </span>
          <span className="w-[4vw] h-px bg-accent/50" />
        </div>
        <h2 className="font-display font-normal text-[5vw] leading-[1.05] tracking-[-0.01em] text-primary">
          Facilitation &amp; Support
        </h2>
      </div>

      <div className="flex-1 px-[6vw] pt-[4vh] pb-[9vh] grid grid-cols-2 gap-x-[4vw] gap-y-[3vh]">
        <div className="flex gap-[1.6vw] pt-[2.6vh] border-t border-accent/25">
          <span className="font-display italic text-[3vw] text-accent w-[4.5vw]">01</span>
          <div>
            <h3 className="text-[2.9vw] font-medium text-primary">Visa Facilitation</h3>
            <p className="text-[2.4vw] leading-[1.4] text-muted">
              Clear, step-by-step entry guidance for Arab travelers.
            </p>
          </div>
        </div>
        <div className="flex gap-[1.6vw] pt-[2.6vh] border-t border-accent/25">
          <span className="font-display italic text-[3vw] text-accent w-[4.5vw]">02</span>
          <div>
            <h3 className="text-[2.9vw] font-medium text-primary">Itinerary Help</h3>
            <p className="text-[2.4vw] leading-[1.4] text-muted">
              Trip planning and booking support tailored to each visit.
            </p>
          </div>
        </div>
        <div className="flex gap-[1.6vw] pt-[2.6vh] border-t border-accent/25">
          <span className="font-display italic text-[3vw] text-accent w-[4.5vw]">03</span>
          <div>
            <h3 className="text-[2.9vw] font-medium text-primary">WhatsApp Contact</h3>
            <p className="text-[2.4vw] leading-[1.4] text-muted">
              A direct line to the team from every key page.
            </p>
          </div>
        </div>
        <div className="flex gap-[1.6vw] pt-[2.6vh] border-t border-accent/25">
          <span className="font-display italic text-[3vw] text-accent w-[4.5vw]">04</span>
          <div>
            <h3 className="text-[2.9vw] font-medium text-primary">Local Know-How</h3>
            <p className="text-[2.4vw] leading-[1.4] text-muted">
              Culture, customs, and practical tips before arrival.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[3.5vh] left-[6vw] right-[6vw] flex justify-between items-center">
        <span className="text-[2.2vw] font-medium tracking-[0.05em] text-text/80">al-ameri.travel</span>
        <span className="text-[2.2vw] font-medium text-accent">08</span>
      </div>
    </div>
  );
}
