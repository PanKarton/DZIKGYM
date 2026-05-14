import ContactFormSection from "@/components/pages/contact-page/ContactFormSection";
import SubHero from "@/components/layouts/SubHero";
import { Metadata } from "next";

const heroData = {
  heading: "Kontakt",
  subHeading: "Potrzebujesz więcej informacji? Napisz - odpowiadamy sprawnie.",
};

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    " Skontaktuj się w sprawie <TrademarkText>DZIK</TrademarkText>GYM i zadbajmy razem o zdrowie Polaków tworząc nowoczesne siłownie plenerowe 24/7.",
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
