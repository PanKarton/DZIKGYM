import CTA from "@/components/ui/cta";
import { TrademarkText } from "@/components/ui/TradeMark";
import Link from "next/link";

export default function EncouragementSection() {
  return (
    <section className="pt-12 lg:pt-24">
      <div className="content-max-width">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 items-start max-w-lg mx-auto lg:mx-0 lg:max-w-full">
          <div>
            <h2 className=" font-black  italic text-[2rem] lg:text-[2.5rem]">
              <span className="text-(--color-brand-blue)">Nie musisz</span>{" "}
              <br />
              <span className="text-[3rem] lg:text-[5.375rem]    leading-none mt-1">
                zaczynać <br /> od zera{" "}
              </span>
            </h2>
          </div>

          <div className="text-sm    leading-relaxed space-y-8">
            <p>
              Projekt siłowni ze zmiennym obciążeniem{" "}
              <TrademarkText>DZIK</TrademarkText> GYM działa już w wybranych
              miastach. Zaufały nam uczelnie, samorządy, firmy prywatne.
            </p>
            <p>
              Mamy gotowy model współpracy, zespół ekspertów, realne case’y i
              narzędzia do wdrożenia projektu w Twojej gminie. <br />
              Chcemy tylko jednego — by <TrademarkText>DZIK</TrademarkText> GYM
              był wszędzie tam, gdzie może zmienić ludzkie życie.
            </p>
            <p>
              To Twoja decyzja o zdrowszym, silniejszym i bardziej aktywnym
              społeczeństwie. <br />
              Jeśli jesteś gotów zrobić coś, co zostawi ślad na lata –
              porozmawiajmy.
            </p>

            <Link href="/kontakt">
              <div className="w-63 pt-4">
                <CTA variant="redWide">
                  <span className="text-sm font-medium">Napisz do nas</span>
                </CTA>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
