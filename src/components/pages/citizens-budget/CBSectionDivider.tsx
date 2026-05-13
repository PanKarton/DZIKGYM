import GradientBlueRed from "@/components/ui/GradientBlueRed";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

export default function CBSectionDivider() {
  return (
    <div className="w-full text-center relative pt-24 pb-20 isolate">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-1 bg-cover bg-center"
        style={{
          backgroundImage: "url('/mesh/mesh-full-hd.svg')",
        }}
      />
      <GradientBlueRed />
      <div className="content-max-width relative z-2">
        <SectionHeading className="text-(--color-brand-blue)">
          Wystarczy{" "}
          <span className="text-(--color-primary)  ">jeden impuls,</span>
          <br />
          by ruszyć całą społeczność.
        </SectionHeading>
        <p className="text-(--color-primary)   py-6 text-lg">
          Zrób pierwszy krok - Twoja inicjatywa może wiele zmienić.
        </p>
      </div>
    </div>
  );
}
