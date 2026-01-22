import GradientBlueRed from "@/components/ui/GradientBlueRed";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

const stats = [
  {
    value: "7 NA 10",
    text: "Ponad 7 na 10 dorosłych Polaków zmaga się z nadwagą lub otyłością – to nie jest tylko liczba",
    highlight: "7 na 10 dorosłych Polaków zmaga się z nadwagą lub otyłością",
  },
  {
    value: "27%",
    text: "Jedynie 27% Polaków spełnia podstawowe normy aktywności fizycznej, czyli 150 minut tygodniowo umiarkowanego wysiłku.",
    highlight: "27% Polaków spełnia podstawowe normy aktywności fizycznej",
  },
  {
    value: "76%",
    text: "Aż 76 proc. seniorów w Polsce nie podejmuje żadnej aktywności fizycznej nawet raz w tygodniu",
    highlight:
      "76 proc. seniorów w Polsce nie podejmuje żadnej aktywności fizycznej",
  },
];

export default function ProblemStatsSection() {
  return (
    <section className="py-16">
      <div className="content-max-width">
        <SectionHeading className="mb-16">
          Z jakim problemem się mierzymy?
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  ">
          {stats.map((item, index) => {
            const parts = item.text.split(item.highlight);

            return (
              <div
                key={index}
                className="rounded-3xl relative px-8 py-16 text-white shadow-xl flex-col items-center overflow-hidden"
              >
                <GradientBlueRed />

                <p className="text-[5.375rem] font-black italic text-[var(--red)] mb-4 leading-none">
                  {item.value}
                </p>

                <p className="text-sm text-(--offWhite) leading-relaxed">
                  {parts[0]}
                  <span className="text-(--red) font-semibold">
                    {item.highlight}
                  </span>
                  {parts[1]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
