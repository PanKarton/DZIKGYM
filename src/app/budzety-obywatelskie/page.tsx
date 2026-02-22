import SubHero from "@/components/layouts/SubHero";
import CBSectionDivider from "@/components/pages/citizens-budget/CBSectionDivider";
import CitizenBudgetSection from "@/components/pages/citizens-budget/CitizenBudgetSection";
import CTA from "@/components/ui/cta";
import { FaArrowRightLong } from "react-icons/fa6";

const heading = "Budżety Obywatelskie";
const subHeadingLineOne =
  "Budżet obywatelski to realna szansa na siłownię plenerową DZIK GYM w Twojej okolicy.";
const subHeadingLineTwo =
  "Bez kosztów dla Ciebie - wystarczy zgłosić projekt i zebrać głosy.";

export default async function Home() {
  return (
    <div>
      <SubHero
        heading={heading}
        subHeading={
          <>
            {subHeadingLineOne} <br />
            {subHeadingLineTwo}
          </>
        }
      >
        <div className="flex gap-16">
          <div className="w-64">
            <CTA variant="redWide">
              <span className="font-semibold ">Co to jest BO? </span>
              <FaArrowRightLong className="relative -translate-y-px scale-[1.2]" />
            </CTA>
          </div>
          <div className="w-64">
            <CTA variant="redTransparent">
              <span className="font-semibold ">Jestem z samorządu </span>
              <FaArrowRightLong className="relative -translate-y-px scale-[1.2]" />
            </CTA>
          </div>
        </div>
      </SubHero>
      <CitizenBudgetSection />
      <CBSectionDivider />
    </div>
  );
}
