import GradientBlueRed from "@/components/ui/GradientBlueRed";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

export default function CBSectionDivider() {
  return (
    <div className="w-full text-center relative pt-24 pb-20">
      <div className="content-max-width">
        <GradientBlueRed />
        <SectionHeading className="text-(--color-brand-blue)">
          Wystarczy{" "}
          <span className="text-(--color-primary)">jeden impuls,</span>
          <br />
          by ruszyć całą społeczność.
        </SectionHeading>
        <p className="text-(--color-primary) py-6 text-lg">
          Zrób pierwszy krok - Twoja inicjatywa może wiele zmienić.
        </p>
      </div>
    </div>
  );
}
