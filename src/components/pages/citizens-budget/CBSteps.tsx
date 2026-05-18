import { TrademarkText } from "@/components/ui/TradeMark";
import Image from "next/image";
import React from "react";
import { MdOutlineMail } from "react-icons/md";
// import Image from "next/image";

/* =========================================
   HEADER CONTENT
========================================= */

const header = {
  eyebrow: "5 kroków",
  title: "Budżetu Obywatelskiego",
  subtitle: "Zgłaszasz projekt, zbierasz głosy, projekt wygrywa - i powstaje.",
};

/* =========================================
   STEPS CONTENT
========================================= */

const steps = [
  {
    number: "1",
    label: "KROK 1",
    title: "Sprawdź terminy",
    text: "Budżet obywatelski ma konkretne okno czasowe — każde miasto wyznacza swój termin naboru projektów. Sprawdź harmonogram na stronie swojego urzędu lub śledź naszą zakładkę z aktualnymi naborami — na bieżąco aktualizujemy listę miejscowości.",
    imageSide: "left",
  },
  {
    number: "2",
    label: "KROK 2",
    title: "Nabór projektów",
    text: (
      <span>
        Na tym etapie składasz wniosek z opisem inwestycji. Możesz zgłosić
        projekt nowoczesnej siłowni plenerowej takiej jak{" "}
        <TrademarkText>DZIK</TrademarkText> GYM. Złożenie projektu jest
        bezpłatne. Każda gmina ma własny formularz i zasady - warto je przejrzeć
        przed zgłoszeniem.
      </span>
    ),
    imageSide: "right",
  },
  {
    number: "3",
    label: "KROK 3",
    title: "Weryfikacja merytoryczna i formalna",
    text: "Urząd sprawdza projekt pod kątem formalnym i merytorycznym. Możesz otrzymać prośbę o doprecyzowanie szczegółów - bez obaw, to standardowa procedura. Jeśli potrzebujesz wsparcia na tym etapie, napisz do nas.",
    email: "gym@wkdzik.pl",
    imageSide: "left",
  },
  {
    number: "4",
    label: "KROK 4",
    title: "Głosowanie i promocja",
    text: (
      <>
        To najważniejszy moment — dotarcie do grupy mieszkańców, dla których
        projekt jest wartościowy.{" "}
        <strong>
          My również chętnie wesprzemy Twoją inicjatywę w naszych mediach
          społecznościowych!
        </strong>
      </>
    ),
    imageSide: "right",
  },
  {
    number: "5",
    label: "KROK 5",
    title: "Wyniki",
    text: "W wyznaczonym w harmonogramie terminie ogłaszane są wyniki. Jeżeli udało się wygrać - siłownia powstanie w kolejnym roku. Jeżeli nie udało się wygrać - zgłaszamy ponownie projekt za rok!",
    imageSide: "left",
  },
];

/* =========================================
   MAIN COMPONENT
========================================= */

