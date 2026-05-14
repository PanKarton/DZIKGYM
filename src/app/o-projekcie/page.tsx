import FoundersSection from "@/components/pages/about-page/FoundersSection";
import ProblemStatsSection from "@/components/pages/about-page/ProblemStatsSection";
import UniqueProjectSection from "@/components/pages/about-page/UniqueProjectSection";
import SubHero from "@/components/layouts/SubHero";
import GymComparison from "@/components/pages/landing/GymComparison";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O projekcie",
  description:
    " DZIK GYM to projekt tworzący nowoczesne siłownie plenerowe, które mają poprawiać zdrowie i aktywność Polaków w całym kraju.",
};

export default function About() {
  return (
    <div>
      <SubHero
        heading="O projekcie"
        subHeading="Nowoczesna siłownia plenerowa DZIK GYM dla Twojej Gminy."
      />
      <FoundersSection />
      <ProblemStatsSection />
      <UniqueProjectSection />
      <GymComparison />
    </div>
  );
}
