import CTA from "@/components/ui/cta";

export default function EncouragementSection() {
  return (
    <section className="pb-24">
      <div className="content-max-width">
        <div className="flex gap-16 items-start">
          <div>
            <h2 className="text-(--blue) font-extrabold italic text-[2.5rem]">
              Nie musisz <br />
              <span className="text-[5.375rem] font-extrabold italic text-(--secondary) leading-none mt-1">
                zaczynać <br /> od zera{" "}
              </span>
            </h2>
          </div>

          <div className="text-sm text-(--secondary)  leading-relaxed space-y-4">
            <p>
              Projekt siłowni ze zmiennym obciążeniem DZIK GYM działa już w
              wybranych miastach. Zaufały nam uczelnie, samorządy, firmy
              prywatne.
            </p>
            <p>
              Mamy gotowy model współpracy, zespół ekspertów, realne case’y i
              narzędzia do wdrożenia projektu w Twojej gminie. <br />
              Chcemy tylko jednego — by DZIK GYM był wszędzie tam, gdzie może
              zmienić ludzkie życie.
            </p>
            <p>
              To Twoja decyzja o zdrowszym, silniejszym i bardziej aktywnym
              społeczeństwie. <br />
              Jeśli jesteś gotów zrobić coś, co zostawi ślad na lata –
              porozmawiajmy.
            </p>

            <div className="w-63 pt-12">
              <CTA variant="redWide">
                <span>Napisz do nas</span>
              </CTA>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