export default function CBSteps() {
  /* =========================================
     Timeline calculations
     Dzięki temu numerki są:
     - równo rozłożone
     - pierwszy na środku pierwszego article
     - ostatni na środku ostatniego article
  ========================================= */

  const lineStart = `${50 / steps.length}%`;

  return (
    <section className="py-24">
      {/* =========================================
          Main content wrapper
      ========================================= */}
      <div className="content-max-width">
        {/* =========================================
            SECTION HEADER
        ========================================= */}
        <header className="mb-20 text-left sm:text-center">
          <p className="text-3xl font-black italic  text-(--color-brand-blue) md:text-5xl mb-1 md:mb-2">
            {header.eyebrow}
          </p>

          <h2 className="-mt-1 text-3xl font-black italic md:text-5xl">
            {header.title}
          </h2>

          <p className="mt-4 text-sm md:text-base">{header.subtitle}</p>
        </header>

        {/* =========================================
            TIMELINE WRAPPER
            relative => potrzebne do absolute line i circles
        ========================================= */}
        <div className="relative mx-auto ">
          {/* =========================================
              VERTICAL LINE
              Startuje od połowy pierwszego kroku
              Kończy się na dole ostatniego
          ========================================= */}
          <div
            className="absolute left-6 w-px bg-slate-300 md:left-1/2 md:-translate-x-1/2"
            style={{
              top: lineStart,
              bottom: `${50 / steps.length}%`,
            }}
          />

          {/* =========================================
              STEPS LIST
          ========================================= */}
          <div className="relative">
            {steps.map((step, index) => {
              /* =========================================
                 Position of number circles
                 Liczone procentowo względem całego wrappera
              ========================================= */
              const isEven = (index + 1) % 2 === 0;
              /* =========================================
                 TEXT BLOCK
              ========================================= */

              const textBlock = (
                <StepText
                  label={step.label}
                  title={step.title}
                  text={step.text}
                  email={step.email}
                  isEven={isEven}
                />
              );

              /* =========================================
                 IMAGE BLOCK
              ========================================= */

              const imageBlock = <StepImage index={index} isEven={isEven} />;

              return (
                <article
                  key={step.number}
                  className="relative max-w-full grid grid-cols-[3rem_1fr] items-center gap-12 py-16 md:grid-cols-[1fr_5rem_1fr] md:gap-24"
                >
                  {/* =========================================
                      STEP NUMBER CIRCLE
                  ========================================= */}
                  <div className="absolute left-6 z-10 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-300 bg-(--color-primary) text-[46px] font-medium text-(--color-off-primary) md:left-1/2 ">
                    <span className="translate-y-1">{step.number}</span>
                  </div>

                  {/* =========================================
                      DESKTOP LEFT COLUMN
                  ========================================= */}
                  <div className="hidden md:block">
                    {step.imageSide === "left" ? imageBlock : textBlock}
                  </div>

                  {/* =========================================
                      MIDDLE EMPTY COLUMN
                      Space for timeline
                  ========================================= */}
                  <div className="hidden md:block" />

                  {/* =========================================
                      RIGHT COLUMN
                  ========================================= */}
                  <div className="col-start-2 md:col-auto">
                    {/* =========================================
                        MOBILE LAYOUT
                        Always image first
                    ========================================= */}
                    <div className="md:hidden">
                      <div className="mb-8">{imageBlock}</div>

                      {textBlock}
                    </div>

                    {/* =========================================
                        DESKTOP RIGHT COLUMN
                    ========================================= */}
                    <div className="hidden md:block">
                      {step.imageSide === "right" ? imageBlock : textBlock}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   TEXT COMPONENT
========================================= */

function StepText({
  label,
  title,
  text,
  email,
  isEven,
}: {
  label: string;
  title: string;
  text: React.ReactNode;
  email?: string;
  isEven: boolean;
}) {
  return (
    <div
      className={`
    max-w-md md:max-w-none
    ${isEven ? "md:ml-auto md:text-right" : ""}
  `}
    >
      {/* Step label */}
      <div
        className={`
      mb-3 flex
      ${isEven ? "md:justify-end" : ""}
    `}
      >
        <p className="aspect-3/1 inline-block bg-(--color-brand-blue) px-4 py-2 text-sm text-(--color-primary)">
          {label}
        </p>
      </div>

      {/* Step title */}
      <h3 className="text-2xl font-black italic leading-[0.95] md:text-4xl">
        {title}
      </h3>

      {/* Step description */}
      <p className="mt-4 text-sm leading-relaxed md:text-base">{text}</p>

      {/* Optional email */}
      {email && (
        <div
          className={`
        mt-4 flex
        ${isEven ? "md:justify-end" : ""}
      `}
        >
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 text-sm font-semibold"
          >
            <MdOutlineMail
              style={{
                color: "var(--color-brand-blue)",
                fontSize: "1.5rem",
              }}
            />

            {email}
          </a>
        </div>
      )}
    </div>
  );
}

/* =========================================
   IMAGE COMPONENT
========================================= */

function StepImage({ index, isEven }: { index: number; isEven: boolean }) {
  return (
    <div
      className={`relative aspect-460/350 w-full max-w-77.5  mr-auto md:max-w-97.5 ${isEven ? "md:mr-auto" : "md:ml-auto"}`}
    >
      <Image
        src={`/budget-icons/step-${index + 1}.svg`}
        alt={`Grafika kroku ${index + 1}`}
        fill
        className={`object-contain ${isEven ? "md:object-left" : "object-left md:object-right"}`}
      />
    </div>
  );
}
