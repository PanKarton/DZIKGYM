import { GymPartner } from "@/types/gym-partners";
import Image from "next/image";

export default function SponsorsSection({
  parnersLogos,
}: {
  parnersLogos: GymPartner[];
}) {
  return (
    <section className="bg-(--color-primary-darker) py-24 flex-center">
      <div className="content-max-width">
        <h2 className="text-center text-lg md:text-xl font-medium italic text-(--gray) leading-tight mb-12">
          Oni wsparli swoje społeczności:
        </h2>
        <div className="flex flex-row flex-wrap justify-center items-center  gap-x-16 gap-y-8 ">
          {parnersLogos.map((partner, index) => (
            <div key={index} className="aspect-[4] basis-1/5 relative">
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
