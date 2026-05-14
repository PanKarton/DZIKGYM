import { GymPartner } from "@/types/gym-partners";
import Image from "next/image";

export default function SponsorsSection({
  partnersLogos,
}: {
  partnersLogos: GymPartner[];
}) {
  return (
    <section className=" py-24 flex-center">
      <div className="content-max-width">
        <h2 className="text-center text-lg md:text-xl font-medium text-(--gray) leading-tight mb-12">
          Oni wsparli swoje społeczności:
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,300px))] justify-center gap-x-16 gap-y-8">
          {partnersLogos.map((partner, index) => (
            <div key={index} className="relative aspect-4/1 w-full ">
              <Image
                src={partner.content.png.filename}
                alt={partner.content.png.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
