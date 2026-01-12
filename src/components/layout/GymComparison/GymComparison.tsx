import GreenPlus from "@/components/ui/GreenPlus";
import RedMinus from "@/components/ui/RedMinus";
import Image from "next/image";

const styles = {
  card: "bg-gradient-to-tr text-white gap-6 py-14 px-8 rounded-[20px] max-w-[26rem] overflow-hidden",
  cardTitle: "uppercase italic text-left text-4xl font-black",
  redGradient: "bg-gradient-to-tr from-[#000c2f] via-[#22001a] to-[#3b0000]",
  greenGradient: "bg-gradient-to-tr from-[#000c2f] via-[#012118] to-[#063d0d]",
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
    <section className="mx-auto px-4 pt-16 pb-100 text-center">
      {/* Title */}
      <h2 className="text-2xl md:text-[2.5rem] font-black italic text-[#0f172a] mb-12">
        Dlaczego nasza siłownia jest lepsza?
      </h2>

      {/* Image Section */}
      <div className="relative flex flex-col md:flex-row justify-center items-center gap-4">
        {/* Background Image Comparison */}
        <div className="w-full max-w-[1320px] relative aspect-[1230/670] rounded-[20px] overflow-hidden">
          <Image src="/gym-comp-placeholder.jpg" alt="Gym comparison" fill />
        </div>

        {/* Info Cards */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex flex-row gap-8 ">
          {/* Standard Gym */}
          <div className={` relative  ${styles.card}`}>
            <div
              className={`absolute inset-0  z-[-1] ${styles.redGradient}`}
            ></div>
            <h3 className="text-left text-2xl text-(--primary) font-medium">
              Standardowa
            </h3>
            <h2 className={`text-(--red) ${styles.cardTitle}`}>
              Siłownia plenerowa
            </h2>

            <ul className="mt-4 space-y-2 text-sm leading-[1.5] font-thin text-(--offWhite) text-left">
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
            <div
              className={`absolute inset-0  z-[-1] ${styles.greenGradient}`}
            ></div>
            <h3 className="text-left text-2xl text-(--primary) font-medium">
              Profesjonalna
            </h3>
            <h2 className={` text-(--green) ${styles.cardTitle}`}>
              Siłownia <br /> DZIK GYM
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-[1.5] font-thin text-(--offWhite) text-left">
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
    </section>
  );
}
