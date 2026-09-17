export default function TechStack() {
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
            How It's Built
          </h2>
        </div>
        <p className="text-[2.4vw] leading-[1.4] text-muted max-w-[30vw] text-right font-light">
          Fast, static, and ready to deploy anywhere.
        </p>
      </div>

      <div className="flex-1 px-[6vw] pt-[5vh] pb-[9vh] grid grid-cols-2 gap-x-[4vw] gap-y-[3.4vh]">
        <div className="flex items-baseline gap-[1.8vw] pt-[2.6vh] border-t border-accent/25">
          <span className="font-display text-[3.2vw] text-primary w-[20vw]">Interface</span>
          <span className="text-[2.6vw] text-muted">React · Vite · TypeScript</span>
        </div>
        <div className="flex items-baseline gap-[1.8vw] pt-[2.6vh] border-t border-accent/25">
          <span className="font-display text-[3.2vw] text-primary w-[20vw]">Styling</span>
          <span className="text-[2.6vw] text-muted">Tailwind CSS · shadcn/ui</span>
        </div>
        <div className="flex items-baseline gap-[1.8vw] pt-[2.6vh] border-t border-accent/25">
          <span className="font-display text-[3.2vw] text-primary w-[20vw]">Routing</span>
          <span className="text-[2.6vw] text-muted">wouter, RTL &amp; LTR aware</span>
        </div>
        <div className="flex items-baseline gap-[1.8vw] pt-[2.6vh] border-t border-accent/25">
          <span className="font-display text-[3.2vw] text-primary w-[20vw]">Architecture</span>
          <span className="text-[2.6vw] text-muted">Fully static · no backend</span>
        </div>
      </div>

      <div className="absolute bottom-[3.5vh] left-[6vw] right-[6vw] flex justify-between items-center">
        <span className="text-[2.2vw] font-medium tracking-[0.05em] text-text/80">al-ameri.travel</span>
        <span className="text-[2.2vw] font-medium text-accent">09</span>
      </div>
    </div>
  );
}
