import SubHero from "@/components/layouts/SubHero";
import BlogListSection from "@/components/pages/blog/BlogListSection";

const heroData = {
  heading: "Blog",
  subHeadingOne:
    "Znajdziesz tu wszystko o treningu w terenie i naszych wyjątkowych siłowniach plenerowych. DZIK GYM",
  subHeadingTwo:
    "Podpowiadamy, jak ćwiczyć skutecznie, jakie sprzęty, czy dietę wykorzystujemy. Sprawdź praktyczne wskazówki, inspiracje treningowe i szczegóły konstrukcji naszych stref treningowych.",
};

export default async function Home() {
  return (
    <div>
      <SubHero
        heading={heroData.heading}
        subHeading={
          <div className="space-y-8 content-max-width">
            <span className="block">{heroData.subHeadingOne}</span>
            <span className="block mt-2">{heroData.subHeadingTwo}</span>
          </div>
        }
      ></SubHero>
      <BlogListSection />
    </div>
  );
}
