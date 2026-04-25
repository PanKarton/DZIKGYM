import CTA from "@/components/ui/cta";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

export default function SocialProofSection() {
  return (
    <section className="">
      <div className="content-max-width flex flex-col items-center">
        <SectionHeading>
          Siłownia sprawdzona <br />w codziennym użytkowaniu
        </SectionHeading>
        <div className="text-center max-w-218  flex flex-col gap-6 mt-6">
          <p>
            Pierwszy DZIK GYM powstał dokładnie tam, gdzie narodziła się EKIPA
            WK, i od ponad 2,5 roku nieprzerwanie działa na najwyższym poziomie,
            oferując pełną jakość, funkcjonalność i realne wsparcie dla
            mieszkańców warszawskiej Ochoty.
          </p>
          <p>
            Siłownia jest intensywnie użytkowana każdego dnia, niezależnie od
            pory roku i warunków atmosferycznych.. Mimo intensywnej eksploatacji
            sprzęt pozostaje w pełni sprawny, a cała infrastruktura utrzymana
            jest w bardzo dobrym stanie.
          </p>
          <p>
            To przestrzeń, która realnie działa i regularnie przyciąga
            mieszkańców. Korzystają z niej zarówno osoby początkujące, jak i
            zaawansowani użytkownicy.
          </p>
        </div>

        <div>
          <h3 className="font-black italic text-[3rem] leading-tight mt-24">
            Sprawdź, jak może wyglądać <br />{" "}
            <span className="text-(--color-brand-blue) ">
              DZIK GYM w Twoim mieście.
            </span>
          </h3>
          <div className="w-70 mx-auto mt-10">
            <CTA variant="blueGradient">Przejdź do fomularza</CTA>
          </div>
        </div>
      </div>
    </section>
  );
}
