import CTA from "@/components/ui/cta";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ContactSuggestionSection() {
  return (
    <section className="py-24 bg-(--color-primary-darker)">
      <div className="content-max-width">
        <div className="flex gap-16 items-center">
          <div className="relative aspect-588/400 max-w-147 w-full bg-black/10"></div>
          <div className="relative aspect-66/95 w-17">
            <Image
              src="/images/right-arrow.svg"
              alt="Strzałka w prawo"
              aria-hidden
              fill
              className="object-contain"
            />
          </div>
          <div className="py-12">
            <SectionHeading className="text-(--color-brand-blue) text-left leading-11">
              <span className="text-(--color-text-primary)">
                Na każdym kroku
              </span>
              <br /> możesz
              <br /> liczyć na nasze
              <br /> wsparcie.
            </SectionHeading>

            <p className="text-sm leading-relaxed pt-6 ">
              W razie pytań lub chęci wsparcia na jakimkolwiek etapie: pisz na
              gym@wkdzik.pl - chętnie pomożemy!
            </p>
            <Link href="/kontakt" className="inline-block">
              <div className="w-63 pt-12">
                <CTA variant="blueGradient">
                  <span>Skontaktuj się</span>
                  <FaArrowRightLong className="relative -translate-y-px scale-[1.2]" />
                </CTA>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
