import Image from "next/image";

export default function NearestOnesSection() {
  return (
    <section className="pt-12 lg:pt-24">
      <div className="content-max-width">
        {/* Mobile */}
        <div className="flex flex-col items-center md:hidden">
          <h2 className="text-[2rem] font-black  italic mb-4 text-left">
            Dotyczy to naszych najbliższych
          </h2>
          <div className="w-full max-w-60 aspect-square relative">
            <Image src="/images/hands-family.png" alt="ikona rodziny" fill />
          </div>
          <p className="text-sm leading-relaxed max-w-xl text-left mt-6">
            To są mieszkańcy Twojej gminy. Twoi sąsiedzi. Rodzice, dzieci,
            seniorzy. <br />
            To przyszli pacjenci lokalnych ośrodków zdrowia i dzieci z
            problemami psychoruchowymi w szkołach.
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex flex-row items-center justify-center gap-16">
          <div className="w-full max-w-60 aspect-square relative">
            <Image src="/images/hands-family.png" alt="ikona rodziny" fill />
          </div>
          <div className="text-left max-w-max">
            <h2 className="text-[2rem] font-black  italic mb-4">
              Dotyczy to naszych najbliższych
            </h2>
            <p className="text-sm leading-relaxed max-w-xl">
              To są mieszkańcy Twojej gminy. Twoi sąsiedzi. Rodzice, dzieci,
              seniorzy. <br />
              To przyszli pacjenci lokalnych ośrodków zdrowia i dzieci z
              problemami psychoruchowymi w szkołach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
