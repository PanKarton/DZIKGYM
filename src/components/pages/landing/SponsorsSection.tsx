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
        <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,180px))] justify-center gap-x-16 gap-y-8">
          {parnersLogos.map((partner, index) => (
            <div key={index} className="relative aspect-4/1 w-full border-4">
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
