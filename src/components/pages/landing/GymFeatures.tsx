import GradientBlueRed from "@/components/ui/GradientBlueRed";
import InfoBubble from "@/components/ui/InfoBubble";
import { cn } from "@/lib/utils";
import Image from "next/image";

type GymFeature = {
  feature: string;
  description: string;
};

type MachineFeature = {
  textSmall: string;
  textBold: string;
  top: string;
  left: string;
  isLeft: boolean;
};

const GYM_FEATURES: GymFeature[] = [
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

const MACHINE_FEATURES: MachineFeature[] = [
  {
    textSmall: "Regulowane obciążenie nawet do",
    textBold: "220kg",
    top: "15%",
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

const SECTION_PADDING_X = "clamp(1rem,3vw,3.75rem)";

export default function GymFeatures() {
  return (
    <section className="relative overflow-hidden py-24">
      <SectionBackground />

      <div className="content-max-width relative z-10">
        <SectionHeading />

        <div className="grid grid-rows-[auto_auto_auto] gap-24 xl:grid-cols-2 xl:grid-rows-1 xl:gap-8">
          <GymFeaturesList />
          <MachinePreview />
        </div>
      </div>
    </section>
  );
}

function SectionBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <GradientBlueRed />

      <Image
        src="/mesh/mesh-full-hd.svg"
        alt=""
        fill
        aria-hidden="true"
        className="object-cover"
      />
    </div>
  );
}
function SectionHeading() {
  return (
    <h2 className="relative z-10 mx-auto mb-16 max-w-150 text-[3.5rem] font-black leading-none text-(--color-content-emphasis) italic xl:mx-0 xl:max-w-max">
      Główne cechy <br /> siłowni DZIK GYM
    </h2>
  );
}

function GymFeaturesList() {
  return (
    <div
      className={cn(
        /*
          Mobile:
          - poziomy carousel
          - full-bleed poza paddingiem .content-max-width
          - trzeci wiersz grida, pod obrazkiem
        */
        "row-start-3 flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar",
        `-mx-[${SECTION_PADDING_X}] px-[${SECTION_PADDING_X}] scroll-px-[${SECTION_PADDING_X}]`,

        /*
          XL:
          - klasyczny grid 2x2
          - wraca do szerokości contentu
        */
        "xl:row-start-auto xl:col-start-1",
        "xl:mx-0 xl:grid xl:grid-cols-2 xl:grid-rows-2 xl:overflow-visible xl:px-0",
      )}
    >
      {GYM_FEATURES.map((feature) => (
        <GymFeatureCard key={feature.feature} {...feature} />
      ))}
    </div>
  );
}

function GymFeatureCard({ feature, description }: GymFeature) {
  return (
    <article
      className={cn(
        /*
          Mobile carousel card:
          - stała szerokość
          - shrink-0, żeby nie kompresowało kafelków
        */
        "w-70 shrink-0 snap-start",

        /*
          Visual style
        */
        "rounded-2xl border-2 border-(--color-brand-blue)",
        "bg-(--color-brand-blue)/20 text-(--color-primary)",

        /*
          Content layout
        */
        "flex flex-col items-start justify-center p-6",

        /*
          XL grid card:
          - szerokość przejmuje grid
          - aspect ratio dopiero na desktopie
        */
        "xl:w-auto xl:min-w-0 xl:aspect-314/245 xl:p-8",
      )}
    >
      <h3 className="mb-4 text-2xl font-black italic xl:text-3xl">{feature}</h3>

      <p className="text-sm leading-relaxed font-light">{description}</p>
    </article>
  );
}

function MachinePreview() {
  return (
    <div
      className={cn(
        /*
          Mobile:
          - obrazek zajmuje pierwsze 2 wiersze
          - ograniczona szerokość, żeby nie rozwalał layoutu
        */
        "relative row-span-2 mx-auto aspect-1216/920 w-full max-w-150",

        /*
          XL:
          - prawa kolumna
          - jeden wiersz
        */
        "xl:col-start-2 xl:row-span-1 xl:max-w-none",
      )}
    >
      <Image
        src="/images/maszyna_glowna.png"
        alt="Maszyna treningowa DZIK GYM"
        fill
        className="object-contain"
        sizes="(min-width: 1280px) 50vw, 100vw"
        priority={false}
      />

      {MACHINE_FEATURES.map((feature) => (
        <MachineInfoPoint
          key={`${feature.textSmall}-${feature.textBold}`}
          {...feature}
        />
      ))}
    </div>
  );
}

function MachineInfoPoint({
  textSmall,
  textBold,
  top,
  left,
  isLeft,
}: MachineFeature) {
  return (
    <div
      className="absolute aspect-square w-12 cursor-pointer sm:w-17"
      style={{ top, left }}
    >
      <InfoBubble textSmall={textSmall} textBold={textBold} isLeft={isLeft} />
    </div>
  );
}
