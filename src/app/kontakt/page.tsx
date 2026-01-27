import ContactFormSection from "@/components/pages/contact-page/ContactFormSection";
import TeamSection from "@/components/pages/contact-page/TeamSection";
import SubHero from "@/components/layouts/SubHero";
import CTA from "@/components/ui/cta";

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
      <ContactFormSection />
      <TeamSection />
    </div>
  );
}
