"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { cn } from "@/lib/utils";

const caruselImages = [
  {
    image: "/images/first-gym-1.webp",
    alt: "Zdrowsi mieszkańcy",
  },
  {
    image: "/images/first-gym-2.webp",
    alt: "Aktywna społeczność",
  },
  {
    image: "/images/first-gym-3.webp",
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
        <SectionHeading isBig className="mb-6 sm:mb-10">
          {/* Desktop */}
          <span className="hidden sm:inline">Pierwszy DZIK GYM - Ochota</span>

          {/* Mobile */}
          <span className="block sm:hidden text-left max-w-92 mx-auto ">
            <span className="block">Pierwszy </span>
            <span className="block">DZIK GYM</span>
            <span className="block text-(--color-brand-blue) mx-auto">
              Ochota
            </span>
          </span>
        </SectionHeading>
        {/* Detale */}
        <div
          className={cn(
            "flex flex-col max-w-92 mx-auto text-left gap-4  mb-12 ",
            "md:flex-row md:max-w-full md:justify-between md:px-4 sm:mb-26",
          )}
        >
          {gymDetails.map((detail, i) => (
            <div className=" flex items-center" key={i}>
              <div className="text-(--color-brand-blue) text-4xl mr-4">
                <IoIosInformationCircleOutline />
              </div>
              <p className="text-sm  text-(--color-text-muted)">{detail}</p>
            </div>
          ))}
        </div>
        {/* Karuzela Desktop */}
        <div className="hidden sm:flex relative w-full aspect-4/1  items-center justify-center">
          {caruselImages.map((item, i) => (
            <div
              key={i}
              className={`absolute transition-all duration-500 ease-in-out rounded-3xl overflow-hidden  border-(--color-off-primary)  w-[65%] aspect-870/490 transform ${getPositionClass(i)}`}
            >
              <Image src={item.image} alt={item.alt} fill />
            </div>
          ))}
        </div>
        {/* Przyciski */}
        <div className="hidden sm:flex items-center justify-center gap-24 mt-24">
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
      {/* Karuzela Mobile */}
      <div className="block sm:hidden overflow-x-auto no-scrollbar">
        <div className="flex gap-2 w-max ">
          {caruselImages.map((item, i) => (
            <div
              key={i}
              className={`relative  rounded-3xl w-81 aspect-270/152 `}
            >
              <Image src={item.image} alt={item.alt} fill />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
