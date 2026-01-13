import Hero from "@/components/landing/Hero";
import GymComparison from "@/components/layout/GymComparison/GymComparison";
import GymFeatures from "@/components/layout/GymFeatures/GymFeatures";

export default function Home() {
  return (
    <div>
      <Hero />
      <GymFeatures />
      <GymComparison />
    </div>
  );
}
