import CTA from "@/components/ui/cta";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import EXTERNAL_HREFS from "@/data/texternal-hrefs";
import Image from "next/image";

export default function FoundersSection() {
  return (
    <section className="pt-16">
      <div className="content-max-width ">
        <div className=" mb-12 text-left sm:text-center">
          <SectionHeading>Kto stworzył DZIK GYM?</SectionHeading>
          <p className="mt-4  mx-auto text-sm md:text-lg  /80">
            Jesteśmy grupą przyjaciół z Warszawy, która od lat inspiruje i
            motywuje do aktywnego stylu życia.
            <br /> Zaczynaliśmy jako entuzjaści fitnessu, a teraz jako
            pełnoprawna marka kontynuujemy naszą misję.
          </p>
        </div>

        {/* YouTube Story Section */}
        <div className="w-full isolate  flex justify-center text-(--color-primary)  bg-(--color-secondary)  rounded-2xl overflow-hidden p-12 md:p-16 mb-16 relative min-h-165">
          <div className="absolute  top-0 left-0 w-full aspect-144/67 z-[1] ">
            <Image
              src="/images/wk-team.jpg"
              alt="Założyciele WK"
              fill
              priority
            />
            <div className="absolute inset-0 founders-gradient z-10"></div>
          </div>
          <div className="flex-col flex-center gap-8  mt-auto z-2">
            <h3 className="text-[2.5rem] font-black leading-[1.15] italic text-center text-(--color-brand-blue)">
              Początki Ekipy WK
            </h3>
            <p className="text-sm  text-center font-thin leading-relaxed  max-w-4xl">
              Połączyliśmy nasze pasje do treningu siłowego i rozpoczęliśmy
              wspólną przygodę na YouTube. Nasz kanał początkowo dokumentował
              nasze codzienne treningi. Udostępniliśmy tam porady dotyczące
              ćwiczeń oraz motywowaliśmy innych do aktywnego trybu życia.
            </p>
            <a
              href={EXTERNAL_HREFS.YOUTUBE}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-50 mb">
                <CTA variant="blueTaller">
                  <span className="font-medium">Kanał YouTube →</span>
                </CTA>
              </div>
            </a>
          </div>
        </div>

        {/* Ebook Section */}
        <div className="flex flex-col min-[1150px]:flex-row gap-8 justify-between items-center ">
          <div className="relative mx-auto shrink-0 aspect-531/491 w-full max-w-133 rounded-md overflow-hidden ">
            <Image
              src="/images/ebooki.png"
              alt="ebooki"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden min-[1150px]:block">
            <div className="w-12 aspect-square flex items-center justify-center relative">
              <Image src="/images/right-arrow.svg" alt="arrow" fill />
            </div>
          </div>
          <div className="max-w-133 min-[1150px]:max-w-160">
            <h3 className="text-[2rem] leading-10 md:text-3xl md:leading-[1.2] font-black italic mb-4">
              <span className="text-(--color-brand-blue)">
                Zależy nam, abyście działali skutecznie.
              </span>{" "}
              Stworzyliśmy bazę darmowej wiedzy
            </h3>
            <p className="text-sm mb-6 leading-loose">
              Od początku naszej kariery w internecie stawiamy na dostarczanie
              darmowej wiedzy treningowej poprzez nasze treści. Dzięki naszemu
              zaangażowaniu,{" "}
              <span className="font-semibold text(--color-brandblue)">
                każdy z Was może pobrać darmowe ebooki
              </span>
              , które są doskonałym punktem startowym do rozpoczęcia przygody z
              treningiem, a także pozwalają na udoskonalenie aktualnych
              programów ćwiczeń. Przygotowaliśmy także ebook, który przedstawia
              nasze podejście do diety, pomagając w zrozumieniu i wprowadzeniu
              zdrowych nawyków żywieniowych. Chcemy, aby każdy miał dostęp do
              rzetelnych informacji bez konieczności ponoszenia kosztów. Mamy
              nadzieję, że dzieląc się naszą wiedzą, pomagamy Wam osiągać lepsze
              rezultaty i czerpać większą radość z treningów.
            </p>
            <a
              href={EXTERNAL_HREFS.EBOOK_DOWNLOAD}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-50 mb">
                <CTA variant="blueTaller">
                  <span className="font-bold">Nasze ebooki →</span>
                </CTA>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
