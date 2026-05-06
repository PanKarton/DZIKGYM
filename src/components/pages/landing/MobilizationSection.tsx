import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import Image from "next/image";

export default function MobilizationSection() {
  return (
    <section className=" pt-12 md:pt-24">
      <div className="content-max-width">
        <SectionHeading isBig>
          Mobilizujemy <br className="md:hidden" />
          do ruchu
        </SectionHeading>

        <div className="mt-8 md:mt-16 grid gap-8 text-center md:grid-cols-3 md:gap-12">
          <Stat number="10" title="siłowni DZIK GYM">
            w całym kraju, a liczba rośnie.
          </Stat>

          <Stat number="45" title="rodzajów maszyn siłowych">
            z obciążeniem na wszystkie partie ciała.
          </Stat>

          <Stat number="12" title="lat Naszej misji">
            Przez tyle lat mobilizujemy już do aktywności fizycznej -
            rozpoczynając misję na YouTube, wydając darmowe ebooki - na
            stawianiu siłowni kończąc - póki co.
          </Stat>
        </div>

        <div className="mt-10 grid items-center gap-8  md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div className="mx-auto w-full max-w-105">
            <Image
              src="/images/SBP_statue.webp"
              alt="Statuetka Sport Biznes Polska"
              width={520}
              height={360}
              className="h-auto w-full"
            />
          </div>

          <div className="text-left relative translate-y-0 md:translate-y-6">
            <h3 className="text-xl font-black italic leading-tight md:text-3xl">
              Tworzymy miejsce do treningu
            </h3>

            <p className="mt-4 text-sm font-bold italic leading-snug md:text-base">
              Zmieniamy osiedla, parki i wolne przestrzenie w miejsca, gdzie
              początkujący czują się swobodnie, a profesjonaliści znajdują swój
              drugi dom.
            </p>

            <p className="mt-4 text-sm leading-snug md:text-base">
              Dowodem na to, jest otrzymanie statuetki{" "}
              <strong>Sport Biznes Polska</strong> w kategorii Lokalna
              Inicjatywa Sportowa 2025.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-6xl font-black italic leading-none text-(--color-brand-blue) md:text-7xl">
        {number}
      </div>
      <h3 className="mt-1 text-base font-black italic leading-none text-(--color-brand-blue) md:text-lg">
        {title}
      </h3>
      <p className="mx-auto mt-1 max-w-100 text-xs leading-snug md:text-sm">
        {children}
      </p>
    </div>
  );
}
