import CTA from "@/components/ui/cta";
import Image from "next/image";
import Link from "next/link";

export default function ContactSuggestionSection() {
  return (
    <section className="py-24 bg-(--color-primary-darker)">
      <div className="content-max-width">
        <div className="flex flex-col lg:flex-row lg:gap-16 justify-center items-center">
          <h2 className=" font-black italic text-(--color-brand-blue) text-center lg:text-right leading-11 text-[2rem] lg:text-[2.5rem]">
            <span className="text-(--color-text-primary)">
              Na każdym kroku{" "}
            </span>
            <br /> możesz
            <br className="hidden lg:block" /> liczyć na nasze
            <br className="hidden lg:block" /> wsparcie
          </h2>

          <div className="relative aspect-66/95 w-17 lg:block hidden">
            <Image
              src="/images/right-arrow.svg"
              alt="Strzałka w prawo"
              aria-hidden
              fill
              className="object-contain"
            />
          </div>
          <div className="lg:py-12 max-w-147 text-center lg:text-left">
            <p className="text-sm leading-relaxed pt-6 ">
              W razie pytań lub potrzeby wsparcia na jakimkolwiek etapie:
              <br /> wypełnij formularz lub pisz na
              <strong> gym@wkdzik.pl</strong> - chętnie pomożemy!
            </p>
            <Link href="/kontakt" className="inline-block">
              <div className="w-63 pt-8 lg:pt-12">
                <CTA variant="blueGradient">
                  <span className="text-sm font-bold">
                    Przejdź do formularza{" "}
                  </span>
                  <span className="relative translate-y-px text-lg font-medium">
                    →
                  </span>
                </CTA>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
