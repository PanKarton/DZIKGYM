import AnimateCounterOnView from "@/components/ui/AnimateCounterOnView";
import GradientBlueRed from "@/components/ui/GradientBlueRed";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

const stats = [
  {
    value: 7,
    secondaryValue: " NA 10",
    text: "Ponad 7 na 10 dorosłych Polaków zmaga się z nadwagą lub otyłością – to nie jest tylko liczba",
    highlight: "7 na 10 dorosłych Polaków zmaga się z nadwagą lub otyłością",
  },
  {
    value: 27,
    secondaryValue: "%",
    text: "Jedynie 27% Polaków spełnia podstawowe normy aktywności fizycznej, czyli 150 minut tygodniowo umiarkowanego wysiłku.",
    highlight: "27% Polaków spełnia podstawowe normy aktywności fizycznej",
  },
  {
    value: 76,
    secondaryValue: "%",
    text: "Aż 76 proc. seniorów w Polsce nie podejmuje żadnej aktywności fizycznej nawet raz w tygodniu",
    highlight:
      "76 proc. seniorów w Polsce nie podejmuje żadnej aktywności fizycznej",
  },
];

export default function ProblemStatsSection() {
  return (
    <section className="pt-16">
      <div className="content-max-width">
        <SectionHeading isBig className="mb-16 text-center">
          Z jakim problemem się mierzymy?
        </SectionHeading>

        <div className="overflow-x-auto no-scrollbar -mx-5">
          <div
            className="
      flex gap-6 w-max
      lg:grid lg:w-full lg:grid-cols-3
    "
          >
            {stats.map((item, index) => {
              const parts = item.text.split(item.highlight);

              return (
                <div
                  key={index}
                  className="rounded-3xl max-w-82 lg:max-w-full relative px-8 py-16 text-(--color-primary)  shadow-xl flex-col items-center overflow-hidden"
                >
                  <GradientBlueRed />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 z-[-1] bg-cover bg-center"
                    style={{
                      backgroundImage: "url('/mesh/Pattern_800x800.webp')",
                    }}
                  />

                  <p className=" font-black italic text-(--color-brand-red) mb-4 leading-none">
                    <AnimateCounterOnView target={item.value}>
                      {item.secondaryValue}
                    </AnimateCounterOnView>
                  </p>

                  <p className="text-sm text-(--color-off-primary) leading-relaxed">
                    {parts[0]}
                    <span className="text-(--color-brand-red) font-semibold">
                      {item.highlight}
                    </span>
                    {parts[1]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
