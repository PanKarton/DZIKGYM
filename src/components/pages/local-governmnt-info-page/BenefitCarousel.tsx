"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

const benefits = [
  {
    image: "/local-gov-carousel/Zdrowsi_mieszkancy.svg",
    title: "Zdrowsi mieszkańcy",
    description:
      "Regularna aktywność fizyczna zmniejsza ryzyko chorób cywilizacyjnych.",
  },
  {
    image: "/local-gov-carousel/widoczna_inwestycja.svg",
    title: "Widoczna inwestycja",
    description:
      "Mieszkańcy szybko zauważą, że władze realnie inwestują w ich dobrostan.",
  },
  {
    image: "/local-gov-carousel/wieksze_zaufanie_spoleczne.svg",
    title: "Większe zaufanie społeczne",
    description:
      "Dobre decyzje procentują - inwestycja w zdrowie mieszkańców przekłada się na rosnące zaufanie do samorządu.",
  },
  {
    image: "/local-gov-carousel/wzmacnianie-wizerunku-promotora-innowacji.svg",
    title: "Wzmacnianie wizerunku jako promotora innowacji społecznych",
    description:
      "Nowoczesna inicjatywa, promująca innowacyjne rozwiązania społeczne i urbanistyczne, co podkreśla otwartość na nowatorskie inwestycje.",
  },
  {
    image: "/local-gov-carousel/nowoczesna_przestrzen_publiczna.svg",
    title: "Nowoczesna przestrzeń publiczna",
    description:
      "W rezultacie powstaje estetyczna, bezpieczna i trwała siłownia plenerowa, która będzie służyć mieszkańcom przez długie lata, a ponadto stać się lokalną wizytówką.",
  },
];

const circleButtonStyle =
  "w-20 aspect-square border-2 border-(--color-brand-blue) rounded-full flex-center text-(--color-brand-blue) hover:bg-(--color-brand-blue) hover:text-(--color-primary)   transition cursor-pointer";

export default function BenefitCarousel() {
  const [index, setIndex] = useState(0);
  const total = benefits.length;

  const prev = () => setIndex((prev) => (prev - 1 + total) % total);
  const next = () => setIndex((prev) => (prev + 1) % total);

  const getPositionClass = (i: number) => {
    if (i === index) return "z-20 scale-100 opacity-100 translate-x-0";
    if (i === (index + 1) % total)
      return "translate-x-9/24 z-10 scale-80 opacity-40";
    if (i === (index - 1 + total) % total)
      return "-translate-x-9/24 z-10 scale-80 opacity-40";
    return "opacity-0 scale-90 pointer-events-none invisible";
  };

  return (
    <section className="pt-12 lg:pt-24 text-center  ">
      <div className="content-max-width">
        <SectionHeading className="mb-12 md:mb-24">
          Co zyskuje samorząd <br /> budując nowoczesną siłownię plenerową?
        </SectionHeading>

        {/* Desktop carousel */}
        <div className="hidden md:flex relative w-full aspect-4/1  items-center justify-center">
          {benefits.map((item, i) => (
            <div
              key={i}
              className={`absolute transition-all duration-500 ease-in-out bg-(--color-primary) rounded-3xl shadow-2xl py-16 px-8 border-(--color-off-primary) border-2 flex-center gap-8 w-[65%] aspect-870/400 transform ${getPositionClass(i)}`}
            >
              <div className="w-full max-w-68 aspect-square relative overflow-hidden">
                <Image src={item.image} alt={item.title} fill />
              </div>

              <div className="text-left">
                <h3 className="text-(--color-content-emphasis) font-black italic mb-4 text-[2rem]">
                  {item.title}
                </h3>
                <p className="text-sm   leading-snug font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center justify-center gap-24 mt-24">
          <button onClick={prev} className={circleButtonStyle}>
            <ChevronLeft size={60} style={{ translate: "-2px" }} />
          </button>

          <span className="text-3xl font-medium text-(--color-text-muted)">
            {index + 1}/{total}
          </span>

          <button onClick={next} className={circleButtonStyle}>
            <ChevronRight size={60} style={{ translate: "2px" }} />
          </button>
        </div>

        {/* Mobile carousel */}
        <div className="block md:hidden overflow-x-auto no-scrollbar  min-h-123.5 -mx-[clamp(1.25rem,3vw,3.75rem)]">
          <div className="flex gap-4 pb-4 ">
            {benefits.map((item, i) => (
              <div
                key={i}
                className={` rounded-4xl py-8 px-8 border-(--color-off-primary) border-2 flex flex-col items-center justify-start `}
              >
                <div className="w-48 aspect-square   relative overflow-hidden">
                  <Image src={item.image} alt={item.title} fill />
                </div>

                <div className="text-center pt-4">
                  <h3 className="text-(--color-brand-blue) font-black italic mb-4 text-[24px] leading-none">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-snug font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
