import CTA from "@/components/ui/cta";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import Image from "next/image";

export default function FoundersSection() {
  return (
    <section className="px-6 pb-24">
      <div className="content-max-width">
        <div className="text-center mb-12">
          <SectionHeading>Kto stworzył DZIK GYM?</SectionHeading>
          <p className="mt-4  mx-auto text-sm md:text-lg  /80">
            Jesteśmy grupą przyjaciół z Warszawy, która od lat inspiruje i
            motywuje do aktywnego stylu życia.
            <br /> Zaczynaliśmy jako entuzjaści fitnessu, a teraz jako
            pełnoprawna marka kontynuujemy naszą misję.
          </p>
        </div>

        {/* YouTube Story Section */}
        <div className="w-full founders-gradient flex justify-center text-white aspect-[2] rounded-2xl overflow-hidden p-6 md:p-16 mb-16 relative">
          <div className="absolute inset-0 z-[-1]">
            <Image
              src="/images/wk-team.jpg"
              alt="Założyciele WK"
              fill
              priority
            />
          </div>
          <div className="flex-col flex-center gap-8  mt-auto">
            <h3 className="text-xl md:text-[2.5rem] font-bold leading-[0.5] italic text-(--color-brand-blue)">
              Początki Ekipy WK
            </h3>
            <p className="text-sm  text-center font-thin leading-relaxed  max-w-4xl">
              Połączyliśmy nasze pasje do treningu siłowego i rozpoczęliśmy
              wspólną przygodę na YouTube. Nasz kanał początkowo dokumentował
              nasze codzienne treningi. Udostępniliśmy tam porady dotyczące
              ćwiczeń oraz motywowaliśmy innych do aktywnego trybu życia.
            </p>
            <div className="w-50 mb">
              <CTA variant="blueTaller">
                <span className="font-medium">Kanał YouTube →</span>
              </CTA>
            </div>
          </div>
        </div>

        {/* Ebook Section */}
        <div className="grid lg:flex gap-8 items-center">
          <div className="relative mx-auto shrink-0 aspect-square w-full max-w-100 lg:w-[32.75rem] rounded-md overflow-hidden">
            <Image
              src="/images/ebooki.png"
              alt="ebooki"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div>
            <h3 className="text-xl md:text-3xl font-extrabold italic mb-4">
              Lorem ipsum
            </h3>
            <p className="text-sm mb-6">
              Od początku naszej kariery w internecie stawiamy na dostarczanie
              darmowej wiedzy treningowej poprzez nasze treści. Dzięki naszemu
              zaangażowaniu,{" "}
              <span className="font-semibold text(--color-brandblue)">
                każdy z Was może pobrać darmowe ebooki
              </span>
              , które są doskonałym punktem startowym do rozpoczęcia przygody z
              treningiem, a także sposobem na udoskonalenie aktualnych programów
              ćwiczeń. <br />
              <br />
              Przygotowaliśmy także ebooki, które pozwalają nasze podejście do
              diety, pomagają w zrozumieniu i wdrożeniu zdrowych nawyków
              żywieniowych. Chcemy, aby mieliście łatwy dostęp do rzetelnych
              informacji bez ponoszenia kosztów. Mamy nadzieję, że dzięki się
              naszej wiedzy, poznacie Wam silniejszą wersję siebie.
            </p>
            <div className="w-50 mb">
              <CTA variant="blueTaller">
                <span className="font-medium">Nasze ebooki →</span>
              </CTA>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
