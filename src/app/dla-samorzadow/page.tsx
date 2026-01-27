import ProblemStatsSection from "@/components/pages/about-page/ProblemStatsSection";
import SubHero from "@/components/layouts/SubHero";
import BenefitCarousel from "@/components/pages/local-governmnt-info-page/BenefitCarousel";
import EncouragementSection from "@/components/pages/local-governmnt-info-page/EncouragementSection";
import NearestOnesSection from "@/components/pages/local-governmnt-info-page/NearestOnesSection";
import OutdoorGymDescriptionSection from "@/components/pages/local-governmnt-info-page/OutdoorGymDescriptionSection";

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
