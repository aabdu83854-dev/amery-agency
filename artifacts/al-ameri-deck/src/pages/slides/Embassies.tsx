export default function Embassies() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg font-body text-text flex flex-col">
      <div className="pt-[7vh] px-[6vw] flex justify-between items-end">
        <div className="flex flex-col gap-[1.4vh]">
          <div className="flex items-center gap-[1.2vw] text-accent">
            <span className="text-[2.2vw] leading-none">★</span>
            <span className="text-[2.2vw] font-semibold tracking-[0.18em] uppercase">
              Al-Ameri Travel
            </span>
            <span className="w-[4vw] h-px bg-accent/50" />
          </div>
          <h2 className="font-display font-normal text-[5vw] leading-[1.05] tracking-[-0.01em] text-primary">
            Embassy Guidance
          </h2>
        </div>
        <p className="text-[2.4vw] leading-[1.4] text-muted max-w-[30vw] text-right font-light">
          Practical contact guides for key traveler communities.
        </p>
      </div>

      <div className="flex-1 px-[6vw] pt-[5vh] pb-[9vh] grid grid-cols-3 gap-[2.4vw]">
        <div className="bg-surface rounded-[1vw] border border-accent/15 p-[2.6vw] flex flex-col gap-[2.2vh]">
          <span className="font-display italic text-[3vw] text-accent">01</span>
          <h3 className="font-display text-[3.4vw] leading-[1.1] text-primary">American Embassy</h3>
          <p className="text-[2.4vw] leading-[1.45] text-muted">
            Location, hours, and consular services laid out at a glance.
          </p>
        </div>
        <div className="bg-surface rounded-[1vw] border border-accent/15 p-[2.6vw] flex flex-col gap-[2.2vh]">
          <span className="font-display italic text-[3vw] text-accent">02</span>
          <h3 className="font-display text-[3.4vw] leading-[1.1] text-primary">Chinese Embassy</h3>
          <p className="text-[2.4vw] leading-[1.45] text-muted">
            What to bring, where to go, and how to reach the right desk.
          </p>
        </div>
        <div className="bg-surface rounded-[1vw] border border-accent/15 p-[2.6vw] flex flex-col gap-[2.2vh]">
          <span className="font-display italic text-[3vw] text-accent">03</span>
          <h3 className="font-display text-[3.4vw] leading-[1.1] text-primary">Yemeni Embassy</h3>
          <p className="text-[2.4vw] leading-[1.45] text-muted">
            Guidance for Yemeni travelers, written in clear Arabic.
          </p>
        </div>
      </div>

      <div className="absolute bottom-[3.5vh] left-[6vw] right-[6vw] flex justify-between items-center">
        <span className="text-[2.2vw] font-medium tracking-[0.05em] text-text/80">al-ameri.travel</span>
        <span className="text-[2.2vw] font-medium text-accent">07</span>
      </div>
    </div>
  );
}
