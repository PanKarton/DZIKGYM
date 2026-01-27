import CTA from "@/components/ui/cta";
import { FaArrowRightLong } from "react-icons/fa6";

const BenefitContent = () => (
  <div className="flex-1 text-left  ">
    <span className="inline-flex items-center justify-center bg-(--color-brand-blue) px-4  text-(--color-primary) uppercase tracking-wide text-sm leading-8 mb-5">
      Nasze rozwiązanie
    </span>
    <h2 className="text-3xl md:text-[2.5rem] font-extrabold italic leading-tight mb-4">
      Pełnowartościowy i bezpieczny trening siłowy dla wszystkich.{" "}
      <span className="text-(--color-brand-blue)">Za darmo.</span>
    </h2>
    <p className="text-sm mb-4">
      DZIK GYM to miejsce otwarte dla wszystkich. Nasza przestrzeń pozwala na
      wykonanie treningu siłowego w warunkach outdoorowych, oferując zarówno
      komfort, jak i wyzwanie. Prosty w obsłudze mechanizm zmiany ciężaru
      gwarantuje niski próg wejścia, a jednocześnie daje ogromne możliwości
      progresu.
    </p>
    <p className="text-sm mb-6">
      DZIK GYM to nie tylko maszyny i przestrzeń. To projekt, dzięki któremu
      ludzie zaczynają ze sobą rozmawiać.{" "}
      <strong className="text-black font-semibold">
        W miastach powstają lokalne społeczności
      </strong>
      , które dbają o swoje zdrowie w ramach potrzebnej nam wszystkim aktywności
      fizycznej.
    </p>
    <div className="w-50">
      <CTA variant="blueTaller">
        <span className="font-sm font-semibold">O projekcie </span>
        <FaArrowRightLong className="relative -translate-y-[1px] scale-[1.2]" />
      </CTA>
    </div>
  </div>
);

export default BenefitContent;
