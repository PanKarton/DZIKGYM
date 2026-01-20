import FoundersSection from "@/components/about-page/FoundersSection/FoundersSection";
import SubHero from "@/components/layout/SubHero/SubHero";

export default function About() {
  return (
    <div>
      <SubHero
        heading="O projekcie"
        subheading="Nowoczesna siłownia plenerowa DZIK GYM dla Twojej Gminy."
      />
      <FoundersSection />
    </div>
  );
}
