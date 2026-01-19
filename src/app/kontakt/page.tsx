import TeamSection from "@/components/contact-page/TeamSection/TeamSection";
import SubHero from "@/components/layout/SubHero/SubHero";
import CTA from "@/components/ui/Cta";

const heroData = {
  heading: "Kontakt",
  subheading: "Potrzebujesz więcej informacji? Napisz - odpowiadamy sprawnie.",
};

export default function Home() {
  return (
    <div>
      <SubHero heading={heroData.heading} subheading={heroData.subheading}>
        <div className="w-50">
          <CTA variant="red">
            <span className="font text-sm">Napisz do nas</span>
          </CTA>
        </div>
      </SubHero>
      <TeamSection />
    </div>
  );
}
