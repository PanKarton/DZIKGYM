import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

export default function CitizenBudgetSection() {
  const items = [
    {
      title: "Decydujesz Ty",
      description: "Sam(a) wybierasz, na co pójdą pieniądze gminy.",
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
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 justify-items-center  mt-14">
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-104.5 lg:odd:justify-self-end
        lg:even:justify-self-start

        2xl:justify-self-center"
            >
              {/* Aspect wrapper */}
              <div
                className="relative w-full aspect-418/478 rounded-2xl border-2 overflow-hidden transition duration-300 hover:-translate-y-1 bg-(--color-brand-blue-light)"
                style={{
                  borderColor: "var(--color-brand-blue)",
                }}
              >
                {/* Content */}
                <div className="absolute inset-0 p-16 flex flex-col items-center text-center">
                  <div className="w-48 aspect-square bg-white mb-6" />

                  <h3 className="text-[2rem] font-black italic leading-9">
                    {item.title}
                  </h3>

                  <p className="text-sm mt-3 max-w-xs line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
