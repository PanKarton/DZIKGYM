import GradientBlueRed from "@/components/ui/GradientBlueRed";
import InfoBubble from "@/components/ui/InfoBubble";
import { MeshBackground } from "@/components/ui/MeshBackground";
import Image from "next/image";

const gymFeaturesData = [
  {
    feature: "Nowoczesny sprzęt",
    description: "Dostęp do najnowszych maszyn i urządzeń fitness.",
  },
  {
    feature: "Profesjonalni trenerzy",
    description: "Wykwalifikowany personel gotowy do pomocy.",
  },
  {
    feature: "Godziny otwarcia",
    description: "Siłownia dostępna 24/7 dla Twojej wygody.",
  },
  {
    feature: "Zajęcia grupowe",
    description: "Yoga, pilates, spinning i wiele innych.",
  },
];

const machineFeaturesData = [
  {
    textSmall: "Regulowane obciążenie nawet do",
    textBold: "220kg",
    top: "10%",
    left: "10%",
    isLeft: false,
  },
  {
    textSmall: "Regulowane",
    textBold: "Obciążenie",
    top: "35%",
    left: "70%",
    isLeft: true,
  },
  {
    textSmall: "Ergonomiczny",
    textBold: "Design",
    top: "70%",
    left: "10%",
    isLeft: false,
  },
];

export default function GymFeatures() {
  return (
    <section className="relative flex items-center justify-center py-24">
      <div className="content-max-width">
        <GradientBlueRed />
        <h2 className="text-(--color-content-emphasis) font-black text-[3.5rem] leading-none italic mb-16">
          Głowne cechy <br /> siłowni DZIK GYM
        </h2>
        <div className="grid grid-rows-2 xl:grid-cols-2 xl:grid-rows-1 xl:content-end gap-24 lg:gap-8">
          <div className=" relative aspect-376/315 mt-24 max-w-200">
            <Image
              src="/images/gym-machine.png"
              alt="Gym Machine"
              fill
              className="scale-[1.5]"
            />

            {machineFeaturesData.map(
              ({ textSmall, textBold, top, left, isLeft }, index) => (
                <div
                  key={index}
                  className={`absolute aspect-square w-17 cursor-pointer`}
                  style={{ top, left }}
                >
                  <InfoBubble
                    textSmall={textSmall}
                    textBold={textBold}
                    isLeft={isLeft}
                  />
                </div>
              ),
            )}
          </div>
          <div
            className="
    flex gap-4 overflow-x-auto snap-x snap-mandatory px-4
    lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:overflow-visible
  "
          >
            {gymFeaturesData.map(({ feature, description }, index) => (
              <div
                key={index}
                className="
        min-w-30 shrink-0 snap-start
        rounded-2xl border-2 border-(--color-brand-blue)
        bg-(--color-brand-blue)/20 text-(--color-primary)
        flex flex-col items-center justify-center
        aspect-314/245 p-8
        lg:min-w-0
      "
              >
                <h3 className="text-3xl font-black italic mb-4">{feature}</h3>
                <p className="font-thin text-sm leading-relaxed text-center">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
