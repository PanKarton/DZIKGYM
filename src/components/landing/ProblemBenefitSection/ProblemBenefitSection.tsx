import CTA from "@/components/ui/Cta";
import GradientBlueRed from "@/components/ui/GradientBlueRed";
import Image from "next/image";

export default function ProblemBenefitSection() {
  return (
    <section className="bg-(--lightGray) py-24 flex-center ">
      <div className="content-max-width">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 ">
          <div className="relative isolate rounded-3xl w-full max-w-105 border-1 py-16 px-8 overflow-hidden shadow-2xl">
            <GradientBlueRed />
            <div className="aspect-[320/241] max-w-80 mx-auto mb-16 relative">
              <Image
                src="./x-weight.svg"
                alt="Crossed dumbbell"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-[5.375rem] leading-none font-extrabold italic text-(--red) mb-2">
              70%
            </p>
            <p className="text-(--offWhite) font-thin text-sm leading-[1.5]">
              Taki procent Polaków{" "}
              <span className="text-[var(--red)] font-semibold">
                ma nadwagę lub jest otyła
              </span>
              . Jeszcze więcej nie spełnia podstawowych norm aktywności
              fizycznej.
            </p>
          </div>

          <div className="hidden lg:block">
            <div className="w-22 aspect-square flex items-center justify-center border-2">
              {/* SVG Arrow Here */}
            </div>
          </div>

          <div className="flex-1 max-w-2xl text-left  ">
            <p className="inline-flex items-center justify-center bg-(--blue) px-4 py-2.5 text-(--primary) uppercase tracking-wide text-sm leading-[1] mb-5">
              Nasze rozwiązanie
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold italic text-[#0f172a] leading-tight mb-4">
              Pełnowartościowy i bezpieczny trening siłowy dla wszystkich.{" "}
              <span className="text-[var(--blue)]">Za darmo.</span>
            </h2>
            <p className="text-sm text-zinc-700 mb-4">
              DZIK GYM to miejsce otwarte dla wszystkich. Nasza przestrzeń
              pozwala na wykonanie treningu siłowego w warunkach outdoorowych,
              oferując zarówno komfort, jak i wyzwanie. Prosty w obsłudze
              mechanizm zmiany ciężaru gwarantuje niski próg wejścia, a
              jednocześnie daje ogromne możliwości progresu.
            </p>
            <p className="text-sm text-zinc-700 mb-6">
              DZIK GYM to nie tylko maszyny i przestrzeń. To projekt, dzięki
              któremu ludzie zaczynają ze sobą rozmawiać.{" "}
              <strong className="text-black font-semibold">
                W miastach powstają lokalne społeczności
              </strong>
              , które dbają o swoje zdrowie w ramach potrzebnej nam wszystkim
              aktywności fizycznej.
            </p>
            <div className="w-50">
              <CTA variant="blue">Dupa</CTA>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
