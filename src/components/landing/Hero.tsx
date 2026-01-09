import Image from "next/image";
import CTA from "./cta";

const imgScale = 1;

export default function Hero() {
  return (
    <section className="px-4 py-2 border text-(--primary) relative">
      <div className="relative  ">
        {/* <div className="absolute left-[0] top-[3px] w-[45rem] h-[60px] bg-gray-900 clip-hero"></div> */}
        <div className="flex flex-col items-center justify-center h-full gap-12 text-center py-25 border-green-500 bg-gray-900  h-full hero-rounded clip-hero ">
          <div
            className="p-4 flex items-center justify-center relative aspect-[265/175]"
            style={{ width: `${imgScale * 265}px` }}
          >
            <Image
              src="/logo-color.svg"
              alt="Logo z kolorami"
              fill
              className={`object-contain`}
              priority
            />
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-7xl font-bold italic h1-hero max-w-[17ch]">
              SIŁOWNIE UZNANE PRZEZ SPOŁECZNOŚĆ
            </h1>
            <h2 className="h2-hero font-regular">
              Tworzymy miejsca, które integrują i wspierają zdrowie i formę
              Polaków.
            </h2>
          </div>
          <CTA />
        </div>
      </div>
    </section>
  );
}
