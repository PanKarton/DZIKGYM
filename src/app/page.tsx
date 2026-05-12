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
import MobilizationSection from "@/components/pages/landing/MobilizationSection";
import { getLatestOpeningsVideos } from "@/lib/storyblok/getLatestOpeningsVideos";

export default async function Home() {
  const [gymLocations, partnersLogos, videos] = await Promise.all([
    getGymsLocations(),
    getPartnersLogos(),
    getLatestOpeningsVideos(),
  ]);
  return (
    <div>
      <Hero />
      <MobilizationSection />
      <GymMapSection gymLocations={gymLocations} />
      <SponsorsSection partnersLogos={partnersLogos} />
      <ProblemBenefitSection />
      <GymFeatures />
      <GymComparison />
      <LatestOpeningVideoBanner videos={videos} />
      <FirstGymSection />
      <SocialProofSection />
    </div>
  );
}
