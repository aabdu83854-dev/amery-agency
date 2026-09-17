export default function Bilingual() {
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
          Bilingual by Design
        </h2>
      </div>

      <div className="flex-1 min-h-0 px-[6vw] pt-[4vh] pb-[9vh] flex flex-col gap-[3vh]">
        <div className="flex-1 min-h-0 flex gap-[3vw]">
          <div className="flex-1 bg-surface rounded-[1vw] border border-accent/15 p-[3vw] flex flex-col gap-[2.4vh]">
            <div className="flex items-center justify-between">
              <span className="text-[2.3vw] font-semibold tracking-[0.12em] uppercase text-accent">Arabic — Default</span>
              <span className="text-[2.2vw] text-muted">RTL</span>
            </div>
            <div className="flex flex-col gap-[1.6vh] items-end text-right" dir="rtl">
              <span className="font-display text-[4.2vw] leading-[1.1] text-primary">اكتشف ماليزيا</span>
              <span className="text-[2.6vw] text-text/85">الرئيسية · السياحة · تواصل معنا</span>
            </div>
          </div>

          <div className="flex-1 bg-surface rounded-[1vw] border border-accent/15 p-[3vw] flex flex-col gap-[2.4vh]">
            <div className="flex items-center justify-between">
              <span className="text-[2.3vw] font-semibold tracking-[0.12em] uppercase text-accent">English — Parity</span>
              <span className="text-[2.2vw] text-muted">LTR</span>
            </div>
            <div className="flex flex-col gap-[1.6vh]">
              <span className="font-display text-[4.2vw] leading-[1.1] text-primary">Discover Malaysia</span>
              <span className="text-[2.6vw] text-text/85">Home · Tourism · Contact Us</span>
            </div>
          </div>
        </div>

        <p className="text-[2.4vw] leading-[1.4] text-muted font-light max-w-[64vw]">
          Every page mirrors completely — layout, navigation, and content flip direction with a single tap.
        </p>
      </div>

      <div className="absolute bottom-[3.5vh] left-[6vw] right-[6vw] flex justify-between items-center">
        <span className="text-[2.2vw] font-medium tracking-[0.05em] text-text/80">al-ameri.travel</span>
        <span className="text-[2.2vw] font-medium text-accent">04</span>
      </div>
    </div>
  );
}
