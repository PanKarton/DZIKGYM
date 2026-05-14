import { GymLocation } from "@/types/gym-location";
import { GymMap } from "./GymMap";
import { TrademarkText } from "@/components/ui/TradeMark";

export default function GymMapSection({
  gymLocations,
}: {
  gymLocations: GymLocation[];
}) {
  return (
    <section id="map">
      <div className="text-center pt-24 pb-18">
        <h2 className="text-[2rem] 2xl:text-[3.5rem] font-black  italic leading-[1.2] mb-6 px-8">
          <TrademarkText fontWeight={900} right="-0.1em">
            DZIK
          </TrademarkText>
          GYM jest tam,
          <br />{" "}
          <span className="text-(--color-content-emphasis) ">
            gdzie społeczność tego chce
          </span>
        </h2>
        <p className="text-xl px-8">
          <TrademarkText>DZIK</TrademarkText> GYM funkcjonuje już w wielu
          miastach w Polsce. <br />
          Każda realizacja to aktywnie używana przestrzeń i realna obecność
          mieszkańców.
        </p>
      </div>
      <GymMap gymLocations={gymLocations} />
    </section>
  );
}
