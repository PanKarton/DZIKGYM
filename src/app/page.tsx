import GymComparison from "@/components/pages/landing/GymComparison";
import GymFeatures from "@/components/pages/landing/GymFeatures";
import Hero from "@/components/pages/landing/Hero";
import { GymMap } from "@/components/pages/landing/GymMap/GymMap";
import ProblemBenefitSection from "@/components/pages/landing/ProblemBenefitSection";
import SponsorsSection from "@/components/pages/landing/SponsorsSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <GymMap />
      <SponsorsSection />
      <ProblemBenefitSection />
      <GymFeatures />
      <GymComparison />
    </div>
  );
}
