import GradientBlueGreen from "@/components/ui/GradientBlueGreen";
import GradientBlueRed from "@/components/ui/GradientBlueRed";
import GreenPlus from "@/components/ui/GreenPlus";
import RedMinus from "@/components/ui/RedMinus";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import Image from "next/image";

const styles = {
  card: "text-white comp-card-width gap-6 py-14 px-8 rounded-[20px]  overflow-hidden w-full max-w-[26.25rem]",
  cardTitle: "uppercase italic text-left text-4xl font-black",
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
    <section className="mx-auto px-4 pt-16 pb-60 text-center flex-center">
      <div className="content-max-width">
        {/* Title */}

        <SectionHeading className="mb-12">
          Dlaczego nasza siłownia jest lepsza?
        </SectionHeading>

        {/* Image Section */}
        <div className="relative flex flex-col md:flex-row justify-center items-center gap-4 ">
          {/* Background Image Comparison */}
          <div className="w-full relative aspect-1230/670 rounded-4xl overflow-hidden">
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
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex flex-row gap-8 w-full max-w-[51rem]">
            {/* Standard Gym */}
            <div className={` relative  ${styles.card}`}>
              <GradientBlueRed />
              <h3 className="text-left text-2xl  text-(--color-primary) font-medium">
                Standardowa
              </h3>
              <h2 className={`text-(--color-brand-red) ${styles.cardTitle}`}>
                Siłownia plenerowa
              </h2>

              <ul className="mt-4 space-y-2 text-sm leading-[1.5] font-thin text-(--color-off-primary) text-left">
                {normalGrymFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-10  mb-8">
                    <div className="w-[21px] shrink-0">
                      <RedMinus />
                    </div>
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dzik Gym */}
            <div className={`relative ${styles.card}`}>
              <GradientBlueGreen />
              <h3 className="text-left text-2xl  text-(--color-primary) font-medium">
                Profesjonalna
              </h3>
              <h2 className={` text-(--color-brand-green) ${styles.cardTitle}`}>
                Siłownia <br /> DZIK GYM
              </h2>

              <ul className="mt-4 space-y-2 text-sm leading-[1.5] font-thin text-(--color-off-primary) text-left">
                {gymDzikFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-10  mb-8">
                    <div className="w-[26px] shrink-0">
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
