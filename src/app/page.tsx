import GymComparison from "@/components/pages/landing/GymComparison";
import GymFeatures from "@/components/pages/landing/GymFeatures";
import Hero from "@/components/pages/landing/Hero";
import ProblemBenefitSection from "@/components/pages/landing/ProblemBenefitSection";
import SponsorsSection from "@/components/pages/landing/SponsorsSection";
import GymMapSection from "@/components/pages/landing/GymMap/GymMapSection";
import { getGymsLocations } from "@/lib/storyblok/getGymsLocations";
import { getPartnersLogos } from "@/lib/storyblok/getPartnersLogos";
import { LatestOpeningVideoBanner } from "@/components/pages/landing/LatestOpeningVideoBanner/LatestOpeningVideoBanner";
import FirstGymSection from "@/components/pages/landing/FirstGymSection";
import SocialProofSection from "@/components/pages/landing/SocialProofSection";

export default async function Home() {
  const gymLocations = await getGymsLocations();
  const parnersLogos = await getPartnersLogos();

  return (
    <div>
      {/* <Hero /> */}
      {/* <GymMapSection gymLocations={gymLocations} /> */}
      {/* <SponsorsSection parnersLogos={parnersLogos} /> */}
      {/* <ProblemBenefitSection /> */}
      {/* <GymFeatures /> */}
      <GymComparison />
      {/* <LatestOpeningVideoBanner /> */}
      {/* <FirstGymSection /> */}
      {/* <SocialProofSection /> */}
    </div>
  );
}
