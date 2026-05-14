import ColorLogo from "@/components/ui/ColorLogo";
import CTA from "@/components/ui/cta";
import { TrademarkText } from "@/components/ui/TradeMark";
import { cn } from "@/lib/utils";

const h1Styles = cn(
  "text-[2rem] font-black italic h1-hero max-w-[17ch]",
  "md:text-[3rem] lg:text-[4rem] xl:text-[4.5rem]  2xl:text-[5.375rem]",
);

const videoPriorityProps = {
  fetchPriority: "high",
} as const;

export default function Hero() {
  return (
    <section className="px-4 py-2  text-(--color-primary)   relative">
      <div className="relative rounded-[10px] overflow-hidden lg:rounded-none lg:overflow-auto">
        <div className={"clip-hero"}>
          <video
            className="absolute z-[-1] inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/poster.jpg"
            {...videoPriorityProps}
          >
            <source src="/video/hero.webm" type="video/webm" />
            <source src="/video/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#000000]/60 z-1" />
          <div className="relative   py-35 flex flex-col items-center justify-center h-full gap-12 text-center z-10">
            <div className="w-66">
              <ColorLogo />
            </div>
            <div className="flex flex-col items-center gap-6 ">
              <h1 className={h1Styles}>SIŁOWNIE UZNANE PRZEZ SPOŁECZNOŚĆ</h1>
              <h2 className="text-[1rem] lg:text-[1.125rem]  h2-hero font-light mx-8 sm:mx-16">
                Tworzymy nowoczesne siłownie plenerowe, które integrują i
                wspierają zdrowie i formę Polaków. <br />{" "}
                <TrademarkText>DZIK</TrademarkText> GYM to projekt sprawdzony w
                praktyce, gotowy do wdrożenia w przestrzeni publicznej i
                półpublicznej.
              </h2>
            </div>
            <div className="w-57">
              <CTA variant="red" scrollToId="map">
                <span className="font-bold text-lg ">
                  Znajdź <TrademarkText>DZIK</TrademarkText> GYM
                </span>
              </CTA>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
