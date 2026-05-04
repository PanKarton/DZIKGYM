import GradientBlueGreen from "@/components/ui/GradientBlueGreen";
import GradientBlueRed from "@/components/ui/GradientBlueRed";
import GreenPlus from "@/components/ui/GreenPlus";
import RedMinus from "@/components/ui/RedMinus";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

const styles = {
  card: "text-white comp-card-width gap-6 py-14 px-4 min-[1100px]:px-8 min-[1100px]:rounded-[20px]  overflow-hidden w-full max-w-[26.25rem]",
  cardTitle:
    "uppercase italic text-left text-xl md:text-3xl lg:text-4xl font-black",
};

const normalGrymFeatures = [
  "Brak możliwości wykonania prawdziwej rozgrzewki",
  "Brak regulacji obciążenia",
  "Niedopasowany do zdecydowanej większości użytkowników",
  "Nieprecyzyjny, nieefektywny trening",
];

const gymDzikFeatures = [
  "Możliwość wykonania prawidłowych ruchów",
  "Regulacja obciążenia",
  "Trening dla każdego – niezależnie od wieku, wzrostu czy kondycji",
  "Komponowanie efektywnych i skutecznych planów treningowych",
];

export default function GymComparison() {
  return (
    <section className="mx-auto pt-16 min-[1100px]:pb-60 text-center flex-center">
      <div className="w-full max-w-360 mx-auto px-[clamp(0.5rem,3vw,3.75rem)]">
        {/* Title */}

        <SectionHeading className="mb-12">
          Dlaczego nasza siłownia jest lepsza?
        </SectionHeading>

        {/* Image Section */}
        <div className="relative flex flex-col min-[1100px]:flex-row justify-center items-center min-[1100px]:gap-4 ">
          {/* Background Image Comparison */}
          <div className="w-full relative aspect-1230/670 rounded-t-4xl min-[900px]:rounded-4xl overflow-hidden">
            <video
              className="absolute z-[-1] inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
            >
              <source src="/video/gym-comparison.webm" type="video/webm" />
              <source src="/video/gym-comparison.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Info Cards */}
          <div className=" flex  min-[1100px]:absolute min-[1100px]:bottom-0 min-[1100px]:left-1/2 min-[1100px]:-translate-x-1/2 min-[1100px]:translate-y-1/2  min-[1100px]:flex-row min-[1100px]:gap-8 min-[1100px]:w-full min-[1100px]:max-w-204 ">
            {/* Standard Gym */}
            <div className={` relative  ${styles.card} rounded-es-4xl `}>
              <GradientBlueRed />
              <h3 className="text-left text-lg lg:text-2xl  text-(--color-primary) font-light">
                Standardowa
              </h3>
              <h2 className={`text-(--color-brand-red) ${styles.cardTitle}`}>
                Siłownia <br /> plenerowa
              </h2>

              <ul className="mt-4 space-y-2 text-sm leading-normal font-thin text-(--color-off-primary) text-left">
                {normalGrymFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 lg:gap-6  mb-8"
                  >
                    <div>
                      <RedMinus />
                    </div>
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dzik Gym */}
            <div className={`relative ${styles.card} rounded-ee-4xl`}>
              <GradientBlueGreen />
              <h3 className="text-left  text-lg lg:text-2xl  text-(--color-primary) font-light">
                Profesjonalna
              </h3>
              <h2 className={` text-(--color-brand-green) ${styles.cardTitle}`}>
                Siłownia <br /> DZIK GYM
              </h2>

              <ul className="mt-4 space-y-2 text-sm leading-normal font-thin text-(--color-off-primary) text-left">
                {gymDzikFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 lg:gap-6  mb-8"
                  >
                    <div>
                      <GreenPlus />
                    </div>
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
