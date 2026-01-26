import CTA from "@/components/ui/cta";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export default function OutdoorGymDescriptionSection() {
  return (
    <section className="relative w-full  py-24 mb-18 for-gov-gradient">
      <div className="absolute inset-0 isolate z-[-1]">
        <Image
          src="/crowd-outdoor.png"
          alt="tłum na siłowni DZIK GYM"
          width={1800}
          height={1200} // 3:2, zgodne z plikiem
          sizes="100vw"
          className="w-full h-full object-cover"
          priority
        />
      </div>
      <div className="content-max-width  h-full flex items-center">
        <div className="bg-white rounded-xl px-7 py-16 text-left shadow-xl ml-auto max-w-[33rem] ">
          <h2 className="text-[2.5rem] font-black italic leading-tight text-(--secondary) mb-4">
            <span className="text-(--blue)">DZIK GYM</span> to więcej <br />
            niż siłownia plenerowa
          </h2>

          <p className="text-sm text-(--secondary) leading-relaxed mb-4">
            To ogólnopolska inicjatywa, która
            <strong>zmienia martwe, zaniedbane przestrzenie</strong> w{" "}
            <strong>
              bezpieczne, darmowe i nowoczesne miejsca do aktywności fizycznej
            </strong>{" "}
            — dostępne dla każdego: młodzieży, dorosłych i seniorów.
          </p>

          <p className="text-sm text-(--secondary) leading-relaxed mb-6">
            Naszym celem jest stworzenie przestrzeni ze sportową infrastrukturą,
            gdzie aktywność fizyczna staje się przyjemnością, a nie obowiązkiem.{" "}
            <strong>Bez karnetu, bez stresu, bez barier finansowych</strong> –
            ćwiczyć może każdy, niezależnie od wieku czy możliwości. DZIK GYM
            łączy pokolenia, buduje więzi społeczne i dodaje dumy każdej
            lokalnej społeczności.
          </p>

          <div className="w-63">
            <CTA variant="blueGradient">
              Zobacz prezentację
              <FaArrowRightLong />
            </CTA>
          </div>
        </div>
      </div>
    </section>
  );
}
