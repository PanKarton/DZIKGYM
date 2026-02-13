import { GymMap } from "./GymMap";

export default function GymMapSection() {
  return (
    <section className="">
      <div className="text-center pt-24 pb-18">
        <h2 className="text-[3.5rem] font-extrabold italic leading-[1.2] mb-6">
          DZIK GYM jest tam,
          <br />{" "}
          <span className="text-(--color-content-emphasis) ">
            gdzie społeczność tego chce
          </span>
        </h2>
        <p className="text-xl">
          DZIK GYM funkcjonuje już w wielu miastach i miejscowościach w Polsce.{" "}
          <br />
          Każda realizacja to aktywnie używana przestrzeń i realna obecność
          mieszkańców.
        </p>
      </div>
      <GymMap />
    </section>
  );
}
