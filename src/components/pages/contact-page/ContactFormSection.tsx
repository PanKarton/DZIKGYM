"use client";

import { MdOutlineMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import ContactForm from "./contact-page/ContactForm/ContactForm";
import Link from "next/link";
import CompanyDetailsBlock from "./CompanyDetailsBlock";

export default function ContactFormSection() {
  return (
    <section className="w-full bg-(--color-primary)   ">
      <div className="content-max-width mx-auto pt-24 ">
        <div className="flex flex-col xl:flex-row gap-16">
          {/* Left column */}
          <div className="sm:min-w-116">
            <h2 className="text-3xl sm:text-[2.5rem] font-extrabold italic leading-[1.05] ">
              Napisz, a chętnie
              <br />
              dopowiemy co
              <br />
              trzeba.
            </h2>

            <p className="mt-6 text-sm font-regular leading-6 ">
              Każda realizacja jest inna - teren, możliwości
              <br /> zagospodarowania i sprzęt mają znaczenie.
              <br /> Zostaw kontakt, a odezwiemy się i pomożemy rozwiać wszelkie
              wątpliwości.
            </p>

            <div className="mt-10 space-y-4 text-sm font-medium">
              <a
                href="mailto:gym@wkdzik.pl"
                className="flex items-center gap-3"
              >
                <MdOutlineMail
                  style={{
                    color: "var(--color-brand-blue)",
                    fontSize: "1.5rem",
                  }}
                />

                <span>gym@wkdzik.pl</span>
              </a>

              <div className="flex items-center gap-3 ">
                <FaInstagram
                  style={{
                    color: "var(--color-brand-blue)",
                    fontSize: "1.5rem",
                  }}
                />
                <span>@dzikgym</span>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
        <div className="mt-12 text-xs leading-loose text-justify">
          Administratorem danych osobowych jest WK spółka z ograniczoną
          odpowiedzialnością z siedzibą w Jankach (KRS: 0000646549). Dane podane
          w formularzu będą przetwarzane w przede wszystkim w celu obsługi
          zapytania przesłanego przez formularz kontaktowy i udzielenia
          odpowiedzi. Szczegółowe informacje o administratorze oraz celach i
          zasadach przetwarzania danych, w tym o prawach osób, których dane
          dotyczą, znajdują się w{" "}
          <Link href="/polityka-prywatnosci" className="underline">
            polityce prywatności.
          </Link>
        </div>
        <CompanyDetailsBlock />
      </div>
    </section>
  );
}
