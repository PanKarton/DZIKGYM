import CTA from "@/components/ui/cta";

import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { ProblemCard } from "./ProblemCard";
import BenefitContent from "./BenefitContent";

export default function ProblemBenefitSection() {
  return (
    <section className="bg-(--color-primary-darker) py-24 mb-24 flex-center ">
      <div className="content-max-width">
        <div className=" flex flex-col lg:flex-row items-center justify-between gap-12 ">
          <ProblemCard />

          <div className="hidden lg:block">
            <div className="w-12 aspect-square flex items-center justify-center relative">
              <Image src="/images/right-arrow.svg" alt="arrow" fill />
            </div>
          </div>

          <BenefitContent />
        </div>
      </div>
    </section>
  );
}
