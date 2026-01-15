import PolandMapScene from "@/components/map3d/PolandMap";
import React from "react";

export default function MapSection() {
  return (
    <section className="w-full bg-(--primary) my-16 md:pt-24 ">
      <div className="px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-(--secondary) italic leading-[1]">
          DZIK GYM jest tam,
          <br />
          <span className="text-(--blue) ">gdzie fani tego chcą!</span>
        </h2>
        <p className="mt-6 text-xl text-(--secondary) max-w-5xl mx-auto">
          DZIK GYM funkcjonuje już w wielu miastach i miejscowościach w Polsce.
          <br />
          Każda realizacja to aktywnie używana przestrzeń i realna obecność
          mieszkańców.
        </p>
        <div className="mt-12">
          <div className="relative w-full aspect-map  ">
            {/* Placeholder for the map of Poland */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-2xl font-semibold">
              <PolandMapScene />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
