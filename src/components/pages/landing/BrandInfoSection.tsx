import CTA from "@/components/ui/cta";
import { TrademarkText } from "@/components/ui/TradeMark";
import Image from "next/image";
import Link from "next/link";

export default function BrandInfoSection() {
  return (
    // <div className="w-full  relative pt-33 pb-21 clip-footer flex items-center justify-center">
    <div className="w-full relative isolate">
      {/* dings z góry  */}
      <div className="absolute left-0 top-0 -translate-y-[calc(100%-1px)] aspect-250/57 w-65 clip-footer-top-thing " />

      <div className="relative pt-33 pb-21 rounded-[10px] rounded-tl-none  flex items-center justify-center overflow-hidden">
        {/* Przyciemnienie */}
        <div className="absolute inset-0 bg-black/80 z-1" />
        {/* Gradient czarny */}
        <div className="absolute top-0 left-0 w-full h-[20%] bg-[linear-gradient(to_bottom,#000_0%,#000_20%,transparent_100%)] z-2" />
        {/* Content */}
        {/* Tło obrazek */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/footer-top-background.jpg"
            alt="tło stopki siłownia plenerowa"
            fill
            className="object-cover  "
            sizes="100vw"
          />
        </div>
        <div className="content-max-width z-3">
          <h2 className="h2-footer font-black italic mb-3">
            Marka{" "}
            <TrademarkText fontWeight={900} right="-0.2em">
              DZIK
            </TrademarkText>
          </h2>
          <p className="text-sm/normal font-light max-w-132 mb-12 ">
            <TrademarkText>DZIK</TrademarkText> to marka sportowa założona w
            piwnicy przez czterech młodych przyjaciół, obecnie dająca
            zatrudnienie około 200 osobom. Wszystko zaczęło się od twórczości
            internetowej, <br />
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
              <span className="font-semibold text-sm non-italic">
                Wejdź na wkdzik.pl
              </span>
              <span className="relative translate-y-px text-lg font-medium">
                →
              </span>
            </CTA>
          </Link>
        </div>
      </div>
    </div>
  );
}
