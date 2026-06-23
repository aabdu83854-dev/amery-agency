export default function Project() {
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
          The Project
        </h2>
      </div>

      <div className="flex-1 min-h-0 px-[6vw] pt-[3.5vh] pb-[7vh] flex gap-[4vw] items-stretch">
        <div className="flex-1 flex flex-col justify-center gap-[3.4vh]">
          <p className="text-[2.4vw] leading-[1.4] font-light text-text/90 text-pretty">
            A modern website introducing Malaysia to Arabic-speaking visitors.
          </p>

          <div className="flex flex-col gap-[2.4vh]">
            <div className="flex items-baseline gap-[1.8vw] pt-[1.8vh] border-t border-accent/25">
              <span className="font-display italic text-[2.8vw] text-accent w-[4.5vw]">01</span>
              <h3 className="text-[2.8vw] font-medium text-primary">Arabic-First</h3>
            </div>
            <div className="flex items-baseline gap-[1.8vw] pt-[1.8vh] border-t border-accent/25">
              <span className="font-display italic text-[2.8vw] text-accent w-[4.5vw]">02</span>
              <h3 className="text-[2.8vw] font-medium text-primary">Muslim-Friendly</h3>
            </div>
            <div className="flex items-baseline gap-[1.8vw] pt-[1.8vh] border-t border-accent/25">
              <span className="font-display italic text-[2.8vw] text-accent w-[4.5vw]">03</span>
              <h3 className="text-[2.8vw] font-medium text-primary">Guidance Built In</h3>
            </div>
          </div>
        </div>

        <div className="flex-1 relative bg-surface rounded-[1vw] overflow-hidden flex items-center justify-center border border-accent/15">
          <div className="absolute inset-[2vw] border border-accent/30 rounded-[0.6vw]" />
          <p className="font-display italic text-[3.2vw] leading-[1.25] text-accent text-center px-[4vw] text-balance">
            One destination, presented in the traveler's own language.
          </p>
        </div>
      </div>

      <div className="absolute bottom-[3.5vh] left-[6vw] right-[6vw] flex justify-between items-center">
        <span className="text-[2.2vw] font-medium tracking-[0.05em] text-text/80">al-ameri.travel</span>
        <span className="text-[2.2vw] font-medium text-accent">02</span>
      </div>
    </div>
  );
}
