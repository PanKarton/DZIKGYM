import ProblemStatsSection from "@/components/pages/about-page/ProblemStatsSection";
import SubHero from "@/components/layouts/SubHero";
import BenefitCarousel from "@/components/pages/local-governmnt-info-page/BenefitCarousel";
import EncouragementSection from "@/components/pages/local-governmnt-info-page/EncouragementSection";
import NearestOnesSection from "@/components/pages/local-governmnt-info-page/NearestOnesSection";
import OutdoorGymDescriptionSection from "@/components/pages/local-governmnt-info-page/OutdoorGymDescriptionSection";
import MissionSection from "@/components/pages/local-governmnt-info-page/MissionSection";

const heroData = {
  heading: "Dla samorządów",
  subHeading:
    "Jeżeli reprezentujesz samorząd, wspólnie stwórzmy nowoczesną siłownię plenerową dla mieszkańców Twojego miasta lub gminy.",
};

export default function Home() {
  return (
    <div>
      <SubHero
        heading={heroData.heading}
        subHeading={heroData.subHeading}
      ></SubHero>
      <MissionSection />
      <ProblemStatsSection />
      <NearestOnesSection />
      <OutdoorGymDescriptionSection />
      <BenefitCarousel />
      <EncouragementSection />
    </div>
  );
}
