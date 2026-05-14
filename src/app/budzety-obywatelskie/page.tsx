import SubHero from "@/components/layouts/SubHero";
import CBSectionDivider from "@/components/pages/citizens-budget/CBSectionDivider";
import CBSteps from "@/components/pages/citizens-budget/CBSteps";
import CitizenBudgetSection from "@/components/pages/citizens-budget/CitizenBudgetSection";
import ContactSuggestionSection from "@/components/pages/citizens-budget/ContactSuggestionSection";
import CTA from "@/components/ui/cta";
import { TrademarkText } from "@/components/ui/TradeMark";
import { Metadata } from "next";
import Link from "next/link";

const heading = "Budżety Obywatelskie";
const subHeadingLineOne = (
  <span>
    Budżet obywatelski to realna szansa na siłownię plenerową{" "}
    <TrademarkText>DZIK</TrademarkText> GYM w Twojej okolicy. Bez kosztów dla
    Ciebie - wystarczy zgłosić projekt i zebrać głosy.
  </span>
);

export const metadata: Metadata = {
  title: "Budżety Obywatelskie",
  description:
    "Stwórz z nami DZIK® GYM w twojej okolicy za pomocą budżetu obywatelskiego i wesprzyj swoją społeczność.",
};

export default async function Home() {
  return (
    <div>
      <SubHero
        heading={heading}
        hasButtons
        subHeading={<>{subHeadingLineOne}</>}
      >
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="w-64">
            <CTA variant="redWide" scrollToId="CitizenBudgetSection">
              <span className="font-semibold ">Co to jest BO? </span>
              <span className="relative translate-y-px text-lg font-medium">
                →
              </span>
            </CTA>
          </div>

          <Link href="/dla-samorzadow">
            <div className="w-64">
              <CTA variant="redTransparent">
                <span className="font-semibold ">Jestem z samorządu </span>
                <span className="relative translate-y-px text-lg font-medium">
                  →
                </span>
              </CTA>
            </div>
          </Link>
        </div>
      </SubHero>
      <CitizenBudgetSection />
      <CBSectionDivider />
      <CBSteps />
      <ContactSuggestionSection />
    </div>
  );
}
