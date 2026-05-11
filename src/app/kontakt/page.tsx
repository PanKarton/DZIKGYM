import ContactFormSection from "@/components/pages/contact-page/ContactFormSection";
import SubHero from "@/components/layouts/SubHero";

const heroData = {
  heading: "Kontakt",
  subHeading: "Potrzebujesz więcej informacji? Napisz - odpowiadamy sprawnie.",
};

export default function Home() {
  return (
    <div>
      <SubHero
        heading={heroData.heading}
        subHeading={heroData.subHeading}
      ></SubHero>
      <ContactFormSection />
    </div>
  );
}
