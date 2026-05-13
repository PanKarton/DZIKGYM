import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

export default function CitizenBudgetSection() {
  const items = [
    {
      title: "Decydujesz Ty",
      description: "Sam(a) wybierasz, na co pójdą pieniądze samorządu.",
    },
    {
      title: "Realne potrzeby",
      description:
        "Inwestycje dopasowane do tego, czego naprawdę brakuje w okolicy.",
    },
    {
      title: "Infrastruktura sportowa",
      description: "Siłownie i miejsca rekreacji, które zostają na lata.",
    },
    {
      title: "Lepsza jakość życia",
      description: "Sport, integracja i zdrowie dostępne dla każdego.",
    },
    {
      title: "Razem znaczy więcej",
      description: "Integrujesz społeczność - przyjaciół, rodziny, sąsiadów.",
    },
    {
      title: "Realne zmiany",
      description: "Widzisz efekt - w swojej dzielnicy, na własnym osiedlu.",
    },
  ];

  return (
    <section className="py-30 lg:py-20 px-6">
      <div className="content-max-width text-center">
        {/* Header */}
        <SectionHeading isBig className="text-(--color-brand-blue)">
          Budżet Obywatelski
        </SectionHeading>

        <p className="text-xl md:text-[2.5rem] font-black italic mt-2 leading-9">
          to Twoje pieniądze i Twoja decyzja
        </p>

        <p className="mt-8 text-xl">
          Budżet obywatelski (zwany też partycypacyjnym) to część budżetu gminy,
          czy też miasta,
          <br /> o której przeznaczeniu decydujesz Ty – razem z innymi
          mieszkańcami.
        </p>

        {/* Cards */}
        <div className="overflow-x-auto no-scrollbar -mx-[calc(3vw+1.5rem)] lg:mx-0 mt-16">
          <div
            className="
      flex gap-8 w-max
      lg:grid lg:w-full lg:grid-cols-3
    "
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl max-w-72.5 lg:min-w-72.5 min-h-119.5 lg:max-w-full relative shadow-xl overflow-hidden border-(--color-brand-blue) border-2 bg-(--color-brand-blue-light) aspect-290/478 lg:aspect-418/478 px-4"
              >
                <div className="flex flex-col items-center justify-start pt-16 text-center h-full">
                  <div className="w-48 lg:w-[50%] aspect-square border-t mb-6" />

                  <h3 className="text-[1.5rem] lg:text-[2rem] font-black italic leading-9">
                    {item.title}
                  </h3>

                  <p className="text-sm mt-3 max-w-xs line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* Content */
}
