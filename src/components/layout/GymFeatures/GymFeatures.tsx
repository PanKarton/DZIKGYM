import GradientBlueRed from "@/components/ui/GradientBlueRed";
import InfoBubble from "@/components/ui/InfoBubble";
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
        <h2 className="text-(--blue) font-black text-[3.5rem] leading-[1] italic mb-16">
          Głowne cechy <br /> siłowni DZIK GYM
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {gymFeaturesData.map(({ feature, description }, index) => (
              <div
                key={index}
                className="rounded-2xl border-[2px] border-(--blue) bg-(--blue)/20 text-(--primary) flex-col flex-center aspect-[314/245]  p-8"
              >
                <h3 className="text-3xl font-black italic mb-4">{feature}</h3>
                <p className="font-thin text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
          <div className=" relative aspect-[796/606]">
            <Image
              src="/gym-machine.png"
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
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
