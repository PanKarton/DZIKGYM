import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="pt-12 lg:pt-24">
      <div className="content-max-width ">
        <div className=" mb-12 text-left sm:text-center">
          <SectionHeading>
            Zadbajmy wspólnie <br />
            <span className="text-(--color-brand-blue)">
              o zdrowie i przyszłość
            </span>{" "}
            Twojej społeczności
          </SectionHeading>
        </div>

        <div className="w-full isolate  flex justify-center text-(--color-primary)  bg-(--color-secondary)  rounded-2xl overflow-hidden p-12 md:p-16 mb-16 relative min-h-145 lg:min-h-167">
          <div className="absolute  top-0 left-0 w-full aspect-1320/667 z-1 ">
            <Image
              src="/images/dzik-gym-mission.png"
              alt="Tłum na siłowni"
              fill
              priority
            />
            <div className="absolute inset-0 founders-gradient z-10"></div>
          </div>
          <div className="flex-col flex-center gap-4  mt-auto z-2">
            <h3 className="text-[2.5rem] font-black leading-[1.15] italic text-center text-(--color-brand-blue)">
              Misja DZIK GYM
            </h3>
            <p className="text-sm  text-center font-thin leading-relaxed  max-w-4xl">
              Wyobraź sobie miasto, w którym mieszkańcy częściej ćwiczą, a
              rzadziej stoją w kolejce do lekarza. Wyobraź sobie przestrzeń,
              która zapełnia się ruchem, energią i uśmiechem - a nie świeci
              pustką. Wyobraź sobie przestrzeń, która działa, inspiruje i
              zmienia życia. To właśnie misja DZIK GYM.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
