import GradientBlueRed from "@/components/ui/GradientBlueRed";
import PercentageIncreasing from "@/components/ui/PercentageIncreasing";
import Image from "next/image";

export const ProblemCard = () => (
  <div className="relative isolate rounded-3xl w-full max-w-105 border py-16 px-8 overflow-hidden shadow-2xl">
    <GradientBlueRed />
    <Image
      src="/mesh/Pattern_800x800.webp"
      alt=""
      fill
      aria-hidden="true"
      className="object-cover -z-1"
    />
    <div className="aspect-320/241 max-w-80 mx-auto mb-16 relative z-10">
      <Image
        src="/images/x-weight.svg"
        alt="Crossed dumbbell"
        fill
        className="object-contain"
      />
    </div>
    <PercentageIncreasing target={70} />
    <p className="text-(--color-off-primary) font-thin text-sm leading-normal">
      Taki procent Polaków{" "}
      <span className="text-(--color-brand-red) font-medium">
        ma nadwagę lub jest otyła
      </span>
      . Jeszcze więcej nie spełnia podstawowych norm aktywności fizycznej.
    </p>
  </div>
);
