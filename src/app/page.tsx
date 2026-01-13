import Hero from "@/components/landing/Hero";
import GymComparison from "@/components/landing/GymComparison/GymComparison";
import GymFeatures from "@/components/landing/GymFeatures/GymFeatures";

export default function Home() {
  return (
    <div>
      <Hero />

      <GymFeatures />
      <GymComparison />
    </div>
  );
}
