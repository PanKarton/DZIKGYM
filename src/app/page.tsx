import Hero from "@/components/landing/Hero";
import GymComparison from "@/components/landing/GymComparison/GymComparison";
import GymFeatures from "@/components/landing/GymFeatures/GymFeatures";
import ProblemBenefitSection from "@/components/landing/ProblemBenefitSection/ProblemBenefitSection";
import SponsorsSection from "@/components/landing/SponsorsSection/SponsorsSection";
import MapSectio from "@/components/landing/MapSection/MapSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <MapSectio />
      <SponsorsSection />
      <ProblemBenefitSection />
      <GymFeatures />
      <GymComparison />
    </div>
  );
}
