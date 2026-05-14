import CTA from "@/components/ui/cta";
import EXTERNAL_HREFS from "@/data/texternal-hrefs";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function OutdoorGymDescriptionSection() {
  return (
    <section
      className={cn(
        "relative w-full mt-12 lg:mt-24  bg-(--color-secondary) isolate",
        "pt-48 pb-24 lg:py-24 min-[1920px]:aspect-1920/805 overflow-hidden",
      )}
    >
      <div className="absolute top-0 left-0 w-full z-1 flex items-center justify-center">
        <Image
          src="/images/crowd-outdoor.png"
          alt="tłum na siłowni DZIK GYM"
          width={1920}
          height={805}
          priority
          className="object-cover object-bottom w-full h-full"
        />
        <div className="absolute inset-0 founders-gradient z-10"></div>
      </div>
      <div className="content-max-width h-full flex justify-center items-center relative z-2">
        <div className="bg-(--color-primary) rounded-xl px-7 py-16 text-left shadow-xl lg:ml-auto max-w-132 ">
          <h2 className="text-[2.5rem] font-black italic leading-tight   mb-4">
            <span className="text-(--color-content-emphasis)">DZIK GYM</span> to
            więcej <br />
            niż siłownia plenerowa
          </h2>

          <p className="text-sm   leading-relaxed mb-4">
            To ogólnopolska inicjatywa, która{" "}
            <strong>zmienia martwe, zaniedbane przestrzenie</strong> w{" "}
            <strong>
              bezpieczne, darmowe i nowoczesne miejsca do aktywności fizycznej
            </strong>{" "}
            — dostępne dla każdego: młodzieży, dorosłych i seniorów.
          </p>

          <p className="text-sm   leading-relaxed mb-6">
            Naszym celem jest stworzenie przestrzeni ze sportową infrastrukturą,
            gdzie aktywność fizyczna staje się przyjemnością, a nie obowiązkiem.{" "}
            <strong>Bez karnetu, bez stresu, bez barier finansowych</strong> -
            ćwiczyć może każdy, niezależnie od wieku czy możliwości. DZIK GYM
            łączy pokolenia, buduje więzi społeczne i dodaje dumy każdej
            lokalnej społeczności.
          </p>

          <a href={EXTERNAL_HREFS.PRESENTATION} about="_blank">
            <div className="w-63">
              <CTA variant="blueGradient">
                <span className="text-sm font-semibold">
                  Zobacz prezentację
                </span>
                <span className="relative translate-y-px text-lg font-medium">
                  →
                </span>
              </CTA>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
