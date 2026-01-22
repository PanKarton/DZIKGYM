import FoundersSection from "@/components/about-page/FoundersSection/FoundersSection";
import ProblemStatsSection from "@/components/about-page/ProblemStatsSection/ProblemStatsSection";
import UniqueProjectSection from "@/components/about-page/UniqueProjectSection/UniqueProjectSection";
import GymComparison from "@/components/landing/GymComparison/GymComparison";
import SubHero from "@/components/layout/SubHero/SubHero";

export default function About() {
  return (
    <div>
      <SubHero
        heading="O projekcie"
        subheading="Nowoczesna siłownia plenerowa DZIK GYM dla Twojej Gminy."
      />
      <FoundersSection />
      <ProblemStatsSection />
      <UniqueProjectSection />
      <GymComparison />
    </div>
  );
}
