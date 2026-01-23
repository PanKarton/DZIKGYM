import ProblemStatsSection from "@/components/about-page/ProblemStatsSection/ProblemStatsSection";
import SubHero from "@/components/layout/SubHero/SubHero";
import BenefitCarousel from "@/components/local-governemnt-info-page/BenefitCarousel/BenefitCarousel";
import EncouragementSection from "@/components/local-governemnt-info-page/EncouragementSection/EncouragementSection";
import NearestOnesSection from "@/components/local-governemnt-info-page/NearestOnesSection/NearestOnesSection";
import OutdoorGymDescriptionSection from "@/components/local-governemnt-info-page/OutdoorGymDescriptionSection/OutdoorGymDescriptionSection";

const heroData = {
  heading: "Dla samorządów",
  subheading: "Nowoczesna siłownia plenerowa DZIK GYM dla Twojej Gminy.",
};

export default function Home() {
  return (
    <div>
      <SubHero
        heading={heroData.heading}
        subheading={heroData.subheading}
      ></SubHero>
      <ProblemStatsSection />
      <NearestOnesSection />
      <OutdoorGymDescriptionSection />
      <BenefitCarousel />
      <EncouragementSection />
    </div>
  );
}
