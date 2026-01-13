import Hero from "@/components/landing/Hero";
import GymComparison from "@/components/landing/GymComparison/GymComparison";
import GymFeatures from "@/components/landing/GymFeatures/GymFeatures";
import ProblemBenefitSection from "@/components/landing/ProblemBenefitSection/ProblemBenefitSection";

export default function Home() {
  return (
    <div>
      <Hero />

      <ProblemBenefitSection />
      <GymFeatures />
      <GymComparison />
    </div>
  );
}
