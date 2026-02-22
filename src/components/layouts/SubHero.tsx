import React from "react";
import { MeshBackground } from "../ui/MeshBackground";

export default function SubHero({
  heading,
  subHeading,
  children,
}: {
  heading: string;
  subHeading: string | React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="px-4 py-2 border  text-(--color-primary) relative h-106">
      <div className="relative ">
        <div className="h-full clip-sub-hero relative">
          <div className="absolute inset-0 bg-black z-0"></div>
          <MeshBackground z={"10"} />
          <div className="absolute inset-0 sub-hero-gradient z-20"></div>
          <div className="relative z-30 flex flex-col items-center justify-center gap-8 text-center pt-35 pb-20">
            <h1 className="font-black text-[3.875rem] italic leading-none">
              {heading}
            </h1>
            <div className="font-thin text-xl">{subHeading}</div>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
