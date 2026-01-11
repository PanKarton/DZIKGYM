import CTA from "@/components/ui/Cta";
import Image from "next/image";
import Link from "next/link";

export default function BrandInfoSection() {
  return (
    <div className="w-full  relative pl-62 pt-33 pb-21 clip-hero">
      <div>
        <div className="absolute inset-0 bg-black/80 z-[-1]" />
        <h2 className="h2-footer font-black italic mb-3">Marka DZIK</h2>
        <p className="text-sm/[1.5] font-light max-w-[33rem] mb-12 ">
          DZIK® to marka sportowa założona w piwnicy przez czterech młodych
          przyjaciół, obecnie dająca zatrudnienie około 200 osobom. Wszystko
          zaczęło się od twórczości internetowej, <br />
          aby z czasem ewoluować w wielomilionowy biznes. W ofercie firmy
          znajdują się ubrania sportowe, suplementy diety i żywność
          funkcjonalna.
        </p>
        <Link
          className="w-60 block"
          href="https://wkdzik.pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CTA variant="blue">
            <span className="font-light text-sm non-italic">
              Wejdź na wkdzik.pl
            </span>
          </CTA>
        </Link>
        <Image
          src="/footer-top-background.jpg"
          alt="tło stopki siłownia plenerowa"
          fill
          className="object-cover z-[-2] "
          sizes="100vw"
        />
      </div>
    </div>
  );
}
