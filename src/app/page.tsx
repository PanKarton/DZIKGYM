import GymComparison from "@/components/pages/landing/GymComparison";
import GymFeatures from "@/components/pages/landing/GymFeatures";
import Hero from "@/components/pages/landing/Hero";
import ProblemBenefitSection from "@/components/pages/landing/ProblemBenefitSection";
import SponsorsSection from "@/components/pages/landing/SponsorsSection";
import GymMapSection from "@/components/pages/landing/GymMap/GymMapSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <GymMapSection />
      <SponsorsSection />
      <ProblemBenefitSection />
      <GymFeatures />
      <GymComparison />
    </div>
  );
}
