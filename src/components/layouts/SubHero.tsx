import React from "react";
import { MeshBackground } from "../ui/MeshBackground";

type SubHeroProps = {
  heading: string;
  subHeading: string | React.ReactNode;
  children?: React.ReactNode;
};

export default function SubHero({
  heading,
  subHeading,
  children,
}: SubHeroProps) {
  return (
    <section className="relative w-full py-2 px-4.25 text-(--color-primary)">
      <div className="relative min-h-[360px] sm:min-h-[420px] lg:min-h-[500px] rounded-[10px] overflow-hidden  lg:overflow-auto clip-sub-hero">
        <div className="absolute inset-0 bg-black z-0" />

        <MeshBackground z="10" />

        <div className="absolute inset-0 sub-hero-gradient z-20" />

        <div className="relative z-30 flex min-h-[360px] sm:min-h-[420px] lg:min-h-[500px] flex-col items-center justify-center gap-5 sm:gap-7 lg:gap-8 px-4 pt-16  sm:px-8 sm:pt-24 sm:pb-16 lg:py-32 text-center">
          <h1 className="max-w-5xl font-black italic leading-[0.9] text-[clamp(2.5rem,8vw,6rem)]">
            {heading}
          </h1>

          <div className="max-w-3xl text-base sm:text-lg lg:text-xl font-thin leading-snug">
            {subHeading}
          </div>

          {children && <div className="mt-2 sm:mt-4">{children}</div>}
        </div>
      </div>
    </section>
  );
}
