import Hero from "@/components/landing/Hero";
import GymComparison from "@/components/landing/GymComparison/GymComparison";
import GymFeatures from "@/components/landing/GymFeatures/GymFeatures";
import ProblemBenefitSection from "@/components/landing/ProblemBenefitSection/ProblemBenefitSection";
import SponsorsSection from "@/components/landing/SponsorsSection/SponsorsSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <SponsorsSection />
      <ProblemBenefitSection />
      <GymFeatures />
      <GymComparison />
    </div>
  );
}
