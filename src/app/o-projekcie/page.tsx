import FoundersSection from "@/components/pages/about-page/FoundersSection";
import ProblemStatsSection from "@/components/pages/about-page/ProblemStatsSection";
import UniqueProjectSection from "@/components/pages/about-page/UniqueProjectSection";
import SubHero from "@/components/layouts/SubHero";
import GymComparison from "@/components/pages/landing/GymComparison";

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
