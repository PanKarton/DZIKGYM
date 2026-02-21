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
      description: "Integrujesz społeczność – przyjaciół, rodziny, sąsiadów.",
    },
    {
      title: "Realne zmiany",
      description: "Widzisz efekt – w swojej dzielnicy, na własnym osiedlu.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="content-max-width text-center">
        {/* Header */}
        <SectionHeading isBig className="text-(--color-brand-blue)">
          Budżet Obywatelski
        </SectionHeading>

        <p className="text-xl md:text-[2.5rem] font-black italic mt-2 leading-2">
          to Twoje pieniądze i Twoja decyzja
        </p>

        <p className="mt-8 text-xl">
          Budżet obywatelski (zwany też partycypacyjnym) to część budżetu gminy,
          czy też miasta,
          <br /> o której przeznaczeniu decydujesz Ty – razem z innymi
          mieszkańcami.
        </p>

        {/* Cards */}
        <div className="flex flex-wrap gap-8 mt-14 justify-center ">
          {items.map((item, index) => (
            <div
              key={index}
              className="basis-1/3 grow rounded-2xl aspect-418/478 max-w-105 bg-(--color-brand-blue-light) p-16 flex flex-col items-center text-center border-2 transition hover:-translate-y-1 duration-300"
              style={{
                borderColor: "var(--color-brand-blue)",
              }}
            >
              {/* Placeholder Image */}
              <div className="w-48 aspect-square bg-white mb-6 " />

              <h3 className="text-[2rem] font-black italic ">{item.title}</h3>

              <p className="text-sm  mt-3 max-w-xs">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
