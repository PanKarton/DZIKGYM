import GradientBlueRed from "@/components/ui/GradientBlueRed";
import Image from "next/image";

const styles = {
  paragraph: "mt-4 text-sm text-(--color-off-primary) leading-relaxed ",
};

export default function UniqueProjectSection() {
  return (
    <section className="py-24  relative">
      <GradientBlueRed />
      <div className="content-max-width">
        <div className="flex gap-10 items-center">
          <div className="flex-col flex-center">
            <h2 className="text-(--color-content-emphasis) text-[2.5rem] font-black italic leading-none mb-2">
              DZIK GYM to jedyny taki projekt w Europie
            </h2>

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
              pokazanie, że trening siłowy nie musi być luksusem. DZIK GYM to
              siłownia dostępna dla każdego, o każdej porze, w Twoim mieście.
            </p>

            <p className={styles.paragraph}>
              DZIK GYM to nie tylko maszyny i przestrzeń. To projekt, dzięki
              któremu ludzie zaczynają ze sobą rozmawiać. W miastach powstają
              lokalne społeczności, które dbają o swoje zdrowie w ramach
              potrzebnej nam wszystkim aktywności fizycznej.
            </p>
          </div>

          <div className="w-full max-w-132 aspect-square bg-neutral-200 rounded-2xl relative overflow-hidden shrink-0">
            <Image
              src="/images/crowd.jpg"
              alt="tłum na siłowni DZIK GYM"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}
