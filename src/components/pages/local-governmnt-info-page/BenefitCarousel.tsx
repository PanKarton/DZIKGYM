"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

const benefits = [
  {
    image: "/images/benefit1.jpg",
    title: "Zdrowsi mieszkańcy",
    description:
      "Regularna aktywność fizyczna zmniejsza ryzyko chorób cywilizacyjnych.",
  },
  {
    image: "/images/benefit2.jpg",
    title: "Aktywna społeczność",
    description: "Mieszkańcy chętniej wychodzą z domu i budują relacje.",
  },
  {
    image: "/images/benefit3.jpg",
    title: "Nowoczesny wizerunek",
    description: "Inwestycja w zdrowie świadczy o postępowym zarządzaniu.",
  },
  {
    image: "/images/benefit4.jpg",
    title: "Bezpieczna przestrzeń",
    description: "Zorganizowane miejsce do ćwiczeń zwiększa bezpieczeństwo.",
  },
  {
    image: "/images/benefit5.jpg",
    title: "Wsparcie seniorów",
    description: "Siłownia plenerowa ułatwia starszym aktywność fizyczną.",
  },
  {
    image: "/images/benefit6.jpg",
    title: "Mniej wydatków na leczenie",
    description: "Aktywność fizyczna zmniejsza koszty opieki zdrowotnej.",
  },
];

const circleButtonStyle =
  "w-20 aspect-square border-2 border-(--color-brand-blue) rounded-full flex-center text-(--color-brand-blue) hover:bg-(--color-brand-blue) hover:text-(--color-primary) transition cursor-pointer";

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
    <section className="pb-24 text-center  ">
      <div className="content-max-width">
        <SectionHeading className="mb-24">
          Co zyskuje samorząd <br /> budując nowoczesną siłownię plenerową?
        </SectionHeading>

        <div className="relative w-full aspect-[4/1] flex items-center justify-center">
          {benefits.map((item, i) => (
            <div
              key={i}
              className={`absolute transition-all duration-500 ease-in-out bg-white rounded-3xl shadow-2xl py-16 px-8 border-(--color-off-primary) border-2 flex-center gap-8 w-[65%] aspect-[870/400] transform ${getPositionClass(i)}`}
            >
              <div className="w-full max-w-68 aspect-square bg-gray-200  relative overflow-hidden">
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

        <div className="flex items-center justify-center gap-24 mt-24">
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
      </div>
    </section>
  );
}
