import Image from "next/image";
import CTA from "./cta";

export default function Hero() {
  return (
    <section className="px-4 py-4 h-[100vh] border">
      <div className="relative border-green-500 bg-gray-900 clip-hero h-full">
        <div className="flex flex-col items-center justify-center h-full gap-12 text-center py-20">
          <div className="border border-red-500 w-66 h-44 p-4 flex items-center justify-center relative">
            <Image
              src="/logo-color.svg"
              alt="Logo z kolorami"
              width={265}
              height={175}
            />
          </div>
          <div>
            <h1 className="text-7xl font-bold italic h1-hero max-w-[17ch]">
              SIŁOWNIE UZNANE PRZEZ SPOŁECZNOŚĆ
            </h1>
            <h2 className="h2-hero font-bold italic">
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
