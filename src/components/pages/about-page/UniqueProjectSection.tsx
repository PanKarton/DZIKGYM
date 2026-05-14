import GradientBlueRed from "@/components/ui/GradientBlueRed";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { TrademarkText } from "@/components/ui/TradeMark";
import Image from "next/image";

const styles = {
  paragraph:
    "mt-4 text-sm text-(--color-primary)   font-light leading-relaxed ",
};

export default function UniqueProjectSection() {
  return (
    <section className="py-24 mt-24  relative">
      <GradientBlueRed />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[-1] bg-cover bg-center"
        style={{
          backgroundImage: "url('/mesh/mesh-full-hd.svg')",
        }}
      />
      <div className="content-max-width">
        <div className="flex flex-col min-[1100px]:flex-row max-w-132 min-[1100px]:max-w-full mx-auto gap-10 items-center">
          <div className="flex-col ">
            <SectionHeading className="text-(--color-brand-blue) text-4xl md:text-[2.5rem]">
              <TrademarkText fontWeight={900}>DZIK</TrademarkText>GYM to jedyny
              taki <br /> projekt w Europie
            </SectionHeading>

            <p className={styles.paragraph}>
              To miejsce otwarte dla wszystkich – dla młodzieży, dorosłych i
              seniorów. Zarówno tych, którzy dopiero zaczynają swoją przygodę z
              treningiem, jak i doświadczonych sportowców.
            </p>

            <p className={styles.paragraph}>
              Nasza przestrzeń pozwala na wykonanie pełnowartościowego i
              bezpiecznego treningu siłowego w warunkach outdoorowych, oferując
              zarówno komfort, jak i wyzwanie. Prosty w obsłudze mechanizm
              zmiany ciężaru gwarantuje niski próg wejścia, a jednocześnie daje
              ogromne możliwości progresu.
            </p>

            <p className={styles.paragraph}>
              Naszym celem jest obniżenie progu wejścia do świata sportu i
              pokazanie, że trening siłowy nie musi być luksusem.{" "}
              <TrademarkText>DZIK</TrademarkText> GYM to siłownia dostępna dla
              każdego, o każdej porze, w Twoim mieście.
            </p>

            <p className={styles.paragraph}>
              <TrademarkText>DZIK</TrademarkText> GYM to nie tylko maszyny i
              przestrzeń. To projekt, dzięki któremu ludzie zaczynają ze sobą
              rozmawiać. W miastach powstają lokalne społeczności, które dbają o
              swoje zdrowie w ramach potrzebnej nam wszystkim aktywności
              fizycznej.
            </p>
          </div>

          <div className="w-full max-w-132 aspect-square rounded-4xl relative overflow-hidden shrink-0">
            <Image
              src="/images/crowd.jpg"
              alt="tłum na siłowni <TrademarkText>DZIK</TrademarkText> GYM"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}
