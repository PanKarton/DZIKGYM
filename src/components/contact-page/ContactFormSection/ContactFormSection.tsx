"use client";

import { MdOutlineMail, MdOutlinePhoneEnabled } from "react-icons/md";
import ContactForm from "../ContactForm/ContactForm";

export default function ContactFormSection() {
  return (
    <section className="w-full bg-(--primary) text-(--secondary)">
      <div className="content-max-width mx-auto py-24 ">
        <div className="flex gap-16">
          {/* Left column */}
          <div className="min-w-116">
            <h2 className="text-[2.5rem] font-extrabold italic leading-[1.05] ">
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
              <div className="flex items-center gap-3 ">
                <MdOutlinePhoneEnabled
                  style={{ color: "var(--blue)", fontSize: "1.5rem" }}
                />
                <span>+48 123 456 789</span>
              </div>

              <div className="flex items-center gap-3 ">
                <MdOutlineMail
                  style={{ color: "var(--blue)", fontSize: "1.5rem" }}
                />
                <span>gym@wkdzik.pl</span>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
