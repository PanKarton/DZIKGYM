"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { IoIosInformationCircleOutline } from "react-icons/io";

const caruselImages = [
  {
    image: "/images/first-gym-1.png",
    alt: "Zdrowsi mieszkańcy",
  },
  {
    image: "/images/first-gym-2.png",
    alt: "Aktywna społeczność",
  },
  {
    image: "/images/first-gym-3.png",
    alt: "Nowoczesny wizerunek",
  },
];

const gymDetails = [
  "17 urządzeń treningowych",
  "Użytkowanie codziennie przez cały rok",
  "Projekt funkcjonujący od 2023 roku",
];

const circleButtonStyle =
  "w-20 aspect-square border-2 border-(--color-brand-blue) rounded-full flex-center text-(--color-brand-blue) hover:bg-(--color-brand-blue) hover:text-(--color-primary) transition cursor-pointer";

export default function FirstGymSection() {
  const [index, setIndex] = useState(0);
  const total = caruselImages.length;

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
        <SectionHeading className="mb-10">
          Pierwszy DZIK GYM - Ochota
        </SectionHeading>

        <div className="flex flex-row justify-between mb-26">
          {gymDetails.map((detail, i) => (
            <div className=" flex items-center" key={i}>
              <div className="text-(--color-brand-blue) text-4xl mr-4">
                <IoIosInformationCircleOutline />
              </div>
              <p className="text-sm  text-(--color-text-muted)">{detail}</p>
            </div>
          ))}
        </div>

        <div className="relative w-full aspect-4/1 flex items-center justify-center">
          {caruselImages.map((item, i) => (
            <div
              key={i}
              className={`absolute transition-all duration-500 ease-in-out rounded-3xl  border-(--color-off-primary)  w-[65%] aspect-870/490 transform ${getPositionClass(i)}`}
            >
              <Image src={item.image} alt={item.alt} fill />
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
